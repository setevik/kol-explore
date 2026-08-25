# Level 9: Orc Chasm bridge → The Highlands (three signal fires)

> Run-agnostic. Council quest **"There Can Be Only One Topping"**. Verified in-game:
> bridge built and **Oil Peak completed in one day**. Wiki-sourced details marked ⚑ where not yet verified.

## Part 1 — Bridging The Orc Chasm

**Entry:** `place.php?whichplace=orc_chasm`. Two links matter:
- `place.php?whichplace=orc_chasm&action=bridge0` — **the build/inspect button.** Safe to click any time; it
  reports your current tally and auto-builds the moment you have enough. Costs no adventure.
- `adventure.php?snarfblat=295` — **The Smut Orc Logging Camp** (recommended mainstat 75, 100% combat).

**You need 30 lumber + 30 fasteners.** ⚠️ **Both categories have THREE members each and the names are
deliberately confusing — count by category, not by name:**

| Lumber | Fasteners |
|---|---|
| morningwood plank | long hard screw |
| raging hardwood plank | **messy butt joint** |
| weirdwood plank | thick caulk |

🐛 **"messy butt joint" sounds like lumber (a joint is woodwork) but it is a FASTENER.** Miscounting it makes
you think you're ~6 short of a category you've already filled. Verify with `action=bridge0`, which prints the
authoritative
`You have: N "appropriate" pieces of lumber / M "appropriate" fasteners`.

**Drop rates** (wiki): screwers + nailers drop a fastener 100% of the time; pipelayers + jackers drop lumber
100% of the time; each drops the *opposite* type 10% of the time. So a plain grind trends ~50/50 and needs
roughly 60 turns.

### ⭐ The keepsake box shortcut (this is the real lever)

A **smut orc pervert** appears on the **21st adventure in the zone and every 20 thereafter**. He drops a
**smut orc keepsake box**, and **each box contains 5 lumber + 5 fasteners** — worth 10 turns of grinding.

✅ **Measured: 40 fights → 21 lumber, 20 fasteners, +1 keepsake box.** Adding **3 boxes carried in from
earlier content**, 4 boxes × (5+5) took the tally to **41 lumber / 40 fasteners** and the bridge finished
immediately — i.e. the boxes were worth more than half the grind.

- 💡 **Check your inventory for keepsake boxes BEFORE grinding.** They accumulate passively from earlier
  content, and they are easy to overlook because they double as emergency combat items. Open them with
  `inv_use.php?which=3&whichitem=<boxid>&pwd=<hash>&ajax=1` (one per call; loop until the count hits 0).
- After the bridge is built, lumber and fasteners **stop dropping**, and leftovers are thrown away automatically
  (*"you throw away the rest of the smut orcs' terrible building materials"*). Don't stockpile past 30/30.

**Other accelerators** (⚑ not used by us): a **logging hatchet** equipped yields bonus lumber; a **loadstone**
yields bonus fasteners; adventuring **Lucky!** triggers *S&M 4-EVER* for 3 lumber + 3 fasteners; overkilling
non-pervert orcs with **cold** damage 15 points' worth opens the *Blech House* noncombat for more parts.

**Combat note:** smut orcs are ML 69, 69 HP, **no elemental alignment** — a plain Cannelloni grind handles them.
Measured: **40 fights, 0 losses** at base Mys ~236.

## Part 2 — The Highlands

