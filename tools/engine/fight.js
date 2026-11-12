window.skillsIn = p => [...p.matchAll(/<option[^>]*value=["']?(\d+)["']?[^>]*>([^<(]+)/g)].map(m=>({id:m[1], nm:m[2].trim()}));
window.runFight = async (page, o={}) => {
  let p = page, rounds = 0, used = new Set(), log=[];
  while (inFight(p) && rounds < 25) {
    if (window._abort && !o.noAbort) return {res:'abort'};
    const s = await ST(); rounds++;
    const have = new Set(skillsIn(p).map(x=>x.id));
    let url = null;
    for (const [id,mp] of [['5005',3],['5008',4],['5012',8]]) {
      if (!o.noSkill && !used.has(id) && have.has(id) && +s.mp >= mp+2) { url='/fight.php?action=skill&whichskill='+id+'&pwd='+_pwd; used.add(id); log.push(id); break; }
    }
    if (!url) { url = '/fight.php?action=attack&pwd='+_pwd; log.push('a'); }
    p = await G(url);
  }
  const t = txt(p);
  const win = /You win the fight|WINWINWIN/i.test(p) || (!inFight(p) && !/You lose|You slink away|black out/i.test(t) && rounds>0);
  const lose = /You lose the fight|slink away|black out|Beaten Up/i.test(t) && !/WINWINWIN/.test(p);
  return { res: inFight(p)?'stuck':(lose?'lose':(win?'win':'?')), rounds, log:log.join(''), monster:(page.match(/id=["']?monname["']?>([^<]+)/)||[])[1], meat:(t.match(/You gain (\d+) Meat/)||[])[1], items:[...t.matchAll(/You acquire an item: ([^.]+?)(?= You| \(|$)/g)].map(m=>m[1]).slice(0,4), page:p };
};
window.heal = async () => {
  for (let i=0;i<6;i++){ const s=await ST(); if (+s.hp >= +s.maxhp*0.8) return s;
    if (+s.mp >= 24) await G('/runskillz.php?action=Skillz&whichskill=3012&ajax=1&quantity=1&pwd='+_pwd); // cannelloni cocoon (perm)
    else await G('/inv_use.php?which=3&whichitem=592&pwd='+_pwd+'&ajax=1'); }
  return await ST();
};
window.topMP = async (min) => { for (let i=0;i<6;i++){ const s=await ST(); if (+s.mp>=min) return s; const inv=await INV(); const id=[2389,593,518,357,592].find(x=>+(inv[x]||0)>0); if(!id) return s; await G('/inv_use.php?which=3&whichitem='+id+'&pwd='+_pwd+'&ajax=1'); } return await ST(); };
const d = txt(await G('/desc_skill.php?whichskill=3012&self=true')).match(/Type:\s*(\w+)\s+MP Cost:\s*(\S+)/);
return { cocoon: d && d.slice(1) };
