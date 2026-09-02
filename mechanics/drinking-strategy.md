# Optimal drinking strategy (adventures per day from booze)

> Idempotent. Sourced from the official wiki + verified in-game.
> The **hard safety rule** (drink LAST) lives in `HANDOFF.md` HARD RULE 1 — read that first.
> Current-run booze stock lives in `CURRENT_ASCENSION.md`.

## 🎯 The cap is a VARIABLE — read it, never hard-code it

Every "14" below means **"your current cap"**. It is **14 with a default liver, 19 with Liver of Steel**, and it
**resets to 14 each ascension** (Liver of Steel can't be permed). ✅ **Detect the cap** — the robust way (works at
drunk 0): **`charsheet.php` contains "Liver of Steel" → cap 19, else 14** (Verified in-game; `api.php` has no cap
field). The charpane `Tipsiness: X / Y` (Y = cap) also works but **only appears once drunk > 0**. Fill to the cap.
Whenever Liver of Steel is active, that's 19 — **stopping at 14 wastes ~+9 adventures/day.** (Liver of Steel comes
from the Azazel quest → steel margarita; see `friars-blessings.md`.)

## The three rules that define the optimum

1. **The adventuring cap is `drunk` = CAP** (read it; 14 default / 19 Liver of Steel). At **CAP+1** you are
   **falling-down drunk**: only *Drunken Stupor* adventures, which **consume a turn and drain substats**.
   Only resets at rollover.
2. **You may exceed the cap exactly ONCE.** The wiki's falling-down-drunk list includes *"drink any more!"* —
   so the drink that *crosses* CAP is allowed, but once over, **you cannot drink again that day**.
3. **Adventures from booze are granted immediately and bank overnight.** So the surplus from an overdrink is
   *not* wasted — it rolls into tomorrow.

⇒ **The optimum is: fill to exactly CAP, then spend your ONE overdrink on the single highest-adventure drink you own.**
And because of rule 1, **all of this must happen at the END of the day**, after adventures are spent.

## 🔌 Endpoints (get these wrong and you silently drink nothing)

- 🐛 **DRINKING IS `inv_booze.php`, NOT `inv_use.php`.** (This cost a full confused cycle.)
  `inv_use.php?which=1&whichitem=<booze>&pwd=<hash>&ajax=1` returns a **normal-looking 200 with the usual
  `updateInv([])` / charpane-refresh boilerplate** — no error, no "you can't do that" — but **nothing is
  consumed, no adventures are gained, and drunkenness stays 0.** An empty `updateInv([])` is the tell.
  ✅ Correct: **`inv_booze.php?which=1&whichitem=<id>&pwd=<hash>&ajax=1`**
  → *"Results: You drink the tiki drink."* and `updateInv({"6682":-1})`.
- ✅ **Always verify a drink actually landed** by diffing `api.php` `adventures` before/after.
- 🚨 **A look-ahead is only as good as its POTENCY TABLE.** Even with a correct `drunk` reading, a wrong
  constant overshoots: **Typical Tavern swill (3831) is potency 3, not 1** — assumed as 1 it passed the
  `13 + 1 <= 14` check and landed on **16**. ✅ **Measure potency from the observed delta** (`drunk` after −
  `drunk` before) and correct the table as you go; **treat any unverified bottle as potency 3** (the common
  maximum for cheap booze) when `cap − drunk < 3`. Verify a new bottle's potency early in the rack, while
  there is headroom to absorb a surprise.
- 🚨 **Take current drunkenness from `api.php?what=status` → `drunk`, NOT from a charpane regex.** A charpane
  scrape that returns `0` when the pattern misses turns the look-ahead guard into a no-op and **overshoots the
  cap** (observed: 16 against a cap of 14, with the log showing 0 → 6 → 8 → 0 → 10). The charpane's
  `Drunkenness: X / Y` line is still useful for reading the **cap** (Y) — but only once drunk > 0, and the
  authoritative cap test remains `charsheet.php` + "Liver of Steel". (Note the charpane label is **`Drunkenness:`**, not `Tipsiness:`, in the
  current UI — match both.) A "drink" that yields +0 adventures did not happen.

## 🛒 Buying booze from the mall — the per-store daily limit

⚠️ **Good booze is usually sold `(Limit 1 / day)` per store.** A single `quantity=5` POST to one store
**silently buys nothing** (no error, meat unchanged). ✅ **Buy 1 from each of N different stores instead:**
scrape every `mallstore.php?whichstore=(\d+)&searchitem=<id>&searchprice=(\d+)` match from the search page,
dedupe by store, and issue one purchase per store. 5 stores → 5 Fog Murderers for 1,830 meat
(250/350/410/410/410) — prices climb, so walk the list cheapest-first and stop when you have enough.

