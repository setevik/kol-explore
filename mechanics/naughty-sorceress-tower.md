# The Naughty Sorceress Tower — the Final Quest (run EVERY ascension)

> The endgame gauntlet: defeat the Naughty Sorceress + free King Ralph XI → the astral gash opens → you can ascend.
> **This quest repeats every ascension, so this walkthrough is highly reusable.** Sourced from the official wiki
> (wiki.kingdomofloathing.com) + verified in-game. See also `ascension.md`.

## Unlock
Finish **all Council of Loathing quests** (L2–L12: larva, tavern, Boss Bat, Cobb's Knob, Friars, Cyrpt/Bonerdagon,
Trapper, Highlands, Giant, Manor/MacGuffin, War). Then the **Council gives the final quest** (`council.php`) and the
**Tower opens: `place.php?whichplace=nstower`**.

## Step 1 — Contest Registration Desk
`place.php?whichplace=nstower&action=ns_01_contestbooth` → **choice 1003**. You draw **three** contests:
- **Everyone: "Fastest Adventurer"** (opt 1) — tests **+combat initiative** (2nd place = +400% init).
- **one random stat test** — Smoothest (opt 2, Moxie) / Strongest (Muscle) / etc.; the stat that ISN'T your class's main
  (2nd place = a buffed stat of **600**).
- **one random elemental test** — Hottest/Coldest/Spookiest (opt 3)/Stinkiest/Sleaziest (2nd place = **+100** bonus
  damage sum for that element).
- **NOT one-shot pass/fail.** Your bonus sets a **rank #2–#11**, which just = **how many opponents you fight** (1 at rank 2,
  up to 10 at rank 11). So you can win each even unbuffed — it just costs more turns. Buffing (Springy Fusilli 3015 for init,
  etc.) only *lowers the opponent count*. Register all three (opts 1/2/3 each return to the desk).
### ⭐ Register each contest with DIFFERENT gear — the evaluation is per-click

