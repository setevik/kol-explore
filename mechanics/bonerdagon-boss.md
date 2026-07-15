# Bonerdagon (Defiled Cyrpt boss)

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
