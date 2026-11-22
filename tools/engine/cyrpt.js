// Cyrpt helpers (load after burst.js). evil() reads the Evilometer; _cy answers the room noncombats;
// useEvilEyes() spends every evil eye (found by name). See mechanics/bonerdagon-boss.md.
window.evil = async () => { const t = txt(await G('/inv_use.php?which=3&whichitem=4964&pwd='+_pwd)); const g = re => +((t.match(re)||[])[1] ?? -1);
  return { total:g(/Total evil:\s*(\d+)/i), alcove:g(/Alcove:\s*(\d+)/i), cranny:g(/Cranny:\s*(\d+)/i), niche:g(/Niche:\s*(\d+)/i), nook:g(/Nook:\s*(\d+)/i), haert:g(/Haert:\s*(\d+)/i) }; };
window._cy = (ch, o) => { const f = re => { const x = o.find(z => re.test(z.label)); return x && x.opt; };
  if (ch == 157) return f(/behind Urn #3/i) || f(/Check out the second one/i);
  return f(/Investigate the fancy coffin|Open the rattling one|Look inside the second one/i); };
window.useEvilEyes = async () => { const h = (await G('/inventory.php?which=3')).replace(/<script[\s\S]*?<\/script>/g,'');
  const row = h.split(/<table class='item'/).slice(1).find(c => /<b[^>]*>evil eyes?<\/b>/i.test(c)); if (!row) return 0;
  const id = (row.match(/id="ic(\d+)"/)||[])[1], q = +((row.match(/rel="[^"]*&n=(\d+)/)||[])[1]||1);
  for (let i=0;i<q;i++) await G('/inv_use.php?which=3&whichitem='+id+'&pwd='+_pwd); return q; };
window.balladHeal = async () => { let s = await ST(); const bal = () => Object.values(s.effects).some(e => /Power Ballad/.test(e[0]));
  for (let k=0;k<5 && (+s.hp<+s.maxhp*0.8 || (!bal() && +s.mp<12));k++) { await G('/campground.php?action=rest&pwd='+_pwd); s = await ST(); }
  if (!bal() && +s.mp>=12) { await G('/runskillz.php?action=Skillz&whichskill=6008&targetplayer=0&quantity=1&pwd='+_pwd); s = await ST(); }
  return s; };
return { evil: await evil() };
