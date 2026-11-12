const W = window;
W.sleep = ms => new Promise(r => setTimeout(r, ms));
W.G = (u, o) => fetch(u, Object.assign({ credentials: 'include' }, o || {})).then(r => r.text());
W.P = (u, body) => G(u, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(body).toString() });
W._t = W._t || 0;
W.ST = async () => JSON.parse(await G('/api.php?what=status&for=CC' + (W._t++) + Date.now()));
W.INV = async () => JSON.parse(await G('/api.php?what=inventory&for=q' + Date.now() + Math.random()));
W.inFight = t => /<form name=attack/.test(t) || /name=["']?whichskill/.test(t) || /Attack with your weapon/i.test(t);
W.getChoice = t => ((t.match(/name=["']?whichchoice["']?[^>]*?value=["']?(\d+)/i) || t.match(/whichchoice=(\d+)/) || [])[1]) || null;
W.txt = h => h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
W.opts = p => p.split(/<form/).slice(1).map(b => ({
  opt: (b.match(/name=["']?option["']? value=["']?(\d+)/) || [])[1],
  label: (b.match(/type=["']?submit["']?[^>]*value=(["'])(.*?)\1/i) || [])[2]
})).filter(x => x.opt && x.label);
const grab = async () => { for (const u of ['/charpane.php', '/main.php', '/inventory.php']) { const m = (await G(u)).match(/pwd=([0-9a-f]{20,})/) || (await G(u)).match(/pwd['"]?\s*[:=]\s*['"]([0-9a-f]{20,})/); if (m) return m[1]; } return null; };
W._pwd = await grab();
const s = await ST();
const fp = await G('/fight.php'); const cp = await G('/choice.php');
return { pwd: !!W._pwd, lvl: s.level, cls: s.class, mox: s.moxie, adv: s.adventures, full: s.full, drunk: s.drunk, spleen: s.spleen,
  hp: s.hp + '/' + s.maxhp, mp: s.mp + '/' + s.maxmp, meat: s.meat, fam: s.familiar, ronin: s.roninleft,
  hrsLeft: ((+s.rollover - Date.now() / 1000) / 3600).toFixed(2), inFight: inFight(fp), choice: getChoice(cp),
  effects: Object.values(s.effects || {}).map(e => e[0] + ':' + e[1]) };
