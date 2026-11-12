window.mallPrices = async (name) => {
  const s = await G('/mall.php?didadv=0&pudnuggler=' + encodeURIComponent(name));
  const m = [...s.matchAll(/mallstore\.php\?whichstore=(\d+)&searchitem=(\d+)&searchprice=(\d+)/g)].map(x => ({ store: +x[1], item: +x[2], price: +x[3] }));
  return m;
};
window.mallBuy = async (itemId, want, maxPrice, name) => {
  let got = 0, spent = 0; const tried = new Set();
  for (let pass = 0; pass < 8 && got < want; pass++) {
    const list = (await mallPrices(name)).filter(r => r.item === itemId && r.price <= maxPrice && !tried.has(r.store)).sort((a, b) => a.price - b.price);
    if (!list.length) break;
    for (const r of list.slice(0, 4)) {
      if (got >= want) break; tried.add(r.store);
      const pg = await G(`/mallstore.php?whichstore=${r.store}&searchitem=${r.item}&searchprice=${r.price}`);
      const val = ([...pg.matchAll(/name=whichitem[^>]*value=["']?([\d.]+)/g)].map(x => x[1]).find(v => v.startsWith(itemId + '.')));
      if (!val) continue;
      const before = +((await INV())[itemId] || 0);
      await P('/mallstore.php', { pwd: _pwd, whichstore: r.store, buying: 'Yep.', whichitem: val, quantity: want - got, searchitem: r.item, searchprice: r.price });
      await sleep(400);
      const after = +((await INV())[itemId] || 0);
      if (after > before) { got += after - before; spent += (after - before) * r.price; }
    }
  }
  return { itemId, got, spent };
};
const a = await mallPrices('milk of magnesium'), b = await mallPrices('herbal stuffing'), c = await mallPrices('Ye Olde Meade');
return { milk: a.slice(0, 4), stuff: b.slice(0, 4), meade: c.slice(0, 5) };
