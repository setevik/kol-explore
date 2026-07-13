# ✅ RUN COMPLETE — Ascension #1 (Pastamancer, this run WON on 2026-07-13)

> Beat the Naughty Sorceress + freed King Ralph XI, then ascended Softcore/Normal into a new
> Pastamancer run (Opossum sign, Standard 2026 path; permed **Pastamastery**; astral chapeau).
> This file is the frozen final-state record of the FIRST run. Live state is in ../CURRENT_ASCENSION.md.

---

# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, quest progress, next
> priorities, session log). Reusable know-how lives elsewhere and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt.
> When we **ascend**, archive this file (e.g. rename to `runs/ascension-NN.md`) and start a fresh one.

**Character:** ClaudeCode — **Level 17 Pastamancer** (class 3). This is the **first run** (not yet ascended).
**Latest session:** Day 85 / 2026-07-11.

---

## 🎯 Endgame status — the gap to ascension (READ FIRST)

**ALL Council quests are DONE** (larva, tavern, Bat, Knob, Friars, Cyrpt/Bonerdagon, Trapper, Highlands,
Giant, Manor/MacGuffin, War). The Council has given the **final quest**: defeat the **Naughty Sorceress**
and free **King Ralph XI**. Her **Tower is OPEN** (`place.php?whichplace=nstower`). Completing it opens the
astral gash → we can **ascend** (go Softcore first — see `mechanics/ascension.md`).

Full reusable tower walkthrough: **`mechanics/naughty-sorceress-tower.md`**. What remains:

### 1. The SIX tower-door keys — ✅ **6 of 6 DONE (Day 82)**
| Key | Status |
|---|---|
| Boris's key | ✅ |
| Jarlsberg's key | ✅ (Day 81) |
| skeleton key | ✅ |
| Richard's star key | ✅ (Day 81) |
| Sneaky Pete's key | ✅ (Day 82 — Daily Dungeon token → DA machine row 95) |
| digital key | ✅ (Day 82 — 8-Bit Score → 10,450 → Treasure House first chest) |

**8-Bit digital-key method (verified Day 82):** equip the continuum transfunctioner (458) to enter (Crackpot Mystic
`place.php?whichplace=forestvillage&action=fv_mystic`). The **color of the "Score:" counter** in the charpane marks
which zone pays **double** (+100 vs +50/win), cycling every 5 kills: **black→Vanya's Castle 565, blue→Megalo-City 566,
green→Hero's Field 564, red→Fungus Plains 563.** Fight the matching zone → ~100–110 pts/fight (weak monsters, weapon
attack one-shots them → ~0 MP). At ≥10,000 pts, `place.php?whichplace=8bit&action=8treasure` = **choice 1493 → option 1
(first chest) = digital key.** (Old "30 white pixels" recipe is retired.)

### 2. Wand of Nagamar — needed for the **Naughty Sorceress's THIRD form** (NOT the walls)  ✅mechanic re-verified Day 83
**⚠️ CORRECTION (Day 83 wiki re-check): my earlier notes were wrong on two counts.**
- **The wand is for the NS's final (3rd) form**, not the Wall of Skin. It must just be **in inventory** (not equipped,
  post-NS13); it converts her attacks into harmless anagram junk.
- **The Bear Verb Orgy wand-search unlocks ONLY after you've been *defeated by* the NS's 3rd form** — that is why snarf 58
  gave 0 noncombats in 51 fights (it wasn't combat suppression; the search just isn't active yet). It's the game's safety net
  for arriving at form 3 without the wand.
- Two ways to get the wand: **(a) craft** it — meat-paste ruby W ✓ + metallic A ✓ + lowercase n + heavy D ✓ (still need the
  **n**, whose only source is the Valley of Rof L'm Fao, gated behind Fernswarthy's Basement — probably not worth it); or
  **(b) the Bear Verb Orgy** at The VERY Unquiet Garves (snarf 58), available only after losing to NS form 3.
- **Practical route: don't chase the wand yet.** Beat the walls + NS forms 1–2, reach form 3, get defeated → then the Bear
  Verb Orgy opens → farm snarf 58 for the wand → return and beat form 3.

### 3. The 3 Contests (Registration Desk) — ✅ **DONE (Day 83)**
Won Fastest / Smoothest (Moxie) / Spookiest → **World's Best Adventurer sash**. (Mechanic is NOT one-shot pass/fail:
your bonus sets a rank #2–#11 = how many opponents you fight, 1–10 each. Low Moxie/spooky → rank ~11 → ~10 fights each.
Total was ~25 opponent fights. ⚠️ keep MP topped — champions like the Tasmanian Dervish are tanky.)

