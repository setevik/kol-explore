# Level 10: the Giant Trash Quest — beanstalk → Airship → the Castle in the Clouds

> Run-agnostic. Council quest **"The Rain on the Plains is Mainly Garbage."** Verified end-to-end in-game on a
> Muscle class; the wiki's four-option menus are reproduced here with the labels as they actually render.
> Completing it opens the **Level 11 MacGuffin quest** (`macguffin-quest.md`).

## The shape of it

1. **Plant an enchanted bean** in the Nearby Plains (the giant pile of coffee grounds) — after the Council has
   given you the quest.
2. **The Penultimate Fantasy Airship (snarf 81)** → four Immateria + the **S.O.C.K.** (all from noncombats).
3. **Castle Basement (322)** → get upstairs.
4. **Castle Ground Floor (323)** → ~11 turns to *Top of the Castle, Ma*.
5. **Castle Top Floor (324)** → reach *Keep On Turnin' the Wheel in the Sky*.
6. **Visit `council.php`** to collect. Reward: a class piece of the **Glad Bag Glad Rags** (Seal Clubber /
   Turtle Tamer get the **giant discarded bottlecap**).

## ⭐ CHECK STORAGE FIRST — three Airship drops skip most of this quest

Each gate has an item shortcut, and all three items **drop from the Airship's `Random Lack of an Encounter`**,
which means a previous ascension's estate is very likely to be full of them. ✅ Verified: an estate held **38
amulets, 41 umbrellas and 31 wigs** while the character was preparing to grind the fallbacks.

| Gate | Fallback | Item shortcut |
|---|---|---|
| Reach the beanstalk | grind the Beanbat Chamber for an **enchanted bean** | storage very often has beans — **planting costs 0 adventures** |
| Basement → Ground Floor | **35 adventures** | **amulet of extreme plot significance** (accessory) at the Fitness Giant's mirror · **titanium assault umbrella** (off-hand) for the heating duct · or a **massive dumbbell** + the Neckbeard's dumbwaiter |
| Top Floor → the Wheel | **35 adventures** | **Mohawk wig** (hat) for the Punk Giant · **model airship** for the Steampunk Giant · or the Raver's crate → Goth Giant's music |

⚠️ **The amulet is the cheapest of the three to wear** — it costs one *accessory* slot, where the umbrella
displaces your off-hand and the wig your hat. Measured cost of the wig on a Muscle class: **−15 max HP,
−10 Muscle** for as long as it is on. Quest gear is a loan; swap back the moment the step is done.

## 🗺️ The castle rooms — verified choice map

Rooms are noncombats that appear while adventuring the floor, and several of them **exit into each other**, so
one room's menu can carry you to the room you actually want.

### Basement (snarf 322)

| Choice | Room | Options (verbatim) |
|---|---|---|
| **669** | *Hot and Cold Running Rats* | `Crawl Through the Heating Duct` (needs **titanium assault umbrella** → Ground Floor) · `Check out the Furry` · `Leave Through a Mousehole` |
| **671** | *Out in the Open Source* — Neckbeard Giant | `Check out the Dumbwaiter` (needs **massive dumbbell** → Ground Floor) · `Mess with the Computer Equipment` (substats) · `Check the Neckbeard` (**O'RLY manual + open sauce**) · `Crawl through the Heating Vent` (**→ the Fitness Giant's room, no item needed**) |
| **670** | *You Don't Mess Around with Gym* — Fitness Giant | `Grab a Dumbbell` (the dumbwaiter's counterweight) · `Work Out` · `Rifle the Gym Bag` · **`Check out the Mirror`** (with the **amulet** → Ground Floor) · `Leave through the Basement Window` |

⭐ **The cheap route with only an amulet: 671 → `Crawl through the Heating Vent` → 670 → `Check out the Mirror`.**
Two noncombats, no off-hand or hat sacrificed. ✅ Verified: the mirror "twists and shimmers" and the Ground
Floor opens.

### Ground Floor (snarf 323)

Grind ~11 turns for **Top of the Castle, Ma** (it arrives as a plain noncombat, not a choice). While here, take
**`Investigate the noisy drawer`** in *Home on the Free Range* for the **electric boning knife** — the Wall of
Bones in the Naughty Sorceress' tower needs it later.

### Top Floor (snarf 324)

| Choice | Room | Options (verbatim) |
|---|---|---|
| **677** | *Copper Feel* — Steampunk Giant | `Harrumph in Disdain` (with a **model airship** → **the Wheel**) · `Investigate the Whirligigs and Gimcrackery` · `Grab a Gear` (brass gear) · `Go through the Crack` (**→ the Goth Giant's room**) |
| **675** | *Melon Collie and the Infinite Lameness* — Goth Giant | `End His Suffering` (**starts a fight**) · `Change up the Music` (needs the **drum 'n' bass record** from the Raver's crate → **the Wheel**) · `Snag some Candles` · `Gimme Steam` (**→ the Steampunk Giant's room**) |

⚠️ **`Change up the Music` is simply absent from the 675 menu when you don't hold the record** — the option
does not render greyed out, so a script matching on it will fall through to whatever rule comes next. **Match
the gated labels explicitly and treat their absence as "not available", never as "the room was wrong".**
⚠️ **Never let a farm loop pick `End His Suffering`** — it is a fight, not a room exit.

🚨 **The room noncombats are RARER than the zone's stated noncombat cadence suggests.** ✅ Measured: **~60
top-floor adventures produced only two room noncombats** (677 and 675), and neither the Punk nor the Raver room
appeared at all — so a plan that depends on one specific room showing up is a plan with no schedule.
✅ **Treat the 35-turn fallback as the real budget** and any room shortcut as a bonus. In the run that measured
this, the quest completed **through the fallback** while the character was still hunting for the Punk Giant;
the first sign of it was `council.php` saying the garbage had stopped.

## 💰 The Ground Floor and Top Floor are the meat farm as well as the quest

✅ **Measured at Level 10–11, base Muscle ~102–115, one-handed weapon:**

| Floor | Fights | Losses | Meat | Meat/fight |
|---|---|---|---|---|
| Basement (322) | 17 | **3** ⚠️ | ~1,900 | ~112 |
| Ground (323) | 18 | 1 | 2,074 | ~115 |
| Top (324) | 60+ | 3 (all at MP 0) | ~7,000 | ~111 |

⚠️ **The Basement is the most dangerous of the three** and has no better meat rate — once you are upstairs,
there is no reason to go back down. ⇒ **The quest step and "I need several thousand meat" are the same errand**;
budget the castle for both.

## 🚨 Damage output decides this zone, and for a Muscle class that means MP

Castle giants are ~150 HP and hit for ~40–60 a round. ✅ **Measured on the same character in the same zone:**

| Opening move | Rounds/fight | Damage taken | Losses |
|---|---|---|---|
| plain `action=attack` | **3** | ~120 | **3 in ~10 fights** |
| **Lunging Thrust-Smack** (triple weapon damage) round 1 | **1** | ~40, often 0 | **0 in ~60 fights** |

⇒ **Budget one MP restorative per fight and never let the pool hit zero.** The moment MP ran out, the same loop
in the same zone started losing — see `seal-clubber-class.md`. This is the general form: **a class that has a
damage multiplier available has an MP floor, whatever its guild file used to say about MP being a dead
resource.**
