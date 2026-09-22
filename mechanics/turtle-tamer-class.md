# Turtle Tamer (Muscle) — class specifics

> Run-agnostic. Companion to `seal-clubber-class.md` (the other Muscle class) and `pastamancer-class.md`.
> Current-run skill/meat state lives in `CURRENT_ASCENSION.md`.
> ⚠️ **The Seal Clubber file is the closest analogue, but its FURY material does not apply** — Fury is
> Seal-Clubber-exclusive and does not work for a Turtle Tamer even if its skills were permed
> (`seal-clubber-class.md` § Fury).

## 🐢 The guild: shared with the Seal Clubber

**Both Muscle classes belong to `The Brotherhood of the Smackdown`** (`guild.php`), and — verified in-game —
**the membership challenge is the SAME for both**: Gunther's *sausage-measuring competition*.

⇒ 🎯 **The challenge is a property of the GUILD (stat group), not of the class.** A note filed under one class's
name will mislead; expect Sauceror/Pastamancer to share one challenge and Disco Bandit/Accordion Thief another.

**The challenge, start to finish (~6 turns):** adventure **The Outskirts of Cobb's Knob
(`adventure.php?snarfblat=114`)** until **choice 543**, whose only option is *"Grab the sausage, so to speak.
I mean… literally."*, then simply **visit `guild.php?place=challenge`** — there is no form to submit.
✅ An **11-inch** sausage was accepted; the size is flavour, not a gate.

| Link | Who |
|---|---|
| `guild.php?place=trainer` | **Torg the Trainer** — buy skills |
| `guild.php?place=ocg` | **Terri, the Turtle Tamer** — Turtle Tamer quest-giver |
| `guild.php?place=scg` | Grignr, the Seal Clubber — *also gives the Turtle Tamer's* **Wizard of Ego** *quest* (the opposite-class NPC hands that one out; see `optional-side-quests.md`) |
| `guild.php?place=paco` | Olaf the Janitor — Meatcar + White Citadel |

## 🎒 Starting kit and starting skills

**Gear (all unequipped at birth — equip them by hand):** **helmet turtle** (hat) · **turtle totem** (weapon) ·
**old sweatpants** (pants). ⚠️ A fresh character wears **nothing**; forgetting this is a silent stat loss.

**Skills known at Level 1:**
| Skill | id | Type | Cost | Effect |
|---|---|---|---|---|
| **Patience of the Tortoise** | 2000 | Noncombat | **1 MP** | ✅ **Temporary MAX HP** — measured max HP **14 → 18**, duration **5 adventures**. |
| **Toss** | 2023 | Combat | **1 MP** | Throws your familiar (or something else) at the enemy. |

⭐ **At 1 MP each these are actually castable on a 2-MP pool**, unlike a Seal Clubber's or a caster's openers —
but **Patience lasts only 5 adventures**, so it is a pre-fight buff, not a day-opener (HANDOFF HARD RULE 3).

## 🧠 The skill rack (Torg) — prices match the Seal Clubber's ladder

🚨 **The trainer only lists skills up to your CURRENT level** — at Level 1 exactly two rows render. ⇒ **re-visit
the trainer at every single level-up**; there is no "buy all" and no indication that more exist.
✅ **Read what is purchasable from the forms, not by memory:** `[...tr.matchAll(/name=skillid value=(\d+)/g)]`.
⚠️ **The purchase form wants the SHORT id** (`skillid`), not the 4-digit `whichskill`.

| Lvl | Skill | `whichskill` | `skillid` | Price |
|---|---|---|---|---|
| 1 | **Headbutt** | 2003 | 3 | **125** |
| 1 | **Spirit Vacation** | 2027 | 27 | **125** |
| 2 | **Skin of the Leatherback** | 2004 | 4 | **250** |
| 2 | **Blessing of the War Snapper** | 2030 | 30 | **250** |

✅ **Prices match the Seal Clubber exactly (125 / 250 at Levels 1 / 2)** ⇒ **the ladder is per guild-level, not
per class**, so `seal-clubber-class.md`'s measured ladder (…1,750 · 2,500 … 10,000 · 12,500 · 15,000) is the
expected shape here too. Buy every skill as it unlocks; the early ones are trivially cheap.

## 🛒 The Smacketeria stocks CLASS-SPECIFIC rows

`shop.php?whichshop=guildstore3` (the Muscle store — `guildstore1` Moxie · `guildstore2` Mysticality).
⚠️ **The rack is not identical for both Muscle classes.** Rows seen for a **Turtle Tamer** that a Seal Clubber
did not have:
- **`whichrow=538` turtle pheromones** (potion)
- **`whichrow=543` turtling rod** (off-hand)

**`whichrow=536` Medicinal Herb's medicinal herbs (100 meat)** is the shared staple and **the early HP battery**:
⚠️ it is a **SPLEEN item** — use `inv_spleen.php?which=3&whichitem=1274`, *not* `inv_use.php` (which calls it
"not implemented"), and it is capped by the **15/day spleen meter**.
⭐ **NPC guild stores deliver straight to inventory and bypass the Ronin pull limit entirely** — in Ronin they
are the real supply line (`ronin-softcore-rules.md`).

## ⚔️ Early combat standard

✅ **Plain `fight.php?action=attack` is enough through the Outskirts (114)**: measured **50 wins / 1 loss** across
Levels 1→3 with **zero healing items consumed**, wearing the starting kit plus an astral shield.
A Muscle class is markedly sturdier here than a caster, who loses fights to initiative at this level.

⚠️ **A permed `Lunging Thrust-Smack` (8 MP) is unusable for the first several levels** — max MP is **2 at Level 1**.
Plan on plain attacks until the MP pool can afford one cast, then re-ask the question: *once you own a damage
multiplier, MP stops being a dead resource* (`seal-clubber-class.md` § "MP becomes load-bearing").
⚠️ Likewise a permed **Cannelloni Cocoon (20 MP)** is dead weight early; heal from **spleen herbs** instead.

## 🛡️ Shields are this class's slot — and they fight a dual-wield perm

Turtle Tamers are the shield class, so an **off-hand shield** is thematically and mechanically natural here.
🚨 **But a shield and `Double-Fisted Skull Smashing` compete for the same slot**, and a worn shield makes that
perm do nothing. ⭐ **The resolution is chronological, not either/or:** wear the shield while you have no second
good one-handed weapon and while healing is the binding constraint (an **astral shield** gives Muscle +25%,
**Regenerate 5–10 HP per adventure** and DR 15), then **swap to two weapons once you own two** — and re-read
`charsheet.php`'s Equipment block to confirm the swap actually took.

## 🗡️ The class Nemesis quest

Structure is class-agnostic (`nemesis-quest.md`); only the names change.
- **Tomb riddle answer: "Friendship."** · class weapon **Mace of the Tortoise** · the starter weapon you must be
  carrying for the swap is the **turtle totem**.
- **Lair-entry task:** with the *fouet de tortue-dressage* equipped, use **Apprivoisez la tortue** on **six guard
  turtles with hats** in the Outer Compound — **5 casts each** (4 with *Eau de Tortue*) — then return to
  *"A Guy in the Bushes"*.
