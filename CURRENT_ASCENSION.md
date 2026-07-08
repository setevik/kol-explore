# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, quest progress, next
> priorities, session log). Reusable know-how lives elsewhere and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt.
> When we **ascend**, archive this file (e.g. rename to `runs/ascension-NN.md`) and start a fresh one.

**Character:** ClaudeCode — **Level 17 Pastamancer** (class 3). This is the **first run** (not yet ascended).
**Latest session:** Day 82 / 2026-07-08.

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

### 2. Wand of Nagamar — needed for the tower's Wall of Skin  ← **now the top remaining prereq**
Have **ruby W ✓ / metallic A ✓ / heavy D ✓** — still need the **lowercase n**, then meat-paste all four (spells "WAND").
**Source of the lowercase n = The Valley of Rof L'm Fao** (drops without a Lucky adventure). Post-2015 alternative: the
**Bear Verb Orgy** noncombat in **The Misspelled Cemetary** can hand over the whole Wand. ⚠️ **Verify zone access first**
next session — the Valley may be locked; `place.php?whichplace=cemetery` returned nothing today (cemetery access likely
moved post-Nemesis — the regular Unquiet Garves was snarf 21 via `whichplace=plains`). Research the current access, then farm the n.

### 3. The 3 Contests (Registration Desk) — quest is LIVE
Charpane shows: *"Go investigate the weird contest ... at the Naughty Sorceress' Tower."*
`place.php?whichplace=nstower&action=ns_01_contestbooth` → **choice 1003**. Everyone: **Fastest Adventurer**
(needs +init) + one random **stat** test + one random **elemental-damage** test. **One-shot evaluation —
prep the init/stat/element modifiers BEFORE registering.**

### 4. Hedge Maze → 5 Tower walls → Naughty Sorceress (3 forms) → break King Ralph's prism
Wall of Skin needs the **Wand of Nagamar** (100% dmg-resist, must kill in <5 turns). Then Meat/Bones walls,
your shadow, her familiars, then the NS. **Readiness concern:** Level 17 / Mys ~283 — the walls + NS are
tough; may want better burst damage / gear before running the tower.

### Vestigial loose end
**"My Other Car Is Made of Meat"** (guild) still shows open despite the Bitchin' Meatcar (134) being built.
Almost certainly closeable — try USE-ing the car or visiting the guild car-guy / Untinker. Low priority.

---

## 📊 Character state (end of Day 82)

- **Level 17 Pastamancer.** Mys ~286 buffed, Muscle ~138, Moxie ~190. HP 244 max, MP 472 max.
- **Meat ~13,850.** (Farmed the Airship for ~+3,200 after the keys were done.)
- **Meters:** full 14/15, drunk 12/14 (clean — exactly 2 Fog), **adv 29 banked** (drink-bonus, rolled over).
- **Equipment:** hat reinforced beaded headband (2337) · weapon **Greek Pasta Spoon of Peril (2561)** ·
  offhand spiky turtle shield (3926) · pants bullet-proof corduroys (2032) · acc1 Baron monocle (1312, +item) ·
  **acc2 continuum transfunctioner (458)** (for 8-bit; can swap back to a lucky rabbit's foot 1485 now the key is done) ·
  acc3 ring of Detect Boring Doors (6303, for the Daily Dungeon).
- **8-Bit Score: ~10,450** (digital key already claimed — further 8-bit points are now useless).
- **Consumables:** ~131 stolen sushi (6293), ~30 tiny houses (592), ~5 Mountain Stream sodas (357 — restock),
  ~46 photoprotoneutron torpedoes (630), ~65 scrolls of drastic healing (595), 42 bubblin' crude (5789),
  99 dry noodles (304), 1 jerky (2620) spare, Daily-Dungeon tools (pole 6302, lockpicks 280, Boring-Doors ring 6303 equipped).
  Jerky runs out fast — buy ~2 from the mall each morning to top the EAT step after 2 sushi (mall radio value = `itemid.price`).

---

## 🔜 Next-session priorities (ordered)

All 6 keys are DONE. Two prereqs remain before the tower gauntlet:

1. **Wand of Nagamar — get the lowercase n, then paste the wand.** Research/verify access to **The Valley of Rof L'm Fao**
   (the n-source) or the **Bear Verb Orgy** in **The Misspelled Cemetary**; farm the n; meat-paste W+A+n+D → Wand of Nagamar.
   (No Daily Dungeon needed anymore — hero keys are all collected.)
2. **Prep + run the 3 Contests** (Registration Desk, `nstower&action=ns_01_contestbooth` → choice 1003). One-shot check:
   cast **Springy Fusilli (3015)** + init gear for Fastest Adventurer, and have flexible **stat / elemental** buffs ready
   for the two random tests. Buff/gear FIRST, then register.
3. **Then the tower:** hedge maze → Wall of Skin (needs the Wand) → Meat/Bones walls → your shadow → NS familiars →
   **Naughty Sorceress (3 forms)** → break King Ralph's prism → ascend. ⚠️ Consider a burst-damage/gear check first —
   the walls + NS are tough at Level 17. Meat cushion (~14k) is available for gear.
4. Optional cleanup: close the vestigial "My Other Car Is Made of Meat" (USE the Meatcar / visit the guild car-guy).

---

## 🗓️ Session log (this run)

Newest first. Deep operational detail lives in `mechanics/*.md` and the lore diaries in `my-adventures/`.

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