### Measured yields (in-game, base Mys ~245, no booze-drop bonuses)

| Drink | id | Potency | Adventures |
|---|---|---|---|
| **Fog Murderer** | 6682 | 6 | **16, 15, 14, 14** (~15 avg) |
| Imp Ale | 470 | 1 | 1 |
| bottle of gin / vodka / rum / whiskey / boxed wine | 237/238/787/328/1005 | 3 | ~3 |
| bottle of popskull | 1774 | 2 | 3–4 |
| Cobb's Knob Wurstbrau | 4960 | 2 | 2–3 |
| **Typical Tavern swill** | 3831 | **3** ⚠️ (not 1) | 5–6 |

⇒ Fog Murderer is ~**2.5 adv per point of liver** at ~250–420 meat: still the best no-skill bottle.
Yield scales with **your** cap — measured at a 19 cap (3 × Fog Murderer + 1 × Imp Ale + 1 overdrink):
**~60 adventures for ~1,930 meat**. At a default 14 cap the same shape (2 × Fog Murderer + fillers + 1
overdrink) lands nearer ~45.

## Daily recipe

1. **Spend all adventures first.** (Drinking first turns an overshoot into a lost day.)
2. **Read CAP** from the charpane `Tipsiness: X / Y`.
3. **Mix everything** (see below) — free, and roughly doubles adventures per bottle.
4. **Drink up to exactly CAP** using a **look-ahead** guard: only drink if `drunk + potency <= CAP`.
   Land exactly on CAP by finishing with small bottles (2-potency cooking sherry / popskull, 1-potency Imp Ale/Willer).
5. **Then drink ONE more — the biggest-adventure drink you have.** It pushes you over the cap; that is intended.
   Save your best bottle for this slot (a 15-adv Fog Murderer here is worth 3× a 5-adv cocktail).

## ⭐ Cocktailcrafting — the single biggest cheap upgrade (verified)

**Anyone can mix "normal" drinks — no Disco Bandit skill needed** — but it requires a cocktailcrafting kit
installed in the campsite kitchen.

- **Queue Du Coq cocktailcrafting kit — General Store `shop.php?whichshop=generalstore` row 642, 1,000 meat.**
  (The old 50-meat *My First Shaker™* is obsoleted and no longer stocked.) Install with
  `inv_use.php?which=3&whichitem=236&pwd=` → *"You install the fancy cocktailcrafting kit…"*
- ✅ **Mixing normal drinks costs ZERO adventures** — verified (190 → 190) even though the submit button is
  labelled *"Shake! (1 Adventure)"*. That label only applies to **fancy** drinks (which need a
  bartender-in-the-box to be free).
- **Mix URL:** POST `craft.php` with `mode=cocktail&action=craft&a=<itemA>&b=<itemB>&qty=<n>&pwd=<hash>`.
  Success text: *"You mix up a refreshing cocktail. You acquire an item: …"*

### Why it matters

| Drink | Quality | Potency | Adventures |
|---|---|---|---|
| bottle of vodka/rum/whiskey/tequila, boxed wine | crappy | 3 | **3** |
| **any of the above + soda water / fruit** | decent | 3 | **5–6** |
| gin and tonic · vodka and tonic | good | 3 | **5–10** |

**≈ +2.5 adventures per bottle, free.** Over ~5 drinks that is **+12 adventures every single day**.

### Recipes (all "normal" — no skill needed)

