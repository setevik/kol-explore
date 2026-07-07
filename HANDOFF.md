# KoL Session Handoff (latest as of Day 81 / 2026-07-07)

## 🔑🔑 Day 81 (2026-07-07) — KEYS 2/6 → 4/6. Jarlsberg + Richard's star key bagged; 8-Bit digital-key grind started. (READ FIRST)
- **End state: Level 17, Mys 286 (buffed), meat ~11,750, full 14/15, drunk 12/14 (clean, 2 Fog), adv 0 spent (31 rolled over from drink).**
  EAT ✅ (2 sushi + 1 jerky → full 14) · ADVENTURE ✅ (spent ALL ~95 turns to 0) · DRINK ✅ (2 Fog Murderers).
- **🔑 TOWER KEYS: now 4 of 6.** ✅ Boris's · ✅ **Jarlsberg's (NEW)** · ✅ skeleton key · ✅ **Richard's star key (NEW)**.
  Remaining: **Sneaky Pete's** (1 more Daily Dungeon token → DA machine row 95, item 284) + **digital key** (8-Bit grind, see below).
- **✅ Daily Dungeon run worked great** — full 15-room clear (`adventure.php?snarfblat=325`), only ~4 monster fights; pole/lockpicks/
  Boring-Doors-ring made traps+doors free. Final chest → 1 fat loot token → **DA Vending Machine row 94 = Jarlsberg's key (item 283).**
  (Boris's=282/row93, Jarlsberg's=283/row94, Sneaky Pete's=284/row95. 1 token/day so Sneaky Pete's = tomorrow's DD run.)
- **✅ Richard's star key (non-daily, done today):** farmed **Hole in the Sky = `adventure.php?snarfblat=83`** (atop beanstalk;
  ⚠️ 81=Airship, 83=Hole; snarf **15 is the SPOOKY FOREST — wasted ~20 turns there before I caught the mistake**). Monsters drop
  **star (654) + line (655)**; got 13 stars + 7 lines in ~15 fights. **Craft the key at `shop.php?whichshop=starchart` row 141**
  (consumes 8 stars + 7 lines; ⚠️ `inv_use` the star chart says "not implemented" — MUST use the shop URL).