### 4. Tower progress — ✅ contests, coronation, maze, 6-key door, **ALL 5 GUARDIANS + NS form 1 done (Day 84)**
- ✅ Coronation, ✅ Hedge Maze, ✅ six-lock door (Day 83). **✅ All 5 tower guardians cleared (Day 84):**
  - **Wall of Skin** (`ns_05_monster1`) — ✅ **use a beehive as a combat item = instant kill.** Get the beehive from **The
    Black Forest (snarf 405)**: choice 923 (All Over the Map) opt 1 → 924 opt 3 (buzzing) → 1018 opt 1 → 1019 opt 1 = beehive
    (item **7969**). ~3 turns. Then in the fight: `fight.php?action=useitem&whichitem=7969`.
  - **Wall of Meat** (`ns_06_monster2`) — ✅ 700 HP, re-fight ~5× (Mortar→Cannelloni) until it drops **1,001 total meat**.
  - **Wall of Bones** (`ns_07_monster3`) — ✅ only GROUP damage works (single-target heals it). **electric boning knife**
    (item **7970**, from the Castle Ground Floor snarf 323 → "Home on the Free Range" choice **1026 opt 2** "noisy drawer";
    boosted to 3 copies once tower level 3 is unlocked, so it drops in ~1 turn) → `fight.php?action=useitem&whichitem=7970` = instant kill.
  - **Mirror + Shadow** — choice **1015 opt 1 "Gaze into the mirror"** (do NOT break it — breaking makes NS stun-immune) →
    fight **a Shadow [your class]** (`ns_09_monster5`). ⚠️ **Immune to all attack damage — only HEALING items hurt it** (each
    HP healed = 1 dmg; it has ~395 HP). Method: **attack to provoke its hit, then heal** — scented massage oil (item **2438**,
    full heal + stun, ~2k meat) for big chunks + filthy poultice (item **2369**, ~170 meat, heals a lot) for the rest.
