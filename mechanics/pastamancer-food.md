# Pastamancer food — turning our 96 dry noodles into meals (official wiki consult, Day 50)

Source: official KoL wiki (Dry noodle guide, Savory dry noodles, Pastamastery,
Transcendental Noodlecraft, Pastamancer). WebFetch/browser-nav to the wiki are blocked, so
this is distilled from official-wiki search summaries + in-game testing.

## The problem
We hoard **~96 dry noodles (item 304)** from daily Pastamastery but have been wrapping days
at **full 0/15** — wasting ~30-45 rollover adventures/day. Dry noodles are a crafting
ingredient, not directly edible.

## ⚠️ Cooking costs adventures
**Each pasta dish costs 1 adventure to cook** (saucy noodles cost 2) UNLESS you own a
**chef-in-the-box** (makes food crafting free). So food must be made at **day OPEN** when we
have adventures — NOT at the end of day at advs 0. A **chef-in-the-box is worth acquiring**
for sustained free daily food.

## Dry-noodle cooking tiers (all via Cook station, `craft.php?mode=cook`)

### 1. Basic pastas — Pastamastery (we have it) — DO THIS FIRST
- **dry noodles + 1 ingredient → pasta dish**, **4 fullness**, 1 adv to cook.
- 4-fullness dishes use **early ingredients** (Bat Hole, Cobb's Knob); better basic pastas
  use **level 7 / level 9 quest** ingredients.
- ⚠️ **Exact ingredient pairs must be found in-game** (wiki recipe tables aren't fetchable).
  In the Cook UI, pair dry noodles (304) with each early-zone ingredient we hold
  (bat wing, batgut, bunny liver, ghuol ears, cat appendix, catgut, etc.) — a valid pair
  shows a result. **Tested INVALID:** long pork (2532), lihc eye (170), jumbo olive (455),
  enchanted bean (186).

### 2. Lo meins — Pastamastery
- dry noodles + a **first-tier stir fry** (base ingredient cooked with a "secret blend of
  herbs and spices").

### 3. Saucy noodles — Pastamastery (2 advs to cook)
- dry noodles + a **sauce** ingredient (sauce = ingredient + scrumdiddlyumptious solution).

### 4. Savory dry noodles → hi meins / lasagnas / wontons — needs **Transcendental Noodlecraft**
(skill ownership UNCONFIRMED — skillz.php renders skills as images, can't text-check; verify
by attempting the craft)
- **dry noodles + MSG → savory dry noodles.** MSG is sold at our guild store
  (Gouda's Grimoire & Grocery, `shop.php?whichshop=guildstore2`, ~1000 meat — row id needs
  re-confirming in-game; the store HTML mis-parses).
- savory dry noodles + **elemental sour sauce → hi mein** (strong food).
- seasoned meat → casserole → + savory dry noodles → **lasagna**.
- Mysterious Island ingredients + savory dry noodles → **wontons**.

## Recommended plan (next day OPEN, while we have adventures)
1. **Find a working basic-pasta recipe in-game**: Cook UI, dry noodles (304) + each early
   ingredient until a dish appears. Cook ~4 → eat to fill 15 fullness (~40 advs of food for
   ~4 cook-advs = big net gain).
2. **Or** buy **MSG**, test dry noodles + MSG → savory dry noodles (confirms Transcendental
   Noodlecraft); if it works, build toward hi meins.
3. **Or simplest** — buy ready food from the **mall** (no cook-adv cost) and eat to 15.
4. **Acquire a chef-in-the-box** so future cooking is free.

## Cross-reference
See the HARD RULE in HANDOFF.md ("Fill the FOOD & BOOZE meters every day"). Booze side is
solved: Fog Murderer (Hidden Tavern row 175, item 238) = +3 drunk / +6 advs each.
