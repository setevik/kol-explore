// Post-Ronin estate raid (run-agnostic). pullAll(): empty Hagnk's in 10-stack requests + take its meat.
// sellPlan(keep, protectRe): rows on sellstuff.php beyond `keep` copies, minus consumables (inventory tab 1)
// and names matching protectRe. sellPlanRun(plan): one mode=3 POST per item; returns meat gained.
window.pullAll = async () => {
  const st = JSON.parse(await G('/api.php?what=storage&for=q'+Date.now())); const ids = Object.keys(st).filter(k => +st[k] > 0);
  for (let i=0;i<ids.length;i+=10) { const b = {action:'pull', pwd:_pwd}; ids.slice(i,i+10).forEach((id,k) => { b['whichitem'+(k+1)] = id; b['howmany'+(k+1)] = st[id]; }); await P('/storage.php', b); }
  const m = +((txt(await G('/storage.php?which=5')).match(/You have ([\d,]+) meat/)||[])[1]||'0').replace(/,/g,'');
  if (m > 0) await P('/storage.php', {action:'takemeat', amt:m, pwd:_pwd});
  const left = JSON.parse(await G('/api.php?what=storage&for=q'+Date.now()));
  return { stacks: ids.length, meat: m, left: Object.keys(left).filter(k => +left[k] > 0).length };
};
window.sellPlan = async (keep, protectRe) => {
  const cons = new Set((await G('/inventory.php?which=1')).replace(/<script[\s\S]*?<\/script>/g,'').split(/<table class='item'/).slice(1).map(c => +(c.match(/id="ic(\d+)"/)||[])[1]));
  const html = await G('/sellstuff.php?justitems=0');
  const rows = html.replace(/<script[\s\S]*?<\/script>/g,'').split(/<input\s+type=checkbox\s+name=item/i).slice(1).map(c => ({
    id: +(c.match(/^(\d+)\s+value=(\d+)/)||[])[1], nm: ((c.match(/<b>([^<]+)<\/b>/)||[])[1]||'').trim(),
    q: +(((c.match(/<\/a>\s*\((\d+)\)/)||[])[1])||1), pr: +((c.match(/<font size=1>\s*([\d,]+)\s*Meat/i)||[])[1]||'0').replace(/,/g,'') })).filter(r => r.id && r.nm);
  return rows.filter(r => r.q > keep && r.pr > 0 && !cons.has(r.id) && !protectRe.test(r.nm)).map(r => ({...r, sell: r.q - keep, value: (r.q - keep) * r.pr })).sort((a,b) => b.value - a.value);
};
window.sellPlanRun = async (plan) => { const m0 = +(await ST()).meat;
  for (const r of plan) await P('/sellstuff_ugly.php', {action:'sell', mode:3, quantity:r.sell, ['item'+r.id]:r.id, pwd:_pwd});
  return +(await ST()).meat - m0; };
return { pullAll: typeof pullAll, sellPlan: typeof sellPlan };
