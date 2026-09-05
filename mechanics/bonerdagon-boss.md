# Bonerdagon (Defiled Cyrpt boss)

## 📊 VERIFIED STATS (from the official wiki — stop guessing his HP)

| HP | Attack | Defense | No-Hit | Initiative | Element |
|---|---|---|---|---|---|
| **120** | 90 | 81 | 100 | 90 | **Spooky (deals spooky damage)** |

⚠️ **He is 120 HP, not the ~180 commonly assumed** — that is only ~3 swings for a mid-level melee character,
which makes him a far more winnable DPS race than his reputation suggests.
✅ **Measured live (Seal Clubber, L8):** he deals **~46 spooky damage per round** and has **initiative** (90),
so he hits BEFORE your first swing. Budget `ceil(yourMaxHP / 46) - 1` swings.

🚨 **DAMAGE ABSORPTION DOES NOT SAVE YOU HERE — you need ELEMENTAL RESISTANCE.** `Hide of the Walrus`
(Damage Absorption +50) made no meaningful dent in his 46/round because the damage is **spooky**. Absorption
and resistance are different axes; check which one a boss's damage needs.
🎯 ⏱️ **Take `Brother Smothers's Blessing` (`friars.php` POST `action=buffs&bro=3`, +3 all-elemental res)
IMMEDIATELY BEFORE entering the Haert — it lasts only 20 adventures.** Taking it at day-open and then grinding
is the single most common way to lose this fight with the counter sitting unused. (See HARD RULE 3.)


## ✅ KILLED in 4 rounds, ZERO damage taken (verified in-game) — what actually worked

🚨 **THE #1 LESSON: TAKE OFF THE NECROTELICOMNICON (2494).** It tunes all pasta damage to **Spooky**,
and the Bonerdagon — a bone dragon in the Cyrpt — **resists Spooky hard**. First attempt WITH it:
11 rounds, his HP barely moved, the attempt LOST at base Mys 120 with both Buffy shells up. Second attempt,
**identical prep but off-hand unequipped**: dead in 4 rounds, untouched. Check elemental alignment
before every boss; a +spell-damage offhand that re-tunes your element can be a net negative.

🚨 **LESSON 2: DO NOT TRY TO OUT-HEAL HIM.** He hits **~37/round, every round**. Lasagna Bandages heals
~17 → net **−20/round**, so healing just loses slowly (verified: 92→52→31→10→0 while spamming heals).
It is a **pure DPS race**: Entangling Noodles (stun) → Stuffed Mortar Shell → Cannelloni every round,
never heal. Enter at full HP so you can absorb 2–3 hits.

**Winning loadout:** base Mys ~120 · **no off-hand** · Crown of the Goblin King · Springy
Fusilli up · Buffy's **Ghostly Shell + Astral Shell** · full HP/MP off tiny houses (592) · 3 smut orc
keepsake boxes (5788) held in reserve as wing-flap-proof damage (never needed them).
**Entry:** `crypt.php?action=heart` → choice **527 option 1**.
**Drops:** **skull of the Bonerdagon** (off-hand, +5 spooky spell damage — a fine Necrotelicomnicon
replacement outside spooky zones) + **chest of the Bonerdagon** (`inv_use` → **3,000 meat**).
Report to `council.php` to close the quest.

---


## Clearing the Cyrpt (the 4 sub-zones) — verified in-game

- **Council gives this at Level 8** (aura of Spookiness) along with the **Evilometer (item 4964)**.
- **`inv_use` the Evilometer** any time to read **Total evil + per-zone** (starts ~50 each, 199 total).
  ✅ **When all four rooms are clear the Evilometer reads `Total evil: 999 / Haert: 999`** — 999 is a
  **sentinel meaning "only the Haert remains"**, not a parse error, and `crypt.php` then shows only that zone.
  Each room's boss becomes available at 25 evil and clears the remaining 25 on death.
- **Four Defiled sub-zones**, each must be ground to **0 evil** (each fight removes ~1):
  **Alcove 261 · Cranny 262 · Niche 263 · Nook 264.** All **ML 53–79, Recom Stat 40.**
- Then **The Haert of the Cyrpt** (`crypt.php?action=heart`) opens → the Bonerdagon fight (below).

🚨 **THIS IS A LEVEL 9–10 GRIND, NOT A LEVEL 8 ONE — *for a caster*.** ⚠️ **Class-specific:** the numbers
below were measured on a Pastamancer with ~50 HP. ✅ **Re-measured on a Seal Clubber (L7–8, 128–150 max HP,
Hide of the Walrus passive): the four sub-zones went 125W / 2L across two days**, ~1 evil per kill, with
Hibernate every ~12 fights. **A Muscle class can clear the Cyrpt at Level 8 comfortably** — read the
"class-specific vs class-agnostic" rule in HANDOFF before believing the paragraph below. At L8 (base Mys 55, HP 50) verified:
- With **full MP + Springy Fusilli + Brother Smothers's Spooky blessing**, a spiny skeleton dies in ~4 rounds
  untouched. **But that state is expensive and short-lived** — once MMJ runs out OR the 20-turn blessing
  expires, win rate collapses (measured **7W/23L**). ⇒ ~1 evil/fight × 199 with a losing record = **many days**.
- **Spiny skeletons deal ~30 Spooky per hit** and there are lots of them → **Brother Smothers's Blessing
  (`friars.php?bro=3`, +3 all-elemental res incl. Spooky, 20 adv) is mandatory** — and it out-times your MP,
  so re-bless and re-juice together. See `friars-blessings.md`.