**Soda water (General Store row 650, 70 meat) is NOT universal** — ⚠️ **Verified in-game: vodka + soda water
FAILS** ("Those two items don't combine to make a refreshing cocktail"). Confirmed-working normal recipes:
- soda water + **bottle of whiskey** → **whiskey and soda** (5–6) ✅
- soda water + **boxed wine** → **wine spritzer** (5–6) ✅
- **olive + bottle of vodka** → **vodka martini** (good, 5–10) ⭐ ✅
- **olive + bottle of gin** → **martini** (good, 5–10) ⭐ ✅
- **orange + bottle of vodka** → **screwdriver** (5–6) ✅
- orange + tequila → tequila sunrise (5–6) (verified in-game, pre-mix)
(vodka/gin "and tonic" need **tonic water**, a different item — don't assume soda water substitutes.)
⚠️ **qty>1 crafts succeed with DIFFERENT result text** (no "You acquire an item:" match) — verify by
re-reading the craft page's ingredient `<select>` counts or the inventory, not the response text.
The craft page (`craft.php?mode=cocktail`) `<option>` list is also the fastest way to see mixable stock + IDs
(olive 245 · orange 242 · gin 237 · rum 787 · vodka 238 · whiskey 328 · soda water 1003).

⚠️ Item IDs are not intuitive — **1005 is boxed wine, not rum**; soda water is **1003**; the Queue Du Coq kit is
**236**. Read the `a`/`b` `<select>` options on `craft.php?mode=cocktail` to get the real IDs of what you hold.

## Upgrade path (in priority order)

1. ⭐ **Queue Du Coq kit** — buy it as early in the run as you can afford it. +2.5 adv per bottle, forever.
2. 🎯 **Liver of Steel — raises the cap 14 → 19 (+5).** From drinking a **steel margarita (item 2743)**, the reward
   for the **Azazel quest** in **Pandamonium**. Worth ~+9 adv/day. ⚠️ Cannot be permed at ascension — re-acquire
   each run.
   ⚠️ **CORRECTION (verified in-game): this is NOT "right after the Friars".** The Friars ritual only opens
   the *gate*. The three talismans live behind hard stat gates — **Infernal Rackets Backstage (snarf 243) needs
   mainstat 55**, **The Laugh Floor (242) needs 60**, Pandamonium Slums (248) needs 45 — so it's a **Level ~9–10**
   project. Plan it for then; don't count on it at Level 6–7.
   The three tasks (for later): logic puzzle in the **Hey Deze Arena** → Azazel's unicorn; **Belilafs Comedy Club**
   → find Larry of the Field of Signs, equip observational glasses, talk to Mourn → Azazel's lollipop;
   5 cans of imp air + 5 bus passes → **Moaning Panda Square** → Azazel's tutu.
3. **Fog Murderer (item 6682)** — potency 6, **Level 6**, **14–16 adventures (avg 15)** = **2.5 adv/potency**
   vs 1.8 for basic cocktails. Both the best filler and the ideal **overdrink**. **Two sources:**
   **The Hidden Tavern** (~500 meat, needs the L11 Hidden City) sells it without a daily cap; the **mall** lists it
   at ~250–450 but almost always **`(Limit 1 / day)` per store**, so buy one each from the ~4–5 cheapest stores.
4. Long-term: **Ode to Booze** (Accordion Thief) adds adventures per drink — not available to a Pastamancer.

## ⭐ Worked examples — the SHAPE is fixed, the numbers follow your cap

🚨 **Do not copy a rack; derive it.** The algorithm is cap-agnostic:
> **big bottles while `drunk + potency <= CAP` → small bottles to land EXACTLY on CAP → ONE overdrink
> (your highest-adventure bottle).**

Worked both ways with **Fog Murderer (potency 6, 14–16 adv)** as the big bottle and **Imp Ale (470, potency 1)**
/ popskull (1774, potency 2) as the fillers:

| Your cap | Fill | Lands on | Overdrink | Measured total |
|---|---|---|---|---|
| **14** (default liver — every fresh ascension) | 2 × Fog Murderer (→12) + 2 × Imp Ale (→14) | 14 | 1 × Fog Murderer | **~45 adv** |
| **19** (only while **Liver of Steel** is active) | 3 × Fog Murderer (→18) + 1 × Imp Ale (→19) | 19 | 1 × Fog Murderer | **~60 adv** ✅ measured |

⚠️ **The 19 row is not the default.** Liver of Steel **cannot be permed and resets to 14 every ascension**, so a
new run starts on the 14 row and moves to the 19 row only after finishing the Azazel quest. **Read the cap first
(`charsheet.php` → "Liver of Steel"), then pick the row.** Whether this run has it belongs in
`CURRENT_ASCENSION.md`, not here.

<details><summary>Fallback rack when Fog Murderers aren't buyable (~27 adv at a 19 cap)</summary>

cider ×4 (+~5 adv each) + cooking sherry to land exactly on the cap, then **one Monsieur Bubble overdrink
≈ +5 adv**. At cap 14 the same routine yields ~28 — the gap between the two caps is **≈ +9 adv/day**, which is
the point of never hard-coding either number. Mixing (below) roughly doubles per-bottle yield.
⚠️ Banks **less than half** what the Fog Murderer rack does; use only early in a run or when the mall is dry.
</details>
