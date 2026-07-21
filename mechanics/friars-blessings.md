# Deep Fat Friars — Blessings

After completing the **Copse of the Deep Fat Friars** quest (place the 3 ritual items — dodecagram, box of birthday candles, eldritch butterknife — at the central gate), the three Friars remain and grant blessings.

## Ritual Completion

All three artifacts drop from the surrounding zones:
- **Dark Neck of the Woods** (snarfblat 541): easiest, drops the `dodecagram`
- **Dark Heart of the Woods** (snarfblat 540): drops `box of birthday candles`
- **Dark Elbow of the Woods** (snarfblat 539): drops `eldritch butterknife`

⚠️ The old note that 539/540 "need ~45 Mysticality" is a **recommended** stat, not a hard gate — **verified
enterable at base Mysticality 33** (run #2), with no "recommended that you have…" refusal. Expect to get hit
harder than in a Recom-20 zone, so go in with **Springy Fusilli up** and full HP/MP.
Reach the zones via `friars.php` / the Distant Woods.

✅ **Verified run #2:** 66 turns total to farm all three (~20–24 each) at base Mys 33–38, with Springy Fusilli up
(37W/17L). Item IDs: **dodecagram 479 · box of birthday candles 480 · eldritch butterknife 481.**
**Perform the ritual with a single GET: `friars.php?action=ritual&pwd=<hash>`** (the `friars.php` page exposes
`action=friars` and `action=ritual` links).

⚠️ **Pandamonium is NOT immediately useful.** The ritual opens the gate (`pandamonium.php` → `action=beli`
/ `action=infe` / `action=temp`, plus snarfblat 241), **but the talisman zones are high-level**:
**Infernal Rackets Backstage (243) needs mainstat 55**, **The Laugh Floor (242) needs 60**, Pandamonium Slums
(248) needs 45. At base Mys 38 we were refused. ⇒ **Liver of Steel (steel margarita) is a Level ~9–10 goal,
not a Level 6–7 one.** See `drinking-strategy.md`.

Talk to the Friars (`friars.php` → "Talk to the Friars" icon). If you have all 3 items, you can place them at the central gate. Performing the ritual closes the gate, cleanses the copse, and unlocks **Pandamonium** (Azazel's personal effects quest starts there).

## The Three Brothers (Daily Blessing — Pick ONE)

After the ritual, `friars.php` shows three brother icons:

### Brother Flying Burrito (`bro=1`)
Effect: **Brother Flying Burrito's Blessing** — 20 adventures of bonus Monster Level (+20 ML) and stat gains.
Flavor: chief food-gatherer.

### Brother Corsican (`bro=2`)
Effect: **Brother Corsican's Blessing** — 20 adventures of +item drops.
Flavor: the Friar who found out about Azazel's personal effects in the Hey Deze Weekly.
Use when: farming rare drops (Knob Goblin perfume, cake pieces, etc.).

### Brother Smothers (`bro=3`)
Effect: **Brother Smothers's Blessing** — 20 adventures of +3 all elemental resistances (**including Spooky**).
Flavor: "research and drinking" brother.
Use when: **going into the Cyrpt** (spiny skeleltons deal 30 spooky dmg per hit), or any zone with heavy elemental damage.

## Constraints

- **Only ONE blessing can be active at a time.** Accepting a second blessing the same day triggers: *"It looks like you've already received a blessing today, so please leave us to our work."*
- **Daily cooldown:** blessing resets at rollover, so you can pick a different one tomorrow.
- The blessing confirmation is a simple form submit — button labeled **"Blessed Be"** on the brother's page.

## Plan for Quest Days

- **Cyrpt days**: Brother Smothers
- **Rare drop farming days**: Brother Corsican
- **Level grinding days**: Brother Flying Burrito