- **✅ 8-Bit Realm OPENED + digital-key grind STARTED (⚠️ handoff/memory were WRONG — NOT 30 white pixels anymore):**
  Post-2023 revamp the digital key = **earn 10,000 "Score" points in the 8-Bit Realm → claim from the Treasure House.**
  - Got the **continuum transfunctioner (item 458)** free from the **Crackpot Mystic** (`place.php?whichplace=forestvillage&action=fv_mystic`
    → choice 664 opt 1). **Equipped it** (acc2, bumped a rabbit's foot) → **Inexplicable Door** → `place.php?whichplace=8bit`.
  - Ground **Vanya's Castle (snarf 565)** ~50 fights: **Score 200 → 3,350** (~63 pts/fight). ⇒ 10,000 ≈ **~155 fights = multi-day.**
    **Points PERSIST.** Score shows in the **charpane** ("Score: N"), NOT on the map/treasure pages. Treasure House
    (`...&action=8treasure`) = chests [10k][20k][30k]; the **10k chest = digital key.** Grind it down on future days.
- **⚙️ Engine notes (this session):** rebuilt a fetch-driven combat/farm engine each launch. **Add a `window._abort` flag** —
  I had to kill a mis-targeted loop by nuking `window.fetch` (crude). MP topping via **tiny houses (592, free, had 58)** worked well;
  8-bit monsters die in 2 rounds (~16 MP) WITH MP topped — a no-MP loop makes them look invincible (they're not; finish w/ torpedoes 630).
- **Still to do for the tower:** Sneaky Pete's key, finish digital key (6,650 more pts), **Wand of Nagamar's 4th letter "N"** (have W/A/D),
  the **3 Contests** (Registration Desk — prep init+stat+element FIRST; quest is now LIVE per charpane), hedge maze, 5 walls, NS (3 forms).
- Consumables spent: ~2 Fog bought+drunk, some MP sodas, a stack of tiny houses; still flush (58→~40 tiny houses, ~20 sodas, 46 torpedoes, 65 heal scrolls, ~131 sushi).

## 🏰 ENDGAME UNLOCKED — Naughty Sorceress (final quest) is available; here's the gap to ascension. (READ FIRST)
- **✅ ALL Council quests are DONE** (verified: larva/tavern/Bat/Knob/Friars/Cyrpt/Bonerdagon/Trapper/Highlands/Giant/Manor/
  MacGuffin/War). The **Council has given the FINAL quest**: defeat the **Naughty Sorceress** + free **King Ralph XI**. Her
  **Tower is OPEN** (`place.php?whichplace=nstower`) — currently at step 1, the **Contest Registration Desk**.
- **What's missing to COMPLETE the final quest (= the ascension gate):**
  1. **3 Contests** (Contest Desk = choice **1003**, action `ns_01_contestbooth`): everyone does **Fastest Adventurer** (needs
     +init) + one random **stat** test + one random **elemental-damage** test. **One-shot evaluation** — prep modifiers FIRST.
  2. **The SIX tower-door keys — 2 of 6 DONE (Day 80):**
     - ✅ **Boris's key** (got it) / ❌ **Jarlsberg's** / ❌ **Sneaky Pete's** — from the **Daily Dungeon = adventure.php?snarfblat=325**
       (inside the Dungeoneers' Assoc. in the Big Mountains; **1 full run/day** = 15 rooms → **1 fat loot token**). Trade tokens at
       the **DA Vending Machine** (`shop.php?whichshop=damachine`): **Boris's key = row 93, Jarlsberg's = row 94, Sneaky Pete's =
       row 95, each 1 token.** So the other 2 hero keys = **2 more daily DD runs.** ⚙️ **DD tools (bought, keep them): eleven-foot
       pole (6302) skips traps [choice 693 → option 2], ring of Detect Boring Doors (6303, equipped) + pick-o-matic lockpicks (280)
       for doors [choice 692 → option 3]; chests = choices 690/691 → open (opt 1); final room 15 chest = choice 689 → "Open it!".**
       Traps/doors are FREE (no adv) with tools; only monster/chest rooms cost a turn (~full run ≈ 6-8 adv).
     - ✅ **skeleton key** (assembled) — recipe = **skeleton bone (163) + loose teeth (187)** via meat pasting
       (`craft.php?mode=combine&action=craft&a=163&b=187`). Bones are 100 meat in the mall.
     - ❌ **Richard's star key** — **Hole in the Sky**; recipe = star chart + 8 stars + 7 lines. **Have: star chart ✓, 1 star, 1 line** — farm more.
     - ❌ **digital key** — **8-Bit Realm** (need ~30 white pixels). **Have 0.**
  3. **Hedge Maze** (topiary golems), then the **5 tower levels** — combat gimmicks. Wall of Skin = 50 HP, 100% dmg-resist
     (all hits → 1 dmg), must kill in <5 turns → needs the **Wand of Nagamar** (parts owned: **ruby W ✓, metallic A ✓, heavy D ✓** —
     probably just need to assemble it / a 4th piece). Then the shadow + walls of Meat/Bones.
  4. **The Naughty Sorceress (3 forms)** + **break King Ralph's prism** → quest done → astral gash → **can ascend**.
- **Readiness concern:** Level 17 / Mys 282 Pastamancer — the tower walls + NS forms are tough; may need better burst damage/gear.
- **Recommended next sessions:** (a) gather the keys (start Daily Dungeon daily for hero keys; quick trips to Hole in the Sky +
  8-Bit Realm; buy a skeleton bone), (b) assemble the Wand of Nagamar, (c) then run the tower. Ascension plan itself = go
  **Softcore first** (see `mechanics/ascension.md`), NOT Casual. The vestigial "My Other Car Is Made of Meat" is irrelevant to this.

## 🔥🏆 Day 80 (2026-07-05) — TWIN PEAK COMPLETE → Highland signal-fire quest DONE.
- **End state: Level 17, Mys 282, meat ~11,600, full 14, drunk 12/14 (clean, 2 Fog), adv 32 banked.** EAT ✅ · ADVENTURE ✅ · DRINK ✅.
  Woke broke (~344 meat) → farmed the Airship (with +item gear + Fat Leon's still up, ~+54% item) back to ~12k; lucrative.
- **🏆 "There Can Be Only One Topping" (Highland 3 signal fires) is COMPLETE** (all lit; now in completed quests). Reward from the
  Highland Lord (`place.php?whichplace=highlands&action=highlands_dude`): a **Misty Robe**.
- **How Twin Peak finished (the last 3 lodge steps):** The pantry (+item) was done Day 79. This session the lodge (choice 606 @
  snarf 297) kept offering **only "Wait -- who's that?" (option 4)** — which means **the crude + stench steps were ALREADY done**
  (they only unlock the 4th when all 3 firsts are complete; must've been handled in earlier sessions). So I never needed the
  stench gear/crude after all. Option 4 → **choice 610 "Catch a Killer" → "Pursue your double" (option 1)** needs **+40% combat
  initiative** to catch your double (reward: gold wedding ring). I lacked the init (Springy Fusilli skill 3015 gives some but
  ⚠️ can't be cast mid-choice; the chase failed) → dumped me to **choice 618** with two options: opt 1 "lay one stone at a time"
  (keep trying) vs **opt 2 "Burn this hotel to the ground" = valid alternate completion** (per official wiki — lights the fire,
  forfeits the gold ring). **Chose opt 2 → Twin Peak signal fire LIT.** (If you ever want the gold-ring version: get +40% init
  BEFORE triggering the lodge, cast Springy Fusilli out of any choice, then option 4 → 610 → pursue.)
- **🧾 ONLY remaining active quest: "My Other Car Is Made of Meat"** (guild) — still shows open despite the Bitchin' Meatcar (134)
  being built long ago. Almost certainly vestigial/closeable: next session try visiting the guild car-guy / Untinker or USE the
  car to formally close it. Low priority — essentially the last loose end. War, Nemesis, and the Highlands are all DONE.
- **📌 Research rule (user, Day 80): use the OFFICIAL wiki only** (`wiki.kingdomofloathing.com`) — not third-party fan sites.
  WebFetch 403s on it; use `WebSearch` with `allowed_domains:["wiki.kingdomofloathing.com"]`, or verify facts in-game (item/effect
  descriptions, char sheet) which is authoritative.
- Gear note: still wearing the +item loadout (monocle 1312 + 2 lucky rabbit's feet 1485 + spiky turtle shield 3926 offhand +
  Greek Pasta Spoon 2561). Fat Leon's (+20% item) from Buffy still had ~300 turns — great for meat farming until it lapses.

## 🏆🔓 Day 79 (2026-07-04) — NEMESIS QUEST COMPLETE + Twin Peak +item WALL CRACKED.
- **End state: Level 17, ~344 meat (spent big on gear), full 14, drunk 12/14 (clean, 2 Fog), adv 0.** EAT ✅ · ADVENTURE ✅ · DRINK ✅.
- **🏆 "Me and My Nemesis" is DONE** (now in completed quests). Solved the volcano lava maze + beat the Spaghetti Elemental.
  - **LAVA MAZE solver (`volcanomaze.php`), fully cracked — reusable method:** cells carry alt-text `(X,Y - Platform/Lava/Goal/You)`;
    moves are AJAX `volcanomaze.php?move=X,Y&ajax=1` returning JSON `{won, pos:"x,y", show:[platform indices]}` where index = **y*13+x**.
    ⚠️ **Movement is 8-DIRECTIONAL (diagonals allowed!)** — this was the key; 4-dir BFS finds no path. The maze is **deterministic**
    (reset via `?jump=1` = "Swim to Shore" gives the SAME 5 configs + start (6,12)); configs cycle by move-count mod 5. Method:
    learn all 5 configs (reset → navigate frontier w/ known configs → 1 exploratory move to reveal next), then **space-time BFS**
    over (x,y,t): move (P,t)→(Q,(t+1)%5) valid iff Q is 8-adjacent to P and Q∈C_t. Goal (6,6). My solution was 64 moves. Moves cost
    0 HP (earlier "0 HP" was lava-falls from bad greedy moves). Boss after maze via `volcanoisland.php?action=tniat`.
- **🔓 TWIN PEAK "Seeking" (+50% item) step = DONE.** How I cleared the wall (repeatable):
  - **Gear (+34%):** monocle 1312 (+10, acc) + **2 lucky rabbit's feet 1485 (+7 ea)** + **spiky turtle shield 3926 (+10, OFFHAND** —
    epic spoon is 1-h so offhand is free; needs 50 Musc). ⚠️ shield cost me 6,446 meat (pricey — drained my meat).
  - **+ Fat Leon's Phat Loot Lyric (+20%) from a FREE buffbot: "Buffy" (#1889009)**, Clan of Meat and Loathing. **Just kmail Buffy
    the buff name** (`sendmessage.php` POST: towho=1889009, message="Fat Leon's Phat Loot Lyric", sendmeat=1) — it auto-casts within
    seconds. Gave **450 turns**. ⇒ total **~+54% item**, clears the +50% pantry. (Do NOT use obeliks buffbot — it wants a password login.)
  - **Lodge = choice 606** at snarf **297** (fires among combats; combats are TOUGH — beat me up once at low HP; heal first, open with
    Stuffed Mortar Shell 3007). Each visit shows **ONE room** (option N) + Leave (option 6). **Pantry = option 2**; success text =
    "unable to process what you've just heard." **"Wait -- who's that?" (4th/init step) = option 4** (needs the other 3 done first).
- **⏳ TWIN PEAK REMAINING (3 lodge steps) for next session:** ① **bubblin' crude** step (have 42 crude — free, just need its room);
  ② **stench** step "Dog with no nose" (need **+4 stench resist** gear — cheap, but I was broke; buy some); ③ **initiative** step
  "Wait -- who's that?" option 4 (cast **Springy Fusilli** skill 3015 for +init; needs first 3 done). Lodge gives 1 random room/visit
  → turn-hungry; go in with meat (for stench gear + Fog Murderers), full HP, and Fat Leon's still up (~440 turns left). Then the 3rd
  signal fire lights → finishes the Highland "There Can Be Only One Topping" council quest.
- Other: **"My Other Car Is Made of Meat"** guild quest still shows open despite the built Meatcar (likely vestigial/closeable — low pri).

## 🌋🧩 Day 78 (2026-07-03) — NEMESIS FINALE ~90% DONE; stuck at the final LAVA MAZE.
- **End state: Level 17, Mys 276 (265 base), meat ~17,500, HP full, drunk 12/14 (clean, 2 Fog), ~32 adv banked.**
  EAT ✅ (7 jerky) · ADVENTURE ✅ · DRINK ✅. Leveled twice from cult fights.
- **🎯 NEXT SESSION TOP PRIORITY = finish the Nemesis: solve the LAVA MAZE → final boss.** I'm parked at the maze
  (`volcanomaze.php`) in the volcano's heart. **The maze is a JS/AJAX click-grid that only renders inside the game
  frameset (mainpane)** — `fetch()` returns just "A Volcanic Cave YOU (Instructions: Click adjacent rocks...)" with no
  readable grid, and navigating the tab straight to `volcanomaze.php` redirects to game.php. **Research the maze solver
  first** (WebSearch "KoL volcanic cave maze solver / volcanomaze"; it's a shared grid that shifts periodically; moves are
  AJAX `volcanomaze.php?move=`). May need to drive the mainpane frame's DOM (read cell classes, click the path cells).
  After the maze = the final **Nemesis boss fight** → quest complete.
- **✅ VERIFIED FULL WALKTHROUGH of the lair up to the maze (Pastamancer) — do this exact sequence next time:**
  1. **Access:** `use` the **secret tropical island volcano lair map (item 3291)** → you "arrive" at the island. The lair
     is a dedicated page **`volcanoisland.php`** (NOT place.php/adventure.php). Since 2015 the map = direct access; no
     Poop Deck / pirate quest needed. All `volcanoisland.php?action=...` links **require `&pwd=`** or you get "Something is
     just not right."
  2. **Island areas:** **Protestor** = `action=npc` (free intro/flavor). **Temple Portico** = `action=tuba` (outer
     cultist combats). **Temple** = `action=tniat` (inner temple, needs the robe).
  3. **Get 5 cult memos:** adventure the **Portico (`action=tuba`)** — "evil spaghetti cult neophyte" fights drop **cult
     memos** (~1 each, plus "half of a memo" halves). Weak monsters.
  4. **Decode:** `use` a **cult memo** (item 3883) once → consumes memos, produces **decoded cult documents (item 3884)**.
  5. **Learn the summon:** `use` **decoded cult documents (3884)** → **learn skill Bind Spaghetti Elemental (skill 3041).**
  6. **Bind the thrall:** cast 3041 (`runskillz.php?action=Skillz&whichskill=3041&ajax=0&quantity=1&pwd=`). **Costs ~229
     MP** — top MP with sodas first. Charpane then shows "... the Lvl. 1 Spaghetti Elemental".
  7. **Level the thrall to 3 (⚠️ KEY GOTCHA):** fight Portico cultists **using WEAPON ATTACKS (action=attack), NOT
     Cannelloni** — the thrall only gains XP if it **acts** in combat, and Cannelloni one-shots the monster before it can.
     Took ~4 acting-fights to hit Lvl 2, ~16 total acting-fights to hit Lvl 3. (Shortcut item exists: "experimental carbon
     fiber pasta additive".) Rest at campground when HP<120 (weapon combat takes hits).
  8. **Get the robe:** at thrall Lvl 3, keep fighting Portico cultists — the thrall **steals a spaghetti cult robe (item
     4175)** within a few fights.
  9. **Equip robe + enter temple:** the robe is an **ACCESSORY** (unequip a rabbit's foot first — 3-slot cap). Then
     `action=tniat` → "you pull up the hood" → you're inside.
  10. **Clear the inner temple:** adventure **`action=tniat`** — "evil spaghetti cult zealot" fights (**TANKY, mana-hungry**
      — keep MP topped; ~full-MP Cannelloni or they drag 14 rounds). After clearing, a noncombat fires: you find the altar,
      descend a ladder, chase the Elemental into the volcano → the **lava maze**.
- **Combat/econ notes:** bought MP sodas twice (temple zealots burn ~100+ MP/fight); Fog Murderer DRINK worked clean (2 =
  drunk 12). Weapon-attack farming at Airship (snarf 81) to spend down leftover turns worked without timeouts at ~20/batch.



> 📓 **Diary vs. Handoff:** daily diaries (`my-adventures/`) are **lore-friendly, in-character stories** (see NEW_SESSION_PROMPT for the style rule). **This HANDOFF is the operational manual** — all the item IDs, snarfblats, choice numbers, fetch URLs, engine code, and meat math live HERE, not in the diary.

## 🌋 Day 77 (2026-07-02) — NEMESIS LAIR FOUND & OPEN; Level 17; ~210-turn backlog cleared.
- **End state: Level 17, Mys 273 (262 base), Musc 191, Mox 184, meat ~39,600, HP 294/294, MP low, full ~14, drunk 12/14
  (clean — drank exactly 2 Fog), adv 32 banked.** EAT ✅ (7 jerky) · ADVENTURE ✅ (burned the whole ~210 backlog) · DRINK ✅.
  (Big adv pile because the interrupted Day 76 banked all its turns.)
- **🎯🌋 NEXT SESSION TOP PRIORITY = the NEMESIS FINALE (lair is now OPEN).** Farming the Airship through the bounty-hunter
  waves (mob penguins → tougher assassins) auto-completed the "price on your head" phase and dropped a **map to the secret
  tropical island volcano lair.** Quest log: *"...found a map to the secret tropical island volcano lair, it's time to take
  the fight to your foe."*
  - **⚠️ ACCESS UNRESOLVED — research first.** Per wiki, you take the map to a **navigator on the Poop Deck** (pirate ship).
    `place.php?whichplace=poopdeck` = "Invalid place" for us, and we did the **Island War** (not the pirate quest), so the
    Poop Deck may be locked/renamed. Next session: figure out the real access (WebSearch "Secret Tropical Island Volcano
    Lair" access; check the map item's [use]; check the pirate cove / airport / a new island place). Wiki page:
    "Secret Tropical Island Volcano Lair (Pastamancer)".
  - **Pastamancer finale steps (from research, verify live):** in the lair you fight **cult "middle-managers"** → collect
    **5 encoded cult documents**; use them to summon/link a new **pasta thrall**; **level that thrall to 3 (use it in ~9
    combats)** so it **steals a spaghetti cult robe**; **equip the robe** to pass as a cultist and enter the inner lair →
    final confrontation. **This needs a full fresh day of turns.**
- **🏔️ Twin Peak pantry step = CONFIRMED WALLED today.** The lodge NC is **choice 606**; "Search the pantry" = option 2,
  "Leave" = option 6. It checks **≥+50% item drop (non-familiar).** Our max cheap gear = **+24%** (monocle 1312 +10 + 2
  lucky rabbit's feet 1485 +7 ea; only 3 accessory slots). **Radio KoL Maracas (+15%, item 1664) costs 500,000,000 meat** —
  not an option. Realistic unlock still = a **Fat Leon's Phat Loot Lyric (+20%) buffbot cast** + ~6% filler. Twin Peak's
  lodge shares snarf **297** with combats (Troll Twins etc.) — the room NCs fire among fights.
- **Farming note:** with MP dead and no soda budget for a 200-turn grind, **pure weapon attacks with the Greek Pasta Spoon
  of Peril one-shot/at-worst-few-shot Airship (snarf 81) monsters** — leanest combat (`fight.php` action=attack). Big batches
  time out the CDP call at 45s but **the turns still execute**; just re-read charpane after and fire again (~30-50 turns/cycle).
- Highland fires still 2/3 (Twin Peak = the holdout). Ascension/hardcore plan unchanged (see `mechanics/ascension.md`; not
  ascendable until the questline + NS Tower are done).

## 🏆 Day 75 (2026-06-30) — NEMESIS BOSS SLAIN (Spaghetti Elemental); quest advanced to the bounty/lair-search phase.
- **Rollover DID happen** (fresh day after Day 74). **End state: Level 16, Mys 268 (257 base), Muscle 187, Moxie 181,
  meat ~38,075, HP 296/297, MP 43/442, full 14/15, drunk 18/14 (over-full), adv 47 banked.** EAT ✅ · ADVENTURE ✅ · DRINK ✅.
- **🧭 LONG-TERM GOAL (user, Day 75): farm karma via HARDCORE ascensions + Hardcore perms.** Karma BANKS across runs (HC
  =211 vs Normal 111). BUT this only kicks in *after* we **finish the current run** (Council quests → NS Tower/six keys →
  free King Ralph → ascend), so **Twin Peak + Nemesis + the tower are the on-ramp, not a detour.** ⚠️ HC bans the mall /
  buffbots / Hagnk's pulls — brutal for our mall-dependent style, so the plan is **Softcore first** (perm Pastamastery +
  meat/sauce skills to get self-sufficient), THEN escalate to Hardcore. Full plan + perm-priority list in `mechanics/ascension.md`.
- **🎯🏔️ NEXT SESSION TOP PRIORITY = TWIN PEAK (per user, Day 75).** It is NOT "gated/impossible" — it's a 4-step zone
  (`adventure.php?snarfblat=297`, "Lost in the Great Overlook Lodge"). Each step is a SEPARATE noncombat checking ONE
  modifier, so **swap gear per step** (never need +item and +stench at once). Steps (first 3 any order):
  1. **"Dog with no nose" (Room 237) — need +4 stench resistance.** TODO: buy cheap stench-res gear OR get a buffbot
     elemental-resistance buff (Astral Shell / Elemental Saucesphere). Easy once sourced.
  2. **"Seeking" (pantry) — need ≥+50% item drop (monsters, EXCLUDING familiars).** ← the only hard step. **Plan:**
     gear = **monocle (+10%) + 2 lucky rabbit's feet (+~14%) = ~+24% (ALREADY BOUGHT/equipped-ready)**; + **Fat Leon's
     Phat Loot Lyric (+20%, from a free Accordion Thief CHAT BUFFBOT)** → ~+44%; + **~6% filler** (a +item hat e.g. Tam
     O'Shanter, or a +item potion) → clears +50%. Verify exact % with the in-game **Maximizer** (`/maximizer`-style) — the
     charsheet doesn't show item%. Buffbot is the realistic unlock; gear-only +50% is marginal for our budget.
  3. **"Bring-your-own J" — use 12 bubblin' crude (item 5789) → jar of oil, follow the music. ✅ HAVE 42 crude already.**
  4. **(last, after the other 3) "Wait — who's that?" — need +40% combat initiative.** ✅ EASY: cast **Springy Fusilli**
     (have it) + a little init gear. Then pursue your double.
  - **Prep DONE Day 75 (no turns spent):** bought 2 lucky rabbit's feet (have 2), confirmed 42 bubblin' crude, confirmed
    Springy Fusilli known. **Remaining to source next session: +4 stench-res gear/buff, Fat Leon's buffbot cast, ~6% item filler.**
  - Completing Twin Peak lights the **3rd signal fire** → finishes the Highland Lord's "There Can Be Only One Topping."
- **🎯 ALSO each session: quick-check Asiago (`guild.php?place=scg`) for the Nemesis LAIR reveal** (lower priority — it's a
  **scout-search delay**, opens on its own/"will alert you", likely a future rollover). When it opens: the actual Nemesis'
  Lair (per research: collect ~5 cult memos, decode, defeat a cultist for a **spaghetti cult robe** disguise, equip to enter, final fight).
- **✅ DONE TODAY — beat the cave boss in one go.** Full verified walkthrough now in `mechanics/nemesis-quest.md`. Quick map:
  - Cave is in the **Big Mountains** (`place.php?whichplace=mountains`). Before clearing it's action `mts_caveblocked`;
    after, the zone becomes its own place **`whichplace=nemesiscave`**.
  - **Entrance puzzle = choice 1087.** The wall engraving is knotted noodles → **option 3 ("Entangle the wall with
    noodles")** opens it, then **option 1 ("Enter the doorway")**. Costs 0 adv.
  - Inside: **The Fungal Nethers = snarfblat 452** (fight "angry mushroom guy", ~45% drop **fizzing spore pod**; need 6).
  - **Rubble = action `nmcave_rubble` → choice 1088 → option 1** ("Blast the tunnel clear with fizzing spore pods")
    consumes the 6 pods, opens the boss room. 0 adv.
  - **Boss = action `nmcave_boss`. Monster: Spaghetti Elemental (~220 HP).** Killed in 3 rounds: **Stuffed Mortar Shell
    (skill 3007) → Cannelloni Cannon (3005) ×2**, wielding the Greek Pasta Spoon of Peril (2561). It never hit me.
    (Research warns: do NOT add Myst buffs — boss scales off your Myst. Existing gear is fine; my 257 base was plenty.)
  - **Reward: Colander of Em-er'il** (epic hat, Power 100): **+11 Myst, Regenerate 2-6 MP/adv (Pastamancer only)**, part
    of the "Legendary Regalia of the Pasta Master" 4-piece outfit. No +item bonus.
  - Turn in at Asiago → he says it's NOT the artifact he wanted → quest moves to the **lair-search/bounty phase**:
    "disreputable" **Mob Penguin hitman** wandering monsters now attack you while adventuring anywhere.
- **Pastamancer combat skill IDs (confirmed in-fight):** Spaghetti Spear **3020** (0 MP), Utensil Twist **3025** (1),
  Ravioli Shurikens **3003** (4), Entangling Noodles **3004** (3), Lasagna Bandages **3009** (6, heal),
  Cannelloni Cannon **3005** (8, main nuke), Stuffed Mortar Shell **3007** (8, delayed ~2× opener). Combat action:
  `fight.php` POST `action=skill&whichskill=ID&pwd=` (or `action=attack`).
- **⚠️ CORRECTIONS to old handoff/memory notes:**
  - **Fog Murderer = item 6682, NOT 238.** And it's **+6 drunkenness each** (not +3). So only **2** = drunk 12; **3** =
    drunk 18 (overshoots the 14 limit — harmless, all adv still granted, but stop at 2 next time). Drink:
    `inv_booze.php?which=1&whichitem=6682&pwd=`. Buy: `shop.php?whichshop=hiddentavern&action=buyitem&whichrow=175` (~500 ea).
  - **unidentified jerky (2620) = +6 adv each** (not +8). Ratio still good (2 full / +6 adv). My old stockpile is gone —
    **BUY from the mall** (~180 meat ea, tons available). 7 jerky = full 14/15.
  - **MP restore = Mountain Stream soda (item 357), +~37 MP each, no organ cost, tradeable** (~440 meat ≈ 12 meat/MP).
    Buy a ~20-stack as a battery for a quest day. Use: `inv_use.php?which=3&whichitem=357&pwd=`. (magical mystery juice
    518 is untradeable/gnome-only; Doc Galaktik `galaktik.php` is DELETED.) Resting at campground is poor (~+10 MP/turn, costs 1 adv).
- **Mall-buy method (works):** search `mall.php?didadv=0&pudnuggler=NAME` → result links are
  `mallstore.php?whichstore=ID&searchitem=ITEMID&searchprice=PRICE`. Load the cheapest store page, `DOMParser` it, find the
  `<input name="whichitem">` radio whose row text matches the item (value is the per-listing encoded id), then POST
  `mallstore.php` with `pwd, whichstore, buying=Yep., whichitem=<radio value>, quantity=N`.
- Other quests: **Highland signal fires 2/3 lit** (A-boo + Oil have flames; **Twin Peak** still walled on +50% item).
  **My Other Car Is Made of Meat** still shows open in questlog despite the built Meatcar (low-priority bug).

## 🗡️🏆 Day 74 (2026-06-29) — LEGENDARY EPIC WEAPON FORGED; Nemesis quest at the FINAL lair.
- ⚠️ **NO ROLLOVER occurred** this session — it was the SAME in-game day as Day 73 (drunk 12 / full 15 carried;
  EAT+DRINK already done). Spent today's leftover ~38 advs on the Nemesis quest. **End state: Mys 256, meat ~46,833,
  drunk 12, full 15, ~5 adv, HP 255/255. Now WIELDING the Greek Pasta of Peril (2561).**
- **🎉 HUGE: blitzed the first half of "Me and My Nemesis" in one session** (the Tomb was a direct-access zone all
  along — Day 73's 81-fight Garves grind was wasted). **Full verified walkthrough is now in
  `mechanics/nemesis-quest.md`** (the ✅ section at the top). Summary of what got done:
  Tomb (`place.php?whichplace=cemetery&action=cem_advtomb`, choice 1049, swapped spare pasta spoon item 5 →
  Pasta Spoon of Peril 68) → guild (Asiago `guild.php?place=scg`) → **defeated Clownlord Beelzebozo** in The "Fun"
  House (**snarf 20**, needed **4 clownosity**: clown wig 2475 + bloody clown pants 432 + clown shoes 431 + big red
  clown nose 449, all mall-bought) → guild → **meatsmithed the Legendary Epic Weapon: Pasta Spoon of Peril (68) +
  high-octane olive oil (2555) → Greek Pasta of Peril (2561)** via `craft.php?mode=smith&action=craft&a=68&b=2555`
  (tenderizing hammer 338 needed; 1 adv) → guild → **Nemesis lair revealed: a cave in the Big Mountains**.
- **🎯 NEXT SESSION (top priority): the FINAL Nemesis fight in the Big Mountains cave.** Go in RESTED with a full
  day of adventures. Per research: traps/guards; Pastamancer entangles a wall with **Entangling Noodles (3004)**,
  needs **6 fizzing spore pods** (from the Fungal Nethers) to clear rubble, runs a maze, then beats **Spaghetti
  Elemental → Spaghetti Demon**. Equip the **Greek Pasta of Peril (2561)** for the fight. Research the exact lair
  steps first (WebSearch "Volcanic Cave nemesis" / "A Dark and Dank and Sinister Cave").
- Other quests still shelved: **Twin Peak** (+50% item gear wall), **Gnomad/cocktailcrafting** (Disco-Bandit-only).

## 📅 Day 73 (2026-06-28) — Nemesis Tomb does NOT trigger by grinding the Garves (proven naked, 81 fights).
- **End state:** Level 16, Mys 256, **meat ~48,213**, drunk 12, full 15, **adv ~38** (rolled over; mostly drink-bonus —
  the day's earned advs were burned on the failed Garves grind). EAT ✅ · DRINK ✅. Connection flapped (logged out
  repeatedly, `api.php` sometimes HTML). Re-equipped War Hippy Fatigues + monocle after the naked test.
- **⛔ KEY NEGATIVE RESULT — the "Me and My Nemesis / Retrieve the Epic Weapon" Tomb DOES NOT appear by simply
  adventuring The Unquiet Garves (snarf 21).** Ground **81 fights, ZERO noncombats of any kind**, including ~10
  fights **fully naked** (all gear unequipped) — so it is **NOT** a +combat-gear suppression issue, and NOT the
  War Hippy Fatigues. The old `mechanics/nemesis-quest.md` ("adventure the Garves until the Tomb NC fires") is
  WRONG/insufficient for the current game. **DO NOT repeat the blind grind — it wasted Day 73.**
  - ✅ Prereq secured: bought a **spare basic "pasta spoon"** (mall, 100 meat) for the plinth-swap puzzle. It's an
    un-equipped pasta spoon in the pack (distinct from the chocolate/iron pasta spoons). Keep it; don't equip it.
  - **NEXT SESSION: research the EXACT current trigger BEFORE grinding.** Candidates to investigate: (a) a required
    item/key that makes the Tomb NC appear (e.g. the "grave robbing shovel" drop — does it have a [use]?);
    (b) the Garves NC may be on a counter that needs +noncombat or is suppressed by something non-gear;
    (c) re-talk to the Pastamancer guildmaster **Asiago** (`guild.php?place=scg`) to (re)activate the Tomb;
    (d) the Tomb may be a separate place/door click in the Misspelled Cemetary (`place.php?whichplace=plains` →
    cemetary), NOT a random Garves NC. Use **WebSearch** (WebFetch 403s on the wiki) on "Tomb of the Unknown
    Your Class Here" / "Legendary Epic Weapon Quest" for the precise 2015+ mechanism.
- **The Unquiet Garves = snarf 21** (confirmed via "Last Adventure" — zone IS accessible, combats are weak; just
  no Tomb NC). Combat there is trivial (Cannelloni/Spaghetti + companions, even naked).
- Other quests still blocked: **Twin Peak** (+50% item gear wall), **Gnomad/cocktailcrafting** (Disco-Bandit-only).
  ⚠️ Also noticed the questlog STILL lists **"My Other Car Is Made of Meat"** as open ("you need to build a new
  one") even though the Bitchin' Meatcar (134) IS built/in inventory — may need to USE the car or visit the
  Untinker/guild to formally close it. Low priority.

## 📅 Day 72 (2026-06-27) — ⛔ Cocktailcrafting is Disco-Bandit-only (dead end); +42k→~47k farm.
- **End state:** Level 16, Mys **255**, HP 288/288, **meat ~47,026** (+~5,100), drunk 12, full 14, **adv ~43** (rolled over).
  EAT ✅ · Airship farm ~50 fights ✅ · DRINK ✅ (2 Fog). Mandatory meters filled despite bad connection flapping.
- **⛔⛔ CORRECTION — DROP the "Gnomad Camp → Advanced Cocktailcrafting → better booze" goal entirely.**
  **Advanced/Superhuman/Salacious Cocktailcrafting are DISCO BANDIT class-exclusive skills** (like Pastamastery is
  ours). A **Pastamancer can NEVER learn them** — confirmed via wiki. The Gnomads' Camp also requires a
  Wombat/Blender/Packrat moon sign. **There is NO booze upgrade beyond Fog Murderer for this character.** All prior
  handoff/memory notes treating this as a "future project" were WRONG (memory `kol-drinks-strategy.md` is corrected).
- **🎯 RECOMMENDED NEXT DIRECTION = "Me and My Nemesis" (reclaim the Epic Weapon).** Doesn't need +item gear or
  cocktailcrafting. Multi-stage but concrete. **Research the exact steps first** (WebSearch works; WebFetch 403s on
  the KoL wiki). Rough outline from prior research: forge Legendary Epic Weapon (big rock from a casino "Lucky!"
  Lemon-Party-slots adventure via a ten-leaf clover; + petrified noodles from the Hermit; meatsmith) → Fun House 3
  doors (Door1 Mys gear/chef's hat from Haunted Pantry; Door2 insanely spicy enchanted bean burrito from Beanbats;
  Door3 boring spaghetti, our lvl-5 skill) → "A Dark and Dank and Sinister Quest" (paper-scrap password) → Volcanic
  Cave (Entangling Noodles 3004 + 6 fizzing spore pods from Fungal Nethers + maze) → beat Spaghetti Elemental →
  Spaghetti Demon. **Day 72 couldn't verify prerequisites (clover/Hermit) — api inventory read failed in the flap.**
- **Twin Peak still 3/4 done, still walled on +50% item from gear+food** (see Day 71 below). Cheap stacking caps at
  ~+24% (monocle 1312 +10% + 2 lucky rabbit's foot +7% ea); the in-game charsheet does NOT display item% so you
  can't measure it. Big +item sources (golden Mr. A "Smile of Mr. A" +25%; AT buff Fat Leon's Phat Loot Lyric +20%
  via a buffbot) are expensive/third-party. **User was asked Day 72 and chose the Gnomad path — which turned out
  impossible — so direction is open again; Nemesis is the best remaining real-progress quest.**
- ⚠️ **Connection flapped HARD** (Day-69-style: repeated logouts, hung fetches, `api.php` returning an ~11KB HTML
  page instead of JSON). Workarounds: get pwd + state from the **charpane FRAME** (reload `charpane.php`, parse
  numbers: lvl,mus,mys,mox,[drunk,full,]HPc,HPm,MPc,MPm,meat,adv); do shop/drink in tight sequences right after
  re-login; the farm engine's **torpedo-finisher** kept it from getting stuck in a Protagonist (no stuck combat
  this session — a stall late on was just a hung fetch, NOT a stuck fight; verified "Not in a Fight").

## 📅 Day 71 (2026-06-26) — Twin Peak pantry needs +50% item from GEAR+FOOD (familiars excluded); huge farm → ~42k meat.
- **End state:** Level 16, Mys 248, HP 283/283, **meat ~41,950** (+~13,000 today), drunk 12, full 15, **adv 0** (all spent).
  EAT ✅ (sushi + strawberries 786) · big Airship farm ✅ (~140 fights, meat 28,947 → ~41,950) · DRINK ✅ (2 Fog).
- **⭐ TWIN PEAK (snarf 297) — the pantry (choice 606 option 2) requires ≥+50% Item Drops, and per the wiki it
  ONLY counts GEAR + FOOD-effect item bonuses** (familiars, thralls, companions, minstrels, Florist plants, and
  booze bonuses are EXCLUDED). Our ~+10% (Baron monocle 1312) is far short, and a +item familiar wouldn't even
  help. **NEXT SESSION = a +item GEAR-SHOPPING project** (we now have ~42k meat): buy item-find accessories/gear
  (e.g. a golden Mr. A → "Smile of Mr. A" +25%, item-find accessories, item-find food effects), stack to +50%,
  then `choice.php?whichchoice=606&option=2` to light the 3rd signal fire → completes Highland Lord "Topping"
  → opens the Orc Chasm. (WebFetch is 403-blocked on the KoL wiki/forums; research +item gear via WebSearch
  snippets or in-game, or the user may know good cheap sources.)
- ✅ **Torpedo-finisher added to `_resolveFight`** (fires a torpedo 630 if a fight reaches round 12) — this fixed
  the stuck-Protagonist problem; the whole ~140-fight farm ran with no stuck combats. Keep this in the engine.
- ⚠️ **Connection flapped at session start** (killed the first farm launch + a logout) but then **held stable**
  for the entire farm. Pattern: re-login, rebuild helpers from frame DOM, relaunch; it usually settles.
- **Out of jerky** — strawberry (786, 1 fullness) is the topoff filler now; consider restocking jerky from mall.

## 📅 Day 70 (2026-06-25) — Twin Peak is 3/4 DONE; only the +item pantry remains.
- **End state:** Level 16, Mys **248**, HP 283/283, **meat ~28,947**, drunk 12, full 15, **~67 adv banked** (rollover).
  EAT ✅ (sushi + strawberries — **OUT OF JERKY**, restock; strawberry item **786** = 1 fullness filler) ·
  big Airship farm ✅ (meat 23,557 → ~28,947, +~5,400) · DRINK ✅ (2 Fog Murderers).
- **⭐ TWIN PEAK = snarf 297, and it's 3/4 COMPLETE.** Adventuring 297 → fires **choice 606 "Lost in the Great
  Overlook Lodge."** It now offers **ONLY option 2 "Search the pantry"** (+ option 6 "Leave") — meaning the other
  three rooms (Room 237/stench-res, music/jar-of-oil, double/init) are **already done**. The pantry needs
  **+50% Item Drops**; option 2 failed with "not enough item drops." **TO FINISH TWIN PEAK: get to +50% item
  (buy +item gear from the mall — we have ~29k meat — or a +item familiar; we have NO item familiar in the
  terrarium), then `choice.php?whichchoice=606&option=2`.** That lights the 3rd signal fire → completes the
  Highland Lord "Topping" quest → opens the Orc Chasm road. **This is the highest-value next task.**
- ⚠️ **STUCK-PROTAGONIST GOTCHA (cost me the drink step twice):** the Airship farm can leave an unresolved
  **Protagonist** fight — it's tanky enough to survive `_resolveFight`'s 25-round cap at low MP, so the loop
  moves on leaving you **stuck in combat**. Then ALL `shop.php`/`inv_booze`/`inv_use` fetches silently no-op
  ("you twiddle your thumbs"). **ALWAYS check `fight.php` for an active fight before the DRINK/shop step**; kill
  the Protagonist with **2 photoprotoneutron torpedoes (630, MP-free)**. Consider a torpedo-finisher in
  `_resolveFight` when it hits maxr. (Hidden Tavern Fog buy + mall both work fine ONCE out of combat.)
- Connection was **much more stable** this session than Day 69 (the 78-fight farm ran without dropping).

## 🚗 Day 69 — BITCHIN' MEATCAR BUILT (quest deliverable done); day cut short by flaky extension

- **🚗 Built the Bitchin' Meatcar** (item 134) via meatpasting — full recipe + item IDs + the `action=craft` fix
  are in **`mechanics/meatcar-build.md`**. The old "Untinker path blocked" worry was moot; you build it yourself.
- **TODO to finish the meatcar payoff:** visit the **Untinker at Degrassi Knoll** (`place.php?whichplace=knoll_friendly`)
  with the car built to close the quest, then find the **Gnomish Gnomad Camp** (goal: Advanced Cocktailcrafting →
  better booze). `place.php?whichplace=gnomad` was NOT accessible right after building (needs another step).
- **EAT ✅ (full 14) · big Airship farm ✅ · DRINK ✅ (drunk 12).** Day is wrapped (despite a very flaky extension).
- **🤑 HUGE FARM HAUL:** ground ~150+ Airship fights across the day → **meat 5,637 → ~23,557** (+~18,000!).
  Mysticality crept **240 → 245** from the spell grind. **End state: Level 16, HP 281/281, MP ~4/448, meat
  ~23,557, drunk 12, full 14, ~47 adventures banked (roll over).**
- ⚠️ **The Chrome extension flapped badly all session** (repeated disconnects/logouts wiped the in-page farm
  engine many times). Workarounds that helped: get pwd from the **frame DOM** (not fetch) after re-login;
  relaunch the farm in a fresh page each time; the **drink had to be re-done** (first attempt's fetches no-op'd
  during a flap — always VERIFY drunk via api after drinking). Couldn't spend the final ~47 advs (engine kept
  getting wiped) — they roll over; not worth fighting the connection further.
- **Carryover items:** ~143 stolen sushi (6293), 2 jerky, scrolls (595), torpedoes (630), tiny houses (592,
  low — top up or rely on MMJ via guildstore2 row 527 which WORKS), 1 hardening cream (11331). Bought MMJ to
  sustain MP during the farm. **Meat cushion is now huge (~23.5k) → can afford Twin Peak resistance gear.**

## 🏆🎉 Day 67 — ISLAND WAR WON. The Man defeated. (READ THIS FIRST)

### Character Current State (End of Day 67)
- **Character**: ClaudeCode, **Level 16** Pastamancer · HP/MP **277/440** · Mys **240** · Mox 168 · Mus 174.
- **Meat**: **~5,637** (huge — Airship-farmed the post-war tail). **MMJ shop WORKS** (retested — earlier
  "broken" was a stuck-mid-combat artifact); also **tiny houses (592) = free MP** (no meat/adv cost), the default.
- **Food reserve**: 147 stolen sushi (6293), 2 jerky (2620). **Consumables**: **26 tiny houses (592)**,
  19 scroll of drastic healing (595), **14 photoprotoneutron torpedo (630)**, **1 hardening cream (11331)**,
  antidotes (588).
- **Adventures**: 0 (all spent). **Drunk 12/14, Full 14/15** at rollover (~28 advs banked).
- **🏅 WAR REWARD: Blue Diamond of Honesty** acquired at Council. **THE ISLAND WAR IS COMPLETE.**

### ⭐⭐ HOW TO BEAT "THE MAN" (final frat boss) — hard-won, 5 losses then a win
- **He RAMPS UP damage every round.** Sleaze paddle ~55-59 early, climbs to ~70-100+ by round ~25.
  **Turtling/attrition LOSES** — the longer the fight, the harder he hits; you run out of MP healing and die.
  (Lost at r10 no-DR, r27 & r45 with healing — every time his ramp outran my Lasagna+companions.)
- **WIN = pure DPS race.** Open **Mortar (3007)**, then **Cannelloni Cannon (3005) EVERY round** (scales with
  Mys 240 = our best damage), **heal ONLY at HP<35%.** Killed him in **~12 rounds, HP never below 175.**
  Enter at FULL HP (scroll 595) + FULL MP (tiny houses).
- **hardening cream (item 11331, mall ~100 meat, spleen → "Really Hard" DR 50)** extends survival but does
  NOT win on its own and barely dents his sleaze. Optional. The *race* is what wins, not the DR.
- **Torpedo-first / heal-heavy = slower DPS = drags into his ramp = loss.** DON'T. Cannelloni-spam.
- **Boss attempts cost 0 adventures** — only the Beaten-Up recovery rest costs 1. Retries are cheap:
  lose → `campground.php?action=rest` (clears Beaten Up) → scroll+tiny houses → re-click frat house → retry.
- **Reach him:** click **"The Orcish Frat House"** building on rendered `bigisland.php` (mainpane ~x503,y320)
  → **"Commence the Sense-Knocking"** link → fight. (snarf 27 is dead — "you shouldn't be here.")

### ⚠️⚠️ CRITICAL OPERATIONAL LESSONS (Day 67 — these wasted hours; don't repeat)
- **`api.php?what=status` needs a `for=` param** (errors without it) and is **accurate normally** — but it **can
  freeze under HEAVY rapid polling** of the same `for=` string (my per-round combat/farm loops triggered it: api
  showed mp=2 while a fresh charpane showed 224). Mitigate by polling less / varying `for=` / reading the charpane.
  (RETESTED Day 67: out of combat with light polling, api correctly tracked a buy and an MP change. `what=inventory`
  is reliable for item counts.) **Charpane parse caveat:** match `/(\d+)\s*\/\s*(\d+)/g`, but **HP & MP are the LAST
  TWO pairs** — when drunk/full are nonzero they prepend a `[drunk/full]` pair, so `pairs[0]` is NOT always HP
  (number order: lvl,mus,mys,mox,[drunk,full,]HPc,HPm,MPc,MPm,meat,adv).
- **inv_use / inv_booze / shop fetches return a generic ~5922-byte page and SILENTLY FAIL if you are stuck in
  a combat.** If MP/effects won't change, **you're probably mid-fight** (a leftover fight from a prior loop).
  Check `fight.php` for "you're fighting"; finish/flee it first. (Day 67: a stuck Airship "Protagonist" fight
  ate ~30 min of "why won't tiny house work" — it was twiddling thumbs mid-combat.)
- **Spleen items (hardening cream, sparkling orb) do NOT apply via `inv_use.php` fetch** — they need a real
  **DOM-click** of the `[use]` link in `inventory.php?which=1` (consumables tab). Load it in mainpane, click.
- **Tiny house (592) via `inv_use.php?which=3&whichitem=592&pwd=&ajax=1` WORKS out of combat** → ~+22 MP, no
  meat, no adv cost (verified). Fill MP to 437 with ~12-20 tiny houses before any boss. The **MMJ guild-store buy
  (`whichshop=guildstore2&whichrow=527`, 100 meat) ALSO works** (retested: meat −100, MMJ +1) — the earlier
  "broken" was just the stuck-mid-combat no-op. **Tiny houses are still the better MP source** (free).
- **Hidden Tavern shop WORKS** for booze: `shop.php?whichshop=hiddentavern&action=buyitem&whichrow=175&quantity=N`
  buys **Fog Murderer (item 6682, 500 meat, +6 drunk/+14 adv)**; drink via `inv_booze.php?which=1&whichitem=6682`.
  2 Fog = drunk 12. **Mall buying WORKS via UI** (search `mall.php?pudnuggler=NAME`, click `[buy]`).
- **Background-loop overlap bug:** a `javascript_tool` call that launches a long async loop returns `{}` (blocked)
  but the loop **keeps running in the page**. Launching another overlaps them (double-spends advs, corrupts logs).
  **Use a `window._running` single-instance guard**, and **don't call `_readChar` (which reloads the charpane frame)
  while a fight/farm loop is also reloading it** — concurrent frame reloads deadlock the onload promises (stalls).
- **Win/loss detection:** "**You lose 59 hit points**" is normal damage text — do NOT match `'you lose'` for defeat.
  Detect defeat via the **`beaten up`** effect in the reloaded charpane after the fight ends, OR HP→0.
- **The MCP tab can drop out of the group** (creating/closing other tabs). The game session (cookies) persists —
  just `navigate` a tab back to `game.php` (still logged in) and rebuild the JS helpers (`_pwd`, `_gp`, `_readChar`).

### Day 68 priorities (post-war)
1. EAT (sushi 6293 → full ~14), then spend the day's advs. Big Meat cushion (~5,737) for once.
2. **Next quest: Highland Lord "There Can Be Only One Topping"** — light **Twin Peak** signal fire (A-Boo ✓,
   Oil ✓, Twin Peak pending = snarf 297, gated by hot/stench res ≥4 NCs — prep resistance gear). Also open:
   **Nemesis** (Epic Weapon) + **My Other Car Is Made of Meat** (meatcar → Gnomad Camp → Advanced Cocktailcrafting).
3. Combat reminder: **Cannelloni-spam is our best single-target DPS** (Mys 240). Tiny houses = free MP.
4. DRINK at day-end (2 Fog Murderers via Hidden Tavern row 175 → drunk 12).

### 📋 WIKI-SOURCED PLANS for the 3 in-progress quests (consulted Day 67) — suggested order: meatcar → Twin Peak → Nemesis

**① My Other Car Is Made of Meat (meatcar) — FAST, do first.** Pure in-inventory meat-pasting, **no Untinker needed**
(that was the old wrong blocker). We already hold the springs/sprockets/cogs/empty meat tanks/tires. Still need:
**Sweet Rims** (Hermit — trade a worthless item) + meat pastes + 1 meat stack (made in inventory, 100 meat — trivial
at 5.7k). Assembly chain:
- meat stack + empty meat tank → **Full Meat Tank**
- tires + Sweet Rims → **Dope Wheels**
- spring + sprocket → assembly; + cog → **Cog & Sprocket Assembly**
- Full Meat Tank + Cog & Sprocket Assembly → **Meat Engine**
- Meat Engine + Dope Wheels → **Bitchin' Meatcar** → unlocks path toward **Gnomad Camp → Advanced
  Cocktailcrafting** (much better booze/drunk; our long-term booze upgrade).

**② Twin Peak (snarf 297) — finishes "There Can Be Only One Topping" (A-Boo ✓ / Oil ✓ / Twin Peak pending).**
Hedge-maze → Great Overlook Lodge. Trigger **"Lost in the Great Overlook Lodge"** NC **4×**. 3 steps (any order)
then a gated 4th — each needs a stat/gear threshold, so **GEAR UP from the mall first (we have 5.7k meat):**
- **"Dog with no nose"** (Room 237) → need **≥4 levels STENCH resistance**.
- **"Seeking"** (pantry) → need **+50% Item Drops** from monsters.
- **"Bring-your-own J"** → use **12 bubblin' crude → jar of oil** ✅ **WE ALREADY HAVE 42 bubblin' crude.**
- **"Wait — who's that?"** (only appears after the first 3) → need **+40% Combat Initiative** (familiar counts).
  Springy Fusilli (3015) gives +init; stack with init gear.

**③ Me and My Nemesis (Epic Weapon) — LONG, lowest priority.** Stages:
1. Forge **Legendary Epic Weapon**: **big rock** (clover adv at casino Lemon Party slots) + **petrified noodles**
   (Hermit class item) → meatsmith onto basic class weapon (pasta spoon).
2. **Fun House 3 doors**: Door1 = Mys gear / chef's hat (Haunted Pantry); Door2 = insanely spicy enchanted bean
   burrito (Beanbats); Door3 = **boring spaghetti** (our lvl-5 Pastamancer skill).
3. **A Dark and Dank and Sinister Quest**: fight underlings for paper scraps → reassemble the password.
4. **Volcano Lair**: Entangling Noodles (3004) opens the wall; **6 fizzing spore pods** (Fungal Nethers) clear
   rubble; run the maze (or skip for 10 advs); beat nemesis final forms **Spaghetti Elemental → Spaghetti Demon**
   (equip the Epic Weapon).

Wiki refs: Twin_Peak, Bitchin'_Meatcar_Quest, Me_and_My_Nemesis (wiki.kingdomofloathing.com).

## Character Current State (End of Day 59 — ⚔️ war grind ongoing; Level 15; drinks strategy solved)

- **Character**: ClaudeCode, **Level 15** Pastamancer (dinged today) · Max HP/MP ~254/~392 · Mys 209
- **Meat**: **~1,918** + **2 MMJ** stocked. **40 unidentified jerky** + **151 stolen sushi** food reserve.
  6 scroll of drastic healing (595), antidotes (588), 14 torpedo (630).
- **Adventures**: 0 (all spent). **Drunk 12/14, Full 14/15** at rollover.
- **👕 WEARING WAR HIPPY FATIGUES (outfit #32)** — keep equipped on the battlefield.

### 🍸 DRINKS STRATEGY — SOLVED (wiki-consulted Day 59)
- **Fog Murderer (item 6682, Hidden Tavern row 175, 500 meat) = 14 adv / 6 drunk = best no-skill booze.**
  Budget ~1,000 meat/day → 2 Fog → drunk 12 (+28 advs). Don't overthink it. (Mixed drinks need a
  777-meat Cocktailcrafting kit and are WORSE per drunk — 1.83 vs 2.33. Not worth it.)
- **The real upgrade = Advanced Cocktailcrafting → Garnished Drinks (~3.5 adv/drunk).** Gated behind
  the **Gnomish Gnomad Camp**, which needs the **unbuilt meatcar** ("My Other Car Is Made of Meat"
  quest, still open). Future project. I have NO cocktailcrafting skill currently.
- Drink yields confirmed: Fog +6 drunk/+14 adv; Mad Train wine (564) +3; unnamed cocktail (7187) +2.

### 🪱 ORCHARD = MEAT MINE + filthworm gland chain (Day 59 discovery)
- **Orchard filthworm chambers drop ~62 meat/fight** — a war-themed meat farm rivaling the Airship.
- **Quest is gland-gated** (kill worm → use scent gland → short "stench" effect admits next chamber):
  - Hatching **127** → **hatchling gland (2344)** → use → "Filthworm Larva Stench" (4 turns) → Feeding.
  - Feeding **128** → **drone gland (2345)** → use → "Filthworm Drone Stench" (10 turns) → Guards.
  - Guards **129** → royal guard gland (id unknown; **drop rate LOW — 0/10 even with +item monocle**) → Queen.
  - Queen **130** → giant filthworm queen → report to Organic Produce Stand (`bigisland.php?place=orchard`).
  - ⚠️ If a stench expires before the next gland drops, you must restart the chain. Bring max +item gear
    and don't dawdle. Day 59 abandoned completion at the Guards tier (royal guard gland wouldn't drop).

### 🐛 Combat engine = v7 (Day 59) — low-MP deadlock FIXED
- **Fetch-driven loop `window._kolMain(n)`** (rebuilt each session; wiped on login). Robust against
  disconnects/throttling. Modes: `window._snarf` = 81 (Airship farm), 140 (battlefield), 127-130 (orchard).
- **KEY FIX:** at MP<1, cast nothing works ("you twiddle your thumbs") and you can't refill mid-fight →
  DEADLOCK. v7 falls back to **weapon attack (`fight.php?action=attack`)** at MP<1 so companions finish.
  Also added an MMJ-fail bailout (if inv_use doesn't raise MP, stop churning). When numbers look frozen,
  verify via the **charpane** (`charpane.php`), not api.php.
- Combat: Cannelloni (3005) at MP≥8, Spaghetti (3020) at MP≥1, attack at MP<1; lean heal (Lasagna 3009
  via runskillz) only below 50% HP; Springy Fusilli (3015) every 8 fights for initiative.

### ⭐⭐ WAR-WINNING MECHANIC (wiki-confirmed Day 61) — READ THIS FIRST
- **Each completed side quest DOUBLES the enemies your comrades kill per battlefield fight:**
  0 done = 1/fight · 1 (Lighthouse✅) = 2 · 2 = 4 · 3 = 8 · 4 = 16 · 5 = 32 · 6 = 64.
  (Battlefield = 32 soldiers/segment × ~31 segments.) **This is why raw battlefield grinding is hopeless
  at 1-2 kills/fight.** WIN PATH: complete side quests FIRST → then mop up the battlefield (clears
  dozens/fight) which also unlocks the remaining gated frat quests.
- **Therefore prioritize the FASTEST side quests, not the slowest** (any quest gives the same doubling):
  - **Orchard** (~12-15 gland fights) ≫ Nunnery (~100 fights). Orchard also gives ~4,000 meat/day reward.
    Gland chain: hatchling 2344 → Larva Stench(4t) → Feeding 128; drone 2345 → Drone Stench(10t) →
    Guards 129; royal guard gland (low drop, bring +item monocle + full MP) → Queen 130. **DO THIS.**
  - **Farm** — duck quest; a **chaos butterfly** triggers a tornado that HALVES remaining ducks (check
    if we have one). Choice 147 "Cornered!" needs manual handling.
  - **Arena** (gated) — "super easy with Entangling Noodles" (3004, which we have). Top priority once unlocked.
  - **Nunnery** = SLOWEST (1000 base meat/brigand × 100 = 100,000; +Meat% stacks & multiplies but we have
    NO leprechaun / no +meat gear → ~100 fights). Only pursue with big +Meat%. **DEPRIORITIZED.**
- **Nunnery +Meat% notes:** fatigues lock hat/pants/1acc; weapon+offhand+2acc+familiar slots free for
  +meat. Leprechaun familiar (weight-scaled) + Polka of Plenty(+50%) + meat accessories help. Nuns do
  NOT count familiar-BONUS meat (Hobo Monkey/Cocoabo/meat vortex) — only the +Meat% drop modifier.

### 🏁 War status (Day 66 EOD — ⭐ BATTLEFIELD CLEARED; only the FINAL BOSS "The Man" remains)
- **THE ENTIRE FRAT ARMY IS DEFEATED.** Adventuring the battlefield (snarf 140) now gives *"There are no
  Frat soldiers left -- the way to their house is clear!"* (battlefield reached image #32/33 = the last).
  ⚠️ Battlefield progress = the **"Image #N"** number on the bigisland zone links (#0→#32), NOT the map
  sprite count (sprites look full even when nearly done) and NOT the "(1)" label.
- **FINAL BOSS = "The Man"** at the Orcish Frat House. ⚠️ The pre-war **snarf 27 is now "you shouldn't be
  here"** — instead **click the "The Orcish Frat House" building on the rendered `bigisland.php` map**
  (mainpane, ~x505,y322), then click the **"Commence the Sense-Knocking"** link → boss fight.
- **⚔️ THE MAN IS A HARD BOSS — lost to him TWICE Day 66 (was resource-depleted from the grind).** Lessons:
  - He has **high HP (>750)** and hits **~45-90/round**. Mortar + 4-5 Cannelloni did NOT kill him.
  - **Scrolls of drastic healing (595) do NOT work in combat** (confirmed). In-combat heal = Lasagna (3009,
    only ~20/cast) + companion heals (Marcellus/Ned). That's not enough alone vs his damage.
  - **WIN PLAN (Day 67): come with a FULL TANK.** Farm a big MMJ stockpile FIRST (sustained MP), enter at
    FULL HP, then: Mortar R1 → Cannelloni every round for damage + **Lasagna every round** (need MP for both)
    + **spam the 28 photoprotoneutron torpedoes (item 630, MP-free big damage)** + companions. Buy
    **hardening cream** (spleen, "Really Hard" DR 50) if available — turns his hits into chip damage = easy win.
  - Re-attempt is free-ish: lose → Beaten Up → campground rest clears it → re-click frat house → retry.
- ⚠️ **Day 66 booze MISSED** — war-chest hit meat 32 after the battlefield clear + 2 boss attempts; couldn't
  afford Fog. Carryover: **meat ~164** (thin — Airship-farm at open), 28 torpedoes, 17 scrolls, MMJ 0,
  jerky 1 + sushi ~147, **drunk 0 & full 14 at rollover**, L16. **Day 67: farm chest → KILL THE MAN → Council.**

### ⚔️ War status (Day 65 EOD — battlefield down to the frat ELITE core — superseded above)
- Big battlefield push at 4/fight (~47 fights ≈ ~190 kills). Now meeting the army's deepest units:
  **War Frat Elite / Senior / Heavy Kegtank / Naughty Sorority Nurse / Panty Raider** = the hard core.
  **War NOT won yet but very close** — frat house visible through a thinning crowd. **Day 66: finish it.**
- **⚠️ ARENA quest is a riddle — battlefield wins do NOT promote the band.** The promoter (`bigisland.php?place=
  concert`) just complains about low popularity ("two tin cans and string") with NO action/form/link on the
  page, and 30+ battlefield wins didn't change him. Promotion mechanism unknown — DON'T waste time here;
  the battlefield win is the direct path. (Wiki said "trivial with Entangling Noodles" but the in-game page
  offers no fight/action — consult wiki for the actual concert-promotion mechanic if pursuing it.)
- **Food restock learned:** unidentified jerky (2620) is **mall-buyable at ~180 meat** (Clerk's has 240k+
  stock). Buy via the mall UI "[buy some]" → "How Many?" dialog (fetch-buy needs store id + item hash, fiddly).
  ⚠️ Eat SUSHI first then jerky to top (jerky-first can leave you stuck at full 10 since sushi(6) overshoots).
- Carryover into Day 66: **meat ~1,725** (good), MMJ 2, jerky 4, sushi 151, drunk 12/14 & full 14/15, L16.
  **Day 66 plan: Airship chest → battlefield to the WIN (4/fight, army's nearly gone) → Council reward.**

### ⚔️ War status (Day 64 EOD — battlefield blitz at 4/fight; ARENA + JUNKYARD opened — superseded above)
- **Leveled to 16.** Big battlefield blitz at 4 kills/fight (~56+ fights ≈ 200+ frat boys cleared);
  pushed deep into frat territory (now meeting War Frat Elites / Heavy Kegtanks / Naughty Sororities).
- **BOTH the ARENA (concert) and JUNKYARD are now UNLOCKED.** Army visibly thinning but NOT yet won.
- **Day 65 priority: do the ARENA** — wiki says it's trivial with Entangling Noodles (3004), which we have.
  Completing it = 3rd side quest → battlefield doubles to **8/fight**. Then mop up the battlefield (should
  finish fast at 8/fight) or do the Junkyard too (→16/fight). Junkyard may need the molybdenum magnet —
  check the NPC. The win is close.
- **Combat note:** deep-battlefield Elites hit hard — keep full-HP entries (heal <55%) and scrolls (have
  ~16) for emergencies; took one near-death dip to HP 9 this day.
- Carryover into Day 65: **meat ~1,195** (decent), MMJ 6, **jerky DOWN TO ~5 (basically out — sushi 151
  will carry food, but consider restocking jerky)**, drunk 12/14 & full 14/15 at rollover, **L16**.

### ⚔️ War status (Day 63 EOD — 🎉 NUNNERY DONE (2nd side quest); JUNKYARD unlocked — superseded above)
- **NUNNERY COMPLETE** — recovered the full 100,000 meat ("You've already retrieved all of the stolen
  Meat"). **2 side quests done (Lighthouse + Nunnery) → battlefield now kills 4/fight.** Confirmed the
  doubling mechanic in practice: the battlefield went from a crawl to fast, meat-leaner progress.
- **JUNKYARD now UNLOCKED** (the 4/fight push advanced the line to it). ⚠️ Junkyard needs the
  **molybdenum magnet** to make gremlins drop the 4 tools — check the Yossarian/junkyard NPC gives it;
  if not, it's hard. Arena/concert STILL gated (push battlefield more to reach it).
- **Day 63 plan worked:** finish Nunnery → battlefield 4/fight → unlock more. **Day 64: keep pushing the
  battlefield (4/fight) to unlock the Arena (trivial w/ Entangling Noodles), and/or start the Junkyard.**
  Each new side quest doubles kills again (→8/fight) — snowballs toward the win.
- Carryover into Day 64: **meat ~479** (thin — Airship-farm at open), **jerky DOWN TO ~12** (RESTOCK food
  soon — buy more jerky/sushi from mall or it'll run out). drunk 12/14 & full 14/15 at rollover, L15.

### ⚔️ War status (Day 62 EOD — Orchard ABANDONED (gland RNG wall); superseded by Day 63 above)
- **Orchard: gave up.** Across 2+ sessions the drone gland (2345) refuses to drop (0 in ~15+ Feeding
  fights even with the +item monocle); Larva Stench duration is also inconsistent (seen 1, 4, 10 turns).
  Too RNG-cursed to rely on. **Don't sink more advs here unless you bring much bigger +item%.**
- **Nunnery (Themthar Hills snarf 126) is the reliable path** — pure brigand combat, no RNG. Cumulative
  **~63 brigands** down (×1000 base meat ≈ 63k of the 100,000 goal — roughly 2/3 there). ~37 more
  brigands ≈ finishes it → 2nd side quest done → battlefield kills DOUBLE again (to 4/fight).
- ⚠️ **Day 62 booze was MISSED** — session dropped mid-wrap (re-login needed), drunk left at 0. Watch for
  api.php returning an HTML/account page = session drop; re-login fixes it. Don't let it eat the DRINK step.
- Carryover into Day 63: **meat only ~310** (Airship rebuild didn't finish), adv 67 rollover, L15.
  Open Day 63 with an Airship farm FIRST (meat chest), then grind the Nunnery to completion.

### ⚔️ War status (Day 61 EOD — Nunnery grind started; reprioritized — superseded by Day 62 above)
- **Side-quest availability:** Lighthouse ✅ done. **Junkyard & Arena/concert STILL GATED** after ~135
  battlefield kills (unlock much deeper — battlefield is the SLOW path; no per-fight army counter visible).
  Open hippy-side: Orchard (gland-RNG), Farm (duck quest w/ finicky c147 "Cornered!" NC), **Nunnery**.
- **NUNNERY = best available side quest** (Our Lady of Perpetual Indecision, **Themthar Hills snarf 126**):
  pure "dirty thieving brigand" combat, NO choices/RNG — engine-friendly. Recover **100,000 meat** for the
  nuns (counter persists across days; recovered meat does NOT go to you → meat-negative, fund via Airship).
  Day 61 ground ~34 brigands toward 100k. **Day 62: keep grinding 126 toward completion → big army chunk.**
- Carryover: **meat ~1,487, MMJ 1, 26 jerky, 151 sushi, drunk 12/14 & full 14/15 at rollover, L15 Mys 213.**
- Farm quest tabled: The Barn (snarf 137) ducks + choice **147 "Cornered!"** needs deliberate handling.

### ⚔️ War status (Day 60 EOD — 🎇 LIGHTHOUSE COMPLETE)
- **LIGHTHOUSE SIDE QUEST DONE (Day 60)** — first side quest completed; permanent frat-army cut.
  Mechanic: farm **Sonofa Beach (snarf 136)** lobsterfrogmen for **barrel of gunpowder (item 2403)**;
  collect **5**, then click **The Lighthouse** building on `bigisland.php?place=lighthouse` → keeper
  takes them → done. ⚠️ Lobsterfrogmen HIT HARD — fight at FULL MP (Cannelloni one-shots) or Beaten Up.
  Sonofa Beach is ~50% filler non-combats. Item **786 is a red-herring** drop (NOT the barrel).
- Carryover: **meat ~2,290, MMJ 2, 33 jerky, 151 sushi, drunk 12/14 & full 14/15 at rollover, L15.**
- **Day 61: re-check side-quest availability** (Lighthouse done + more battlefield kills may have
  unlocked the Junkyard/Arena). Then do the next accessible side quest or push battlefield (140).

### ⚔️ War status (Day 59 EOD — historical: LIGHTHOUSE UNLOCKED)
- Battlefield = **snarf 140** (frat boys). ~80 kills total over 2 days pushed the line far enough that
  the **LIGHTHOUSE side quest is now ACCESSIBLE** (was blocked Day 58). Side-quest availability checked:
  - 🟢 **Lighthouse** (`place=lighthouse`) — **TOP PRIORITY**. **Sonofa Beach = snarf 136** (fight
    lobsterfrogmen → barrels of gunpowder, ~5 needed) → give to keeper via **`action=pyro`** →
    blows up a BIG chunk of the frat army. Most efficient army-reducer in the war.
  - 🟢 **Orchard** (`place=orchard`) — chambers 127→130, gland-gated (see above) + ~62 meat/fight mine.
  - 🟢 **Farm** (`place=farm`) — The Barn = **snarf 137** → farmer (`action=farmer`); duck-flood quest.
  - 🟢 **Nunnery** (`place=nunnery`) — Themthar Hills = **snarf 126**; recover meat from brigands.
  - 🔴 **Junkyard** (`place=junkyard`) — still GATED ("can't fight through the frat boys").
  - 🔴 **Arena/concert** (`place=concert`) — still GATED.
- **Day 60 priority: do the LIGHTHOUSE** (snarf 136 lobsterfrogmen → gunpowder → `action=pyro` keeper)
  for a big army cut, then keep pushing the battlefield to unlock the Junkyard + Arena.
- **The war is a long, meat-negative grind.** Sustainable pattern: Airship-farm a chest → spend on
  battlefield/orchard → refarm. ~50-60 meat/fight net cost on the battlefield (MP for Cannelloni).

### Day 60 plan
1. EAT jerky to full (2 full/8 adv each — huge adv boost). Equip outfit #32. Re-inject engine v7.
2. Airship (81) farm a chest if needed (have 1,918 to start). Push **battlefield (140)** funded, OR
   grind **Orchard (127→130)** for meat + retry the royal guard gland (monocle + fresh stench).
3. Day-end: 2 Fog Murderers (1,000 meat) → drunk 12. Diary + commit.
4. Longer-term: finish the meatcar → Gnomad Camp → Advanced Cocktailcrafting (doubles booze-advs).

### 🎺⚔️ Day 58 = THE WAR IS DECLARED (hippy side) — the multi-day blocker is DONE
- **HOW (verified, executed):** equip outfit #32 → adventure **Orcish Frat House (snarf 27)** →
  fight ~12 War Pledge / Frat Warrior guards → **"Fratacombs" NC = choice 146** → pick
  **option 3 "Screw this, head to the roof"** → war ON. `bigisland.php` now fully wartime.
- **WARTIME MAP / snarfblats:**
  - **Battlefield = snarf 140** (as a hippy I fight FRAT BOYS: War Frat 110th/151st/500th
    Infantry, Sorority Operator/Nurse, Kegrider, Griller). ~1000-strong frat army; ~33 down today.
  - Side-quest hubs via `bigisland.php?place=`: `orchard` `farm` `nunnery` (HIPPY side, OPEN now)
    · `lighthouse` `junkyard` `concert`(arena) (FRAT side, GATED behind battlefield progress —
    *"can't fight through the frat boys"*; the first unlocks ~64 kills in).
  - **Orchard filthworm chambers** (open): Hatching **127** → Feeding **128** → Guards **129** →
    Queen **130** (gland-gated: kill worm → use gland → effect lets you enter next chamber).
  - HQ / Quartermaster = `bigisland.php?place=camp`.
- **⚠️ THE WAR IS MEAT-NEGATIVE** (frat boys drop ~17 meat; MMJ for MP costs ~33/fight). **Build
  the Airship (snarf 81) meat chest + a big MMJ stack BEFORE battlefield grinding** (Day 58 burned
  into a Beaten-Up spiral by charging the battlefield at 12 MP / 0 MMJ). Airship = ~67 meat/fight
  NET, 0 Beaten-Ups, Cannelloni one-shots.

### 🍖🧪 Day 58 operational discoveries (IMPORTANT)
- **unidentified jerky (item 2620) = +2 fullness / +8 adventures** — BEST food I own (4 adv/full).
  **Eat these for the EAT step, not sushi** (sushi 6293 = 6 full / ~12 adv = 2 adv/full). Have 47.
- **Out-of-combat Lasagna Bandages (skill 3009) heals ~16 HP/cast via
  `runskillz.php?action=Skillz&whichskill=3009&ajax=1&quantity=1&pwd=HASH`.** Spam between fights
  for **full-HP entries** → battlefield frat boys become trivial (they die in 1-2 Cannelloni;
  at full HP they can't Beaten-Up you). This is the key to sustainable battlefield combat.
- **MMJ = item 518**, MP +25 each, buy `shop.php?whichshop=guildstore2&action=buyitem&whichrow=527`.
- **Hidden Tavern (accessible) booze = 500 meat each**: Fog Murderer (6682, row 175, +6 drunk/+14
  advs), Cursed Punch (6680, row 173), Bowl of Scorpions (6681, row 174). Budget meat for booze
  at day-end, OR scrounge inventory drinks (Mad Train wine 564 = +3; unnamed cocktail 7187 = +2).
- **Fetch-driven combat engine** (in `window._kolMain`) is robust: all GETs to adventure/fight/
  choice in page context, survives extension disconnects + tab throttling. Rebuilds each session.

### 🌋 CURRENT OBJECTIVE — WIN the Island War (hippy side): reduce frat army to 0 → Council
- **Day 59 plan:** (1) Open: eat **jerky** to full, equip outfit #32, **farm Airship (81)** to
  ~1500+ meat + buy ~15 MMJ war chest. (2) Either grind the **Orchard filthworm quest** (127→130,
  open, gland-gated — permanent army chunk) OR push the **battlefield (140)** with funded full-HP
  combat (Lasagna-to-full between fights) toward unlocking the **Lighthouse** (gunpowder = big cut).
  (3) Wrap EAT→ADV→DRINK; budget ~500-1000 meat for Fog Murderers.
- ⚠️ **Auto-buy MMJ on the battlefield drains your meat cushion** (war is meat-negative) — expected;
  just refarm the Airship. Don't expect to net meat while battlefield grinding.

---
## (Historical — Day 57 and earlier below)

### Day 57 state (war-start mechanic cracked but NOT yet executed — superseded by Day 58)
- **👕 NOW WEARING THE WAR HIPPY FATIGUES (outfit #32)** — keep it equipped for the war-start.
- **⭐⭐ BIG REALIZATION (Day 57): THE WAR WAS NEVER ACTUALLY STARTED.** The "War Hippies" I
  fought at snarf 26 for days were just **verge-of-war GUARDS** attacking me for wearing the
  **Frat Boy Ensemble** (infiltration disguise) in their camp — NOT the real war. That's why
  `bigisland.php` is empty and the side quests are inaccessible: **the war isn't declared.**
- **HOW TO START THE WAR (verified mechanic):** you must wear the **WAR FATIGUES** (not the
  infiltration *Ensemble*) and adventure in the **opposing** base until the war-start NC fires:
  - **Frat side:** Frat Warrior Fatigues (beer helmet / distressed denim pants / bejeweled
    pledge pin) → adventure the **Hippy Camp (26)** → NC **"Blockin' Out the Scenery"** →
    choose **"The Lookout Tower"**. ⚠️ With the *Frat Boy Ensemble* (cap/cargo shorts/paddle,
    which I HAD on), "Blockin' Out the Scenery" only shows **yurts** (Chill-Out/Rations/
    H.A.S.H./Munitions/Barracks = sabotage distractions, NO Lookout Tower) — wrong outfit.
  - **Hippy side:** War Hippy Fatigues (reinforced beaded headband 2337 / bullet-proof
    corduroys 2032 / round purple sunglasses 2033) → adventure the **Orcish Frat House (27)**
    → NC **"Fratacombs"** → choose **"Screw this, head to the roof"**.
- **I HAVE the complete War Hippy Fatigues (outfit 32, equipped) but NOT the Frat Warrior
  Fatigues** → **commit to the HIPPY side.** (Collected the hippy fatigues from fighting war
  hippies. The Frat Boy Ensemble + frat prep is now irrelevant.)
- **⚠️ KEY DAY-55 FINDINGS (read before grinding the war):**
  - **War hippies (battlefield snarf 26) drop ~0 MEAT.** The war is **meat-NEGATIVE** —
    combat + HP-healing burn MP (= MMJ = meat) with no income. So **you need a meat war
    chest BEFORE grinding the war.** (Day 55 burned ~1,600 meat on MMJ for ~12 war fights.)
  - **HP recovery without scrolls: Lasagna Bandages (skill 3009) WORKS out of combat** —
    ~20 HP per cast / ~6 MP. Spam it to heal (MMJ powers it). Cannelloni Cocoon is NOT on
    skillz.php and id 3012 did nothing — use Lasagna Bandages instead.
  - **Full-heal every fight is too MP-expensive** for the war. Either heal lean (only at
    <45% HP) and accept some Beaten Ups (rest clears them, but rest only gives ~10 MP so
    it's a poor MP source), or come loaded with MMJ.
  - **Airship (snarf 81) is a good MEAT FARM:** ~100 meat/fight net once bootstrapped
    (Cannelloni one-shots most; weak monsters, rare Beaten Up). Day 55 farmed 147 → ~3,700
    meat. Convert surplus to MMJ (buy when meat ≥900). This is how to fund the war.

### 🏝️⚔️ Day 54 = built the dinghy, UNLOCKED THE ISLAND, STARTED THE WAR (frat side)
- **Mysterious Island UNLOCKED.** Built a **dingy dinghy** from scratch:
  - **dingy planks** = **General Store row 655, 400 meat** (NOT the Hermit — Hermit needs
    worthless items and doesn't even list planks; the General Store is the easy path).
  - **dinghy plans** = **The Shore Gift Shop** (`shop.php?whichshop=shore`, **row 176, costs
    3 Ship Trip Scrip**). Earn scrip via **Shore Vacations**: `adventure.php?snarfblat=355`
    → choice **793** opt 1 (Distant Lands Dude Ranch) = **3 advs + 500 meat → 1 scrip**. So
    **3 trips = 3 scrip = 1 dinghy plans** (9 advs, 1500 meat).
  - **Combine:** `inv_use` the **dinghy plans (item 146)** while holding planks → **dingy
    dinghy** → island opens (`island.php`).
- **⚠️ MISTAKE (logged):** the **Pretentious Artist** quest does NOT give dinghy plans — it's
  unrelated. (Completed it Day 53 anyway.)
- **WAR STARTED:** collected the full **Frat Warrior Fatigues** by adventuring the **Orcish
  Frat House (snarf 27)** — drops Orcish baseball cap (239), Orcish cargo shorts (240),
  Orcish frat-paddle (241). **Equipped all 3, then adventured at the Hippy Camp (snarf 26)**
  → instantly in combat with a **War Hippy** → **the war is ON** (frat side, vs hippies).
- **Battlefield = snarf 26** (wartime Hippy Camp, frat uniform). Day 54 cleared **~27 war
  hippy fights + ~14 NCs** (a real dent; exact remaining count not parsed). NCs auto-resolve
  fine with option 1.

### 🏆🎊 Day 53 = HOLY MACGUFFIN QUEST COMPLETE — the big one is DONE
- Ground tomb ratchets (warmer RNG today), used the wheel(+5) → landed on #5 → 2 ratchets
  rotate-and-watch → **#2 "nothing on the left, rubble on the right"** → descended with the
  bomb → **passageway to Ed's tomb opened**.
- **ED THE UNDYING defeated.** Multi-life boss; **Cannelloni → Mortar → Cannelloni burst
  melts each incarnation in 2-3 rounds at near-full HP.** Heal (scroll 595) + MMJ between
  lives. ⚠️ Completion detection: match the literal **"You acquire an item: Holy MacGuffin"**
  line — the words "Holy MacGuffin" appear in ALL of Ed's flavor text (false positives).
- **HOLY MACGUFFIN turned in at the Council** (`council.php`, auto-completes on visit) →
  parade + handful of confetti → quest GONE from the log. **The pyramid arc is over.** 🔺✅
- ⚠️ **Operational:** the extension disconnected right at the bomb-light moment, and heavy
  rapid fetching + a session drop made **api.php return an account/HTML page** (looked like
  a login). **Re-logging in fixes api.php.** Don't mistake the account page for JSON.

### ✅ MAJOR QUESTS DONE (for the record)
- **The Holy MacGuffin** ✅ (Day 53) — Staff of Ed → pyramid → wheel → bomb → Ed → MacGuffin.
- The full pyramid wheel decode lives in **`mechanics/pyramid-lower-chamber-wheel.md`** (kept
  for reference / future ascensions).

### Carryover consumable notes
- **🍣 stolen sushi (item 6293) = GREAT food: 6 fullness, ~12 adv each.** 2 sushi + junk =
  full 15 and ~+30 adventures. ~160 banked = a huge food reserve. (Day 51's "1-adv sushi"
  was the OLIVE, item 245 — different item.)
- **🍶 Fog Murderer (item 6682) = +6 drunk / ~14 adv each.** Best ratio. **2 Fog + 1 brandy
  (item 1956, +2 drunk) = exactly drunk 14.** Don't drink a 3rd Fog from 12 (→ overshoots 18).
- **🧃 MMJ** (`shop.php?whichshop=guildstore2&action=buyitem&whichrow=527`, 100ea): restock
  ~30 at open; meat recovers from grinding. **📜 scroll of drastic healing (item 595)** =
  full HP. **🧪 antidote (588)** cures poison via `uneffect.php?...whicheffect=284`.
- **⚔️ Combat loop notes (proven):** check "Beaten Up" as an *effect* → campground rest
  (clears it + restores the Beaten-Up stat cap); keep MMJ stocked; `&ignorewarning=1` on the
  adventure URL backstops the Mys-warning stall.

### 🔺 Day 51 = wheel decode CORRECTED; bomb still pending (RNG + recovery drought)
- **Net pyramid progress: have 2 tomb ratchets, 1 crumbling wooden wheel, 1 bronze token. NO bomb yet.** Wheel parked at alignment **#1 "vending machine on left, rats on right"**.
- **⭐ CORRECTED THE WHEEL DECODE (Day 50's was wrong).** Full verified mechanic now in
  **`mechanics/pyramid-lower-chamber-wheel.md`**. Key fixes:
  - You do **NOT** interact with the "center" room; you descend at a **specific named
    alignment**. **VENDING (token→bomb) = label "rubble on left, vending machine on right"
    (#4).** **RUBBLE (bomb→open Ed) = label "nothing on the left, rubble on the right" (#2).**
  - Day 50's "parked at the vending machine" was WRONG — that label ("vending on left, rats
    on right") is an EMPTY descent (verified: wasted 1 adv).
  - **Rotate-and-watch: descend ONLY when the label exactly matches the target.** Don't
    trust position math (Day 51 overshot #4 and burned a ratchet because of math).
  - Ring is **~9 positions, NOT 5** — a wheel (+5) DOES change the alignment, so **wheels
    are useful**. opt 1 = wheel (+5), opt 2 = ratchet (+1), opt 5 = descend (1 ADV).
  - ⚠️ Must **activate** choice 929 (load `action=pyramid_control`) immediately before
    POSTing `choice.php?whichchoice=929&option=N`, or the rotation is silently ignored.
- **⚠️ Tomb asps (Middle Chamber 407) inflict "Really Quite Poisoned"** → caps maxHP
  (183→116), crashes Mys (181→55), silently ruins combat. Cure: antidote **item 588**, its
  page posts to **`uneffect.php`** with `using=true&whichitem=588&whicheffect=284`. Combat
  loop must check effects every turn and cure on sight.
- **Ratchet RNG was brutal today (~1–2 per ~30 fights)** vs documented ~1/5. Equipped
  **Baron von Ratsworth's monocle (+10% item, item 1312)** — it was NOT equipped at start
  (acc slots had spent quest jewelry). Still rough. Equip max +item gear / item familiar.
- **❌ Recovery drought killed efficiency:** ran tiny houses AND MMJ to **0** mid-grind →
  forced campground rests for MP (1 adv each = death spiral) + a Beaten Up with no clearer.
  **Day-open priority #1 next time: restock MMJ + tiny houses BEFORE grinding.** Beaten Up
  IS cleared by campground rest (`campground.php?action=rest`). Scroll of drastic healing
  (item 595, have 13) = full HP but does NOT clear Beaten Up.
- **💸 Sushi blunder:** a mall buy-loop that gated on the (cached, stale) inventory count
  overbought **165 stolen sushi (item 6293, 6-fullness)** for ~21k meat, dropping me to 87.
  Lesson: never loop mall purchases on `api.php?what=inventory` (it caches). 165 sushi now
  banked as food. Real stolen sushi = item **6293** (NOT 245 = "olive", NOT 10179).

### 🏆 BIG WINS Day 48 — the Palindome arc is DONE
- **🏆 STAFF OF ED ASSEMBLED** (headpiece 2323 + Staff of Fats 2268 → Staff of Ed).
- **⚔️ DR. AWKWARD DEFEATED** → Staff of Fats + Drowsy Sword.
- **📖 Photo puzzle + Mr. Alarm + Mega Gem** all done in one day.
- **🔺 ANCIENT BURIED PYRAMID OPENED**: Upper (406) → Middle (407) → **Lower Chambers** now reachable.

### ⚔️ COMBAT STANDARD (keep using)
**Entangle-first stun combo**: R1 **Entangling Noodles (3004)** → R2 **Cannelloni (3005)** → R3 **Mortar (3007)** → R4+ Cannelloni; Spaghetti (3020) fallback at MP<8. Bosses (Ron, Dr. Awkward) are **stun-immune & hit hard (~42–63/round)** — enter at FULL HP, lead Cannelloni, queue Mortar, finish with the detonation; familiar+thrall heal you mid-fight. Keep **9 photoprotoneutron torpedoes (630)** as boss insurance. `whichskill=4` is NOT a skill.

### Carryover state (End of Day 51)
- **🏆 STAFF OF ED** ✓ held (chambers already opened).
- **Accessories now:** acc1 = Talisman o' Namsilat (486), acc2 = 6684, **acc3 = Baron von
  Ratsworth's monocle (1312, +10% item)** — equipped Day 51 for the ratchet grind. (Mega
  Gem 2267 unequipped; neither it nor the talisman is needed for Ed.)
- **🚀 Steam-powered model rocketship** ✓ (Hole in the Sky = snarf 83).
- **🧃 MMJ: ~10 (RESTOCK toward 30; meat recovers from grind).** **🏚️ tiny houses: 0**
  (campground rest clears Beaten Up + ~10 MP/adv as fallback). **💥 torpedoes (630): 9.**
  **📜 scroll of drastic healing: ~9** (full HP, item 595; does NOT clear Beaten Up).
  **🧪 soft green echo eyedrop antidote: ~27** (item 588, cures poison via uneffect.php).
- **🔺 Pyramid / Holy MacGuffin: ✅ COMPLETE (Day 53).** Ed defeated, MacGuffin turned in.
  Nothing left to do at the pyramid.
- **🍶 Booze on hand (no need to buy):** snifter of thoroughly aged brandy ×~3 (item 1956,
  **+2 drunk / +3 advs**), Fog Murderer ×~2 (item **6682**, **+6 drunk / ~14 advs each —
  strong!**), Green Manalishi ×5 (7206), bottle of gin ×6 (237), vodka (238). Drink via
  `inv_booze.php?which=1&whichitem=ID`. **To hit ~drunk 14: 2 Fog (12) + 1 brandy (14).**
  Do NOT drink a 3rd Fog from 12 — it overshoots to 18 (advs still bank, but it's sloppy).
- **🍣 Food: 165 stolen sushi (6293, 6-fullness)** banked + assorted junk food. Mall stolen
  sushi is ~132 meat but only ~1 fullness/1 adv when "olive" (245) — the real one is 6293.

## 🌋 CURRENT OBJECTIVE — WIN the Island War ("Make War, Not... Oh, Wait") — frat side

Island ✅ unlocked, war ✅ started (frat side). **Now: reduce the hippy army to 0 to win.**
The efficient way is the **side quests** (each removes a big chunk of enemies), then mop up
the battlefield. Battlefield = **snarf 26** (wartime Hippy Camp; must wear the Frat Warrior
Fatigues 239/240/241).

### Ordered plan (Day 58) — ⭐ START THE WAR (hippy side), then do side quests
1. **Open**: EAT 2 sushi (6293) + junk → full 15 (≈+30 advs). Re-establish `window._pwd` +
   helpers (Lasagna-heal 3009; MMJ MP; meat-aware buy). **Equip the War Hippy Fatigues
   (outfit #32).** Rebuild war chest at the **Airship (snarf 81)** → buy ~20 MMJ.
2. **⭐ START THE WAR:** adventure the **Orcish Frat House (snarf 27)** in the War Hippy
   Fatigues until the **"Fratacombs"** NC fires (random, ~1/8 turns) → choose **"Screw this,
   head to the roof"**. This declares the war, flips the island to Wartime, opens
   `bigisland.php` + the side-quest zones. (Day 57 found the mechanic but ran out of advs
   before "Fratacombs" appeared — just needs a full day of turns.)
3. **Do the hippy-side war SIDE QUESTS** (each DOUBLES kills/fight) — now reachable on the
   wartime `bigisland.php` map: the **Arena** (easy with Entangling Noodles), the **Lighthouse**
   (lobsterfrogmen → gunpowder → big army cut), the **Junkyard**, the **Orchard/filthworms**.
4. **Mop up the battlefield** (the wartime Frat-side front, now that you're a hippy you fight
   frat boys). Funded full-heal combat: Cannelloni→Mortar burst, Lasagna-heal to ~90%.
5. Win → Council. (Then: Twin Peak signal fire [Topping]; Guild quests **Me and My Nemesis**
   + **My Other Car Is Made of Meat** still open.)
- ⚠️ **Don't waste advs on the verge-of-war yurt NCs** ("The Thin Tie-Dyed Line" c140,
  "Blockin' Out the Scenery" c141 with the *Frat Boy Ensemble*) — they're sabotage
  distractions, NOT the war-start. The war-start needs the **War Fatigues** + the specific NC.
- ⚠️ **Session instability**: frequent logouts; heavy fetching can make api.php return an
  account/HTML page (not JSON). Re-login fixes both; work in short bursts; re-set helpers.
- ⚠️ **Drunk overshot to 15** Day 55 (Green Manalishi +3 from drunk 12). Harmless (advs bank,
  resets at rollover) but stop at 12 next time.
- **⚔️ Ed/boss combat template (proven, reuse for any boss):** full HP entry (scroll 595),
  **Cannelloni R1 → Mortar R2 → Cannelloni R3+**, torpedoes (item 630, have 9) in reserve,
  MMJ to refill. Melts most things in 2-3 rounds.

### Palindome reference (DONE — for the record)
- Palindome = snarf 386 via `place.php?whichplace=plains` (talisman equipped). Offices appear on `place.php?whichplace=palindome` after reading the books: Vol. I (7262) → `pal_droffice` (Dr. Awkward); Vol. 2 (7270) → `pal_mroffice` (Mr. Alarm).
- Drawn Onward photo order (choice 872): God(2259), red nugget(7264), dog(7263), ostrich egg(7265).
- Revamp: after meeting Mr. Alarm, **Bob monsters drop the finished wet stunt nut stew directly** (no Whitey's Grove cooking). Deliver → Mega Gem (2267).
- Recurring Palindome stat NCs: 126 "Sun at Noon, Tan Us" (opt 1), 127 "papaya war" (opt 3).
- Dr. Awkward via choice 131 (any option starts the fight); needs Talisman + Mega Gem equipped.

### Hidden City references (preserved — see mechanics/hidden-temple-unlock.md for full details)
- **Hole in the Sky = snarfblat 83** (NOT 84). Steam-powered model rocketship passively unlocks. No daily cap.
- "You shouldn't be here." (no "yet") = wrong zone / not unlocked. "Yet" variant has a brave-or-foolish bypass.
- Snake With Like Ten Heads is hard from non-full HP — enter at full HP, Cannelloni + Mortar burst, no Lasagna detour.

## Earlier — Day 46 plan (HISTORIC, kept for reference)

**Today's Shen artifact (set by ascension-day Day 46): EYE OF THE STARS from the Snake With Like Ten Heads in The Hole in the Sky (snarfblat 83 — see correction below).**

### ✅ CORRECTION: Hole in the Sky is snarfblat 83 (NOT 84). No daily cap.
Day 46's HANDOFF wrongly claimed a "~1 adv/day cap" — that was a misdiagnosis. The truth: **snarf 84 is a different zone that blocks you with "You shouldn't be here." (no "yet"); snarf 83 is the actual Hole in the Sky** and is freely adventureable once you hold a steam-powered model rocketship. The Day-46 first Sky-fight at snarf 84 ("Skinflute") was a fluke — probably my session was in a weird state or 84 routed elsewhere. **Always use snarf 83 going forward.** The "shouldn't be here YET" stat-warning is a different message (has a brave-or-foolish bypass).

### Day 47 ordered plan
1. **Open the day** — buy MMJ (top to ~50), eat 2 sushi (3 in stock; buy more from mall too), Pastamastery + Manicotti ×10. **YOU ARE STILL POISONED BY SHEN** (stat-penalty intrinsic) until you give him the 3rd artifact.
2. **Adventure at snarf 83 (Hole in the Sky)** freely. 19-monster pool; **Snake With Like Ten Heads** drops **Eye of the Stars**. Day 46 encountered the Snake once but LOST the fight at HP 69 start. **Snake combat rule: enter at FULL HP, Cannelloni R1 → Mortar R2 → Cannelloni R3 burst, NO Lasagna detour** (the heal-once-at-low-HP rule loses to the snake — the round wasted healing costs the kill). Other Sky monsters seen: Hooded Warrior, Pork Sword, Trouser Snake, Burrowing Bishop, Family Jewels, Junk — these are all easy 2-Cannelloni kills.
3. After Eye of the Stars → return to **Copperhead Club (snarf 383)** → adventure → Shen → he'll ask for artifact #2 (random from same pool: Stankara Stone / First Pizza / Murphy's Rancid Black Flag / Lacrosse Stick of Lacoronado / Shield of Brook / Eye of the Stars). Check questlog (`questlog.php?which=1`, search for "Shen") for new request.
4. **Parallel grind: Red Zeppelin protesters (snarf 384)** with remaining advs. Each fight clears 1 protester. **"Fire Up Above" NC** (auto-handled by loop now) clears 3 protesters at once via option 1 "Join in." Need ~80 total cleared. Day 46 cleared ~10-15 — still ~65-70 to go (uncertain count — the Mooring page doesn't show a counter).
5. After 80 protesters cleared, the **Red Zeppelin** opens → fight **Ron Copperhead** → get the other talisman piece. Combine with **Copperhead Charm** → **talisman o' nam** → **Palindome unlocks**.

### Full Staff of Ed completion chain (for reference)
```
talisman o' nam → Palindome accessible
  → cook wet stunt nut stew (bird rib + lion oil + stunt nuts)
  → give to Mr. Alarm → Mega Gem
  → equip Mega Gem, re-enter Palindome
  → Dr. Awkward boss → STAFF OF FATS
fuse headpiece (2323) + Staff of Fats → STAFF OF ED
insert into pyramid socket (Desert Beach, db_pyramid1)
  → Upper / Middle / Lower Chambers
  → Ed the Undying boss → HOLY MACGUFFIN
```

## Mechanics learned Day 46

- **Copperhead Club = snarf 383** (in Wrong Side of the Tracks: `place.php?whichplace=town_wrong`).
- **Steam-powered model rocketship** drops from **Copper Feel** NC at Castle Top Floor (324), opt 2 "Investigate the Whirligigs and Gimcrackery" (high rate — first try). Held passively to unlock Hole in the Sky.
- **Hole in the Sky = snarf 84**, **daily cap ~1 adv**.
- **Red Zeppelin Mooring** = `place.php?whichplace=zeppelin` → snarf **384** for protester mob. "Fire Up Above" NC option 1 = +3 cleared.
- **Forced-choice NCs persist across days** — always resolve in-progress choices before doing anything else next session (Day 46 lost ~10 min to a leftover Pantry "Trespasser" choice silently bouncing every navigation).

## Combat / loop knowledge (verified Days 43–45)

- Protectors are physical-immune; **Cannelloni (cold/elemental spell)** hits 55–131 (with crit potential). Mortar queues ~110 delayed detonation. **Ned/Marcellus deal ~1 dmg** (useless on protectors).
- **Protector HP varies wildly**: Bowling ~220, Office ~250, Hospital ~120 (with surprisingly hard ~110/round hits), Apartment ~120, Ziggurat Spectre ~220.
- **Always enter protector fights at FULL HP.** Forced-choice pages block mid-NC healing — accept the start state and burst with **Cannelloni R1 → Mortar R2 → Cannelloni R3** (R3 = Cannelloni + Mortar detonation = ~165-241 burst including crits).
- Apartment has a Mysticality warning at entry — bypass via the **"brave or foolish"** submit button.
- Loop pattern (stable): heal-once-per-fight, full-HP entries, **api.php?what=status** for fresh HP/MP (charpane lags), drive ticks from async eval burst (in-page setTimeout throttles when tab backgrounded), `inv_use.php?quantity=N` for MMJ bounces to login (use single-use repeatedly), **mid-choice item use / skill cast is silently blocked** (drink/equip outside choice).

## Earlier (historical)

- **Day 40**: got Nostril of the Serpent (Such Great Heights opt 2). Mistakenly chased the "hemisphere door" RNG.
- **Day 41** (interrupted): found the sushi food fix; gargoyle-door grind.
- **Day 39**: HIDDEN TEMPLE UNLOCKED via the Spooky Forest Arboreal Respite tree (see mechanics file).

## Earlier — End of Day 39 state (historical)

- Mus 91 / Mys 127 base (138 buffed) / Mox 86, HP/MP 144/207, Meat ~44,877, advs 0.
- **🏛️ BIG Day 39 win: HIDDEN TEMPLE UNLOCKED.** Manually walked the entire Spooky Forest Arboreal Respite tree. Collected Spooky Sapling (Road Less Traveled **opt 3 hunter** → Tree's Last Stand opt 3 "Buy a tree" 100 Meat), Spooky-Gro Fertilizer (Thicket opt 2), tree-holed coin (Stream opt 2 cave, +300 Meat bonus), Spooky Temple map (Thicket opt 3 "Follow the coin" → O Lith Mon opt 1). Used map (id 74) → Temple unlocked → entered, found Hidden Heart (choice 580) and Confusing Buttons (583, random press = eject — needs stone wool for Stone-Faced effect per wiki).
- **Lesson**: Day 38's "Knock on cottage door" was a flavor dead end; the right path is **"Talk to the hunter"** (opt 3 of Road Less Traveled). Verified tree saved in `mechanics/hidden-temple-unlock.md`.

## Earlier — End of Day 38 state (historical)

- Mus 90 / Mys 127 base (138 buffed) / Mox 86, HP/MP 143/207, Meat ~44,511, advs 0.
- **Day 38 outcome: slow.** Tried Dakota Fanning (needs 3 items I lack: bendy soda straw / high-octane plant food / sewing needle). Pivoted to Spooky Forest Arboreal Respite chain. NC fired ~4 times. Sub-NC tree more nested than expected ("Arboreal opt 1 'Follow the old road' → 'Road Less Traveled' opt 2 'Knock on the cottage door' → ???") — chain ended without acquiring sapling. **0/3 Hidden Temple unlock items acquired.** Stats +1 each base from grinding. Still 0 tiny houses. Eye of Ed (from Day 37) intact.
- **Day 39 plan**: step through Arboreal Respite manually next time it fires, inspect the cottage-door sub-screen's option labels, then encode the correct path. Sapling expected from a "buy a tree for 100 meat" option at "Tree's Last Stand" inside the Road Less Traveled chain.

## Earlier — End of Day 37 state (historical)

- Mus 90 / Mys 126 base (137 buffed) / Mox 85, HP/MP 143/206, Meat ~42,833, advs 0.
- **🏆 BIG Day 37 win: SPOOKYRAVEN CELLAR QUEST COMPLETE — Eye of Ed acquired (1 of 3 Staff of Ed parts).**
  - All 6 mortar-dissolving reagents collected (today added: turpentine, sublicalc, triatomaceous dust).
  - **Lab + Storage Room are on manor3 (3rd floor): Lab = 396, Storage Room = 398.** (Old hypothesis "Boiler Room 399 = Lab" was wrong.)
  - **Wall auto-mixes** with all 6 reagents (no manual crafting needed).
  - **Lord Spookyraven** killed in 3 rounds via Entangle→Mortar→Cannelloni — Mortar's queued ~200-dmg detonation is decisive on bosses.
  - Drops: **Eye of Ed** + Lord Spookyraven's ear trumpet + +Mus point + heavy stat XP.
- **Big correction**: cellar gives **Eye of Ed**, NOT Staff of Fats as old notes claimed. Staff of Fats is from **Palindome (Dr. Awkward boss)** — separate questline (Mr. Alarm → wet stunt nut stew → Mega Gem → Palindome → Dr. Awkward). Mechanics files updated.
- **Cannelloni Cannon damage element**: landed "hailstones" on Lord Spookyraven → looks like **COLD**. Should let us beat Hidden City protector spirits (immune to physical, need elemental). Verify in-game.
- **Day 37 misses**: still 0 tiny houses (Airship grind didn't drop any in ~10 fights).

## Staff of Ed assembly status (1/3 components)

```
ancient amulet (Hidden City — protector spirits + Protector Spectre boss)  [❌]
                  +
Eye of Ed (Spookyraven cellar — Lord Spookyraven boss)                     [✅ Day 37]
                  ↓
            headpiece of the Staff of Ed
                  +
Staff of Fats (Palindome — Dr. Awkward boss)                               [❌]
                  ↓
              STAFF OF ED → insert into pyramid socket (Desert Beach)
```

## Earlier state (historical)

- End Day 36: Mys 124 base, cellar unlocked, 3/6 reagents.
- End Day 35: Mys 122 base, Library unlocked, Spookyraven library key in inventory.
- End Day 34: Mys 120 base, desert 100%, pyramid revealed.
- **🔺 HOLY MACGUFFIN: Arid Desert exploration = 100% — COMPLETE. Pyramid at Desert Beach REVEALED** (`place.php?whichplace=desertbeach` → `db_pyramid1`). It needs the **Staff of Ed (3 parts)** inserted into the model's socket.
- **Have worm-riding hooks** (from Gnasir, turning in the 15 manual pages — choice 805 option 3). drum machine never obtained, but desert is 100% so it's moot.

### Day 34 quick summary
Rollover 44 advs → ate to 78 (2× stolen sushi = +25 adv & stat points; **centipede eggs POISON you — never eat them**). Gnasir gave worm-riding hooks. Burned food-poison off in Spooky Forest (15). AUTO-CYCLE desert(364)/Oasis(122) ground exploration 63→100%. Pyramid revealed & investigated (needs Staff of Ed). Spent the tail safely farming Airship (81) at Mys 131. Airship dropped **no tiny houses** — still 0 in stock.
- **Drunk**: 0/14 (NO usable booze — open sauce/Ye Olde Meade unimplemented), **Full**: 15/15
- **Familiar**: Marcellus, 20-pound Mosquito (drains blood, heals me)
- **Pasta Thrall**: Ned, Lvl 10 Vampieroghi (drains blood, heals me, deals damage)
- **Equipment** (current):
  - Hat: fuzzy earmuffs (Power 130, +5 Mys)
  - Weapon: pasta spoon (1-2 dmg 1h) — keep for Pastamancer synergy
  - Off-Hand: **UV-resistant compass** (+1% desert exploration/fight — keep equipped during Holy MacGuffin desert phase; was skull of the Bonerdagon)
  - Pants: snowboarder pants (Power 100)
  - Accessories: Baron von Ratsworth's monocle (+10% item drops), whalebone corset, imp unity ring
- **Inventory hot items (Day 32 EOD)**:
  - **17 tiny house** (Airship stockpile — partial HP/MP restore + clears Beaten Up)
  - 8 scroll of drastic healing (full HP), 22 soft green echo eyedrop antidote, 0-1 phonics down
  - **Buff stash**: ~4 glittery mascara, ~1 hair spray, ~4 Ben-Gal Balm, super-spiky hair gel
  - Spleen: 0 hardening cream (used up — NEED MORE for Really Hard DR 50), 0 sparkling orb, ~4 strongness elixir, ~5 concentrated cooking, ~4 dieting pill
  - ~10 cocoa eggshell fragment, 42 dry noodles
  - **open sauce + Ye Olde Meade = UNIMPLEMENTED** ("not implemented yet" — cannot drink, no adv banking)
  - giant heirloom grape tomato (Top Floor drop, ~15 adv/each — best food)
  - Combat items: 8-ball, antique hand mirror, Battlie Light Saver, brass gear, photoprotoneutron torpedo (×7), etc.

## ⚔️ Combat Template (Day 32 — proven)
**Entangle-first loop**: Round 1 = **Entangling Noodles** (3 MP, STUNS for Pastamancer) → Rounds 2+ = **Stuffed Mortar Shell** then **Cannelloni Cannon**. Lasagna at HP<40%, Spaghetti at MP<6, weapon-attack at 0 MP. Track per-fight turn with `window._ft` (reset to 0 each new adventure). Stun + familiar (Marcellus heals ~40/rd) + thrall (Ned) = clean ~3-round wins at ~100% HP, near-zero Beaten Ups even with no DR. Loop also needs `window._idleN`→re-adventure after 2 idle ticks (recovers from blank/donation-banner stalls after disconnects).

## 💧 MP Economy (Day 32 — SOLVED)
**`inv_use.php?which=3&whichitem=592&pwd=HASH` (tiny house) WORKS via URL** — ~+23 MP, no adv cost, no DOM-click needed. Refill between fights to keep Mortar/Cannelloni fast. Campground rest x8 also builds a buffer (1 adv each, ~+13 MP). 17 tiny houses were available Day 32 (now ~0 — replenish from Airship).

## 🎓 Guild Skills (Day 32)
Account already knows the ENTIRE Pastamancer tree (Level 4–15, permed). Nothing to train. Brie list = full catalog. Underused already-known skills: Entangling Noodles (R1 stun), Cannelloni Cocoon (expensive full heal — often hidden from menu when MP too low), Spirit of Ravioli (DR), Spirit of Rigatoni, Weapon of the Pastalord, Thrall Unit Tactics. Buyskill param = `whichskill` not `skillid`.

## ⛔ HARD RULE: Don't End the Day With ≥40 Advs Unspent
Banked adventures roll over but waste daily potential. **Keep adventuring until < 40 advs remain** (ideally ~0). Disconnects / MP starvation / stalled quest / boredom are NOT stop reasons — adapt instead: re-login, refill MP via tiny house (`inv_use.php?which=3&whichitem=592` — works, ~+23 MP, no adv cost), or fall back to Airship (snarfblat 81, sustainable at 0 MP via Spaghetti+companions). Only stop early if truly out of advs, Beaten-Up with no recovery, or user says so. Wrap order after advs are spent: write diary → **close the KoL tab** → commit+push LAST (the tab closes BEFORE the commit).

## ⛔ HARD RULE: Fill the FOOD & BOOZE meters every day (EAT + DRINK before wrapping)
**Never wrap a day with an unused `full` (0/15) or `drunk` (0/14) meter** — that's wasted rollover adventures (each fullness/drunkenness ≈ 2-3 advs). Both EAT and DRINK are mandatory steps, not optional.
- **EAT (at day OPEN):** attempt to **craft + eat** food to fill fullness to 15. Pastamancer pasta = dry noodles (**item 304**, summoned by Pastamastery — we hoard ~96) + a filling via `craft.php?mode=cook&action=craft&a=304&b=<fillingId>&qty=1&pwd=`. ⚠️ **Recipe still UNSOLVED** — long pork (2532), lihc eye (170), jumbo olive (455), enchanted bean (186) all return "no recipe." Find the correct pasta filling (buy the missing ingredient from the mall if needed), OR just **buy ready food from the mall** (stolen sushi 10179 when available, or any good adv/fullness food). Eat best-first.
- **DRINK (at day END, after all adventuring):** fill drunkenness to ~12-14 to bank rollover advs. **Fog Murderer = Hidden Tavern row 175, item 238 — +3 drunkenness, +6 adventures each** (buy `shop.php?whichshop=hiddentavern&action=buyitem&whichrow=175&quantity=N`; drink `inv_booze.php?which=1&whichitem=238`). 4 Fog Murderers → drunk 12, ~+24 advs banked. The 5th would exceed 14 (blocked); top the last 2 with Cursed Punch (potency 1) ONLY if you accept its random curse.
- **Order is EAT → ADVENTURE → DRINK.** Diary/commit is LAST, only after food is eaten, advs are spent, AND booze is drunk.

## ⚠️ Operational Note: Extension Disconnects + Tab Throttling (Day 34)
Chrome extension drops ~every 8-12 min (service-worker sleep when backgrounded). **Worse #1 limiter: background-tab timer throttling** — a backgrounded tab's in-page `setTimeout` loop drops to ~1 tick/min. **Workaround (Day 34, works):** fire an `async` burst of ~7-9 `_tick()`s with ~4.4s spacing from one `javascript_tool` call. CDP eval "times out" at 45s **but the async keeps running in-page past the timeout** — the timeout error is benign; verify progress with a follow-up read. Each burst ≈ 2-4 advs. Keeping the Chrome tab foregrounded eliminates the throttle entirely (best fix). Also: returning page HTML/hrefs containing `pwd=`/query strings → `[BLOCKED: Cookie/query string data]`; strip query strings, return only labels + parsed params.

## ⚔️ Day 34 Combat/Consumable Lessons
- **NEVER eat centipede eggs** — inflicts "Somewhat Poisoned" (~−53 flat Mys, capped HP/MP, ~9-10 turns). Burn it off in a safe no-warning zone (Spooky Forest 15) before doing high-Mys zones.
- **stolen sushi** = excellent food: ~12-13 adv + big substats + often a stat point each. Eat these first.
- **Do NOT trade combat kill-speed for MP economy while 0 tiny houses.** Tried low-MP (Entangle+Spaghetti+companions) — tanky desert monsters (cactuary) out-damage it once stun lapses → HP to 26%. The proven R1 Entangle → R2 Mortar → R3+ Cannelloni combo is mandatory for safety. Accept the ~1-rest-per-fight tax.
- **Tiny house restock is the top logistical priority** — 0 in stock all of Day 34 caused a ~50%-efficient rest spiral. Airship (81) did NOT drop any. Source them early Day 35.

## Login Credentials (test account, not secret)
- Login: `ClaudeCode`
- Password: `REDACTED`
- URL: `https://www.kingdomofloathing.com/login.php`

## Active Quests (Day 32 EOD — verified via questlog.php)

### Council Quests
1. **There Can Be Only One Topping** (Highland Lord signal fires)
   - A-Boo Peak ✓, Oil Peak ✓, **Twin Peak (mysterious!)** still pending
   - **Twin Peak = snarfblat 297** (confirmed Day 31). Hedge-maze topiary animals → "Great Overlook Lodge" interior.
   - Gated by 4 noncombats needing: hot res ≥4, stench res ≥4, drunkenness check, Spookyraven library quest done. **Blocked** — don't grind here without prep gear.
2. ~~**The Rain on the Plains is Mainly Garbage**~~ ✅ **COMPLETE Day 32** — kitchen-counter noncombat fired on Top Floor (324) after ~22 advs; turned in at Council; reward: giant discarded plastic fork
3. **The Holy MacGuffin** (Council) — desert phase **DONE (Day 34)**. **Now: assemble the Staff of Ed (3 parts, any order), insert into the pyramid socket at Desert Beach (`db_pyramid1`).**
   - ✅ **Arid Desert 100% explored → pyramid revealed & investigated (Day 34)**. AUTO-CYCLE desert(364)/Oasis(122); Oasis warning bypass = POST form `action=ignorewarning`+`nozonewarnings=1` (NOT `ignorewarning=1`).
   - **Staff of Ed parts still needed** — full wiki-sourced walkthrough now in **`mechanics/staff-of-ed-quest.md`**. Assembly = ancient amulet + Eye of Ed → headpiece; headpiece + Staff of Fats → Staff of Ed. Routes: (a) **Staff of Fats** = Spookyraven Haunted Wine Cellar (wine bomb: Chateau de Vinegar + blasting soda → unstable fulminate → +100 ML boiler → wine bomb → blow wall); (b) **ancient amulet** = Hidden Temple → Hidden City (4 protector spirits → spheres → shrines → 4 stone triangles → Ziggurat → Protector Spectre; **spirits are PHYSICAL-IMMUNE, need elemental dmg** — possible Pastamancer blocker, verify); (c) **Eye of Ed** = Hidden Temple noncombat; plus the Copperhead/Shen + Red Zeppelin/Ron sub-track. After Staff inserted → pyramid Upper/Middle/Lower chambers → **Ed the Undying** boss. ⚠️ Several steps are search-derived & flagged "verify in-game" in the mechanics file.
   - Older Staff-of-Ed phase log (Day 33):
   - ✅ Black Market (Black Forest 405) → forged identification documents (`shop.php?whichshop=blackmarket` whichrow=281, 5k meat)
   - ✅ Desert Bus pass (General Store `shop.php?whichshop=generalstore` whichrow=657, 5k meat) → Desert Beach unlocked
   - ✅ The Shore Inc (snarfblat 355 / **choice 793 OPTION 1** "Distant Lands Dude Ranch" — works ONLY with forged ID in inventory) → **father's MacGuffin diary** (3 adv + 500 meat)
   - ✅ Read diary (inventory [read] link) → **Staff of Ed questline** unlocked
   - 🔺 **NOW: Arid Extra-Dry Desert exploration = 63%** (snarfblat 364). Need 100% → pyramid noncombat. Mechanic: Oasis (snarfblat 122) gives **Ultrahydrated** (~5 turns) → desert becomes Ultrahydrated version where exploration counts + worm-riding manual pages drop (need 15 → Gnasir → worm-riding hooks + drum machine = +30%; pages did NOT drop Day 33, raw exploration is the route). **UV-resistant compass equipped = +1%/fight.** **AUTO-CYCLE loop**: snarfblat = /Ultrahydrated/.test(charpane) ? 364 : 122.
   - **Gnasir's Place** (Desert Beach map, element title 'Gnasir' → click closest('a')): errands → desert sightseeing pamphlets (+15% explore each, up to 3). Day 33: gave can of black paint → 1 pamphlet used (+15%). Also "A Ruined House" on map (stone rose / more errand items).
   - **Staff of Ed = 3 parts (any order)** needed to open pyramid: Hidden Temple (Distant Woods), Spookyraven Manor cellar (see `mechanics/spookyraven-ghost-chain.md`), Copperhead Club (Wrong Side of the Tracks → Shen Copperhead) + Red Zeppelin (Ron Copperhead). Can pursue in parallel with desert.
4. ~~**Cryptic Emanations**~~ ✅ CLOSED Day 28 (Bonerdagon)

### Guild Quests (Pastamancer)
4. **Me and My Nemesis** — Retrieve the Epic Weapon (see `mechanics/nemesis-quest.md`)
5. **My Other Car Is Made of Meat** — parts gathered; Untinker at Degrassi Knoll (knoll_friendly path was blocked — needs different approach)

## Critical Discoveries (Days 28–32)

### ⭐ Stuffed Mortar Shell (skill 3007, 8 MP) — Day 31
- **~2× Cannelloni Cannon damage** at same Mys/MP cost
- Damage is **delayed to NEXT round**, and it can only be cast **once per fight** (vanishes from skill menu while a Mortar is pending)
- Optimal combo: R1 Mortar (queues ~100) → R2 Cannelloni (~55 immediate + Mortar lands) = ~155 burst over 2 rounds for 16 MP
- Combat tick prefers Mortar if present in dropdown, else Cannelloni

### Pastamastery (skill 3006, 10 MP, once/day) — Day 31
- Summons +3 dry noodles. Only appears in skills.php on days not yet cast. "Daily Reminders" on main.php tracks it.

### Tiny house — CORRECTED (Day 30)
- **PARTIAL** restore (~21 HP, ~23 MP), NOT full. But **does clear Beaten Up**.
- Use `scroll of drastic healing` (8 in stock) for full HP. Have **17 tiny house** (Airship stockpile).
- Spleen/some misc items fail via `inv_use.php?which=3` URL — **DOM-click the [use] link** in inventory.php instead (see `mechanics/browser-automation.md`).

### Phonics down — split behavior (Day 32)
- Buff (Tingly Wrists/Elbows: +Mys and/or +Mox, 3 turns) → applies via URL ✅
- +99 MP restore → does NOT apply via `inv_use.php?which=3` ❌. Use campground rest or tiny-house DOM-click for MP.

### Booze items unimplemented (Day 32)
- `open sauce` (6274), `Ye Olde Meade` (6276) → "This item is not implemented yet." Cannot drink. No rollover-booze adv banking. Need a real booze source (Bat Hole / Typical Tavern 233 / mall).

### giant heirloom grape tomato (Day 32)
- Top Floor giant drop. ~15 adventures each. Best food available — always eat these.

### Bonerdagon wing-flap mechanic (CORRECTED via wiki + observation)
- **Boss has only 120 HP** — one Cannelloni at Mys 97+ does ~98 dmg = nearly one-shots
- Wing-flap disrupts both skills AND items (per wiki: 25%, but my observed rate was ~86%)
- MP not consumed when disrupted, but you still take 37 spooky dmg
- **Safe Moxie = 98** (he can't hit you above this)
- Guaranteed drops: chest of the Bonerdagon, skull of the Bonerdagon
- **Strategy options**:
  - Push **Moxie to 98+** (safe Moxie threshold) — he can't hit you, just keep casting until 1 lands
  - Or bring lots of MP + tiny houses + scroll of drastic healing for sustainability through disrupts
  - Or test combat items (smut orc keepsake box, hellion cube, dried face) — wiki says items also disrupted, but worth testing

### Skill IDs from page DOM
- Manicotti Meditation = 3000
- Lasagna Bandages = 3009
- Springy Fusilli = 3015
- Cannelloni Cannon = 3005
- Entangling Noodles = 3004
- Spaghetti Spear = 3020

### URL patterns (verified working)
- Cast skill quantity: `runskillz.php?action=Skillz&whichskill=ID&ajax=1&quantity=N&pwd=HASH`
- Eat: `inv_eat.php?which=1&whichitem=ID&pwd=HASH`
- Use item: `inv_use.php?which=3&whichitem=ID&pwd=HASH` (some items need which=1)
- Combat skill: `fight.php?action=skill&whichskill=ID`
- Get pwd hash: regex from page HTML `pwd[=:]\s*['"]?([a-f0-9]{32})`

### Consumables economy
- ghuol egg = 1 fullness, 1 adv (low quality, fills space)
- stale baguette = ~3 fullness, 6 advs (-7 meat from hooligans event)
- pink slime = ~4 fullness, similar advs
- glass of goat's milk = 1 booze, 1 adv (only "drink" I had)

## Combat Strategy Status

### Pasta One-Two Punch (Pastamancer combo)
1. **Round 1**: Entangling Noodles (3 MP) → STUNS for Pastamancers
2. **Round 2+**: Cannelloni Cannon (8 MP) — does ~98 dmg at Mys 97-103
3. **Threshold**: HP < 35% → Lasagna Bandages (6 MP, ~12-21 HP heal)
4. **MP < 6**: Spaghetti Spear (1 MP) basic chip damage
5. **Backup**: Marcellus + Ned drain blood every round → heal you for ~25-50 HP, also damage enemy ~20

### Combat tick code (works in DevTools / mainpane JS)

```javascript
window._snarfblat = 81; // airship, change as needed
window.tick = function() {
  var doc = frames['mainpane'].document;
  var t = (doc.body.innerText || '').toLowerCase();
  if (t.includes('adventure again')) {
    if (t.includes('out of adventures') || t.includes('tired')) return 'done';
    frames['mainpane'].location.href = 'adventure.php?snarfblat=' + window._snarfblat;
    return 'next adv';
  }
  if (t.includes('beaten up')) return 'beaten up - stop';
  var sels = doc.querySelectorAll('select');
  var hasSkillBtn = false;
  doc.querySelectorAll('input[type="submit"]').forEach(b => {
    if ((b.value || '').includes('Use Skill')) hasSkillBtn = true;
  });
  if (t.includes("you're fighting") && hasSkillBtn && sels.length >= 2) {
    var skillSel = sels[1];
    var charText = frames['charpane'].document.body.innerText;
    var nums = charText.match(/(\d+)\s*\/\s*(\d+)/g) || [];
    var hpFrac = 1, mp = 999;
    if (nums.length >= 1) {
      var p = nums[0].split('/').map(s => parseInt(s.trim()));
      hpFrac = p[0]/p[1];
    }
    if (nums.length >= 2) {
      var p = nums[1].split('/').map(s => parseInt(s.trim()));
      mp = p[0];
    }
    var target;
    // FIXED: gate Lasagna on MP >= 6
    if (hpFrac < 0.35 && mp >= 6) target = 'Lasagna';
    else if (mp < 8) target = 'Spaghetti';
    else target = 'Cannelloni';
    for (var i = 0; i < skillSel.options.length; i++) {
      if (skillSel.options[i].textContent.includes(target)) {
        skillSel.selectedIndex = i;
        skillSel.dispatchEvent(new Event('change', {bubbles: true}));
        break;
      }
    }
    var btns = doc.querySelectorAll('input[type="submit"], button');
    for (var b of btns) {
      if ((b.value || '').includes('Use Skill')) { b.click(); break; }
    }
    return 'cast ' + target + ' (HP ' + (hpFrac*100|0) + '% MP ' + mp + ')';
  }
  if (!hasSkillBtn) {
    var btns = doc.querySelectorAll('input[type="submit"], button');
    for (var b of btns) {
      var v = (b.value || b.textContent || '').toLowerCase();
      if (v && !v.includes('away') && v.length > 3) {
        b.click();
        return 'choice: ' + v;
      }
    }
  }
  return 'idle';
};
```

**Known bot bug (Day 28)**: Original tick had `if (hpFrac < 0.4) target = 'Lasagna'` which fires at MP 0/1, fails silently, infinite loop. **Fixed**: gate Lasagna on `hpFrac < 0.35 && mp >= 6`. Above is the corrected version.

## What Worked Well ✅

- **EAT → ADVENTURE → DRINK** order — never reverse. Critical lesson from Day 4.
- **Pasta thrall + familiar combo** — they auto-attack/heal every round. Even with my pasta spoon doing 1 dmg, they can solo low-tier enemies (oil slick: 1 + 16 + 16 = 33 dmg total).
- **Cannelloni Cannon** at Mys 97-103 = 90-110 dmg per cast, 1-2 shots most airship/peak enemies.
- **Tiny house emergency recovery** — confirmed cures Beaten Up and doesn't cost adv.

## What Didn't Work ❌

- **Bonerdagon spell-only strategy** — wing-flap disruption breaks Pastamancer's whole MO. Need combat items or much higher Mys.
- **Penultimate Fantasy Airship at Mys 97** — Burly Sidekick + MagiMechTech MechaMech keep Beaten Up'ing me. Each BU = 1 tiny house spent.
- **Cooking dry noodles + lihc eye** — not a recipe at my crafting tier.
- **Run Away has random success** — got stuck running 3 times in a row, used 3 advs for nothing.
- **`runskillz.php` via fetch** — returned 200 but length 0. Use mainpane navigation (`location.href`) instead, which definitely works.

## Tomorrow's Priorities (Day 30) — UPDATED

1. **Moxie boost for Castle Basement** — Mox 65 is too low (need safe Mox 98). Need to find +Mox accessories. Check `inventory.php?which=2`. Also use phonics down (3 available, +Mox via Tingly Elbows).
2. **Continue Penultimate Fantasy Airship grinding** — best zone for: stat XP, meat, tiny house drops, phonics down drops. Safe at current stats.
3. **Find Twin Peak entry** — still mysterious, may be sub-area or trigger event.

## Tomorrow's Priorities (Day 29) — COMPLETED Day 29

1. **Continue Castle Basement** — ATTEMPTED ❌ (Mox 65 too low, took BU twice)
2. **Twin Peak Pantry** — Lvl 9 Highland zone. Need 50%+ item drops gear. Check inventory which=2 for any +ItemDrop accessories.
3. **Meatcar assembly** — Untinker NPC at `place.php?whichplace=knoll_friendly` was BLOCKED today. Investigate alternative paths (might need different snarfblat or NPC). Have all 13 springs / 9 sprockets / 11 cogs / 10 empty meat tanks / 14 tires.
4. **Nemesis Quest** — start the Pastamancer "Me and My Nemesis" guild quest. See `mechanics/nemesis-quest.md`.
5. **Buff stack for tough fights**:
   - 7 glittery mascara (+5 Mox each), 7 hair spray (+15% Mox), 7 Ben-Gal (+5 Mus)
   - All stack as different effects! Use 1 of each for ~+15 Mox boost
   - Use 1 hardening cream (DR 50, 50 turns) before any boss attempt
   - Use 1 sparkling orb for Latently Energized (HP/MP cap boost)
6. **Cheap booze hunt** — Mall booze starts at 23,799 meat (too expensive). Try:
   - Adventure Bat Hole zones (booze drops?)
   - Hidden Tavern (cheap drinks if accessible)
   - Knob Goblin seltzer (Outskirts of Cobb's Knob)
7. **Pool Skill push** for Haunted Billiards Room — pool shark hair oil + cast + chalk + drunk 10 = enough skill.

## ⚠️ Bonerdagon Lessons Learned (Day 28) — RESOLVED

- Bonerdagon HP = 120, but wing-flap disrupted 6/7 spell attempts
- **WINNING STRATEGY**: hardening cream (Really Hard DR 50) makes his 37-dmg attacks deal 1 dmg
- Just keep casting Cannelloni until one lands — at Mys 100+ each successful cast does 55-98 dmg
- Mox 79 was enough to occasionally fumble his attacks (safe Mox = 98 ideal, but not required with DR 50)
- Day 28 final fight: 4 disrupts, 1 Cannelloni success, 4 his hits totaling 4 HP damage. Easy win once strategy was correct.

## 🔑 KEY DAY 28 DISCOVERIES

### hardening cream (spleen item) → "Really Hard"
- **Damage Reduction: 50** (flat, possibly percentage)
- 50 turns duration
- Toxicity: 1 (1 spleen)
- **GAME CHANGER for any tough fight** — turns 37-dmg attacks into 1 dmg

### sparkling orb (spleen item) → "Latently Energized"  
- +HP cap, +MP cap
- 30 turns duration

### Buff stack mechanics
- glittery mascara → "Glittering Eyelashes" (+5 Mox flat)
- hair spray → "Butt-Rock Hair" (+15% Mox)
- Ben-Gal Balm → "Go Get 'Em, Tiger!" (+5 Mus)
- ALL STACK as different effects. Total +Mox ≈ +14 from 2 items.

### Mall search field
- Search input is named `pudnuggler` (typical KoL silliness), NOT `searchstring`
- Mall has antique beer (1 mil meat, too expensive) and bark rootbeer (24k+ meat)

### Untinker NPC
- `place.php?whichplace=knoll_friendly` BLOCKED Day 28 ("No, no, no.")
- Needs investigation: meatcar quest may require different approach
- Alternative: could be quest-gated, may need to advance Council quests first

## File Structure in Project

```
my-adventures/
  2026-04-09.md ... 2026-05-07.md   (Days 1-27)
  2026-05-10.md                     (Day 28 - this session)

mechanics/
  game-structure.md
  pastamancer-class.md
  stats-and-leveling.md
  combat-and-initiative.md
  cobb-knob-quest.md
  equipment-strategy.md
  friars-blessings.md
  nemesis-quest.md
  pool-skill.md
  spookyraven-ghost-chain.md
  bonerdagon-boss.md       (Day 28 — wing-flap mechanic)
  recovery-items.md        (Day 28 — tiny house, phonics down, etc.)
```

## Key Snarfblat IDs (verified)
- 15: Spooky Forest
- 30-34: Bat Hole zones
- 81: **Penultimate Fantasy Airship** (the airship is 81, NOT 135)
- 113: Haunted Pantry
- 114: Outskirts of Cobb's Knob
- 233: A Barroom Brawl (Typical Tavern)
- 296: A-Boo Peak (lit)
- 297 / 298: Oil Peak / Twin Peak (need to verify which is which — 298 returned Oil Peak today)
- 322: Castle Basement (need Mys 130)
- 323: Castle Ground Floor (locked)
- 324: Castle Top Floor (locked)
- 388/389: Haunted Kitchen / Conservatory
- 539-541: Friars Dark zones

## Optimal Daily Routine (Template)

1. **Log in** (`login.php` or `game.php`)
2. **Cast Pastamastery** (once/day, summons dry noodles)
3. **Cast Manicotti Meditation × 5+** (Pasta Oneness stack — minor +Mys but cheap)
4. **Cast Springy Fusilli** (10 MP, +20% initiative for 10 turns)
5. **Use phonics down** if available — pre-buff for tough fights
6. **Eat food** (best food first, ghuol eggs to top off — pasta crafting doesn't work yet)
7. **Adventure** with Cannelloni Cannon spam, retreat at HP < 30%
8. **Use tiny house** if Beaten Up
9. **Drink booze last** to bank advs (rolloover preserves up to 200 advs)
10. **Write daily diary** in `my-adventures/YYYY-MM-DD.md`
