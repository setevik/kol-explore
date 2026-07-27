# Optimal drinking strategy (adventures per day from booze)

> Idempotent. Sourced from the official wiki + verified in-game (run #2, Days 93 & 99).
> The **hard safety rule** (drink LAST) lives in `HANDOFF.md` HARD RULE 1 — read that first.
> Current-run booze stock lives in `CURRENT_ASCENSION.md`.

## 🎯 The cap is a VARIABLE — read it, never hard-code it

Every "14" below means **"your current cap"**. It is **14 with a default liver, 19 with Liver of Steel**, and it
**resets to 14 each ascension** (Liver of Steel can't be permed). ✅ **Detect the cap** — the robust way (works at
drunk 0): **`charsheet.php` contains "Liver of Steel" → cap 19, else 14** (verified Day 100; `api.php` has no cap
field). The charpane `Tipsiness: X / Y` (Y = cap) also works but **only appears once drunk > 0**. Fill to the cap.
Whenever Liver of Steel is active, that's 19 — **stopping at 14 wastes ~+9 adventures/day.** (Liver of Steel comes
from the Azazel quest → steel margarita; see `friars-blessings.md`. Run #2 has had it since Day 99.)

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

## Daily recipe

1. **Spend all adventures first.** (Drinking first turns an overshoot into a lost day — that cost us Day 93.)
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

**Soda water (General Store row 650, 70 meat) is a universal mixer** — verified it combines with several bases:
- soda water + **bottle of whiskey** → **whiskey and soda** (5–6)
- soda water + **boxed wine** → **wine spritzer** (5–6)
- soda water + **bottle of vodka** → **vodka and tonic** (5–10) ⭐
- soda water + **bottle of gin** → **gin and tonic** (5–10) ⭐
Fruit mixers also work: **orange + tequila → tequila sunrise** (5–6) · **orange + vodka → screwdriver** (5–6) ·
**lemon + whiskey → whiskey sour** (5–6) · **cola + rum → rum and cola** (5–6).

⚠️ Item IDs are not intuitive — **1005 is boxed wine, not rum**; soda water is **1003**; the Queue Du Coq kit is
**236**. Read the `a`/`b` `<select>` options on `craft.php?mode=cocktail` to get the real IDs of what you hold.

## Upgrade path (in priority order)

1. ✅ **Queue Du Coq kit** — done run #2 Day 93. +2.5 adv per bottle, forever.
2. 🎯 **Liver of Steel — raises the cap 14 → 19 (+5).** From drinking a **steel margarita (item 2743)**, the reward
   for the **Azazel quest** in **Pandamonium**. Worth ~+9 adv/day. ⚠️ Cannot be permed at ascension — re-acquire
   each run.
   ⚠️ **CORRECTION (verified run #2, Day 94): this is NOT "right after the Friars".** The Friars ritual only opens
   the *gate*. The three talismans live behind hard stat gates — **Infernal Rackets Backstage (snarf 243) needs
   mainstat 55**, **The Laugh Floor (242) needs 60**, Pandamonium Slums (248) needs 45 — so it's a **Level ~9–10**
   project. Plan it for then; don't count on it at Level 6–7.
   The three tasks (for later): logic puzzle in the **Hey Deze Arena** → Azazel's unicorn; **Belilafs Comedy Club**
   → find Larry of the Field of Signs, equip observational glasses, talk to Mourn → Azazel's lollipop;
   5 cans of imp air + 5 bus passes → **Moaning Panda Square** → Azazel's tutu.
3. **Fog Murderer (item 6682)** — potency 6, **Level 6**, **14–16 adventures (avg 15)**, 500 meat at
   **The Hidden Tavern** (needs the L11 Hidden City). That's **2.5 adv/potency** vs 1.8 for basic cocktails, and it
   is the ideal **overdrink** item. This is the endgame booze (see `HANDOFF.md`).
4. Long-term: **Ode to Booze** (Accordion Thief) adds adventures per drink — not available to a Pastamancer.

## Worked example — cap 19 (with Liver of Steel, verified Day 99)

Fill 5→19: cider ×4 (+~5 adv each) + cooking sherry to land on 19 ≈ **22 adv**, then **one Monsieur Bubble
overdrink ≈ +5 adv**. At cap 14 the same routine yields ~28; **the extra 5 cap ≈ +9 adv/day** — which is the whole
point of not hard-coding 14. Mixing (below) roughly doubles per-bottle yield on top of this.