- **Recommendation:** don't try to clear the Cyrpt until **base Mys ~65+ and a bigger MP/meat budget**; keep
  leveling in the Haunted Kitchen (388) meanwhile. Chip a sub-zone only while a blessing + MP are both up.

## Quick reference

- **Location**: `crypt.php?action=heart` (or click The Haert of the Cyrpt area)
- **Prompt**: "Ready to step through it and finish what you started..." → "When I... Yes?" / "Not yet."
- **Quest gate**: All 4 Cyrpt sub-zones must be cleared first (Alcove, Cranny, Nook, Niche all 0 evil). Then only "The Haert of the Cyrpt (1)" is clickable.
- **Quest text after defeat**: completes "Get rid of the evil in The Cyrpt" Lvl 7 council quest

## The Wing-Flap mechanic ⚠️

**The Bonerdagon disrupts skills and items at a 25% rate** (per wiki).

Skill version (mid-combat):
> "As you're preparing to use that skill, the Bonerdagon suddenly starts furiously beating its wings. You're knocked over by the gust of wind it creates, and lose track of what you're doing."

Item version:
> "The flapping of the Bonerdagon's wings is producing too much wind for you to safely use that item."

Then he hits you for ~37 spooky damage that round.

When disrupted:
- Skill/item is cancelled
- MP NOT consumed (small mercy — but this is contradicted by wiki "wastes your MP" claim, may have changed over time)
- No damage dealt to him
- You still take spooky damage from his hit
- Pasta thrall + familiar effects DO still trigger if they're auto-triggered

**75% success rate means you basically just need to keep casting** — a single successful Cannelloni at Mys 97+ nearly one-shots him (98 dmg vs his 120 HP).

This means **any spell-based strategy is unreliable**. Some rounds you'll cast successfully, others you'll just take damage with nothing to show.

## Damage profile (CORRECTED from wiki)

- **HP: 120** (NOT 600-700 as initially assumed!)
- **18 XP** on defeat
- **Guaranteed drops**: chest of the Bonerdagon, skull of the Bonerdagon
- His attack: **37 spooky damage per hit**, hits every round
- **Safe Moxie = 98** (untouchable threshold)
- He gets first strike even with Springy Fusilli active

**Critical implication for Pastamancer**: Cannelloni Cannon at Mys 97 does ~98 damage. **One successful cast nearly kills him.** Two casts = dead.

## Strategies that probably work

### Combat items (immune to wing-flap)
Items used in combat aren't "skills" so the wing-flap shouldn't disrupt them. Try:
- smut orc keepsake box — combat item, deals damage
- dried face — combat item
- hellion cube — combat item
- spooky shrunken head — possibly damage

### High-MP spell spam
Even with disruption, every successful Cannelloni does ~98 dmg. With 200+ MP and Lasagna Bandages on standby, you can outlast. Bring:
- 2-3 phonics down for emergency MP refills (also +Mys buffs)
- 2-3 tiny house in pocket for full HP/MP between attempts (and clears Beaten Up)
- Cast Lasagna Bandages mid-combat for emergency heal: `fight.php?action=skill&whichskill=3009`

### Stat thresholds
- **Mys 130+** likely needed for clean kill (each Cannelloni does more damage)
- Bring Manicotti stacks (cheap +Mys buff)
- Use spleen items: sparkling orb (likely +Mys), hardening cream

## Recovery items after attempt

See `HANDOFF/recovery-items.md` for tiny house, phonics down, and scroll of drastic
healing (HP/MP restore + Beaten Up clearing).

> **Wing-flap rate caution:** the wiki cites 25%, but in-game experience has seen far
> higher disrupt streaks (multiple disrupts in a row). Plan for a high disrupt rate: bring
> plenty of MP and a large HP buffer rather than assuming a clean two-cast kill.

## Bonerdagon Drops & Usability

### Standard drops (always, MCD 0)

#### skull of the Bonerdagon ⭐ EQUIPPED
- **Off-hand accessory** (paired with 1H weapon)
- **+5 Spooky Damage** to spells
- Synergy: stacks with Cannelloni Cannon damage

#### chest of the Bonerdagon
- **Quest item, USABLE** (can't be traded/discarded)
- Opens to yield random "Goodies of the Bonerdagon"
- **Goodies** are consumables/Meat, NOT equipment
- Open it for the bonus loot (one-time use)

### Aggravation Device drops

These only drop if a monster aggravation device (MCD/Annoy-o-Tron/etc.) is set BEFORE the boss fight:

#### Rib of the Bonerdagon (MCD 5)
- **Weapon** (staff), 80 power, requires 25 Mus to wield
- **+5 Muscle, +5 Mysticality, +15 spell damage**
- A strong pasta-spoon replacement weapon
- Requires MCD set to 5 during the fight

#### Vertebra of the Bonerdagon (MCD 10)
- Crafting component (combine with hemp string → Bonerdagon necklace)
- **Bonerdagon necklace**: accessory, +5 Mus, +5 Mox, **+30% initiative**
- Requires MCD set to 10 during the fight

### Setting the MCD

The aggravation device (e.g. "The Super-Secret Canadian Mind-Control Device" or detuned radio at this level) must be set **before** the fight. Set MCD to **10** to get all 4 drop types (both the standard drops and the Rib at 5 / Vertebra at 10).

### Opening the chest
- Click `[use]` on chest of the Bonerdagon in inventory which=3 → yields random loot
- One-time only (the chest is consumed)
- Likely consumables/Meat rather than equipment, but worth doing
