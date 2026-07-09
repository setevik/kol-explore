# The Naughty Sorceress Tower — the Final Quest (run EVERY ascension)

> The endgame gauntlet: defeat the Naughty Sorceress + free King Ralph XI → the astral gash opens → you can ascend.
> **This quest repeats every ascension, so this walkthrough is highly reusable.** Sourced from the official wiki
> (wiki.kingdomofloathing.com) + verified live where noted (Day 80). See also [[ascension]].

## Unlock
Finish **all Council of Loathing quests** (L2–L12: larva, tavern, Boss Bat, Cobb's Knob, Friars, Cyrpt/Bonerdagon,
Trapper, Highlands, Giant, Manor/MacGuffin, War). Then the **Council gives the final quest** (`council.php`) and the
**Tower opens: `place.php?whichplace=nstower`**.

## Step 1 — Contest Registration Desk  ✅verified-live Day 83
`place.php?whichplace=nstower&action=ns_01_contestbooth` → **choice 1003**. You draw **three** contests:
- **Everyone: "Fastest Adventurer"** (opt 1) — tests **+combat initiative** (2nd place = +400% init).
- **one random stat test** — Smoothest (opt 2, Moxie) / Strongest (Muscle) / etc.; the stat that ISN'T your class's main
  (2nd place = a buffed stat of **600**).
- **one random elemental test** — Hottest/Coldest/Spookiest (opt 3)/Stinkiest/Sleaziest (2nd place = **+100** bonus
  damage sum for that element).
- **NOT one-shot pass/fail.** Your bonus sets a **rank #2–#11**, which just = **how many opponents you fight** (1 at rank 2,
  up to 10 at rank 11). So you can win each even unbuffed — it just costs more turns. Buffing (Springy Fusilli 3015 for init,
  etc.) only *lowers the opponent count*. Register all three (opts 1/2/3 each return to the desk).
- **Then fight the crowds:** the tower shows **ns_01_crowd1 / crowd2 / crowd3** — `place.php?whichplace=nstower&action=ns_01_crowdN`
  starts each opponent fight; keep clicking a crowd until it stops giving a fight (that contest won). ⚠️ opponents (esp. the
  rank-1 champions like the **Tasmanian Dervish**) are **tanky — keep MP topped (Mortar→Cannelloni)**; MP-starving loses.
- When all 3 crowds are gone, the desk offers **choice 1003 opt 4 "Claim your prize"** → **World's Best Adventurer sash** →
  advances to `ns_02_coronation`.

## Step 2 — The SIX tower-door keys  (each consumed at the door)
| Key | Source | Notes |
|---|---|---|
| **Boris's / Jarlsberg's / Sneaky Pete's** | **Daily Dungeon** → fat loot token → **DA Vending Machine** | 1 token/day ⇒ 3 days |
| **skeleton key** | **skeleton bone (163) + loose teeth (187)**, meat-pasted | ✅verified: `craft.php?mode=combine&action=craft&a=163&b=187` |
| **Richard's star key** | **Hole in the Sky** (beanstalk) | ✅verified-live Day 81 — see below |
| **digital key** | **8-Bit Realm** (Treasure House) | ✅**10,000 points**, NOT pixels — see below |

**Hero-key item IDs / DA Vending Machine rows** (`shop.php?whichshop=damachine`, 1 fat loot token each):
Boris's key = **item 282, row 93** · Jarlsberg's = **item 283, row 94** · Sneaky Pete's = **item 284, row 95**.
(Fat loot token = item 1470. Buy: `shop.php?whichshop=damachine&action=buyitem&whichrow=94&quantity=1&pwd=`.)

### Richard's star key  ✅verified-live Day 81
- **Farm the Hole in the Sky = `adventure.php?snarfblat=83`** (atop the beanstalk via `place.php?whichplace=beanstalk`;
  81 = Airship, 83 = Hole in the Sky). Its constellation-monsters drop **star (654)** and **line (655)** at a good rate
  (~13 stars + 7 lines in ~15 fights). Monsters die in 2 rounds to Mortar→Cannelloni.
