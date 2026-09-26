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
⭐ **Level 4 brings `Ghostly Shell` (6 MP), a damage-reduction buff, at exactly the point the MP pool can pay for
it** — by then max MP is around 9–10. That is the class's first real pre-boss preparation.
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
| 3 | **Amphibian Sympathy** | 2014 | 14 | **500** |
| 3 | **Stiff Upper Lip** | 2029 | 29 | **500** |
| 4 | **Ghostly Shell** | 2007 | 7 | **750** |
| 4 | **Pizza Lover** | 2036 | 36 | **750** |
| 5 | **Armorcraftiness** | 2006 | 6 | **1,250** — Passive: crafts advanced helmets and pants |
| 5 | **Shell Up** | 2028 | 28 | **1,250** — Combat, 6 MP, once per fight: the opponent's next attack deals no damage |
| 6 | **Tenacity of the Snapper** | 2010 | 10 | **1,750** — Buff, 8 MP: more damage per strike |
| 6 | **Spirit Snap** | 2032 | 32 | **1,750** — Combat, 10 MP, once per fight: effect depends on your Turtle-Spirit relationship |
| 7 | **Kneebutt** | 2015 | 15 | **2,500** — Combat, 4 MP |
| 7 | **Blessing of She-Who-Was** | 2033 | 33 | **2,500** — Noncombat, 30 MP |
| 8 | **Empathy of the Newt** | 2009 | 9 | **3,250** — Buff, 15 MP: familiar empathy |
| 8 | **Butts of Steel** | 2034 | 34 | **3,250** — Passive: better Butt skills (Headbutt, Kneebutt, Shieldbutt) |

💰 **Price is set by the skill's LEVEL, not by the skill** — ✅ measured per level: **125 · 250 · 500 · 750 ·
1,250 · 1,750 · 2,500 · 3,250** for Levels 1–8, with *both* skills at a level costing the same.
**Levels 9+ are unmeasured** (prices so far rise by 500–750 per level) — **read each cost from the meat delta**
and extend the table. The trainer's page lists the whole ladder by name through Level 15 (*Kneebutt · Blessing of She-Who-Was* at 7 … *Tao of the Terrapin ·
Turtle Power* at 15) even though only your level's rows are buyable. A purchase you cannot afford is refused
outright with *"You can't afford to train that skill."* — no meat moves, so trying is free.
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

⭐ **Replace the turtle totem early — it is a 1–2 damage weapon.** A **scorpion whip** (one-handed, **no stat
requirement**, 2–4 damage **+13 Weapon Damage**, 50% poison) carries Levels 5–8 on plain attacks, up to and
including the Knob Goblin Harem, with little healing. Check storage for a no-requirement bonus-damage weapon
before the first fight of a run.
⚠️ **MP barely regenerates between fights at these levels** — casting Thrust-Smack on trash empties the pool for
the day. Keep MP for bosses (or use an irradiated turtle, below).

## 🐢 Class noncombats — taming turtles

**Turtle Taming** is a class-wide counter: every so often a Turtle Tamer meets a single-button turtle noncombat in
whatever zone they are in. **Finding a turtle costs no adventure**, so a
"did the adventure count move?" guard will see these as free encounters. **The turtle depends on the zone's terrain
(indoor / outdoor / underground / underwater) and its stat band**, not on the zone itself; where a band has two
turtles, either can appear. A few zones have their own unique turtle instead (e.g. the Harem's pillow shell).

| Choice (label) | Seen in | Turtle | Use |
|---|---|---|---|
| 327 `Tame It` | Beanbat Chamber (low underground) | turtle wax | use → **turtle wax shield (+10 max HP)** |
| 960 `Tame the tortoise` | Knob Goblin Harem (unique) | pillow shell | **back item, DR 3** (Turtle-Tamer-only bonus) |
| 957 `Go for the glow` | Dark Neck, Dark Heart (mid outdoor) | irradiated turtle | ⭐ **Turtle Power: regenerate 4–5 MP per adventure, 15 adv** |
| 943 `Tame the two turtles!` | Dark Elbow, Goatlet (mid outdoor) | giraffe-necked turtle | +30% Combat Initiative, 15 adv |
| 944 `Investigate` | all four Cyrpt rooms (mid underground) | mocking turtle | +10 Monster Level, 15 adv |

⭐ **The irradiated turtle is this class's answer to the empty-MP-pool problem** — use one before a boss prep or a
day of Thrust-Smacking. All of these choices are single-button, safe to auto-answer.

## ⏱️ Buff durations and recovery at low level

**At Level 6, self-cast Tenacity of the Snapper, Ghostly Shell and Patience of the Tortoise last only 5
adventures.** ⇒ They are pre-boss buffs, cast as the last step before the fight — not day buffs.
⭐ **Spirit Vacation costs 1 adventure and fully restores HP *and* MP** (skill text; ⚑ unmeasured) — the fallback
for an empty MP pool before a boss.

## 👑 Boss recipe that worked — Shell Up, then Thrust-Smack

**Round 1 `Shell Up`** cancels the opening hit a fast boss gets from initiative; **then `Lunging Thrust-Smack`
every round.** ✅ Two rounds for the Knob Goblin King (HP 50, Def 47) at Level 6, buffed Muscle ~53 (strongness
elixirs), with the scorpion whip (66 per Thrust-Smack). **Enter bosses with ≥ 14 MP** (6 + 8; more for bosses
with 120 HP).

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