The desk says *"You only get one shot at the evaluation"*, which reads like one global snapshot. It isn't:
**each contest is evaluated at the moment you submit its option**, so you can re-equip between them and be
measured three different ways. ✅ Verified in-game:
1. **Fastest** — cast an initiative buff (Pastamancer: **Springy Fusilli 3015**) and equip initiative gear
   (**oil slacks**, +20% init, from 10 bubblin' crude — see `orc-chasm-and-highlands.md`) → submit opt 1.
2. **Hottest / element contest** — equip the matching elemental-damage item (**oil lamp**, +5 hot / +5 sleaze,
   9 bubblin' crude) → submit the element option.
3. **Smoothest / stat contest** — drink or eat the matching stat booster first → submit that option.

Each swap is free and costs no adventure; each one lowers that contest's opponent count.

- **Then fight the crowds:** the tower shows **ns_01_crowd1 / crowd2 / crowd3** — `place.php?whichplace=nstower&action=ns_01_crowdN`
  starts each opponent fight; keep clicking a crowd until it stops giving a fight (that contest won). ⚠️ opponents (esp. the
  rank-1 champions like the **Tasmanian Dervish**) are **tanky — keep MP topped (Mortar→Cannelloni)**; MP-starving loses.
### 🚨 The rank-1 champions are a RESOURCE check, not a difficulty check

Each crowd ends in a named champion (**The Tasmanian Dervish** for Fastest, **Seannery the Conman**,
**The Lavalier**, …). They are **scaling monsters with no elemental weakness** — the wiki lists Attack/HP as 0
because they scale to you — and they hit **very hard** (~190 per round against a ~310 max-HP character, i.e.
they two-shot you).

⚠️ **Losing to one is almost always your own resource state, not the fight.** A run of losses followed by a
2-round win came from fixing three things, none of them tactical:
1. **Enter at FULL HP and FULL MP.** The crowd loop had been fighting the warm-up opponents and sliding into
   the champion on fumes. Refill *before every crowd fight*, not just at the start.
2. **Check nothing is suppressing your max HP.** A quest hat (e.g. a **Mohawk wig** kept on after the Giant
   Trash step) silently cost ~40 max HP going into a championship bout. **After any one-noncombat quest item,
   re-equip your real gear immediately.**
3. **Keep a real MP stock.** Running the restorative ladder to empty is what caused the fumes in the first
   place; buy a stack before starting the contests.

With that fixed: **Weapon of the Pastalord (3008) for 222 damage, thrall draining alongside — 2 rounds, no
damage taken**, and the remaining two crowds went **10W/0L each including their champions**.
✅ **Cocoon threshold for these fights: heal at ~70% HP, not 35%** — at ~190 damage per round, 35% is already
dead.

- When all 3 crowds are gone, the desk offers **choice 1003 opt 4 "Claim your prize"** → **World's Best Adventurer sash** →
  advances to `ns_02_coronation`.

## Step 2 — The SIX tower-door keys  (each consumed at the door)
| Key | Source | Notes |
|---|---|---|
| **Boris's / Jarlsberg's / Sneaky Pete's** | **Daily Dungeon** → fat loot token → **DA Vending Machine** | 1 token/day ⇒ 3 days |
| **skeleton key** | **skeleton bone (163) + loose teeth (187)**, meat-pasted | `craft.php?mode=combine&action=craft&a=163&b=187` |
| **Richard's star key** | **Hole in the Sky** (beanstalk) | see below |
| **digital key** | **8-Bit Realm** (Treasure House) | **10,000 points**, NOT pixels — see below |

**Hero-key item IDs / DA Vending Machine rows** (`shop.php?whichshop=damachine`, 1 fat loot token each):
Boris's key = **item 282, row 93** · Jarlsberg's = **item 283, row 94** · Sneaky Pete's = **item 284, row 95**.
(Fat loot token = item 1470. Buy: `shop.php?whichshop=damachine&action=buyitem&whichrow=94&quantity=1&pwd=`.)

### Richard's star key
- **Farm the Hole in the Sky = `adventure.php?snarfblat=83`** (atop the beanstalk via `place.php?whichplace=beanstalk`;
  81 = Airship, 83 = Hole in the Sky). Its constellation-monsters drop **star (654)** and **line (655)** at a good rate
  (~13 stars + 7 lines in ~15 fights). Monsters die in 2 rounds to Mortar→Cannelloni.
- **Craft the key at the star chart shop: `shop.php?whichshop=starchart`, Richard's star key = row 141**
  (`&action=buyitem&whichrow=141&quantity=1&pwd=`). Consumes exactly **8 stars + 7 lines** (the star chart 656 is
  the reusable "tool", not consumed). ⚠️ `inv_use` on the star chart says "not implemented" — you MUST use the shop URL.

### digital key — 8-Bit Realm (⚠️ MECHANIC CHANGED — no longer 30 white pixels)
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
- ✅ **Measured rotation rate: ~140–170 pts/fight** (samples: 2,400 over 14 fights, then 2,800 over 18).
  ⇒ **10,000 from a standing start ≈ 60–75 fights.** (An older ~110/fight estimate is on the low side; the
  ~63/fight figure below is for staying in ONE zone, which is the thing to avoid.) Weapon-attack rounds 1–2 and
  escalate to Cannelloni only if the monster survives — **MP cost is near zero**, which makes this the right zone
  to grind at the tail of a day when the MP battery is spent.
- **⭐ ROTATION TRICK (the whole trick — ~1.7× a fixed zone):** before each fight, read the Score color
  and adventure the matching zone. Detecting the color: the color word (green/red/blue/black) sits right after "Score:" in
  the **fetched** `charpane.php` HTML (regex `/Score:[\s\S]{0,160}?(green|red|blue|black)/i`, default black); OR read the
  **computed** color off the live charpane frame (`getComputedStyle(span.nes).color` — green = rgb(0,128,0)). Staying in one
  zone averages only ~63/fight — rotating is what buys the ~140–170/fight measured above.
- **Combat is cheap:** these monsters are weak — **weapon-attack one-shots most** (round 1–2 attack, escalate to Cannelloni
  only if it survives) ⇒ near-zero MP over 50+ fights. Read the **Score number** from the charpane's second `span.nes`
  (`[...doc.querySelectorAll('span.nes')]` → the `/^[\d,]+$/` one) — a loose regex grabs "Level 14" etc. by mistake.
  **Points PERSIST across days.**
- **Treasure House** = `place.php?whichplace=8bit&action=8treasure` = **choice 1493**: three chests
  **opt 1 [10,000] · opt 2 [20,000] · opt 3 [30,000] Points · opt 4 Leave.** At ≥10k, **option 1 = the digital key**.
  (Higher chests = better prizes but irrelevant to the tower.)

### Daily Dungeon (hero keys)
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

## Step 3 — Wand of Nagamar  (needed for the **NS's 3rd form**, NOT the walls)
⚠️ **Common misconception (corrected):** the wand is **not** for the Wall of Skin — it's for the **Naughty Sorceress's
third/final form** (must be **in inventory**, not equipped post-NS13; it turns her attacks into harmless anagram objects).
Two ways to obtain it:
- **Craft it:** meat-paste **ruby W + metallic A + lowercase n + heavy D** (spells "WAND"). The **lowercase n**'s only
  source is **The Valley of Rof L'm Fao** (gated behind Fernswarthy's Basement / Black Angus — usually not worth it).
  *(Letters collected for the active run are tracked in `CURRENT_ASCENSION.md`.)*
- **Bear Verb Orgy** (anagram of *Grave Robbery*) — a **noncombat** in **The VERY Unquiet Garves = `adventure.php?snarfblat=58`**
  (The Misspelled Cemetary; regular Unquiet Garves = 21) → pry open Nagamar's coffin → the assembled **Wand of Nagamar**.
  🔑 **This search only UNLOCKS after you have been *defeated by* the NS's 3rd form** — it is the game's safety net for
  arriving at form 3 without the wand. (Before form 3 is reached, the NC will not surface no matter how many fights you run at
  snarf 58 — this is a gate, NOT combat suppression.) Once unlocked it fires on roughly the **11th adventure in the
zone**; that zone is **100% combat**, so it arrives as a *superlikely* override, never as a noncombat roll.

  🚨 **VERIFY POSSESSION FROM THE QUEST LOG, NOT AN INVENTORY SCRAPE.** The wand lands in the **equipment tab
  (`inventory.php?which=2`)**, not the misc tab — a text scan of `which=3` for "Nagamar" reads false while you are
  already carrying it. **~44 adventures were burned grinding for a wand already held.** The authoritative signal is
  `questlog.php?which=1`, which flips to *"You found the wand of Nagamar. Take it back to the Tower and finish off
  the Sorceress!"* ✅ **Re-read the quest log before farming for any quest objective** — one fetch, unambiguous.

## Step 4 — Coronation → Hedge Maze → the 6-key Door → the 5 Tower Levels
- **Coronation** (`ns_02_coronation`) — cutscene, **choice 1020 → 1021 → 1022**, all option 1. Free.
- **Hedge Maze** (`ns_03_hedgemaze`) — **choice 1005 "Do what Frank says" (opt 1)**; following Frank chains cleanly through
  **choices 1005→1013 with NO fights** (~9 turns). (Opposing Frank = faster but topiary-golem combats.)
  ✅ **Re-verified: exactly 9 turns, 0 fights.** Each turn re-fetches the same `ns_03_hedgemaze` action and answers one
  choice; the labels vary (*"Keep left like Frank says"*, *"Hug the left wall"*, *"Go left"*, …) so **match on
  `/frank|left/i`, not on one fixed string**. It ends at choice **1013 "Escape the maze!"**, after which the action
  disappears from `place.php?whichplace=nstower` and the **door place** becomes the next step.
- **The 6-lock Door** = its own place **`place.php?whichplace=nstower_door`** — actions **ns_lock1..ns_lock6** (fetch each;
  each consumes the matching hero/other key) then **ns_doorknob** to open. Free (no adv).
  ✅ **You do NOT need all six keys at once — locks open INCREMENTALLY and permanently.** Fetch each `ns_lockN` as
  soon as you own its key; the lock vanishes for good and the remaining ones wait. Since the hero keys are
  day-gated, open the four non-hero locks the day you get them and let the last one sit. **Reading the door's
  `alt=` list is the cheapest progress check** — an opened lock disappears from it, so a door showing only
  `Doorknob` + `Sneaky Pete's Lock` is 5/6 done.
  **Lock → key mapping** (verified): lock1 = Boris's · lock2 = Jarlsberg's · lock3 = Sneaky Pete's ·
  lock4 = Richard's star key · lock5 = digital key · lock6 = skeleton key.

### 🥧 Hero-key shortcut: the key lime pies (skips a Daily-Dungeon day, for meat)
Frank's hint names the alternative: each hero key also comes from eating the matching **key lime pie**
(**Sneaky Pete's key lime pie = item 515**; the plain **key lime = item 512**). ⚠️ **Costs ~6,000 meat in the mall
and one fullness slot**, so it is only worth it when you are rich, have stomach room, and want to collapse the
**3-day** hero-key wait. If you are going to run the Daily Dungeon that day anyway, the token is free — skip the pie.
- **The 5 tower levels.** ⚠️ The action's LEVEL number increments as you climb. ✅ **Verified full chain:**
  `ns_05_monster1` (skin) → `ns_06_monster2` (meat) → `ns_07_monster3` (bones) → **`ns_08_monster4` (mirror)** →
  `ns_09_monster5` (shadow) → `ns_10_sorcfight` (the NS) → `ns_11_prism` (free the King).
  Don't hard-code these — **read `place.php?whichplace=nstower` for the action that's currently live**; only one is.
  - **Wall of Skin** (`ns_05_monster1`): 50 HP, 100% dmg-resist, can't stun, kill in <5 turns. ⚠️ NOT the wand.
    **✅ Use a beehive as a combat item = instant kill.** Beehive = item **7969**, from **The Black Forest (snarf 405)**:
    choice **923 opt 1** (blackberry patch) → **924 opt 3** (buzzing sound) → **1018 opt 1** (keep going) → **1019 opt 1**
    (beehive), ~3 turns. In the fight: `fight.php?action=useitem&whichitem=7969`. (Alternatives if no beehive: Glover
    familiar + weapon attack; multi-source damage familiars; passive-damage skills. Raising max HP does NOT help — %-based.)
  - **Wall of Meat** (`ns_06_monster2`): **700 HP**, hits ~15% max HP/round. Kill with Mortar→Cannelloni, but you must
    **re-fight it until it has dropped 1,001 total meat** — ✅ measured **6 kills / 1,185 meat** (~197 each, 3–4 rounds
    per kill) with no +meat bonus; budget 5–6 fights. The tower action stays put until the total is reached. Full HP+MP
    between kills. (A high **+Meat%** bonus reduces the number of kills.)
  - **Wall of Bones** (`ns_07_monster3`): only **GROUP/AoE damage** works — single-target spells (Cannelloni) make it FULLY
    HEAL. **✅ electric boning knife (item 7970) = instant kill** (`fight.php?action=useitem&whichitem=7970`). Get it from the
    **Castle Ground Floor (snarf 323)** → "Home on the Free Range" **choice 1026 opt 2** ("investigate the noisy drawer"); the
    NC is boosted to 3 copies once tower level 3 is unlocked, so it drops in ~1 turn. (Stuffed Mortar Shell 3007 is also group
    damage but only once/fight.)
  - **Mirror** (`ns_08_monster4`) — not a fight: **choice 1015 opt 1 "Gaze into the mirror"** — costs 1 adventure, grants **Confidence! (∞)**. ⚠️ **Do NOT "Break it"** (free, but gives the
    Sorceress **stun+stagger immunity and higher HP**).
  - **Shadow** (`ns_09_monster5`) — *a Shadow [your class]*, **~395 HP**.
    🚨 **ALL SKILLS ARE BLOCKED, not just attacks** — *"You find yourself unable to use any of your skills
    against your shadow."* A healing **skill** (Pastamancer: Cannelloni Cocoon 3012) therefore does **nothing**
    and wastes the round. **Healing ITEMS only.**
    🎯 **The mechanic: damage dealt = HP actually restored**, capped by your current deficit. Two consequences:
    - **Max HP is the weapon.** Raise it before entering (buffbot **Ghostly Shell + Astral Shell** measured
      +44 max HP ⇒ +44 damage per full heal). More max HP = fewer items needed.
    - **You must be hurt before you can hurt it.** Healing at full HP heals 0 and deals 0. **Let it hit you,
      then heal.** A round spent provoking (`fight.php?action=attack` — it always dodges) is not wasted.
    ✅ **Verified kill, 5 rounds, from ~362 max HP:**
    `oil (heals/deals 159) → provoke → oil (159) → provoke → poultice (94)` = **412 damage**.
    ⇒ **Kit: 2 × scented massage oil (2438, ~2,000 meat each) + a few filthy poultice (2369, ~170).**
    ⚠️ Its hit scales — an opening round of ~294 damage was observed. Never enter below full HP.

## Step 5 — The Naughty Sorceress + King Ralph  ✅ (verified in-game)
Fight the **Naughty Sorceress (3 forms)** at `place.php?whichplace=nstower&action=ns_10_sorcfight` — ONE continuous combat
(re-entering the action resumes it; a loss restarts it from form 1). Forms are "The Naughty Sorceress" → "(2)" → "(3)". Notes:
- **Form 1** falls easily to Mortar→Cannelloni. **Form 2 is the wall** — she **blocks ~half your spells** and her big nuke
  ≈ your full maxHP. Winning recipe:
  - **Enter at TRUE full maxHP** (rest until Beaten Up fully clears; verify) — at reduced maxHP her nuke one-shots you from ~90%.
  - **Read fresh HP each round via `api.php?what=status&for=CC${tick++}`** (varying `for=`; the fixed string caches — see HANDOFF).
  - **Entangling Noodles (3004) stun** to open (she IS stunnable if you *gazed* at the mirror; the stun decays after ~14 uses)
    then **Cannelloni (3005) every round** — **her block rate falls with every loss** (down to ~30% after several losses), so
    nukes land almost always. **Heal at <65% with filthy poultice (2369)**, scented massage oil (2438) at <35%.
  - **Bring a BIG MP battery** (60–80 MMJ) + ~40 torpedoes — running dry mid-grind is what stalls this fight. Enter FULL MP.
- **Form 3 requires the Wand of Nagamar in inventory** (see Step 3). Without it you get defeated by form 3 — which is what
  **unlocks the Bear Verb Orgy** wand-search. So the intended order is: reach form 3 → lose → get the wand → return and win.
  ✅ **With the wand held (NOT equipped), form 3 resolves by itself** — no item to use, no special action; the tower
  simply advances to **`ns_11_prism`**.

### ✅ Verified full clear — and a scaling caveat on the warnings above

At **base Mysticality ~260 with a Vampieroghi thrall**, the whole fight was far milder than the notes above
(written at ~120 Mys) imply: **form 1 = 4 rounds, form 2 = 6 rounds, zero healing items used, HP never below
~275/318.** Opening with **Entangling Noodles (3004)** then **Cannelloni (3005)** every round was enough; the
"blocks half your spells / bring 60–80 MMJ" warnings describe an under-levelled character. **Total MP for
forms 1+2 ≈ 45.** Budget by your own stats, not by the worst case.

⚠️ **The fight is resumed by RE-ENTERING `ns_10_sorcfight` after each form** — each form ends with *"Uh oh."*
and the tower action list goes momentarily empty. That is not a loss; fetch the action again.

⚠️ **`inFight()` false-negatives in the tower.** The form-3 page and the post-form cutscenes contain neither
`whichskill` nor "Attack with your weapon", so a helper testing only for those reports "no fight" on a page that
*is* one. ✅ **Test for the combat form instead: `/<form name=attack/`.**

### 🏁 Step 6 — free the King
`place.php?whichplace=nstower&action=ns_11_prism` → *"Hi-keeba!"* → the prism shatters, **King Ralph XI** is
freed and **the astral gash opens**. No adventure cost, no choice to answer. ✅ **You may free the King while
drunk** — but ⚠️ **you cannot fight your way up the tower while drunk** (the map shows "Too Drunk!"), so the
entire climb must happen BEFORE the day's DRINK step.
- Letting her beat you up lowers her block rate (down to ~30% after several losses); high buffed **Mysticality** reduces her spell blocks;
  **Ambidextrous Funkslinging** lets your familiar act unless she blocks each item separately.
- Beat form 3 → **break King Ralph's prism** to free him → quest complete → the **astral gash** opens → **ascend**
  (go Softcore first, not Casual — see `ascension.md`).

## ⏳ Progress tracker
**Current key/wand/contest progress for the active run lives in `CURRENT_ASCENSION.md`** — this file stays
run-agnostic (the reusable walkthrough only).