- **Craft the key at the star chart shop: `shop.php?whichshop=starchart`, Richard's star key = row 141**
  (`&action=buyitem&whichrow=141&quantity=1&pwd=`). Consumes exactly **8 stars + 7 lines** (the star chart 656 is
  the reusable "tool", not consumed). ⚠️ `inv_use` on the star chart says "not implemented" — you MUST use the shop URL.

### digital key — 8-Bit Realm (⚠️ MECHANIC CHANGED — no longer 30 white pixels)  ✅verified-live Day 81
- Since the **Jan 2023 revamp**, the old "30 white pixels → digital key at the Crackpot Mystic's Shed" recipe is GONE.
  Now you **earn 10,000 "Score" points in the 8-Bit Realm** and claim the **digital key from the Treasure House**.
- **Access:** get the **continuum transfunctioner (item 458)** from the **Crackpot Mystic**
  (`place.php?whichplace=forestvillage&action=fv_mystic` → **choice 664 option 1** "Sure, old man" → he gives it;
  this also opens his pixel-crafting Shed). **EQUIP the transfunctioner** (it's an accessory) → **The Inexplicable Door**
  appears in the Distant Woods → **`place.php?whichplace=8bit`**.
- **Zones by color (snarfblats):** each of the 4 zones is a color, and the **color of the "Score:" text in the charpane**
  marks which zone currently pays **DOUBLE** (+100/win vs +50). The color cycles **every 5 kills**: **black→Vanya's Castle
  565, blue→Megalo-City 566, green→Hero's Field 564, red→Fungus Plains 563.** (Bonus points from init/DA/item/meat need
  300–595% to matter — negligible for us, so it's just +100 in the matching zone, +50 off-color.)
- **⭐ ROTATION TRICK (✅verified Day 82 — ~110 pts/fight, ~1.7× a fixed zone):** before each fight, read the Score color
  and adventure the matching zone. Detecting the color: the color word (green/red/blue/black) sits right after "Score:" in
  the **fetched** `charpane.php` HTML (regex `/Score:[\s\S]{0,160}?(green|red|blue|black)/i`, default black); OR read the
  **computed** color off the live charpane frame (`getComputedStyle(span.nes).color` — green = rgb(0,128,0)). Staying in one
  zone averages only ~63/fight; rotating ≈ **~110/fight** ⇒ 10k from a standing start ≈ **~90 fights (doable in ~1 big day)**.
- **Combat is cheap:** these monsters are weak — **weapon-attack one-shots most** (round 1–2 attack, escalate to Cannelloni
  only if it survives) ⇒ near-zero MP over 50+ fights. Read the **Score number** from the charpane's second `span.nes`
  (`[...doc.querySelectorAll('span.nes')]` → the `/^[\d,]+$/` one) — a loose regex grabs "Level 14" etc. by mistake.
  **Points PERSIST across days.**
- **Treasure House** = `place.php?whichplace=8bit&action=8treasure` = **choice 1493**: three chests
  **opt 1 [10,000] · opt 2 [20,000] · opt 3 [30,000] Points · opt 4 Leave.** At ≥10k, **option 1 = the digital key**
  (✅claimed Day 82). (Higher chests = better prizes but irrelevant to the tower.)

### Daily Dungeon (hero keys)  ✅verified-live
- **Zone = `adventure.php?snarfblat=325`** (inside the Dungeoneers' Assoc., Big Mountains). NOT 322 (that's the Giant castle).
- **1 full run/day** = 15 rooms → **1 fat loot token** from the final chest.
- **Buy these tools once (reusable, ~100 meat each) to skip obstacles for FREE (no adv, no dmg):**
  eleven-foot pole (**6302**), ring of Detect Boring Doors (**6303**, equip it), pick-o-matic lockpicks (**280**).
- **Room-choice handling:** trap = **choice 693 → option 2** (pole); locked door = **choice 692 → option 3** (lockpicks);
  chests (rooms 5/10) = **choices 690/691 → option 1** (open); **final room-15 chest = choice 689 → option 1** ("Open it!").
  Monster rooms = fight. With tools, a full run ≈ 6–8 adv (only monster/chest rooms cost turns).
- **DA Vending Machine = `shop.php?whichshop=damachine`.** Hero keys: **Boris's = row 93, Jarlsberg's = row 94,
  Sneaky Pete's = row 95**, each **1 fat loot token**. (Also sells hero-outfit pieces rows 96–98.)
- ⚠️ The 3 hero keys are a "zap group" (zapping one → a different one you lack) but you need all 3 at once, so
  **acquire all 3 separately = 3 daily runs.** Do the Daily Dungeon EARLY each day so it's never wasted.

## Step 3 — Wand of Nagamar  (needed for the tower's Wall of Skin)
Recipe (multi-step meat paste): **ruby W + metallic A + lowercase n + heavy D** (spells "WAND"). Letter sources vary
(metallic A ← MechaMech in the Airship; lowercase n ← The Valley of Rof L'm Fao, which is gated behind Fernswarthy's
Basement/Black Angus and usually NOT accessible). *(Letters collected for the active run are tracked in `CURRENT_ASCENSION.md`.)*
- **Easiest route = the whole assembled wand from the "Bear Verb Orgy"** (anagram of *Grave Robbery*) — a noncombat in
  **The VERY Unquiet Garves = `adventure.php?snarfblat=58`** (The Misspelled Cemetary; the regular Unquiet Garves = 21).
  You pry open Nagamar's coffin → **Wand of Nagamar**.
- ⚠️ **The Bear Verb Orgy is the zone's ONLY noncombat, so a high combat rate suppresses it** (Day 83: 51 straight fights,
  0 NCs). **Lower your combat rate first** — strip +combat gear and/or add a **-combat** source — then farm snarf 58.

