window.burst = async (snarf, n, stopFn, chooser) => {
  const out = { w:0, l:0, nc:[], mons:{}, items:{}, stop:null }; let free = 0;
  for (let i=0;i<n;i++) {
    if (window._abort) { out.stop='abort'; break; }
    if (stopFn && await stopFn()) { out.stop='target'; break; }
    let s = await ST();
    if (Object.values(s.effects||{}).some(e=>/Beaten Up/.test(e[0]))) { out.stop='beaten up'; break; }
    if (+s.adventures < 1) { out.stop='no adv'; break; }
    const poison = Object.values(s.effects||{}).find(e=>/Poisoned/.test(e[0]));
    if (poison) await G('/uneffect.php?using=Yep.&whichitem=588&whicheffect='+poison[4]+'&pwd='+_pwd);
    await topMP(40); s = await heal();
    if (+s.hp < +s.maxhp*0.5) { out.stop='cannot heal hp '+s.hp+'/'+s.maxhp; break; }
    const before = +s.adventures;
    let p = await G('/adventure.php?snarfblat='+snarf);
    if (inFight(p)) { const r = await runFight(p); out.mons[r.monster]=(out.mons[r.monster]||0)+1; r.items.forEach(x=>out.items[x]=(out.items[x]||0)+1);
      if (r.res==='win') out.w++; else { out.l++; out.stop='fight '+r.res+' vs '+r.monster; break; } free=0; continue; }
    const ch = getChoice(p);
    if (ch) { const o = opts(p); const pick = chooser && chooser(ch, o); if (!pick) { out.stop='unknown choice '+ch+': '+o.map(x=>x.label).join(' / '); break; }
      p = await P('/choice.php',{whichchoice:ch, option:pick, pwd:_pwd}); out.nc.push(ch+':'+(o.find(x=>x.opt==pick)||{}).label);
      if (inFight(p)) { const r = await runFight(p); if (r.res!=='win') { out.stop='choice fight '+r.res; break; } out.w++; }
    } else out.nc.push(txt(p).replace(/^Adventure Results:\s*/,'').slice(0,70));
    await sleep(600); const a = await ST();
    if (+a.adventures >= before) { if (++free>=3) { out.stop='free encounters'; break; } } else free=0;
  }
  const s=await ST(); out.adv=s.adventures; out.hp=s.hp+'/'+s.maxhp; out.meat=s.meat; return out;
};
window.pyrLinks = async () => { const pyr = await G('/place.php?whichplace=pyramid'); return [...new Set([...pyr.matchAll(/snarfblat=(\d+)|action=(pyramid_\w+)/g)].map(m=>m[1]||m[2]))]; };
return { burst: typeof window.burst, pyrLinks: typeof window.pyrLinks };
