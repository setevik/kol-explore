# Fetch engine (run-agnostic)

Load order into the KoL tab (each file defines `window.*` helpers and returns a status object):

```bash
node tools/kol-cdp.mjs tools/engine/helpers.js   # G/P/ST/INV, inFight, getChoice, opts, _pwd + status
node tools/kol-cdp.mjs tools/engine/mall.js      # mallPrices(name), mallBuy(id, n, maxPrice, name)
node tools/kol-cdp.mjs tools/engine/fight.js     # runFight(page,{noSkill}), heal(), topMP(min)
node tools/kol-cdp.mjs tools/engine/burst.js     # burst(snarf, n, stopFn, chooser), pyrLinks()
node tools/kol-cdp.mjs tools/engine/estate.js    # post-Ronin: pullAll(), sellPlan(keep, protectRe), sellPlanRun(plan)
node tools/kol-cdp.mjs tools/engine/cyrpt.js     # optional: evil(), _cy, useEvilEyes(), balladHeal (Accordion Thief)
```

`fight.js`'s combat line is the **Disco Bandit dance combo** (5005 → 5008 → 5012, then weapon attacks) — swap
the skill list for another class (see `mechanics/<class>-class.md`). Afterwards drive the game with inline code:
`node tools/kol-cdp.mjs "return await burst(140, 25)" 600000`.

**Knobs on `window`:** `_openers=[[skillId,mp],…]` (cast once each, in order) · `_bombIf=/>Monster Name</` +
`_bombAfter=N` + `_bombs=[itemIds]` — after N openers, throw two items per round (Ambidextrous Funkslinging) at a
named boss. ⚠️ Match the **`>Name<` of the monname span**, not "fighting Name" — the page markup sits between
those words, so `/fighting The Boss Bat/` silently never fired and the fight was lost on plain attacks.
Override `window.heal` / `window.topMP` when the run has no restoratives (e.g. heal = campground rest).
