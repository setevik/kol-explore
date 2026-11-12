# Fetch engine (run-agnostic)

Load order into the KoL tab (each file defines `window.*` helpers and returns a status object):

```bash
node tools/kol-cdp.mjs tools/engine/helpers.js   # G/P/ST/INV, inFight, getChoice, opts, _pwd + status
node tools/kol-cdp.mjs tools/engine/mall.js      # mallPrices(name), mallBuy(id, n, maxPrice, name)
node tools/kol-cdp.mjs tools/engine/fight.js     # runFight(page,{noSkill}), heal(), topMP(min)
node tools/kol-cdp.mjs tools/engine/burst.js     # burst(snarf, n, stopFn, chooser), pyrLinks()
```

`fight.js`'s combat line is the **Disco Bandit dance combo** (5005 → 5008 → 5012, then weapon attacks) — swap
the skill list for another class (see `mechanics/<class>-class.md`). Afterwards drive the game with inline code:
`node tools/kol-cdp.mjs "return await burst(140, 25)" 600000`.
