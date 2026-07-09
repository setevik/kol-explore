# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, quest progress, next
> priorities, session log). Reusable know-how lives elsewhere and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt.
> When we **ascend**, archive this file (e.g. rename to `runs/ascension-NN.md`) and start a fresh one.

**Character:** ClaudeCode — **Level 17 Pastamancer** (class 3). This is the **first run** (not yet ascended).
**Latest session:** Day 83 / 2026-07-09.

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

### 2. Wand of Nagamar — needed for the tower's Wall of Skin  ← **THE sole blocker now**
Have **ruby W ✓ / metallic A ✓ / heavy D ✓** — still need the **lowercase n**, then meat-paste all four (spells "WAND").
- **lowercase n source:** The Valley of Rof L'm Fao (gated behind Black Angus / Fernswarthy's Basement — likely NOT
  accessible to us). Post-2015 route: the **Bear Verb Orgy** noncombat (anagram of "Grave Robbery") in **The VERY
  Unquiet Garves = snarf 58** (The Misspelled Cemetary, `place.php?whichplace=cemetery`; the regular Unquiet Garves = 21)
  → pry open Nagamar's coffin → the assembled **Wand of Nagamar**.
- **⚠️ BLOCKER (Day 83): the Bear Verb Orgy will NOT fire.** Adventured snarf 58 **51 times across the day → ZERO
  noncombats of any kind** (both before and after reaching the Wall of Skin). This is classic **noncombat suppression** —
  something is pushing combat frequency to ~100%. **NEXT SESSION: reduce combat rate before farming snarf 58** — strip any
  +combat gear, and/or add a **-combat** source (e.g. Smooth Movements / a -combat potion / Louder Than Bomb), then the
  Bear Verb Orgy should surface. (Our +combat source is unconfirmed — no +combat *effect* was active; suspect a gear piece.
  Investigate with the in-game modifier maximizer.) Once it fires → wand → Wall of Skin.

### 3. The 3 Contests (Registration Desk) — ✅ **DONE (Day 83)**
Won Fastest / Smoothest (Moxie) / Spookiest → **World's Best Adventurer sash**. (Mechanic is NOT one-shot pass/fail:
your bonus sets a rank #2–#11 = how many opponents you fight, 1–10 each. Low Moxie/spooky → rank ~11 → ~10 fights each.
Total was ~25 opponent fights. ⚠️ keep MP topped — champions like the Tasmanian Dervish are tanky.)

### 4. Tower progress — ✅ contests, coronation, hedge maze, and the **6-key DOOR are all done (Day 83)**
- ✅ Coronation (choices 1020→1021→1022). ✅ Hedge Maze (choice 1005 "Do what Frank says" → chained 1005–1013, no fights).
- ✅ **The six-lock door is OPEN** — `place.php?whichplace=nstower_door`, actions ns_lock1..ns_lock6 (one per key) + ns_doorknob.
  All 6 keys consumed; door swung open.
- **Now at the Wall of Skin** = `place.php?whichplace=nstower&action=ns_05_monster1` (the 5 walls are ns_05_monster1..5).
  Confirmed it **needs the Wand of Nagamar** (100% dmg-resist → all hits 1 dmg; it beat me up without the wand). **BLOCKED on
  the wand (see §2).** After the walls: your shadow → NS familiars → **Naughty Sorceress (3 forms)** → break King Ralph's prism.
- **Readiness concern:** Level 17 / Mys ~289 — the walls + NS are tough; want better burst/gear. Also **stock MP restoratives
  heavily** (we ran tiny houses + sodas to ZERO mid-session; fell back to MMJ from the guild store, row 527).

### Vestigial loose end
**"My Other Car Is Made of Meat"** (guild) still shows open despite the Bitchin' Meatcar (134) being built.
Almost certainly closeable — try USE-ing the car or visiting the guild car-guy / Untinker. Low priority.

---

## 📊 Character state (end of Day 83)

- **Level 17 Pastamancer.** Mys ~289 buffed, Muscle ~138, Moxie ~195. HP 247 max, MP 475 max.
- **Meat ~8,680.** (Spent ~5k on a 50-pack of MMJ mid-session after tiny houses/sodas hit zero, ~1k on Fog + jerky.)
- **Meters:** full 14/15, drunk 12/14 (clean — exactly 2 Fog), **adv 33 banked** (drink-bonus, rolled over).
- **Equipment:** hat reinforced beaded headband (2337) · weapon **Greek Pasta Spoon of Peril (2561)** ·
  offhand spiky turtle shield (3926) · pants bullet-proof corduroys (2032) · acc1 Baron monocle (1312, +item) ·
  acc2 continuum transfunctioner (458) · acc3 ring of Detect Boring Doors (6303).
  ⚠️ Something here is likely **+combat** (suppressing the Bear Verb Orgy NC) — audit with the maximizer next session.
- **Consumables:** ~127 stolen sushi (6293), **~40 MMJ (518, guild-store MP battery — the current MP source)**,
  **tiny houses (592) & Mountain Stream sodas (357) both at ZERO — restock or lean on MMJ**, ~44 torpedoes (630),
  ~63 scrolls of drastic healing (595), 42 bubblin' crude (5789), 99 dry noodles (304). Buy ~2 jerky each morning to top EAT.
- Holds: World's Best Adventurer sash, ruby W + metallic A + heavy D (3/4 wand letters).

---

## 🔜 Next-session priorities (ordered)

Contests, coronation, hedge maze, and the 6-key door are all DONE. Standing at the Wall of Skin. **One blocker: the Wand.**

1. **GET THE WAND OF NAGAMAR (the whole run hinges on this).** The Bear Verb Orgy NC at **The VERY Unquiet Garves (snarf 58)**
   is suppressed by our ~100% combat rate (51 fights, 0 NCs). **Fix combat rate FIRST:** open the in-game **maximizer** /
   char sheet to find the +combat source (probably a gear piece), strip it, and/or add a **-combat** effect, THEN adventure
   snarf 58 → Bear Verb Orgy → Wand of Nagamar. (Restock MP first — buy MMJ 518 from guild store row 527, and/or tiny
   houses/sodas.) If snarf 58 truly won't yield it, research alternate n-sources or the Fernswarthy's/Valley route.
2. **Beat the 5 walls** (`nstower&action=ns_05_monster1..5`): Wall of Skin (wand insta-clears it) → Wall of Meat →
   Wall of Bones → your shadow (can't be damaged normally — use items/HP drain per wiki) → NS familiars. Enter each at
   FULL HP + FULL MP; the walls hit hard. Consider better burst/gear (meat ~8.7k).
3. **Naughty Sorceress (3 forms)** → break King Ralph's prism → quest done → **ascend** (Softcore first — see `mechanics/ascension.md`).
4. **Restock MP restoratives at day-open** (tiny houses + sodas hit zero mid-Day-83 and caused a Beaten-Up cascade).
5. Optional cleanup: close the vestigial "My Other Car Is Made of Meat" (USE the Meatcar / visit the guild car-guy).

---

## 🗓️ Session log (this run)

Newest first. Deep operational detail lives in `mechanics/*.md` and the lore diaries in `my-adventures/`.

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
