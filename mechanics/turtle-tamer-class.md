# Turtle Tamer (Muscle) — class specifics

> Run-agnostic. Current-run skill/meat/quest state lives in `CURRENT_ASCENSION.md`.

## 🐢 The guild — The Brotherhood of the Smackdown

`guild.php` → **Gunther, Lord of the Smackdown**, locked until you pass the membership challenge.

🎯 **The challenge belongs to the GUILD (the Muscle stat group), not to the class** — both Muscle classes are
given the identical test, so a challenge recorded under one class's name applies here unchanged.

### ✅ The membership challenge — the sausage-measuring competition (~6 turns)
> *"Our usual test of manhood is a sausage-measuring competition. The Knob Goblins of the Nearby Plains are the
> Kingdom's premier sausage-makers… find the biggest sausage you can."*

1. Adventure **The Outskirts of Cobb's Knob = `adventure.php?snarfblat=114`** until **choice 543**, whose only
   option is *"Grab the sausage, so to speak. I mean… literally."*
2. **Visit `guild.php?place=challenge`** — there is no form to submit; arriving hands it over.
   ✅ An **11-inch** sausage was accepted enthusiastically; the size is flavour, not a gate.

| Link | Who |
|---|---|
| `guild.php?place=trainer` | **Torg the Trainer** — buy skills |
| `guild.php?place=ocg` | **Terri, the Turtle Tamer** — your guildmaster and Nemesis-quest giver |
| `guild.php?place=scg` | the opposite-class guildmaster — hands out **The Wizard of Ego** (`optional-side-quests.md`) |
| `guild.php?place=paco` | Olaf the Janitor — the Meatcar, and the White Citadel errand |

## 🎒 Starting kit and starting skills

**Gear: helmet turtle** (hat) · **turtle totem** (weapon) · **old sweatpants** (pants).
🚨 **All of it arrives UNEQUIPPED** — a newly-reincarnated character is wearing nothing at all. Equip the kit as
the first act of day one; it is a silent stat loss otherwise.

| Skill | id | Type | Cost | Effect |
|---|---|---|---|---|
| **Patience of the Tortoise** | 2000 | Noncombat | **1 MP** | ✅ **Temporary maximum HP** — measured max HP **14 → 18**, lasting **5 adventures**. |
| **Toss** | 2023 | Combat | **1 MP** | Throws your familiar (or something else) at the enemy. |

⭐ **Both are castable on the 2-MP pool you start with**, which makes them genuinely usable from turn one.
⚠️ **Patience lasts only 5 adventures** ⇒ cast it immediately before a hard fight, never at day-open.

## 🧠 The skill rack (Torg)

🚨 **The trainer lists ONLY skills up to your current level** — at Level 1 exactly two rows render, and nothing
on the page hints that more exist. ⇒ **re-visit the trainer at every single level-up.**
✅ **Read what is purchasable from the forms rather than from memory:**
`[...tr.matchAll(/name=skillid value=(\d+)/g)]` — zero matches means the class is fully trained.
⚠️ **The purchase form wants the SHORT `skillid`**, not the 4-digit `whichskill` from the description link.
POST `guild.php` with `action=buyskill&skillid=<short id>&pwd=`.

| Lvl | Skill | `whichskill` | `skillid` | Price |
|---|---|---|---|---|
| 1 | **Headbutt** | 2003 | 3 | **125** |
| 1 | **Spirit Vacation** | 2027 | 27 | **125** |
| 2 | **Skin of the Leatherback** | 2004 | 4 | **250** |
| 2 | **Blessing of the War Snapper** | 2030 | 30 | **250** |