## Step 4 — Coronation → Hedge Maze → the 6-key Door → the 5 Tower Levels  ✅verified-live Day 83
- **Coronation** (`ns_02_coronation`) — cutscene, **choice 1020 → 1021 → 1022**, all option 1. Free.
- **Hedge Maze** (`ns_03_hedgemaze`) — **choice 1005 "Do what Frank says" (opt 1)**; following Frank chains cleanly through
  **choices 1005→1013 with NO fights** (~9 turns). (Opposing Frank = faster but topiary-golem combats.)
- **The 6-lock Door** = its own place **`place.php?whichplace=nstower_door`** — actions **ns_lock1..ns_lock6** (fetch each;
  each consumes the matching hero/other key) then **ns_doorknob** to open. Free (no adv). Need all 6 keys present.
- **The 5 walls** = `place.php?whichplace=nstower&action=ns_05_monster1 .. ns_05_monster5`:
  - **monster1 = Wall of Skin:** 50 HP, **100% damage resistance (all hits → 1 dmg)**, ramps with your max HP —
    **must kill fast → the Wand of Nagamar clears it instantly.** Without the wand it just beats you up (verified Day 83).
  - then **Wall of Meat**, **Wall of Bones**, your **shadow/doppelgänger** (can't be hurt by normal damage — see wiki),
    and the **Sorceress's familiars**. Enter each at FULL HP + FULL MP; they hit hard.

## Step 5 — The Naughty Sorceress + King Ralph  (from wiki)
Fight the **Naughty Sorceress (3 forms)** → **break King Ralph's prism** to free him → quest complete → the **astral gash**
opens → **ascend** (go Softcore first, not Casual — see [[ascension]]).

## ⏳ Progress tracker
**Current key/wand/contest progress for the active run lives in `CURRENT_ASCENSION.md`** — this file stays
run-agnostic (the reusable walkthrough only).
