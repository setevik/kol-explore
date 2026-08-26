# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, quest progress, next
> priorities, session log). Reusable know-how lives elsewhere and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt.
> Prior completed runs are archived in `runs/` (e.g. `runs/ascension-01-pastamancer.md`).

**Character:** ClaudeCode — **Ascension #2 (the SECOND run)**, a **Level 1 Pastamancer**, Softcore/Normal.
**Started:** Day 86 / 2026-07-13 (immediately after winning + ascending run #1).

---

## 🎉 We ASCENDED (2026-07-13)

Run #1 is WON and archived (`runs/ascension-01-pastamancer.md`): beat the Naughty Sorceress (all 3 forms,
via the Wand of Nagamar) + freed King Ralph XI, then stepped through the astral gash and reincarnated.

**This new run's ascension choices (Softcore, per the plan in `mechanics/ascension.md`):**
- **Lifestyle: Normal (Softcore)** — in **Ronin for the first 1,000 turns** (may pull ≤20 items OR 20,000 meat/day
  from **Hagnk's** during Ronin; last run's whole inventory is sitting in Hagnk's). Earns **111 karma** on completion.
- **Class: Pastamancer** (kept — synergy with permed Pastamastery).
- **Moon Sign: The Opossum** (+10% Mysticality gains; unlocks Little Canadia). Good for a Mys caster.
- **Path: Standard** (2026 yearly path; **+50 bonus karma**, reward angelbone chopsticks; note: pre-2024
  limited-time content disallowed — irrelevant to our basic playstyle).
- **Permed: Pastamastery** (now available every non-Hardcore run forever — daily dry-noodle food summon).
- **Astral pet:** bought the **astral chapeau** (caster hat; equip it early).
- Karma left over: ~1 (banks). Familiars stay in the terrarium; permed skills + account unlocks carry over.

---

## 📊 Character state (run #2 — end of Day 130 / 2026-08-23)

- 🎉 **LEVEL 16 Pastamancer.** Base Mys **260**. HP 317, MP 430. **Meat ~2,534.**
  **adv 64 banked** (filled to 19 + one overdrink, then STOPPED). full 15, drunk 25.
- 🚪 **FIVE OF SIX TOWER LOCKS ARE OPEN.** Coronation done, **hedge maze escaped** (9 turns, 0 fights,
  following Frank). The door at `place.php?whichplace=nstower_door` now shows only
  **`Doorknob` + `Sneaky Pete's Lock`**.
- 🔑 **The last key is Sneaky Pete's** — needs **one Daily Dungeon fat loot token** (row 95).
  Alternative if ever rich: a **Sneaky Pete's key lime pie (item 515)**, ~6,000 meat + 1 fullness.
- 🧰 **ENDGAME KIT IS ASSEMBLED** (this is the important part):
  - **beehive** ×1 → instant-kills the **Wall of Skin**
  - **electric boning knife** ×1 → instant-kills the **Wall of Bones** (nothing else works — single-target
    spells make it fully heal)
  - **scented massage oil** ×1 + **filthy poultice** ×8 → the **Shadow** (only healing hurts it) and NS form 2
  - **31 Mountain Stream soda** (MP battery)
- 🪄 **Wand of Nagamar: 2 of 4 letters** — hold **ruby W** and **heavy D**; missing *metallic A* and
  *lowercase n*. The intended path is still: reach NS **form 3 → lose → Bear Verb Orgy** unlocks at
  `adventure.php?snarfblat=58`.
- 🗺️ **Also open (optional):** *A Quest, LOL* — Baron Rof L'm Fao's valley.
- 🔓 **Standing run assets:** **Liver of Steel** ⇒ booze cap 19; **Queue Du Coq cocktailcrafting kit**;
  **Saucemaven** + **Pastamastery**; **Vampieroghi thrall** persists; Daily-Dungeon tools owned
  (**pole 6302, ring 6303, lockpicks 280**) ⇒ full run ≈ 7 adventures; **continuum transfunctioner** owned
  (8-Bit access). Buffbot **Buffy (#1889009)** for Ghostly/Astral Shell, Fat Leon's, Sonata.
- **Today: 86 fights, 0 losses.**

---

## 🔜 Next-session priorities

> **START HERE ON DAY 131 — open the door and start climbing.**
> Login → **Pastamastery (3006)**, EAT to 15 (Milk of Magnesium **1650** first, then sushi ×2 + jerky +
> a 1-fullness fruit). ⚠️ **CHECK THE SODA PRICE before restocking** — it spiked to ~248/ea and drained the
> whole balance last time.
> (1) 🔑 **DAILY DUNGEON FIRST** (`adventure.php?snarfblat=325`, ~7 adv) →
>     `shop.php?whichshop=damachine&action=buyitem&whichrow=95&quantity=1&pwd=` = **Sneaky Pete's key** →
>     `place.php?whichplace=nstower_door&action=ns_lock3` → then **`ns_doorknob`**. All free after the dungeon.
> (2) 🧱 **Climb the walls** (read `mechanics/naughty-sorceress-tower.md` first — each has a hard gimmick):
>     **Wall of Skin** `ns_05_monster1` → `fight.php?action=useitem&whichitem=7969` (beehive) = instant kill.
>     **Wall of Meat** `ns_06_monster2` → 700 HP, must be re-killed ~5× until it has dropped **1,001 total
>     meat**; full HP+MP between kills.
>     **Wall of Bones** `ns_07_monster3` → `fight.php?action=useitem&whichitem=7970` (boning knife) = instant
>     kill. **Never cast a single-target spell at it — it fully heals.**
>     **Mirror** `ns_09_monster5` → choice 1015 **opt 1 "Gaze into the mirror"** (do NOT break it — breaking
>     makes the NS immune to stuns), then the **Shadow**: immune to all damage, **only healing items hurt it**
>     (~395 HP). Attack to provoke its hit, then heal — massage oil (2438) for big chunks, poultices (2369)
>     for small.
> (3) Then the **Naughty Sorceress** (`ns_10_sorcfight`). Expect to reach **form 3 and lose** (no wand yet) —
>     that is the intended trigger for the Bear Verb Orgy wand search. Before form 2, buy a **big MP battery**
>     and more poultices; enter at TRUE full max HP.
> **DRINK LAST — fill to 19, ONE overdrink, then STOP.** Fog Murderer (6682), limit 1/day per store.

---

## 🗓️ Session log (this run)

- **Day 130 (2026-08-23): 🚪 Five of six tower locks open; the endgame kit is assembled.**
  Ran the **Daily Dungeon** (7 adv) for **Jarlsberg's key**, then took the **8-Bit Realm 4,800 → 10,000**
  at a measured **~171 pts/fight** with the colour rotation and claimed the **digital key** from the first
  Treasure House chest. Walked the tower as far as it goes without the last key: **coronation** (free) and
  the **hedge maze in 9 turns with zero fights** by following Frank, then turned five keys in five locks —
  ⚠️ **the locks open incrementally**, so there is no need to hold all six at once (now documented).
  Spent the afternoon farming the **Giant castle Ground Floor at ~110 meat/turn** (86 fights, 0 losses) to
  buy a **scented massage oil** and **8 filthy poultices**; the **beehive** and **electric boning knife**
  that solve two of the four walls were already in the bag from earlier days.
  💸 **Mistake: bulk-bought 20 sodas at a spiked ~248 each and went from 6,000 meat to 17** without checking
  the price — the whole afternoon's farming was paying that back. Now a HANDOFF rule.

- **Day 129 (2026-08-22): 🏆 ALL COUNCIL QUESTS DONE · the final quest begins · 3 of 6 tower keys.**
  Seven ghosts finished **A-boo Peak** (oil lamp, weapon attacks) ⇒ third fire lit ⇒ **Misty Robe** from the
  Highland Lord. Then the Giant Trash quest: ⚠️ **wasted ~24 turns** grinding the castle Ground Floor for an
  unlock noncombat that had already fired — the map alt-text's missing `(1)` is **not** a lock (now in
  `HANDOFF.md`). A **310-meat Mohawk wig** then skipped the Top Floor's 35-turn grind in one noncombat.
  The Council responded with **"The Ultimate Final Epic Conflict of the Ages."**
  Tower step 1: registered all three contests **swapping gear between each registration** (oil slacks for
  Fastest, oil lamp for Hottest, moxie weed for Smoothest), then **30W/0L** through the crowds ⇒
  **World's Best Adventurer sash**. ⚠️ Lost to **The Tasmanian Dervish 3×** purely on empty MP and a
  forgotten quest hat; fixed both and won in **2 rounds**. Keys: crafted the **skeleton key**, ran the
  **Daily Dungeon** (7 adv with tools) for **Boris's key**, and forged **Richard's star key** from 16 turns
  in the Hole in the Sky. Pushed the **8-Bit score 1,100 → 4,800** at a measured **~137 pts/fight**.

- **Day 128 (2026-08-21): 🔥 Twin Peak lit · 👻 A-boo 98% → 14% · the oil kit changes everything.**
  Started with only 40 adventures (the 60 I drowned on Day 127 never came back). Discovered that
  **bubblin' crude's recipe depends on how many you use at once** — and that `inv_use.php` can't do it at all;
  **`multiuse.php`** can. Built the **oil lamp (9)**, **jar of oil (12)** and **oil slacks (10)**.
  Used the jar to solve Twin Peak's music/painting step, failed the stench and item-drop gates as expected,
  and took the **`Cabin Fever`** fallback at ~turn 51 — *"Burn this mother-goddamning hotel to the ground."*
  Then the day's real find: **the oil lamp cracks A-boo Peak.** It shares the off-hand slot with the
  Necrotelicomnicon, so equipping it removes the spooky tuning *and* adds hot damage in one move — and plain
  **weapon attacks** then kill the physically-immune ghosts in **2 rounds for 0 MP**. 20 ghosts plus two
  **`The Horror…`** runs (−15% each, ~4× a ghost per adventure) took the peak from **98% to 14%**.
  Drank to exactly 19, took one overdrink for **+61 banked adventures — and stopped.** ~82 fights, 0 losses.

- **Day 127 (2026-08-20): 🏆 WAR WON (The Man, 5 rounds) · 🌉 Orc Chasm bridged · 🔥 Oil Peak lit.**
  Ground the battlefield **#29 → #32**, then took **The Man** in five casts of Weapon of the Pastalord at
  full HP/MP with both of Buffy's shells and the Vampieroghi thrall — never healed, never turtled. Council
  paid out the **Blue Diamond of Honesty**. Then cleared the level-9 board: **40 fights** in the Smut Orc
  Logging Camp plus **4 keepsake boxes** finished the bridge (⚠️ *messy butt joint* is a **fastener**, not
  lumber — that miscount cost an hour), and **50 oil slicks, 0 losses** lit **Oil Peak** and banked
  **50 bubblin' crude**. Sold the boss's *really dense meat stack* for **5,000 meat** (note: the working
  endpoint is `sellstuff_ugly.php`, not `sellstuff.php`) and bought 5 Fog Murderers, one per store.
  **Then threw away 60 adventures** by adventuring at drunk 25 — see the warning block above.
  **171 real fights today, 0 losses.**

- **Day 126 (2026-08-19): ⚔️ Battlefield #21 -> #29 of 32; 🎉 LEVEL 16. 105W/0L.**
  The **Junkyard opened** (3rd doubling available): Yossarian hands over the **molybdenum magnet** free at
  `bigisland.php?action=junkman`, but the tools must be **magneted off rare gremlins** in 182/183/184/185 -
  **12 fights in 182 gave nothing but gremlin juice**. Made the deliberate call to **skip the 8x and just
  push the front**: 11 images at 4x ≈ 100 turns, versus 50 turns *plus* an open-ended junkyard hunt.
  Ground the battlefield all day: **#21 -> #29**, **105 wins, zero losses**, base Mys 229 -> **236**.
  Wrapped clean: full 15, drunk 19+overdrink=22, **49 adv banked**. **Three images from The Man.**

- **Day 125 (2026-08-18): 🦆 FARM SIDE QUEST DONE (kills now 4x); battlefield #13 -> #21.**
  With the front at #13, the Farm/Nunnery/Orchard had opened (Junkyard still gated). Took the **Farm**
  as the cheapest, no-RNG option: accept from the farmer ("Dooks all over it!"), then clear the **three
  duck zones the farm page lists (142/144/147)** - ~10 wins each, and a cleared zone disappears from the
  page. ⚠️ Wasted 7 turns first in **snarf 137, which is not part of the quest**. Farmer plants soybeans
  -> **second doubling, comrade kills now 4x**. Then battlefield **#13 -> #21 of 32**.
  **~99W/0L on the day.** Base Mys 223 -> **229**. ⚠️ Ran out of MP twice mid-advance - the war is
  MP-hungry as well as meat-negative. Wrapped clean: full 15, drunk 19+overdrink=22, **53 adv banked**.

- **Day 124 (2026-08-17): 🎆 LIGHTHOUSE TAKEN - comrade kills doubled; battlefield #4 -> #13.**
  Ground the battlefield to **Image #7**, which is where **the lighthouse road opens** (confirming
  yesterday's correction that it is gated, not a shortcut). Switched to **Sonofa Beach (136)**:
  **lobsterfrogmen drop a barrel of gunpowder roughly per kill**, 5 collected in 5 wins, handed over at
  **`place=lighthouse&action=pyro`** -> *"Big boom! Big big boom!"* -> **side quest complete, kills x2**.
  The multiplier is measurable: **37 wins moved 4 images before, 54 wins moved 9 after** (#7 -> **#13**).
  **~84W/0L on the day, zero losses.** Base Mys 216 -> **223**.
  Wrapped clean: full 15, drunk 19+overdrink=22, **49 adv banked** (meat down to 671 - war is meat-negative).

- **Day 123 (2026-08-16): ⚔️ THE ISLAND WAR IS STARTED - battlefield at Image #4.**
  Built the boat from scratch (3 Shore trips -> scrip -> **dinghy plans** + **dingy planks** -> **dingy
  dinghy**), then ran the full infiltration: **Frat Boy Ensemble** free from Frat House noncombats ->
  wore it into the **Hippy Camp** so the hippies turned hostile -> 29 wins for the **War Hippy Fatigues**
  -> wore *those* into the Frat House -> **"Screw this, head to the roof"** -> war.
  ⚠️ **Corrected our own war notes:** the **Lighthouse and Sonofa Beach are gated behind battlefield
  progress** - at Image #0 both simply refuse entry, so "side quests first" cannot be step one.
  Ground the battlefield **37W/0L** (#0 -> **#4** of 32). Base Mys 209 -> **216**.
  Wrapped clean: full 15, drunk 19+overdrink=22, **50 adv banked**.

- **Day 122 (2026-08-15): 🏆 THE HOLY MACGUFFIN - the L11 quest line is COMPLETE.**
  Broke the two-day Palindome deadlock by discovering **choice 872 is NOT a random noncombat**:
  Dr. Awkward's Office is a **place link** that unlocks by reading **"I Love Me, Vol. I"** - a book that
  had been sitting unread in the bag while ~190 turns were burned hunting a phantom encounter (even with
  Sonata of Sneakiness + hair spray). Lesson recorded in HANDOFF and `palindome-quest.md`.
  Then the chain ran clean: photos -> Dr. Awkward clubs you (scripted) -> **"2 Love Me, Vol. 2"** ->
  Mr. Alarm -> **Whitey's Grove** (lion oil, bird rib) -> **wet stunt nut stew** -> **Mega Gem** ->
  **Dr. Awkward dead in 2 rounds** -> **Staff of Fats** -> **STAFF OF ED** assembled -> pyramid socket ->
  **the Ancient Buried Pyramid rose**. Cleared Upper/Middle, worked the **5-position wheel**
  (basket -> bronze token, vending -> ancient bomb, rubble -> boom; **bought 17 tomb ratchets** rather
  than farm them at ~1 per 13 fights), then **ED THE UNDYING through six resurrections** ->
  **HOLY MACGUFFIN** -> Council. The Council immediately opened the **Island War**.
  Level 15, base Mys **209**. Wrapped clean: full 15, drunk 19+overdrink=22, **45 adv banked**.

- **Day 121 (2026-08-17): 🐍 Ron beaten → Talisman forged → THE PALINDOME IS OPEN + all 4 photos; 🎉 LEVEL 15.**
  **Ron "The Weasel" Copperhead** appeared as an ordinary combat ~13 turns into the **Red Zeppelin (385)**
  and dropped **Copperhead Charm #2**; `craft.php mode=combine a=7178 b=7186` fused the pair into the
  **Talisman o' Namsilat (486)**. Equipped it and **The Palindome (386)** appeared in the Nearby Plains.
  Inside: **all four photographs in ~30 turns** (27W/0L) plus 2 stunt nuts.
  📚 Two corrections to `palindome-quest.md`, both found the hard way: the **photograph of a dog only drops
  from Bob Racecar / Racecar Bob after ~10 palindrome dudes are killed**, the **ostrich egg comes from an NC
  ("Last Egg Gets Al")** not a monster, and — the big one — **Mr. Alarm is what UNLOCKS Whitey's Grove**,
  and his office only opens **after you fight Dr. Awkward once and read the book he drops**. The old note
  had that chain reversed, which would have sent us to a locked zone.
  🚧 **Then the day stalled on pure RNG: "Drawn Onward" (choice 872) did not fire once in ~120 Palindome
  turns** — only 2 noncombats all day. Verified it wasn't strength (**~150W/0L**) or gear (+combat clean).
  **Next session must buy a −combat / forced-noncombat source before re-entering.**
  🎉 **LEVEL 15**; base Mys 193 → **205**, max HP 232 → **243**. Wrapped clean: full 15, drunk 25,
  **74 adv banked**, 12,360 meat.

- **Day 120 (2026-08-16): 🕴️ SHEN'S THREE ERRANDS DONE (Copperhead Charm #1) + the Red Zeppelin unblocked.**
  Opened the **Castle Top Floor** by simply adventuring one turn on the **Ground Floor (323)** →
  *"Top of the Castle, Ma"*. Up there, **"Copper Feel" (choice 677) option 2 → steam-powered model
  rocketship**, which is the "means of travelling TO SPACE" that gates **The Hole in the Sky (83)**.
  ⚠️ Correction to Day 119's note: **stars/lines/star charts come from the Hole in the Sky itself, NOT the
  8-Bit Realm** — and **The Astronomer drops the Eye of the Stars on sight** (ours dropped on the first fight).
  Ran Shen's chain to the end: Eye of the Stars → poisoned again → **The First Pizza** off *the Frozen Solid
  Snake* in the **Lair of the Ninja Snowmen (272)** → **"Of Mice and Shen" COMPLETE**.
  🎈 Then ~90 turns dispersing the **Zeppelin protesters (384)**: the three NCs (**856/857/858, option 1**)
  clear ~3 each and there is **no counter — the ZONE NAME is the gauge** (*Massive Mob → Bunch → Scattered*).
  **The Red Zeppelin (385) is now boardable**; 8 turns aboard, Ron not yet found.
  ⚠️ Two self-inflicted lessons: a "is the zone open?" regex **false-positived on a combat page**, and
  aborting a loop kept leaving a **stuck fight** that silently no-ops every later fetch (both now in HANDOFF).
  Base Mys 179 → **193**, max HP 158 → **232**. Wrapped clean: full 15, drunk 25, **74 adv banked**, 9,852 meat.

- **Day 119 (2026-08-15): 🏆🏆 RONIN ENDED, 41k MEAT FROM JUNK, 6 SKILLS BOUGHT — HIDDEN CITY COMPLETE + DESERT 100%.**
  The single biggest day of the run. Opened to find **Ronin over**, autosold months of slope junk for
  **+41,195 meat in zero adventures**, and bought the wizard we should have been: **Thrall Unit Tactics**
  (halves pasta MP), **Stuffed Mortar Shell**, **Spirit of Ravioli** (+25% max HP), **Flavour of Magic**
  (element tuning), **Subtle and Quick to Anger**, **Shield of the Pastalord**.
  ⚔️ Killed the **Office protector** that beat us 3× yesterday — the fix was (a) Cannelloni/Mortar not the
  physical Pastalord, and (b) **tuning pasta to cold with Spirit of Peppermint, because an UNTUNED Mortar
  rolls a random element and can come up PHYSICAL** (= zero vs a physically-immune ghost).
  🔺 Discovered we'd been **carrying the Apartment (Day 111) and Hospital (Day 118) spheres unplaced the
  whole time** — killing a protector is only half the step; the sphere must go back to its matching shrine.
  3 altars, **2 adventures**, 4 triangles → Ziggurat → **Protector Spectre dead in 3 rounds → HIDDEN CITY DONE.**
  🏜️ **Desert 74% → 100% in 30 turns** after disproving our own "one hydration window per day" rule —
  **the Oasis re-hydrates as often as you ask** (5 times today). Worm manual 15/15 → Gnasir.
  🕴️ Met **Shen Copperhead** (poisoned us), recovered the **Shield of Brook** from the Unquiet Garves (21),
  traded it for the antidote; next task = **Eye of the Stars**. Got the **continuum transfunctioner** →
  **8-Bit Realm unlocked**. Bought the **cocktailcrafting kit**. ~**110W/0L** on the day.
  Base Mys 174 → **179**, L13 → **L14**, max HP 126 → **158**. Wrapped clean: full 15, drunk 24, **72 adv banked**, 8,903 meat.

- **Day 118 (2026-08-14): ⭐ Pygmy gate BROKEN (11W/1L) — Hospital cleared, McClusky file assembled.**
  Summoned the thrall **first**, and the Hidden Hospital immediately went **11W/1L** (6W/3L the day
  before at identical stats) → **"Doctor!" complete**. Office: farmed the 5 **McClusky pages** off witch
  accountants (choice 786 "pick a fight" spawns them; "raid the supply cabinet" yields the **boring
  binder clip**), and found the pages **don't craft — `inv_use` the clip** to bind them. ⚠️ Then lost
  **3 fights to the Office protector spirit while logging them as wins**: **Weapon of the Pastalord is
  physical** and the spirits are physically immune — Cannelloni-only next time — and our loops can't
  read that monster's defeat text. Also proved **cheap Cannelloni + thrall (13W/1L) beats the 32-MP
  nuke** on MP efficiency. Slope 34W/0L; base Mys 169 → **174**. Clean wrap: full 15, drunk 22, 50 adv banked.

- **Day 117 (2026-08-13): Damage package bought (thrall + passive); desert 74%; hospital 6W/3L.**
  Took the desert's daily window (71% → **74%**), then measured the Hidden Hospital at base Mys 164
  with cocoon healing: **6W/3L** (trend 1W/5L → 4W/3L → 6W/3L). Diagnosed the true limiter as **MP, not
  survivability** — ~80 MP per pygmy vs a 246 pool. Bought **Bind Vampieroghi (3027)** and **Bringing Up
  the Rear** (pasta damage passive that needs an active thrall); ⚠️ summoned the thrall only after
  spending everything, so the retest died on an empty bar — **summon first thing tomorrow**.
  Slope: **103W/0L**, base Mys 164 → **169**. Wrapped clean: full 15, drunk 19+overdrink=22, 48 adv banked.

- **Day 116 (2026-08-12): 🛡️ CANNELLONI COCOON BOUGHT — bought healing is retired.** Farmed the slope to
  7,500 (56 wins, no losses) and bought **skill 3012: 20 MP for a full heal**, ending 116 days of paying
  retail for scrolls and tiny houses. Took the day's single desert window (**68% → 71%**; hydration ran
  out after 4 turns, confirming the daily cap), then spent the rest levelling: **another 55 slope wins,
  zero losses**, base Mys 159 → **164** (30 points in three days). Wrapped clean: full 15,
  drunk 19+overdrink=22, 48 adv banked, 1,729 meat.
- **Day 115 (2026-08-11): 🛠️ Supply day — 108W/0L on the slope; desert 64% → 68%; pygmy gate re-measured.**
  Deliberately spent the day fixing the MP economy rather than questing: **108 slope wins, no losses**,
  banking **16 Mountain Stream sodas (~600 MP)** and taking meat 1,588 → 5,957 — **500 short of Cannelloni
  Cocoon**, so that's tomorrow's first buy. Base Mys 154 → **159**. Two useful measurements: the **Oasis
  caps per day** (a 2nd visit granted nothing and cost no adventure — expect one hydrated window daily),
  and the **Hidden Hospital is now 4W/3L at base Mys 158** (was 1W/5L at 134) — better, but hold until
  ~8W/1L. Wrapped clean: full 15, drunk 19+overdrink=22, 46 adv banked, **5,422 meat carried**.
- **Day 114 (2026-08-10): 🫙 Killing jar found → all Gnasir errands done; desert 44% → 64%; 🎉 LEVEL 13.**
  Opened broke (98 meat), so ate the last sushi and let a 48-win slope stretch fund the day — the banked
  adventures tipped us to **L13** en route. The **killing jar dropped on the ~9th banshee librarian**
  (2 days of hunting, Fat Leon's up) → 3rd pamphlet → **59%**, then desert cycles → **64%**.
  🚨 **New wall identified: the MP economy.** Pastalord costs 32 MP vs MMJ's ~10–12 restore, so we
  stalled out of MP three times; Cannelloni (8 MP) wins too but needs 2–3 casts. Answer is the slope
  (free 37-MP sodas + ~80 meat/win) short-term and **Cannelloni Cocoon (7,500)** long-term.
  Base Mys 149 → **154**. Wrapped clean: full 15, drunk 19+overdrink=22, 48 adv banked, meat 1,588.
- **Day 113 (2026-08-09): 🏜️ Desert 12% → 44% via Gnasir's pamphlets.** Found the desert accelerator:
  **Gnasir** (choice 805) trades a **sightseeing pamphlet ≈ +15% exploration** per errand. Delivered the
  **stone rose** (Oasis noncombat) and a **can of black paint** (Black Market, 1,000 meat) → two pamphlets
  → 12% → **44%**. ❌ The third errand stalled: **28 library fights and 6+ banshee librarians produced no
  killing jar**, even under Fat Leon's. ⚠️ **MP is the new bottleneck** — Pastalord's 32 MP/cast drained us
  three separate times; the slope (soda drops + ~80 meat/win) was the recovery each time. Base Mys 145 →
  **149**. Wrapped clean: full 15, drunk 19+overdrink=22, 47 adv banked (⚠️ meat down to 98 — farm first tomorrow).
- **Day 112 (2026-08-08): ⚔️ THE GUILD-TRAINER BLIND SPOT — bought Weapon of the Pastalord; desert opened.**
  Discovered the trainer has been stocking level-appropriate skills for weeks. Bought the cheap passives
  (**Utensil Twist**, **Transcendent Al Dente**) immediately, farmed the slope 71W/0L for the **5,000-meat
  Weapon of the Pastalord (3008, 32 MP)**, and the **ML ~140 Arid Extra-Dry Desert instantly went 11W/0L**
  — a zone that was hopeless the day before, with **no level-up involved**. Desert now **12% explored**;
  the **Oasis (122)** and **Gnasir's Place** are unlocked. ⚠️ Lost 8 fights to a loop bug whose MP ladder
  ignored the 17 Mountain Stream sodas in the bag (fixed; both lessons in HANDOFF). Base Mys 140 → **145**.
  Wrapped clean: full 15, drunk 19+overdrink=22, 49 adv banked.
- **Day 111 (2026-08-07): 🔮 First Hidden City sphere (Apartment done) + a measured level gate.**
  Arrived still **Thrice-Cursed from the previous visit** (curses persist across days), so the elevator
  offered the penthouse immediately → **ancient protector spirit killed → moss-covered stone sphere**.
  ✅ Key: the spirits are **physically immune / elementally vulnerable**, so the **Necrotelicomnicon goes
  ON** for them — the mirror image of the Bonerdagon fix. ⚠️ The rest of the building went **1W/5L**:
  pygmies are ML 142–150 and we're base Mys 134, so the buildings are now documented as a **base-Mys-150
  gate**. Spent the day levelling instead: **104W/0L on the slope**, base Mys 134 → **140** (L13 at 144)
  and meat 6 → 5,139. Wrapped clean: full 15, drunk 19+overdrink=22, 46 adv banked.
- **Day 110 (2026-08-06): 👁️ SPOOKYRAVEN MANOR COMPLETE — Lord Spookyraven slain, EYE OF ED obtained.**
  Solved the **Chasin' Babies** herding puzzle by deducing the full toy/ghost matrix and spotting its
  trap (every toy is loved by one ghost and hated by another, so **the last ghost must be pushed in by
  fleeing, not pulled**) → jar of baby ghosts → Lady Spookyraven → ghost formula. Then the cellar:
  masonry → **recipe: mortar-dissolving solution**; all six manor-zone ingredients were already in
  inventory from routine farming; ⚠️ they don't craft — **re-click the masonry** and the game mixes them.
  Wall down → **Lord Spookyraven in 5 rounds** (his opener took 62 of 99 HP — survivable only because
  the **Smothers blessing's +3 all-resistance** was up) → **Eye of Ed**. Slope 59W/0L → base Mys **134**.
  Wrapped clean: full 15, drunk 19+overdrink=22, 49 adv banked.
- **Day 109 (2026-08-05): 🐉 BONERDAGON SLAIN (Cyrpt quest DONE) + 🎹 Spookyraven cellar opened + 🎉 L12.**
  Alcove cleared (27W/0L blessed) → Evilometer hit the **999** sentinel → the Haert. **Lost attempt 1**
  (11 rounds) then **won attempt 2 in 4 rounds untouched** after two fixes now in HANDOFF: **unequip the
  Necrotelicomnicon** (its Spooky tuning is resisted by a bone dragon) and **never heal a boss that
  out-damages your heal**. Loot: skull (equipped) + 3,000-meat chest; Council closed the quest.
  Then the **ballroom organ (choice 921)** finally worked with the diary → **cellar open** (Lab 396 /
  Nursery 397 / Storage 398); Lady Spookyraven wants her 3 children — collected toy parts, recipes still
  to research (choice **885**). Slope 73W/0L → **Level 12**, base Mys **128**. Wrapped clean: full 15,
  drunk 19+overdrink=22 (⚠️ Imp Ale gone; used an ice-cold Willer as the 1-potency topper), 54 adv banked.
- **Day 108 (2026-08-04): 📖 Diary read → 🏛️ HIDDEN TEMPLE + 🏙️ HIDDEN CITY opened; ⚰️ Cranny cleared.**
  Diary is read at **`diary.php`** (inv_use says "not implemented" — trap documented) and registers **4
  quests**, including the **Spookyraven cellar** that's been blocked since Day 95. Unlocked the temple via
  the Spooky Forest sapling chain, then spent 3 stone wool to take the temple in ~8 turns: Nostril →
  Pikachutlotal button → hands-up trap → **the BANANAS tile puzzle at `tiles.php`** (not a choice
  adventure; jump links are `tiles.php?action=jump&whichtile=N`) → Hidden City. Cleared all 4 shrines with
  the **antique machete** from Hagnk's → Apartment/Hospital/Office/Bowling Alley open. Blessed window
  killed the **huge ghuol → Cranny 0** (Cyrpt down to the Alcove alone, 50). Economy fixed by selling
  Hagnk's meat stacks + the **really dense meat stack (+7,200)**; slope 58W/0L → base Mys **120**, meat
  **9,129**. Wrapped clean: full 15, drunk 19+overdrink=22, 49 adv banked.
- **Day 107 (2026-08-03): 📖 FATHER'S MACGUFFIN DIARY OBTAINED — the whole L11 opening chain cleared.**
  Forest with full prep went **44W/10L** → quest log flipped to *"You've found the Black Market"*
  (⚠️ the market shows up as a **new link on place.php?whichplace=woods**, NOT as an option inside choice
  923 — and blackberry-bush fights give no progress; both traps documented). Funded the **5,000-meat
  forged ID** by autoselling **dense meat stacks (258 = 1,000 ea)** from Hagnk's, then Shore trip →
  *"Ah, Mr. Abercrombie"* → **diary (2044)**. Also: blessed **Cranny 48 → 30** (18W/0L), slope 36W/0L →
  base Mys **115**. Wrapped clean: full 15, drunk 19+overdrink=22, 45 adv banked.
- **Day 106 (2026-08-02): 🚗 Meatcar built + ⚰️ NICHE CLEARED + Black Forest mapped (the hard way).**
  Meatcar from storage engine + mall wheels → Shore vacation → quest revealed the real chain: **Black
  Market → forged ID (5k) → vacation → diary** (`mechanics/macguffin-quest.md` NEW). Blessed window:
  **gargantulihc dead → Niche 0** (Cyrpt 98 left), chipped Cranny to 48. **Black Forest (405, ML 123–133)
  charged tuition twice:** 1W/10L unprepped, then 0W/14L when a loop variant dropped Entangle/Mortar —
  vs **4W/1L with full prep**. Market progress ~20–25/50; beehive + sunken eyes collected. Economy:
  junk sale +5,058; slope 37W/0L. Wrapped clean: full 15, drunk 19+overdrink=22, 55 adv, meat 4,320.
- **Day 105 (2026-08-01): 🎉 LEVEL 11 + MacGuffin quest opened + Niche 50→27.** Blessed window in the
  Niche: 20W/0L. Then a deliberate **unblessed test: mandatory-blessing confirmed** (one win cost 51 HP,
  next fight killed us — documented in char state). Rest of day = the slope marathon: **96W/0L**, base
  Mys 96 → **104 = L11** on the last fights of the day. Council: father missing, **diary via Shore
  vacation** next. Wrapped clean: full 15, drunk 19+overdrink=22, 52 adv banked, meat 3,974.
- **Day 104 (2026-07-31): ⚰️ NOOK CLEARED (giant skeelton dead) + 🏰 CASTLE GROUND FLOOR unlocked + base
  Mys 88→96.** Blessed window: 16W/0L in the Nook → boss at ≤13 evil → **Nook 0** (Cyrpt 150 left, 3 zones).
  Slope leveling: **72W/1L** on Cannelloni-only (sodas dropped there covered most MP). Castle: dumbbell →
  dumbwaiter (choice 669) → **Ground Floor open**; basement giants 9W/1L with prep, but ground-floor ML ~112
  went 5W/3L — parked until L11. Airship-chest cocktails (salty dogs/daiquiris/sunrise/monkey wrench) covered
  the drink rack: exactly 19 + martini overdrink = drunk 22, full 15, **52 adv banked**, meat 5,200.
- **Day 103 (2026-07-30): 🎉🎉 TRAPPER DONE (Groar slain) + LEVEL 10 + beanstalk/S.O.C.K. + Nook 41→28.**
  Pulled the full **eXtreme outfit from Hagnk's** (no farming needed), ran the slope chain (17 turns, 15W/0L),
  climbed `cloudypeak2`: 3 yetis, then **Groar killed on attempt 2** (attempt 1 = one-shot lesson; fix was Buffy's
  Ghostly+Astral Shells, full HP/MP, fresh Fusilli, Entangle→Mortar→Cannelloni; spooky Cannelloni vs his cold).
  Fur → **fuzzy earmuffs**; 5 dense stacks → 5,000 meat; slope/peak substats → **L10**. Planted the storage bean,
  crossed the Airship (4 Spirits → El Cid → **S.O.C.K.**), chipped the **Nook to 28** in the blessed window.
  ⚠️ Two engine lessons (both now in HANDOFF): the **farm-loop death spiral** (Beaten Up + exhausted heal items
  silently no-op'ing = ~30 advs lost re-learning it) and **`ignorewarning=1` GET doesn't bypass stat gates**
  (POST `action=ignorewarning` does). Also fixed `drinking-strategy.md`: **vodka+soda is NOT a recipe** — the
  real rack is olive→martinis, orange→screwdriver, whiskey+soda. Wrapped clean: full 15, **drunk exactly 19 + 1
  vodka-martini overdrink = 22**, 47 adv banked, meat 3,194.
- **Day 102 (2026-07-29): 🎉🎉 RONIN ENDED — economy solved; Trapper ore+cheese delivered; base Mys 78→83.**
  Discovered **roninleft=0**: Hagnk's fully open (unlimited pulls), mall buys normal. Pulled **tiny houses (592) =
  FREE MP** from storage → the meat/MP bottleneck is GONE (backstage went **43W/0L** on free tiny-house MP). Pulled
  mining gear (owned from run #1), **mined 3 asbestos ore** (+2 diamonds → meat 779→3,603) and **farmed 5 goat
  cheese** at the Goatlet, **turned both in to the Trapper** (lift being repaired; next = eXtreme Slope for cold gear).
  Leveled hard: raw mys 6,113 → 6,909 (base 78 → 83, **L10 at base 85 is ~2 sessions off**). Full 15, drunk 22.
  Major HANDOFF update on the post-Ronin transition.
- **Day 101 (2026-07-28): Trapper quest scouted; meat wall confirmed; two doc errors fixed.** Talked to **John the
  Trapper** — needs 3 asbestos ore + 3 goat cheese. Tried a **Goatlet (271, ML68)** burst for cheese: **12 turns,
  9W/3L, ZERO cheese, went broke** — ML68 drains juice far faster than it pays. Retreated and **rebuilt meat in the
  Kitchen (388) on 0-MP Spear** (41W/3L, +421 meat → 779; base Mys 75 → 78). ⚠️ **Two corrections:** (a) **L10 is
  base 85 / raw ~7,225, NOT 5,625** — still L9 at base 78; the old number was wrong (fixed `leveling-zones.md`).
  (b) cap-detection = **charsheet.php "Liver of Steel" → 19** (used it; drank to 19 + overdrink). **Meat/juice is the
  hard bottleneck** — the mine's gems (need Mining Gear) are the likely fix; both council zones must wait for it.
- **Day 100 (2026-07-27): Sustainable grind toward L10; first full cap-19 night.** No new quest — pure leveling under
  a tight meat economy. Confirmed the **cap-detection method: `charsheet.php` contains "Liver of Steel" → 19**
  (api.php has no cap field; charpane `Tipsiness: X/Y` only shows at drunk>0). Settled the **sustainable leveling
  pattern**: build meat in the **Kitchen (388) on 0-MP Spear** (meat-positive), spend it on a **Backstage (243)** XP
  burst, fall back to Kitchen when broke — front-loads the ML58 turns. Base Mys **69 → 74** (raw 4,864 → 5,504),
  **L10 ~120 away.** Drank to **exactly 19 + one Monsieur Bubble overdrink → drunk 21** (Liver of Steel working).
  Fixed the cap-detection doc gap in HANDOFF + drinking-strategy. ⚠️ **Meat/juice economy is the run's bottleneck now**
  — big junk stacks are gone; MMJ (~1,600/day) outpaces income, so juice-heavy zones can't run all day.
- **Day 99 (2026-07-26): 🎉🎉 AZAZEL QUEST DONE → LIVER OF STEEL (drink cap 14→19).** Solved the **Sven Golly logic
  puzzle** (fixed answer; the 4 give-items were already in inventory from backstage auto-farming) → **unicorn**;
  hunted **Larry of the Field of Signs** on the Laugh Floor (242, ~23 turns) → **observational glasses** → equipped
  → **Talk to Mourn** (observational humor) → **lollipop**; turned all 3 in at Azazel's temple → **steel margarita →
  drank it → Liver of Steel**. Filled to the new cap **19** at day-end + one overdrink. Also **Level 9 → base Mys
  69** (raw 4,864; L10 at 5,625). ⚠️ **Severe connection instability all afternoon** (fetch dropped every ~1 min) —
  worked around it by farming the **Haunted Kitchen on 0-MP Spear in short synchronous ~13-turn bursts** (meat-positive,
  rebuilt 50→735 meat). Council still owes Cyrpt + Trapper. Walkthrough → `mechanics/friars-blessings.md`.
- **Day 98 (2026-07-25): 🎉 LEVEL 9 + Azazel's tutu (talisman 1/3) + clean wrap.** Sold vendor trash for +2,615
  meat (kept clovers/booze/gear). Farmed the **Laugh Floor (242)** with strict MP discipline → **5 imp air**, then
  turned in 5 imp air + 5 bus passes at **Moaning Panda Square (`pandamonium.php?action=moan`)** → **Azazel's tutu**.
  Ground the **Backstage (243)** 31W/1L → **Level 9** (raw mys 3,655 → 4,332). Council opened a **2nd quest: the
  Trapper** (Mt. McLargeHuge) alongside the Cyrpt. ✅ **Closed the day properly** (first clean wrap in a few days):
  spent adv to 1, then drink play (mix → exactly 14 → one brandy overdrink), full 15 / drunk 16 / 27 banked.
  ⚠️ Sven Golly puzzle clues did NOT appear in ~50 backstage combats — needs research before grinding the unicorn.
- **Day 97 (2026-07-24): Economy fixed + both Hell antechambers unlocked.** Started broke (~207 meat); **sold junk
  for +3,991** (built an inventory ID→name map first — the sellstuff row parse misaligns IDs). Filled full 15,
  bought a full MMJ stack. **Infernal Rackets Backstage (243) is now OPEN** at base Mys 55 — it's our best leveling
  zone (~10 raw mys/turn with strict MP; ML 58 so top to 40+ MP/fight, bail under 20 — the "keep MP full" discipline
  gave a **24W/0L** streak vs 21W/18L when juice ran dry). Farmed **13 bus passes (4699)** (need 5 for Azazel).
  Ground base Mys **55 → 60**, which **opened The Laugh Floor (242)** (drops imp air 4698 — the last talisman piece).
  ⚠️ **DRINK missed again** — was mid-farm at rollover (2nd time this week); banked adv carry but leave more daylight
  to wrap. New session started at adv 41, full/drunk 0. Updated `bonerdagon-boss.md` earlier; Azazel plan in
  `CURRENT_ASCENSION` priorities.
- **Day 96 (2026-07-23): 🎉 LEVEL 8 + Cyrpt quest opened; Necrotelicomnicon equipped.** Nearly sold the
  **Necrotelicomnicon (2494)** as 2,000-meat junk — it's a **Pastamancer off-hand: +10 Spell Damage**; equipped it
  (swapped 2H pool cue → 1H pasta spoon). Ground the **Haunted Kitchen** (49W/5L etc.) → **Level 8** (raw mys
  2,527 → 3,037); Council gave the **Cyrpt quest + Evilometer (4964)**. Grabbed **Brother Smothers's Spooky
  blessing** and tested the **Nook (264)**: first fight clean (4 rounds, untouched), but sustained it went
  **7W/23L** once MMJ + blessing ran out — **the Cyrpt is a L9–10 grind (ML 53–79, 199 evil to clear)**; only
  chipped Nook 50→41. Banked the rest safely in the Kitchen on **0-MP Spear (24W/1L)**. ⚠️ **Meat is now ~207** —
  daily MMJ buying outpaces income. Drink play again: exactly 14 + one martini overdrink.
  New/updated docs: `bonerdagon-boss.md` (Cyrpt sub-zones + level-gate reality), `friars-blessings.md`.
- **Day 95 (2026-07-22): Quiet grinding day + one genuinely useful lesson.** Unlocked and farmed the **Haunted
  Ballroom (395)** for 40 turns hunting the cellar trigger — ❌ **"We'll All Be Flat" (choice 921) needs
  "your father's diary"**, which we don't have, so the cellar stays shut (documented so we don't repeat it).
  Then the day's real finding: tried the **Haunted Gallery (394)** and went **3W/22L (1.2 raw mys/turn)** —
  the cause was **MMJ exhaustion**, not the zone. Restocked 16 MMJ and moved to the "beneath us" **Haunted
  Kitchen (388)**: **45W/3L, 5.0 raw mys/turn — 4× better**. ⇒ **Pick zones by WIN RATE, not ML**, and buy MMJ
  daily. Raw mys 1,977 → **2,527** (L8 at 2,809). EAT full 15 (86→112 adv), all adventures spent, and the drink
  play again: mixed a spritzer (+6 adv), filled to **exactly 14**, then one overdrink. Skipped the 2,500-meat L7
  guild skills (only had 1,512).
- **Day 94 (2026-07-21): 🎉 BIGGEST DAY OF THE RUN — Friars done, L7, pool ghost beaten, Spookyraven chain
  advanced twice, Crown finally worn.** Spent the 200 banked advs well. **Deep Fat Friars:** farmed dodecagram/
  candles/butterknife (66 turns) → `friars.php?action=ritual` → copse cleansed → **Council now has NO tasks left**
  (next quest is level-gated). **Pandamonium opened but is out of reach** — talisman zones need mainstat 55–60
  vs our 38, so **Liver of Steel is an L9–10 goal, correcting yesterday's optimistic note**.
  **Spookyraven:** beat the **pool ghost** — drank to *exactly 10* (+10 pool skill; ⚠️ past 10 costs **−2/point**),
  equipped a **pool cue from Hagnk's** (+3), practised to base 8 → **18 = guaranteed win** → library key →
  **necklace from the 5th writing desk** (21 turns) → delivered → 2nd floor → **powder puff/gown/shoes** farmed and
  delivered. Hit **Level 7** (raw mys 1,977), and Moxie reaching **24** finally let me wear the **Crown of the
  Goblin King: max HP 32 → 42**. Ended with the new drink play: **exactly 14, then ONE martini overdrink (+6 adv)**.
  New/updated docs: `pool-skill.md` (verified recipe + drunkenness trap), `friars-blessings.md`, `drinking-strategy.md`.
- **Day 93 (2026-07-20): 🚨 LOST DAY — self-inflicted.** Started superbly: 133 banked advs, EAT to full 15 →
  **194 adventures**, 14 MMJ, both meters filled. Then, over-correcting for Day 92's missed DRINK, we **drank FIRST**
  instead of last and let the loop step 13 → **16 drunk (cap is 14)**. That made us **falling-down drunk**: every zone
  returned only **Drunken Stupor** ("The Too-Much Booze Blues"), which **eats the adventure and drains substats**, and
  it **cannot be cured before rollover**. Stopped after 4 wasted turns. **190 adventures bank to Day 94** so nothing is
  destroyed, but the whole questing day (Friars, Spookyraven) was lost.
  **Lessons (now HARD RULE 1 in HANDOFF):** the EAT → ADVENTURE → **DRINK-LAST** order exists *precisely* so a
  drunkenness overshoot is harmless; and a `drunk < 14` check is not enough — **look ahead** (`drunk + size <= 14`).
  ✅ Positives salvaged from the lost day: the **Friar zones 539/540/541 are enterable at base Mys 33** (not gated
  as feared); and — since **mixing cocktails is still allowed while falling-down drunk** — we researched and
  **solved the drinking problem properly**: bought + installed the **Queue Du Coq cocktailcrafting kit**, verified
  **mixing costs 0 adventures**, and pre-mixed 3 cocktails for Day 94. New doc: `mechanics/drinking-strategy.md`
  (mix everything = +2.5 adv/bottle; and **you get exactly ONE overdrink per day** — spend it on your best bottle).
- **Day 92 (2026-07-19):** 🎉 **BOSS BAT SLAIN** — the Bat Hole is closed. ✅ **Sushi unlocked at L6 turned EAT into a
  106-adventure day** (2 sushi + burrito = full 15; sushi ≈13 adv each, 121 more in storage at 1 pull/day).
  Opened wall 2 with a pulled sonar → **Beanbat Chamber (33)**, farmed the 3rd sonar there in 8 turns (**6W/2L —
  the zone that used to one-shot us**), opened the **Lair (34)**, and killed the **Boss Bat in 2 rounds untouched**
  with Springy Fusilli up. Loot: **batskin belt (191)** → equipped in the empty acc3, **+3 max HP**.
  Now **HP 26 / MP 68 / Muscle 20 / Moxie 16 / raw mys 1,130 / meat 2,533**.
  ⚠️ **Two process failures worth remembering:** (1) matching the string `Boss Bat` **false-positived on the "beefy
  bodyguard bat"** (whose text says the Boss chose him) — we claimed a kill the Council disproved; match
  `fighting The Boss Bat` and verify via `council.php`. (2) A farm loop **ran through rollover**, so **DRINK was
  missed** (drunk 0) and 133 adventures banked — do DRINK before long loops.
  Council now wants only the **Deep Fat Friars**; **Lady Spookyraven's Necklace** (Billiards Room) also open.
- **Day 91 (2026-07-18):** 🎉 **LEVEL 6 + SPRINGY FUSILLI + KNOB GOBLIN KING SLAIN.** Fixed the leveling problem by
  **measuring** instead of guessing: the Spooky Forest had collapsed to 1.9 raw mys/turn, so found the
  **Haunted Kitchen (snarf 388, ~4.3/turn, 2-round kills)** — unlocked by reading the **Spookyraven telegram (7304),
  which was already in inventory** — and the **Limerick Dungeon (snarf 19, 0% COMBAT, cannot die)**. Ground to
  **Level 6** (raw mys 672 → 1,010). Funded the **1,750-meat Springy Fusilli** by discovering two things:
  **Hagnk's holds a separate meat purse** (749 meat withdrawn via `action=takemeat`) and the starter-sack
  **porquoise gems autosell for 500 each** (sold 2 of 4). Then **beat the Goblin King in 3 rounds, untouched** —
  same disguise+perfume as yesterday's loss, the *only* change was Fusilli's initiative. Rewards: **Crown of the
  Goblin King (⚠️ needs 20 base Moxie — can't wear it yet, we have 14)**, 2 dense meat stacks (**not usable —
  autosell ~850 ea**), **Cobb's Knob lab key**. Council → **Deep Fat Friars**. EAT full 15 (88 adv), all adv spent,
  drunk 16. ⚠️ Win rate collapsed 30W/10L → 5W/15L once MMJ ran out — **MP is now the limiter; buy ~10/day**.
  New doc: `mechanics/leveling-zones.md`.
- **Day 90 (2026-07-17):** **Cobb's Knob cracked open; Goblin King attempted and lost.** Council gave the L5 quest +
  **Cobb's Knob map**; got the **encryption key** in the **Outskirts (snarf 114, ML 1–2, ~11 turns)** → decrypted →
  Knob open (257/258/259/260). Bought the **Harem disguise** (veil 306 + pants 305 in the mall — **3 different items
  dodge the 1-pull/day rule**) + farmed **perfume (307)**; wore it to the **Treasury for +500 meat** (harem-girl
  salary, once/day). **Throne room: LOST** — correct disguise + perfume, but the King (**Init 100 / Attack 53**)
  one-shot our 15 HP before round 1. 🔍 **Major correction: yesterday's "everything one-shots me" was partly MY BUG** —
  a **stale api HP read (`hp=23/15`)** made the heal-gate skip, so we entered fights half-dead; at an honest full HP a
  Harem Guard died in 2 rounds untouched. Fixed with an `STsafe` (`hp<=maxhp`) re-read guard. Also learned the Knob's
  **stat gate (base mainstat 25)** and that **Beaten Up debuffs you under it** (the "brandish their swords" no-op that
  spun a loop 20 times). **Milk of magnesium = +5 adv on next food** (the "Got Milk" effect is retired — no icon).
  EAT full 15 (**88 adv**), Harem grind 4W/10L, all adv spent, **drunk exactly 14**. Still L5 (raw mys 672/841).
- **Day 89 (2026-07-16):** 🎉 **GUILD CRACKED + first full food meter + Level 5.** Found the long-standing "not a full
  member" blocker was a **one-shot quest, not a level gate**: Gorgonzola (`guild.php?place=challenge`) → tame the
  **poltersandwich** in the **Haunted Pantry (snarf 113, choice 544, ~5 safe turns)** → **full membership**. Bought
  **Cannelloni Cannon + Entangling Noodles + Lasagna Bandages** (1,500 meat) from Brie — combat is transformed.
  **EAT solved:** 1 insanely spicy bean burrito (316) + 12 oranges = **full 15** (adv 53 → 78). Ground the Spooky
  Forest → **Level 5** (raw mys 565), meat 322 → 1,505, all adventures spent, drunk 15. ⚠️ **Bat Hole failed twice**
  (Guano Junction 31 + Batrat Burrow 32): bats **get the jump and one-shot us at 13 HP before round 1** — a max-HP /
  initiative wall, not a skills wall. Wall 1 is down (snarf 32 open). Discovered the **Ronin mall/pull rules**
  (buys → Hagnk's, 1 pull per item per day) and wasted ~520 meat on duplicates already in storage.
  New docs: `mechanics/guild-membership-and-skills.md`, `mechanics/bat-hole-boss-bat.md`, `mechanics/ronin-softcore-rules.md`.
- **Day 88 (2026-07-15):** **Typical Tavern rat problem COMPLETE.** Talked to bartender Ear'l Ender → explored the 5×5
  **Tavern Cellar** grid. ⚠️ Mechanic: the **1st special square = the rat faucet** (choice 512 — LEAVE it alone), the **2nd =
  Baron von Ratsworth** (defeat him → **Baron's monocle, item 1312, +item!**), THEN turn off the faucet (512 opt 1) and
  **report to the bartender** to close the quest. Council now points to the **Boss Bat**. Leveled toward 5, equipped the
  monocle, DRANK vodka (drunk 12). ⚠️ EAT under-filled (full 3 — food shortage, see char state). ADV/DRINK done.
- **Day 87 (2026-07-14):** EAT solved (oranges/lemons — sushi is level-gated), equipped **Marcellus the Mosquito**,
  **completed the mosquito larva quest** (Spooky Forest → Arboreal Respite choice 502 opt 2 "Explore the stream" → 505 opt 1
  → larva → Council, +~550 meat), leveled **3 → 4** in the Spooky Forest, DRANK 4 vodka (drunk 12). Council now points to the
  Typical Tavern (Rat Problem). EAT/ADV/DRINK all done.
- **Day 86 (2026-07-13) — 🏆 WON run #1 & ASCENDED.** Restocked (60 MMJ), then cracked **NS form 2** using the fixed engine
  (varying `for=` HP reads + full-maxHP entry + Entangle stun + Cannelloni + aggressive heals). Reached **form 3**, lost to it
  → unlocked the **Bear Verb Orgy** at The VERY Unquiet Garves (snarf 58) → got the **Wand of Nagamar** (9 fights). Re-fought
  the NS with the wand → **beat all 3 forms**, **broke King Ralph's prism** → quest complete → astral gash. **Ascended
  Softcore** (Pastamancer / Opossum / Standard; permed Pastamastery; astral chapeau).
  **Then opened run #2:** Toot Oriole starter package (letter from King Ralph → pork elf goodies sack = jewels),
  equipped gear, ground the **Dire Warren (240)** to **Level 3** (Council quest = mosquito larva now active). EAT/DRINK
  couldn't be filled (finicky sushi-eat + flaky connection; no booze source unlocked yet).
  *(Run #1's full session log Days 28–86 is archived in `runs/ascension-01-pastamancer.md`.)*
