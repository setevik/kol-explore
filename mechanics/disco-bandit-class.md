# Disco Bandit — class notes (Moxie)

> Idempotent class reference. Current-run state lives in `CURRENT_ASCENSION.md`. Sibling class: Accordion Thief
> (same guild, same store `guildstore1`).

## Start of a run

- **Starting kit:** *disco mask* (hat) and *disco ball* (weapon), worn on equip. An astral pet (astral shorts) covers pants.
- **Starting skills:** **Suckerpunch** (5021, combat, **1 MP**, damages and weakens; shows `(P)`), **Disco Aerobics**
  (5000, 1 MP, *Disco State of Mind*: +Moxie).
- Max HP is tiny early (**4 at Level 1, 8 at Level 4**) — Moxie classes get HP from Muscle like everyone else.

## Guild — the Department of Shadowy Arts and Crafts

- **Challenge (Shifty, `guild.php?place=challenge`): "steal your own pants".** It is a noncombat in the **Sleazy
  Back Alley (112)**: choice **542 `Yoink!`** (single option) — ✅ came on the 4th alley turn. Visit the challenge page
  again to become a member.
  🐛 **The gag leaves your pants slot EMPTY** — re-equip your pants afterwards.
- **Trainer (Lefty)** `guild.php?place=trainer`, POST `action=buyskill&skillid=<short id>&pwd=`. Prices by level
  **125 · 250 · 500 · 750 · 1,250 · 1,750** for Levels 1–6 (the same ladder as every guild).

| Lvl | Skill | `whichskill` | `skillid` | Notes |
|---|---|---|---|---|
| 1 | Disco Eye-Poke | 5003 | 3 | Combat, 2 MP, once per fight, small damage |
| 1 | Deft Hands | 5025 | 25 | Passive: better combat items |
| 2 | Disco Dance of Doom | 5005 | 5 | Combat, 3 MP, once per fight: damage + weaken |
| 2 | Overdeveloped Sense of Self Preservation | 5010 | 10 | Passive: initiative |
| 3 | Disco Nap | 5007 | 7 | 500 |
| 3 | Disco State of Mind | 5026 | 26 | 500 |
| 4 | Disco Dance II: Electric Boogaloo | 5008 | 8 | 750 |
| 4 | Frantic Gyrations | 5027 | 27 | 750 |
| 5 | That's Not a Knife | 5028 | 28 | 1,250 |
| 5 | Advanced Cocktailcrafting | 5014 | 14 | 1,250 |
| 6 | Nimble Fingers | 5004 | 4 | 1,750 — passive |
| 6 | Disco Face Stab | 5012 | 12 | 1,750 |

Later rows by level (trainer page): 4 Disco Dance II: Electric Boogaloo · Frantic Gyrations — 5 That's Not a Knife ·
Advanced Cocktailcrafting — 6 Nimble Fingers · Disco Face Stab — 7 Tricky Knifework · Flashy Dancer — 8 Mad Looting
Skillz · Disco Smirk — 9 Disco Greed · Knife in the Dark — 10 Disco Shank · Disco Bravado — 11 Disco Dance 3: Back in
the Habit · Adventurer of Leisure — 12 Ambidextrous Funkslinging · Disco Inferno — 13 Heart of Polyester · Disco
Fever — 14 Smooth Movement · Sensitive Fingers — 15 Superhuman Cocktailcrafting · Disco Leer.

## Combat at Levels 1–4

✅ **Plain attacks with the disco ball + Suckerpunch (1 MP) in round 1** took a fresh Disco Bandit **Level 2 → 4 in the
Outskirts (114): 66 wins, 0 losses**, no healing items.

✅ **Level 4, max HP ~11, Disco Aerobics (+Moxie) refreshed before each fight:** the Spooky Forest and the Tavern cellar
went **52 wins, 0 losses** — a Moxie class's high Moxie makes low-level monsters miss, which is its early defence.

✅ **Levels 4–6 with plain disco-ball attacks + Suckerpunch / Dance of Doom openers:** Guano Junction (air freshener)
opened the Boss Bat's lair in **13 fights**, the Boss Bat fell in the next **7**, and the Harem went **47 wins, 0 losses**
(Level 5 → 6, plus 3 perfumes). No healing items needed — the class's Moxie keeps low-level monsters missing.
