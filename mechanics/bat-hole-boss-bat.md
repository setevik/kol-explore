# The Bat Hole / Boss Bat quest (Council, ~Level 4–5)

> Idempotent. Run-state (walls opened, sonar count) lives in `CURRENT_ASCENSION.md`.

## Zones (verified in-game via `place.php?whichplace=bathole`)

| Snarf | Zone | Notes |
|---|---|---|
| **30** | The Bat Hole Entryway | Low ML. Source of the **Pine-Fresh air freshener** (pine bat drop). |
| **31** | **Guano Junction** | **Requires Stench Resistance to enter.** ML 14–18, substat only 3.75 (bad XP). |
| **32** | The Batrat and Ratbat Burrow | Opens after **wall 1**. ML ~14–18. |
| **33** | The Beanbat Chamber | Opens after wall 2. |
| **34** | **The Boss Bat's Lair** | Opens after **wall 3**. |

⚠️ The wiki's own "Zone Num" for Guano Junction says 31 and the Lair 34 — **trust `place.php`**, and note the old
guess of "snarf 33–35" in earlier notes was WRONG.

## Opening the chambers — 3 walls

You must knock down **three walls**, by any combination of:
- **Using a `sonar-in-a-biscuit` (item 563)** from inventory: `inv_use.php?which=3&whichitem=563&pwd=`.
  ✅ **This works from anywhere — you do NOT need to enter Guano Junction to use one.**
- **Screambat fights** in any Bat Hole zone.

Order: wall 1 → Batrat and Ratbat Burrow · wall 2 → Beanbat Chamber · wall 3 → **Boss Bat's Lair**.

**Sonar sources:** drops from bats in every Bat Hole zone (→ straight to inventory), and it is **tradeable and
cheap in the mall (~100 meat)**. ⚠️ But in **Ronin** a mall-bought sonar lands in Hagnk's and you can only pull
**1 per day** (see `ronin-softcore-rules.md`) — so the mall can NOT supply 3 sonars in one day. Farm them from
bats instead, or spend 3 days of pulls.

## Stench Resistance (for Guano Junction only)

- **Pine-Fresh air freshener (item 556)** — accessory, Mysticality req 10, **Slight Stench Resistance (+1)**.
  Mall ~120 meat, or drops in the Entryway (30), or the Odd Jobs Board. Equip: `inv_equip.php?which=2&action=equip&whichitem=556&pwd=`.
- Only **Guano Junction (31)** needs it. The other Bat Hole zones do not.

## The Boss Bat (monster)

**HP 40 · Attack 33 · Defense 29 · No-Hit 43 · Initiative 60 · phylum beast.**
Drops: dense meat stack, batskin belt, **Boss Bat britches** or **Boss Bat bling**.

## ⚠️ THE REAL WALL: you get one-shot before you act (verified the hard way)

At **Level 4–5 with 12–13 max HP, the Bat Hole is unplayable** — and *not* because of stench or damage output.

**Verified twice** (Guano Junction 31 and Batrat Burrow 32), the fight log reads:
> "You're fighting a batrat… **It gets the jump on you.** It lets loose a high-pitched squeak… Ugh! Ow! Argh!"
> → **rounds = 0, HP 12 → 0, Beaten Up**, 1 adventure spent.

The monster **wins initiative and one-shots you before round 1**. Consequences:
- A stun (Entangling Noodles) and a nuke (Cannelloni) are **worthless** — you never get a turn to cast them.
- ❌ Don't misread this as a stench/resistance problem, or as "the monster is invincible". Check the fight log
  for **"gets the jump on you"** + `rounds=0`.

**Prerequisites before returning:**
1. **Max HP** — for a Mysticality class **max HP ≈ base Muscle + 3**. At base Muscle 10 you have 13 HP. You need
   base Muscle ~20–27 (**raw muscle 400–729**) for ~23–30 HP. Muscle food helps:
   **insanely spicy bean burrito (316)** = +27–32 Muscleboundness, awesome, 3 fullness, **Level req 4**.
2. **Initiative** — moxie is the initiative stat and a caster's is dire (6 at L5). **Springy Fusilli (3015, +init)
   at guild Level 6** is the direct fix: win initiative → stun → nuke → never get hit.
3. Only then: stun (3004) → Cannelloni (3005) every round. The Boss Bat has just 40 HP; it dies fast **if you
   get to act at all**.