Built bridge ⇒ `place.php?whichplace=highlands` opens. **Talk to the landlord first:**
`place.php?whichplace=highlands&action=highlands_dude` (The Highland Lord's Tower) — a stoner who wants to order
a pizza. This starts the real quest; the quest log then reads *"light three signal fires."*

Three peaks, any order. **A lit peak is visible on the map as an alt-text change**, e.g.
`alt="Oil Peak with Flame (1)"` — that's the cheapest completion check.

| Peak | snarfblat | Gate |
|---|---|---|
| A-boo Peak | 296 | reduce hauntedness 98% → 0 |
| Twin Peak | 297 | solve the lodge 4× (or 50-turn fallback) |
| Oil Peak | 298 | reduce pressure 310.66 µB/Hg → negligible |

### ⭐ Oil Peak — do this one first as a caster (verified, one day, 50 turns)

- Monsters: **oil slick** at +0–19 ML, **no elemental alignment, no damage resistance.** Ordinary DPS works.
- Each oil slick removes **6.34 µB/Hg**; 310.66 total ⇒ **49 slicks**. ✅ Measured: **50 fights, 0 losses**, peak lit.
- Every kill drops **bubblin' crude** — a full clear banks about **50**, which is the currency for the
  cross-peak synergy items below. Don't sell it.
- Higher +ML upgrades the monster (tycoon ≥20 ML = 3 slicks, baron ≥50 = 5, cartel ≥100 = 10), so ML gear
  massively shortens this. With **zero +ML** it is a clean, predictable 49–50 turns — which is exactly what makes
  it the right peak for a day where you want a guaranteed completion.

### ⭐ bubblin' crude — the recipe depends on HOW MANY you use at once

🐛 **`inv_use.php` cannot make these — it always uses your whole stack and reports
*"That much oil doesn't congeal into anything good."*** with **nothing consumed** (a silent no-op, not an error).
✅ **The working endpoint is `multiuse.php`:**
`multiuse.php?whichitem=5789&action=useitem&quantity=<N>&pwd=<hash>` — verified in-game.

| Use exactly | Get | Why you care |
|---|---|---|
| 3 | oily boid | → *woim* familiar (initiative) |
| 8 | oil cap | best meat-per-crude if you just want to autosell |
| **9** | **oil lamp** (off-hand, +5 hot / +5 sleaze) | ⭐ **this is what cracks A-boo Peak** |
| **10** | **oil slacks** (pants, +20% initiative) | half of Twin Peak's +40% init gate |
| 11 | oil pan | — |
| **12** | **jar of oil** | ⭐ Twin Peak's "Bring-your-own-J" step |

💰 **50 crude (one full Oil Peak clear) comfortably funds lamp + jar + slacks (31) with 19 to spare.**
Make all three the morning after Oil Peak — they unlock work on *both* remaining peaks.

### ⚠️ A-boo Peak — a hard wall for a Pastamancer; check before you spend turns

All five ghosts are **Damage Resistance 100%** (physically immune) **AND spooky-aligned** (immune to their own
element), **weak to hot and stench**. That closes *both* of our damage types at once:
- untuned pasta spells → physical → **blocked by the 100% resistance**;
- **Necrotelicomnicon** equipped → spooky → **blocked by the alignment**.

This is the exact inverse of the protector-spirit/Bonerdagon pair of lessons: those two could each be solved by
toggling the Necrotelicomnicon, and **this zone cannot.** You need a genuine **hot or stench** damage source
first. ⚑ Cheapest known route: **oil lamp** (off-hand, from bubblin' crude) grants +5 hot / +5 sleaze which
"counts for +15 in A-Boo due to elemental weakness" — i.e. **do Oil Peak first, then come back**. Ghosts have
only 40 HP, so modest per-round elemental damage is enough.

Mechanics: 98% hauntedness, **−2% per ghost killed ⇒ 49 ghosts**. Ghosts drop **A-Boo clues**; using a clue
makes the next adventure *The Horror…*, worth **−2% to −30%** depending on how long you survive (scales with
max HP, cold resistance and spooky resistance). Clues are the only way to beat 49 turns here.

#### ✅ SOLVED — the oil lamp opens the zone; **plain weapon attacks work**

The wall comes down the moment you carry **elemental damage that isn't spooky**. Verified loadout:
- **Equip the oil lamp** (9 crude). ⚠️ It goes in the **off-hand — the same slot as the Necrotelicomnicon** — so
  equipping it *automatically unequips the spooky tuner*, which is exactly what you want here. One swap fixes
  both halves of the immunity.
- **Splash a `vial of The Glistening`** (15 adv, 15–20 passive damage vs these ghosts). It **drops from Twin Peak's
  Big Wheelin' Twins**, so a Twin Peak day stocks A-boo for free.
- 🎯 **Then just `fight.php?action=attack`.** Do NOT cast pasta — the point is that the *weapon* swing carries the
  lamp's hot/sleaze, and hot is a double-weakness here. **Measured: 17 then 15 damage — 2 rounds per ghost, zero
  damage taken, 0 MP spent.** 20 ghosts, 0 losses.
- Ghosts have only 40 HP and **0 initiative**, so you always strike first. This is one of the safest zones in the
  game once the lamp is on — and it costs no MP at all, which makes it ideal for the tail of a day.

#### ⭐ *The Horror…* is worth ~4× a ghost — always spend clues

Using an **A-Boo clue** (`inv_use.php?which=3&whichitem=5964&pwd=<hash>`) makes your **next** A-boo adventure
*The Horror…* (choice **611**). It is not a fight — it's a repeating choice where each round you either press
the single "keep talking" option or **Flee the scene**. Each round drains a chunk of HP *and shrinks max HP*;
you end at 0 HP and **Beaten Up**.

- ✅ **Measured twice: 4 rounds deep each time, −15% hauntedness each.**
- **True cost is 2 adventures** (1 for the encounter + 1 for the `campground.php?action=rest` to clear Beaten Up)
  ⇒ **~7.5% per adventure, versus 2% for killing a ghost.** Always burn clues before grinding.
- Don't bother fleeing early to "save HP" — the reduction scales with how deep you get, and the Beaten Up is
  coming either way. Press on until it ends.
- 🐛 **Get the clue's item id right (5964).** Scraping the id by searching the inventory HTML for the item *name*
  returned `null` (quest items render differently), and the follow-up `adventure.php` call then walked into an
  ordinary ghost fight — **wasting the turn and leaving a fight open mid-script**. Use the literal id.

#### Measured burn-down (from a fresh 98%)

| Spend | Effect |
|---|---|
| 20 ghosts killed | −40% |
| 2 × *The Horror…* (4 adv incl. rests) | −30% |
| **Total ~26 adventures** | **98% → 14%** |

⇒ With a stock of clues, the whole peak is comfortably **one ~30-turn day**, not the 49 the raw arithmetic
suggests.

### Twin Peak — four gated noncombats, or a 50-turn fallback

`Lost in the Great Overlook Lodge` is the noncombat; it offers the steps as menu options. The first three are
gated on stats/buffs and can be done in any order; the fourth only appears once the other three are done:
1. **Room 237** — needs **≥4 levels of stench resistance**.
2. **Search the pantry** — needs **≥+50% item drop** (food/potion bonuses count; **familiars, pasta thralls and
   booze bonuses do NOT**). ⚠️ Buffy's Fat Leon's is only +20%, so this needs real stacking.
3. **Follow the faint sound of music** — needs a **jar of oil**, made from **12 bubblin' crude** (free if you did
   Oil Peak first).
4. **"Wait — who's that?"** — needs **≥+40% combat initiative**.

🎯 **Fallback that needs no gear at all: after 50 adventures spent in Twin Peak without solving it, the
`Cabin Fever` noncombat appears and lets you burn the lodge down and light the beacon.** That makes Twin Peak a
guaranteed ~50-turn completion for an under-geared character — but see the warning below about *how* those 50
turns get spent.

#### ✅ Verified in-game — choice numbers and the exact flow

| Choice | Encounter | Options |
|---|---|---|
| **604** | *Welcome to the Great Overlook Lodge* | one-time intro, **costs no adventure**; click through (2 screens) |
| **606** | *Lost in the Great Overlook Lodge* — the hub | `Investigate Room 237` / `Search the pantry` / `Follow the faint sound of music` / `Leave the hotel` |
| **607** | Room 237 | `Carefully inspect the body` (the gated attempt) / `Return to the lobby` |
| **608** | *Go Check It Out!* (pantry) | `Search the shelves` (the gated attempt) / `Return to the lobby` |
| **609** | *There's Always Music In the Air* | `Examine the painting` (the gated attempt) / `Return to the lobby` |
| **616** | *He Is the Arm, and He Sounds Like This* | `Mingle` — **this is the SUCCESS continuation of the music step** |
| **618** | **Cabin Fever** | `A path is formed…` / **`Burn this mother-goddamning hotel to the ground.`** |

🐛 **Each hub option leads to a SUB-choice, and the real attempt is the sub-choice's first option.** A script
that treats `Return to the lobby` as "leave" will pick it at 607/608/609 and **silently never attempt the gate**.
Match the *specific* labels (`inspect the body`, `search the shelves`, `examine the painting`) before any generic
leave/return rule.

✅ **Confirming a step succeeded: the option disappears from the 606 hub menu.** After the jar-of-oil step the
hub read `Investigate Room 237 | Search the pantry | Leave the hotel` — no music line. That's the cheapest check.

⚠️ **The music step's success text reads like a failure.** Choice 616 ends *"You attempt to mingle, but the
guests take no notice of you"* — that is the **scripted continuation**, not a rejection. The jar of oil was
consumed and the step completed. Verify via the hub menu, not the prose.

✅ **Cabin Fever timing:** it fired on roughly the **51st** in-zone adventure for us (the free 604 intro does not
count). Budget ~50 turns and expect no signal at all until it appears.

Monsters here are ML 81–95 with 90–105 HP (recommended mainstat 90) and **no elemental alignment** — harder than
the logging camp but ordinary.

## 🚨 Turn-accounting trap seen in this zone

A 60-turn burst here reported **60 wins / 0 losses** while recording **no monster names, no item drops, and
flat meat**. That was not the zone — the character was **falling-down drunk** and every turn was a *Drunken
Stupor*. See `HANDOFF.md` HARD RULE 1. General form of the check:

> **A win counter is only trustworthy when corroborated by drops, meat, or substat gain.** Zero of all three
> across dozens of "wins" means the turns never reached the zone.

## Cross-quest value of the oil kit

The three oil items outlive this quest — budget crude for them even after the peaks are lit:
- **oil lamp** — the only cheap **hot/sleaze** damage source a caster is likely to own. Beyond A-boo, it is the
  right thing to equip when registering for the **Hottest Adventurer** contest in the Naughty Sorceress' tower
  (see `naughty-sorceress-tower.md`).
- **oil slacks** — **+20% initiative**, i.e. half of Twin Peak's +40% gate *and* the gear to wear when
  registering for the tower's **Fastest Adventurer** contest.
- **jar of oil** — Twin Peak only.

## Rewards

Lighting all three fires ⇒ return to **The Highland Lord's Tower**. Reward is a class-appropriate **Misty
Cloak / Misty Robe / Misty Cape**, plus access to **The Valley of Rof L'm Fao** (the level 10+ path onward).
Catching your double in Twin Peak (option 4, rather than the burn-it-down fallback) additionally yields a
**gold wedding ring** — a reason to prefer the real solve if you can hit the four gates.