- **⚔️ Naughty Sorceress = `place.php?whichplace=nstower&action=ns_10_sorcfight`.** 3 forms, ONE continuous combat (a loss
  restarts from form 1; `reallyInF()` — re-fetch fight.php 3× — is needed because form-transition pages briefly lack the
  skill dropdown). **✅ Form 1 easy** (Mortar→Cannelloni). **❌ still STUCK on FORM 2** after ~10 attempts Day 85 — but I now
  know exactly how to win it (ran out of MP mid-session before I could):
  - **HP read (SOLVED):** `api.php?what=status` HP caches under same-`for=` polling → heal never fires. **FIX that works:
    vary the `for=` param each round** (`for=CC${tick}`) → fresh HP. (Do NOT range-match charpane pairs — maxHP/maxMP shift
    mid-fight and cross-match.)
  - **She one-shots you ONLY at reduced maxHP.** Losses cut maxHP to ~206; her big nuke (~190) then ~kills from 90%. **Enter
    at TRUE full maxHP (249)** — rest until Beaten Up is fully cleared and verify `maxhp==249` BEFORE engaging — and her nuke
    leaves you at ~24%, survivable. (The in-loop rest was re-engaging while still reduced.)
  - **Entangling Noodles (3004) stun works but decays** (~14 uses then fails). Good for the opening, not a perma-lock.
  - **✅ Her BLOCK RATE drops every time she beats you** (≈30% after 4 losses). After ~10 losses it's near-zero, so Cannelloni
    lands almost every round now — best run landed **18 Cannelloni** on form 2. She's close to dead.
  - **What killed the run: MP logistics.** Burned all **MMJ (518) + torpedoes (630)** on repeated pre-fight top-ups →
    MP-starved, no damage. **NEXT TIME buy a BIG MMJ stack (60–80) + ~40 torpedoes up front** so you never run dry across attempts.
  - **Winning recipe:** full maxHP 249 entry · huge MMJ battery · **heal at <65% with poultice (2369)** / oil (2438) at <35% ·
    stun early · then just **Cannelloni every round** (low block rate) → out-DPS her. (DR would help vs one-shots but hardening
    cream 11331 wouldn't apply via fetch/DOM-click, and no Spirit of Ravioli skill — skip it; full-maxHP entry is enough.)
- **Then form 3:** needs the Wand of Nagamar (see §2) — expect to LOSE form 3, which unlocks the Bear Verb Orgy wand search.

### Vestigial loose end
**"My Other Car Is Made of Meat"** (guild) still shows open despite the Bitchin' Meatcar (134) being built.
Almost certainly closeable — try USE-ing the car or visiting the guild car-guy / Untinker. Low priority.

---

## 📊 Character state (end of Day 85)

- **Level 17 Pastamancer.** Mys ~294 buffed. Muscle ~138, Moxie ~195. maxHP 249 (full); maxMP 481.
- **Meat ~9,066.** (Spent ~9k on NS supplies — MMJ, poultices, massage oils — then farmed the Airship ~81 fights, +8.7k.)
- **Meters:** full 14/15, drunk 12/14 (clean — exactly 2 Fog), **adv 45 banked** (drink-bonus, rolled over).
- **Equipment:** hat reinforced beaded headband (2337) · weapon **Greek Pasta Spoon of Peril (2561)** ·
  offhand spiky turtle shield (3926) · pants bullet-proof corduroys (2032) · acc1 Baron monocle (1312) ·
  acc2 continuum transfunctioner (458) · acc3 ring of Detect Boring Doors (6303).
- **Consumables (⚠️ combat resources DEPLETED):** ~121 stolen sushi (6293), **MMJ (518) = 0, torpedoes (630) = 0 — REBUY
  a big stack of each first thing** (MMJ 60–80 for the NS grind, ~40 torpedoes). **~18 filthy poultices (2369, big combat
  heal), 2 scented massage oil (2438, full heal + stun), 1 hardening cream (11331 — couldn't apply, ignore).** ~63 scrolls (595).
  Buy ~2 jerky each morning to top EAT. Meat ~9k covers the rebuy.
- Holds: World's Best Adventurer sash, ruby W + metallic A + heavy D (3/4 wand letters). **NO Wand of Nagamar yet** (needs form-3 loss first).

---

## 🔜 Next-session priorities (ordered)

All 5 tower guardians AND NS form 1 are down. **Stuck on NS form 2**, but the win condition is now fully understood — see §4.

1. **Day-open restock (the thing that cost me Day 85):** buy a **BIG MMJ stack (60–80, item 518, guild row 527) + ~40
   torpedoes (630)** so you never run dry across NS attempts. (Have 18 poultices + 2 massage oil already.)
2. **Beat NS form 2** (`nstower&action=ns_10_sorcfight`). The recipe (all learned Day 85):
   - **Recover to TRUE full maxHP 249** (rest until Beaten Up clears; verify `maxhp==249`) BEFORE engaging — this stops her one-shots.
   - **Fresh HP each round: `api.php?what=status&for=CC${tick}`** with a varying `for=` (defeats the cache).
   - Open with **Entangling Noodles (3004)** stun, then **Cannelloni (3005) every round** — her block rate is near-zero now
     (~10 losses), so nukes land; **heal at <65% with poultice (2369)**, oil (2438) at <35%. Best run = 18 Cannelloni landed; she's close.
3. **Form 3** — you WILL lose without the wand; that's expected and **unlocks the Bear Verb Orgy** wand-search.
4. **Get the wand:** adventure **The VERY Unquiet Garves (snarf 58)** → Bear Verb Orgy noncombat (now unlocked) →
   **Wand of Nagamar**. Then return, redo NS forms 1–3 with the wand in inventory → beat form 3 → **break King Ralph's prism**
   → quest done → **ascend** (Softcore first — see `mechanics/ascension.md`).
5. Optional cleanup: close the vestigial "My Other Car Is Made of Meat" (USE the Meatcar / visit the guild car-guy).

---

## 🗓️ Session log (this run)

Newest first. Deep operational detail lives in `mechanics/*.md` and the lore diaries in `my-adventures/`.

- **Day 85 (07-11):** **Ground on NS form 2 (~10 attempts) — didn't crack it, but fully solved HOW to.** Fixed the stale-HP
  bug (vary `for=` on api.php). Learned: enter at TRUE full maxHP 249 (else she one-shots from ~90%); her block rate falls
  with every loss (best run landed 18 Cannelloni); the run died on MP logistics (burned all MMJ + torpedoes). Couldn't apply
  hardening cream (DR). Rebuilt meat on the Airship (+8.7k → ~9k). EAT/ADV/DRINK done. Full recipe + restock plan in §4 / priorities.
- **Day 84 (07-10):** **ALL 5 TOWER GUARDIANS CLEARED + NS form 1 down.** Wall of Skin (beehive from the Black Forest →
  instant kill), Wall of Meat (5 kills for 1,001 meat), Wall of Bones (electric boning knife from the Castle → instant kill),
  Mirror→Shadow-Pastamancer (heal-items-only: massage oil + poultices). Beat NS **form 1**, but **lost to NS form 2 ×4** —
  diagnosed the cause: `api.php` HP reads are stale during rapid combat polling, so healing never triggered (7 poultices
  unused). Also re-verified wand mechanics on the wiki (wand is for form 3; Bear Verb Orgy unlocks only after losing to form 3).
  Farmed the Airship tail (+8k meat). EAT/ADV/DRINK done.
- **Day 83 (07-09):** **Blitzed the tower: contests + coronation + hedge maze + the 6-key door, all done.** Won all 3
  contests (Fastest/Smoothest/Spookiest) → World's Best Adventurer sash (learned: rank #2–#11 = how many opponents you
  fight, not pass/fail). Coronation cutscene, hedge maze (followed Frank), then opened the six-lock door with all 6 keys.
  Reached the **Wall of Skin** — confirmed it needs the Wand. **Wand still blocked:** the Bear Verb Orgy at snarf 58 won't
  fire (51 fights, 0 NCs = combat-rate suppression). Rough patch mid-session: tiny houses/sodas hit zero → MP-starved →
  Tasmanian Dervish Beaten-Up; recovered via a 50-pack of MMJ. EAT/ADV/DRINK all done.
- **Day 82 (07-08):** **ALL 6 TOWER KEYS DONE.** Daily Dungeon → fat loot token → **Sneaky Pete's key** (5/6). Then
  ground the **8-Bit Realm** using the color-rotation trick (fight whichever zone the Score counter's color doubles) →
  Score 3,350 → 10,450 → claimed the **digital key** from the Treasure House first chest (6/6). Farmed the Airship for
  ~+3,200 meat with the tail. EAT/ADV/DRINK all done. Also did a big docs refactor: split run-state into this file,
  made HANDOFF/prompt/mechanics idempotent.
- **Day 81 (07-07):** Daily Dungeon → **Jarlsberg's key**. Farmed Hole in the Sky (snarf 83) for 13 stars +
  7 lines → crafted **Richard's star key** at `shop.php?whichshop=starchart` row 141. Got the **continuum
  transfunctioner** from the Crackpot Mystic, equipped it, opened the **8-Bit Realm**; ground Vanya's Castle
  (565) → **Score 200 → 3,350**. Corrected the digital-key mechanic (10k points now, NOT 30 pixels). **Keys 2/6 → 4/6.**
- **Day 80 (07-05):** **Twin Peak COMPLETE** → Highland "There Can Be Only One Topping" DONE (Misty Robe reward).
  Lodge only offered "Wait — who's that?" (crude+stench steps were already done); chase failed for lack of +40%
  init → chose the alternate completion "Burn this hotel to the ground" → 3rd signal fire lit.
- **Day 79 (07-04):** **NEMESIS QUEST COMPLETE** (solved the volcano lava maze — 8-directional space-time BFS —
  then beat the Spaghetti Elemental). Cracked the Twin Peak +50%-item wall (gear +34% + Fat Leon's +20% from
  the free "Buffy" buffbot #1889009).
- **Day 78 (07-03):** Nemesis finale ~90%; parked at the lava maze. Full lair walkthrough logged.
- **Day 77 (07-02):** Nemesis lair FOUND & open (map to the secret tropical island volcano lair).
- **Day 75 (06-30):** Beat the Nemesis cave boss (Spaghetti Elemental) → Colander of Em-er'il. Long-term goal
  set: farm karma via Hardcore ascensions (Softcore first).
- **Day 74 (06-29):** Forged the Legendary Epic Weapon → **Greek Pasta Spoon of Peril**; Nemesis lair revealed.
- **Days 58–67 — THE ISLAND WAR (hippy side), WON Day 67:** declared the war, completed side quests
  (Lighthouse, Nunnery, etc.; each doubles battlefield kills), cleared the battlefield, then beat the final
  boss **"The Man"** via a Cannelloni-spam DPS race. Reward: Blue Diamond of Honesty.
- **Day 69:** built the **Bitchin' Meatcar** (item 134) by meat-pasting.
- **Day 53:** **HOLY MACGUFFIN quest COMPLETE** — Staff of Ed → pyramid → Ed the Undying → MacGuffin → Council.
- **Day 48:** Palindome arc done (Staff of Ed assembled; Dr. Awkward beaten; pyramid opened).
- **Day 37:** Spookyraven cellar done — Eye of Ed. **Day 39:** Hidden Temple unlocked. **Day 28:** Bonerdagon.
- (Earlier days: leveling, Cobb's Knob, Friars, Bat Hole, etc. See `my-adventures/` diaries.)

### Quests completed this run (for the record)
Larva · Tavern · Boss Bat · Cobb's Knob · Deep Fat Friars · Cyrpt/Bonerdagon · Trapper (peaks) ·
Highlands "There Can Be Only One Topping" · Giant (Airship/Castle) · Spookyraven Manor · Holy MacGuffin ·
**Island War** · **Me and My Nemesis**. Guild "My Other Car Is Made of Meat" = built but flag still open (vestigial).
