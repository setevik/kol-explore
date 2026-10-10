# Sauceror — class notes (Mysticality spellcaster)

> Idempotent class reference. Current-run state (level, which skills are bought) lives in `CURRENT_ASCENSION.md`.
> Sibling class: **Pastamancer** (same guild, same store, same stat) — see `pastamancer-class.md`.

## Start of a run

- **Starting kit (arrives unequipped):** *Hollandaise helmet* (hat), *saucepan* (weapon), *old sweatpants*.
  An astral chapeau from Valhalla replaces the helmet.
- **Starting skills:** **Salsaball** (4020, combat, **0 MP**) and **Sauce Contemplation** (4000, 1 MP,
  *Saucemastery*: Mysticality and max HP for 5 adventures).
- 🚨 **Max HP is tiny: 4–5 at Level 1–2, 8 at Level 3** (it comes from Muscle). ✅ Measured: the **Spooky Forest
  beat a Level 2 Sauceror in one round** (a spooky mummy). Stay in **ML 1–2 zones (Haunted Pantry 113,
  Outskirts of Cobb's Knob 114)** until Level 4+.

## Guild — The League of Chef-Magi (shared with the Pastamancer)

- **Same challenge as the Pastamancer:** tame the **poltersandwich** in the **Haunted Pantry (113)**, choice
  **544** (single option). ✅ 6 turns, then `guild.php?place=challenge` makes you a member.
- **Trainer** `guild.php?place=trainer`, POST `action=buyskill&skillid=<short id>&pwd=`; only your level's rows are
  buyable. **Prices by level: 125 · 250 · 500 · 750** for Levels 1–4 (the same ladder as every guild so far).

| Lvl | Skill | `whichskill` | `skillid` | Notes |
|---|---|---|---|---|
| 1 | **Simmer** | 4025 | 25 | Noncombat, **costs 1 adventure**, *Simmering* (10 adventures) |
| 1 | **Curse of Vichyssoise** | 4024 | 24 | Combat, 2 MP |
| 2 | ⭐ **Stream of Sauce** | 4003 | 3 | **Combat spell, 2 MP, hot damage** — the early nuke |
| 2 | ⭐ **Saucy Salve** | 4014 | 14 | **Combat-only heal, 4 MP** |
| 3 | **Expert Panhandling** | 4004 | 4 | Passive: **+10% meat (+15% with a saucepan equipped)** |
| 3 | **Icy Glare** | 4026 | 26 | Noncombat buff, 10 MP |
| 4 | **Inner Sauce** | 4028 | 28 | 750 |
| 4 | **Elemental Saucesphere** | 4007 | 7 | 750 — buff, 10 MP: protection from elemental attacks |
| 5 | **Saucestorm** | 4005 | — | Combat spell, 6 MP, hot + cold |
| 5 | **Advanced Saucecrafting** | 4006 | — | Noncombat, 10 MP: cook sauces and salves from reagents |

Later rows by level (names from the trainer page): 4 Inner Sauce · Elemental Saucesphere — 5 Advanced
Saucecrafting · Saucestorm — 6 Curse of Marinara · Soul Saucery — 7 Wave of Sauce · Jalapeño Saucesphere —
8 Curse of the Thousand Islands · Itchy Curse Finger — 9 Intrinsic Spiciness · Saucecicle — 10 Master Saucier ·
Antibiotic Saucesphere — 11 Saucegeyser · Saucemaven — 12 Impetuous Sauciness · Curse of Weaksauce —
13 Diminished Gag Reflex · Wry Smile — 14 Irrepressible Spunk · Sauce Monocle — 15 The Way of Sauce · Blood Sugar
Sauce Magic.

## Combat at Levels 1–3

✅ **Stream of Sauce every round, Salsaball (0 MP) when MP runs short, Saucy Salve below 40% HP** carried a
fresh Sauceror **Level 2 → 3 in the Outskirts: 48 wins, 0 losses**, no healing items. The only out-of-combat
heal at this stage is **resting at the campground (1 adventure)**, which also clears *Beaten Up*.

✅ **Level 4, max HP ~11, Sauce Contemplation cast before each fight (+max HP):** the Spooky Forest went **20 wins,
0 losses**, and the Typical Tavern cellar 15 wins, 0 losses. The Level 2 one-round loss there was a max-HP problem
that two levels and the buff fixed.
