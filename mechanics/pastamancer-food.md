# Pastamancer food — preferred food per level (class/skills-aware)

> Sourced from the official wiki (Pastamancer, Pastamastery, Transcendental Noodlecraft, Savory dry noodles,
> Spaghetti breakfast, The Most Important Meal, item pages). WebFetch 403s the wiki, but **`curl` with a browser
> user-agent fetches it fine (HTTP 200)** — see HANDOFF; use it to read a food's `Level required:` / `Size:` / avg
> Adventures directly. Cross-ref the EAT hard rule in `HANDOFF.md`. Current-run food state is in `CURRENT_ASCENSION.md`.

## Why food choice is class-specific for us

A **Pastamancer** gets bonuses that make **pasta dishes** the best food, and make *every* food better:
- **Pasta dishes → +3–7 MP per fullness** (Pastamancer only). Free MP battery baked into the meal.
- **Saucemaven** (Pastamancer/Sauceror passive) → **+5 adventures from EVERY food AND booze.** Biggest single
  food/booze multiplier we have — prioritize learning/perming it.
- **Canticle of Carboloading** (Pastamancer skill) → **+3 adv to the *next* pasta dish** (cast right before eating it).
- **Transcendental Noodlecraft** (Pastamancer skill, **lowest dish needs Level 10**) → craft **hi meins** = the premium
  Pastamancer food (5 fullness, "awesome" quality, big MP, +5 turns of an elemental Breath).
- **Milk of Magnesium** (universal, the "Got Milk" effect) → **+1 adv per fullness**; eat it *before* your food.

⚠️ **Food has LEVEL REQUIREMENTS** — you cannot eat a food above your level. ✅**Confirmed via wiki curl:
stolen sushi (6293) = food (good), Size 6, Level required: 6, ~12 adv** — that is why it wouldn't eat at Level 4;
it becomes a solid 6-fullness food at **Level 6+**. Always pick the best food whose level requirement you meet.

⚠️ **Cooking costs 1 adventure per dish** (2 for saucy noodles) **unless you own a chef-in-the-box** (free crafting).
So cook at day-OPEN while you have adventures — and a **chef-in-the-box is worth acquiring** for a pasta run.

## 🍝 Preferred food per level — Softcore Pastamancer

| Char level | Preferred EAT (best first) | Fullness ea. | How to get / notes |
|---|---|---|---|
| **1–4** | Cheap **"decent"+ bought food** with level-req ≤ your level (e.g. **fortune cookie** 2f, L1). Top the meter with **1-f fruit** (orange item 332, lemon). | 1–3 | No good craftable pasta yet (Noodlecraft is L10). Buy from the **mall** or **general store**. Eat **Milk of Magnesium** first if affordable. **spaghetti breakfast** (see boosters) is a free daily pasta if you have the skill. |
| **5–9** | Best **3–5-fullness "good/awesome" bought food** you meet the level-req for — **prefer any *pasta dish*** (for the +MP). Cook **basic dry-noodle pasta** if you find a valid filling (see crafting below). | 3–6 | Milk of Magnesium first. **At Level 6+, stolen sushi (6293) unlocks** (6f, ~12 adv, "good") — the workhorse EAT whenever it's available. |
| **10–11** | **Craft & eat hi meins** (Transcendental Noodlecraft): dry noodles + **MSG** → *savory dry noodles*; savory dry noodles + a **sauce** → **hi mein**. | 5 ea. | Buy MSG + the sauce reagents from the **mall** (Softcore allows it). Get a **chef-in-the-box** so cooking is free. Save **Carboloading** for the biggest dish. |
| **12+** | Same **hi meins**, now with **Saucemaven** adding **+5 adv to every dish** (and every drink). | 5 ea. | Learn **Saucemaven** at the guild ASAP — it retroactively makes ALL food/booze much better. |

**Rule of thumb every day:** Milk of Magnesium → (Carboloading if eating a pasta dish) → eat the highest-quality food
that (a) you meet the level requirement for and (b) is a **pasta dish** when possible → fill fullness to 15.

## Universal adventure-boosters (stack them)

- **Milk of Magnesium** (item; "Got Milk") — **+1 adv/fullness**, eat before food. Cheap; buy from the mall.
- **Canticle of Carboloading** (Pastamancer skill) — **+3 adv to the next pasta dish**. Cast, then eat a big pasta.
- **The Most Important Meal** (Mr. Store skill) → **spaghetti breakfast** once/day: a free **pasta dish** whose adv
  gain *scales with your level* (base 1; ~3–4 at L6). Nice free daily pasta if the account has the skill.
- **Saucemaven** (see above) — +5 adv/food & booze.

## Crafting details (Cook station, `craft.php?mode=cook`)

- **Basic pasta / lo mein / saucy noodles — Pastamastery (we have it):** **dry noodles (304) + 1 filling → a pasta
  dish (~4 fullness)**, 1 adv to cook. ⚠️ The valid fillings must be found in the Cook UI (wiki recipe tables aren't
  fetchable). **Tested INVALID:** long pork (2532), lihc eye (170), jumbo olive (455), enchanted bean (186).
  Pair dry noodles with early-zone drops (bat wing, batgut, bunny parts, ghuol/cat bits, etc.) until a result appears.
- **Savory dry noodles → hi meins / lasagnas / wontons — Transcendental Noodlecraft (L10 skill):**
  dry noodles + **MSG** → savory dry noodles (MSG from the guild store `shop.php?whichshop=guildstore2`); savory dry
  noodles + an **elemental sour sauce** → **hi mein**; + casserole → **lasagna**; + Island ingredients → **wontons**.

## Booze note (for the DRINK step, not food)

See **HANDOFF.md** for the canonical DRINK reference (best booze, item IDs, Hidden Tavern source).