💰 **Price is set by the skill's LEVEL, not by the skill** — ✅ measured: both Level 1 skills cost **125**, both
Level 2 cost **250**.
⚑ **Above Level 2 the figures are EXPECTED, not yet measured for this class** — this guild's ladder has run
**500 · 1,750 · 2,500 · 3,250 · 4,000 · 5,000 · 6,250 · 7,500**, then **10,000 · 12,500 · 15,000** at the top
tiers, so **budget ~50k for the last few skills** — but **read each cost from the meat delta** and correct this
table as you go. A purchase you cannot afford is refused outright with *"You can't afford to train that skill."*
— no meat moves, so trying is free.
⭐ **Fund the top of the rack with a storage audit rather than farming** — pulling surplus stacks and autoselling
has raised tens of thousands of meat for **zero adventures**.

## 🛒 The Smacketeria — `shop.php?whichshop=guildstore3`

Guild stores are keyed to the **stat group**: `guildstore1` Moxie · `guildstore2` Mysticality ·
**`guildstore3` Muscle**. The wrong shop answers *"Uh Oh! Only … may shop here."*

| Row | Item | Note |
|---|---|---|
| **536** | **Medicinal Herb's medicinal herbs** (item 1274, 100 meat) | ⭐ **the early HP battery** |
| **538** | **turtle pheromones** | potion |
| **543** | **turtling rod** | off-hand |
| 534 / 535 / 537 / 539 | enchanted brass knuckles · blood of the Wereseal · cheap wind-up clock · seal-blubber candle | |
| 540–542 | figurines | |

⚠️ **The rack is not identical for every class that shares the shop** — some rows are class-specific, so **do not
trust a row number copied from another class's notes; scrape the rows and match on the item NAME.**
🫀 **The herbs are a SPLEEN item:** use **`inv_spleen.php?which=3&whichitem=1274`** — `inv_use.php` answers
*"not implemented yet"*, which reads like a broken item rather than the wrong verb. They are capped by the
**15/day spleen meter**, so they are a daily ration, not a renewable heal.
⭐ **NPC guild stores deliver straight to inventory and bypass the Ronin pull limit entirely**, which makes them
the real supply line while in Ronin (`ronin-softcore-rules.md`).

## ⚔️ Early combat standard

✅ **Plain `fight.php?action=attack` carries the Outskirts (114) on its own:** measured **50 wins / 1 loss across
Levels 1 → 3**, with **zero healing items consumed**, wearing the starting kit plus an off-hand shield
(Muscle 5 → 14, max HP 12 → 26 over ~50 turns).

⚠️ **Max MP is 2 at Level 1 and grows slowly**, so any 8-MP-or-more attack — including a permed one — is
**unusable for the first several levels**, and a 20-MP heal is dead weight. Plan early recovery around **spleen
herbs**, and **re-ask "can I afford my best attack yet?" at every level-up**: the moment the pool covers one
cast, a weapon-damage multiplier stops being a luxury and becomes the trash-clearing default, and the day's real
constraint becomes how many restoratives you can carry.

## 🛡️ Shields are this class's slot — and they compete with dual-wielding

An **off-hand shield** suits this class mechanically and thematically.
🚨 **A shield and a dual-wield ability occupy the same slot**, so a worn shield silently makes dual-wielding do
nothing. ⭐ **Resolve it chronologically, not either/or:** keep the shield while you have no second good
one-handed weapon and while healing is the binding constraint, then **swap to two weapons once you own two** —
and **re-read `charsheet.php`'s Equipment block afterwards to confirm the swap took.**

## 🗡️ The class Nemesis quest

Structure is class-agnostic — full walkthrough in `nemesis-quest.md`. The class-specific values:

| | |
|---|---|
| **Tomb riddle answer** (match the TEXT, the buttons are shuffled) | **"Friendship."** |
| **Class weapon** | **Mace of the Tortoise** |
| **Starter weapon needed, un-equipped, for the swap** | **turtle totem** |
| **Lair-entry task** | with the *fouet de tortue-dressage* equipped, use **Apprivoisez la tortue** on **six guard turtles with hats** in the Outer Compound — **5 casts each** (4 with *Eau de Tortue*) — then return to *"A Guy in the Bushes"* |
