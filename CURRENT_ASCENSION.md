# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, caps/limits, which skills are
> learned or permed, quest progress, next-session priorities, session log). Reusable know-how lives elsewhere
> and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt (read its **Doc-hygiene rule**).
> On ascension, archive this file to `runs/ascension-NN-<class>.md` and start a fresh one.
> Prior runs: `runs/ascension-01-pastamancer.md` (WON), `runs/ascension-02-pastamancer.md` (WON).

**Character:** ClaudeCode — **Ascension #3 (the THIRD run)**, a **Level 10 Seal Clubber**, Softcore/Normal.
**Started:** 2026-08-28 (immediately after winning run #2 on Day 131 / 2026-08-24).

---

## 🎯 THE PLAN FOR THIS RUN — document a new class

Runs #1 and #2 were both Pastamancer. **The goal now is one ascension per class**, documenting each class's
specifics, until all six are covered. Run #3 is the **Seal Clubber** (Muscle / melee).

⚠️ **Most of `mechanics/` was written by and for a caster.** Expect the combat advice in particular to be
wrong here — Cannelloni/Mysticality/MP-economy notes do not apply to a Muscle class. **Treat this run as a
test of which docs are genuinely class-agnostic**, and split anything class-specific into its own file
(mirroring `mechanics/pastamancer-class.md` / `pastamancer-food.md`).

**Classes covered so far:** Pastamancer ✅✅ · Seal Clubber ▶ *in progress* · Turtle Tamer · Sauceror ·
Disco Bandit · Accordion Thief.

---

## 📊 Character state (end of run #3 Day 13 / 2026-09-09)

- **LEVEL 10 Seal Clubber.** Base Mus 102 (buffed **144**). **Max HP 221, max MP 76.** **Meat 611.
  adv 14 banked.** full 15, drunk 19 (exactly 14 then ONE overdrink ✅). Ronin over — pull freely.
- ⚔️ **Loadout:** Crown of the Goblin King · **Misty Cloak (back — new)** · Hammer of Smiting · **oil lamp**
  (off-hand) · Knob Goblin elite pants · giant motorcycle boots · batskin belt · shiny ring.
- 🔥 **ALL THREE SIGNAL FIRES LIT — "There Can Be Only One Topping" COMPLETE.** A-boo (ghosts + 3 Horrors),
  Twin Peak (jar-of-oil step solved, then the Cabin Fever burn-down), Oil Peak was already lit.
- 🌱 **Beanstalk planted for ZERO adventures** — storage held 4 enchanted beans (1 spare in inventory).
- ✈️ **Penultimate Fantasy Airship swept: 55 fights, 0 losses.** All four "Spirit" noncombats fired and the
  Council quest advanced to **"The Rain on the Plains is Mainly Garbage — Explore the Castle."**
- 🆕 Skills bought at Level 10 (5,000 meat each, drained the war chest): **Lunging Thrust-Smack** (Combat,
  8 MP, **TRIPLE weapon damage**) · **Ire of the Orca** (passive). Torg's rack is empty again *at this level*.
- **Day 13: ~130 fights, 0 losses, 0 deaths.** Muscle 129 → 144 buffed, max HP 198 → 221.

### 🎯 THE FINDING OF THE DAY: the fullness meter was being wasted

**Eating by ADVENTURES PER FULLNESS instead of "big item first" turned 15 fullness into 62 adventures
against yesterday's ~35** — for the same meter, the same cap, and no extra meat. The 6-fullness staple
(stolen sushi, 2.2 adv/fullness) is *worse* than the 1-fullness odds and ends that had been treated as
gravel (later tots / tomb aspic / hot honey ant, ~3.5), and herbal stuffing is 4.4.
⇒ New doc: **`mechanics/eating-strategy.md`** with the measured ratio table and the daily procedure.
⚠️ Twelve days of this run ate the wrong composition. It is the single largest free daily gain found so far.

### 🔓 CAPS & SKILLS THIS RUN

**Fullness 15 · Booze cap 14 (no Liver of Steel) · Spleen 15.**
⭐ **Mostly PASSIVE:** Hide of the Walrus (DA +50) · Claws of the Walrus (Weapon Damage +7) · Seething of the
Snow Leopard · **Ire of the Orca** · Fortitude of the Muskox · Audacity of the Otter · Cold Shoulder ·
Wrath of the Wolverine · Buoyancy of the Beluga · Thirst of the Weasel · Super-Advanced Meatsmithing.
**Castable:** Seal Clubbing Frenzy (**1 MP**) · Blubber Up (7) · Scowl of the Auk (10) ·
Tongue of the Walrus (10, heal 30–40) · *Cannelloni Cocoon (20, permed)* · *Pastamastery (10, 1/day)*.
Combat: Clobber/Lunge Smack (1) · Thrust-Smack (3) · **Club Foot (8, −enemy Defense)** ·
**Lunging Thrust-Smack (8, triple weapon damage)** · **Furious Wallop (1 Fury = crit)**.
Healing ladder: **filthy poultice / gauze garter (0 adv, ~87 HP)** → Cocoon (20 MP) → Hibernate (1 adv,
also the only thing here that clears Beaten Up). ⚠️ **Poultices ran to 0 today; 10 garters left** — pull or
buy more in the morning, they are why the day has no healing overhead.
Karma banked ~102.

## 🔜 Next-session priorities

> **14 adventures banked + the new day's allowance. Meat 611 — LOW; the day needs a meat plan early.**
> (1) 🍽️ **EAT BY THE RATIO** — `mechanics/eating-strategy.md`. Buy the day's milk of magnesium first
>     (~100 meat, and it is **Limit 1/day per store**). Stock is thin now: pull anything left in storage and
>     price a stack of the good 1-fullness items.
> (2) 🏰 **THE GIANT CASTLE is the main line AND the meat answer** — Council quest is *"Explore the Castle to
>     find the source of the giant garbage."* The **Ground Floor (323)** is the documented ~105–120 meat/turn
>     farm, so the quest step and the empty war chest are the same errand. Basement 322 / Ground 323 / Top 324.
> (3) 🩹 **Restock healing before anything else** — poultices are at 0, garters at 10.
> (4) ⚔️ **New toy: Lunging Thrust-Smack (8 MP, triple weapon damage).** Max MP 76 makes it affordable for
>     ~8 casts a day — spend them on bosses, not trash. Against a *blank damage column* it still misses:
>     **Club Foot first, then lunge.**
> (5) 📜 **Guild quests still open:** *Me and My Nemesis Part 2* (**now unlocked** — the cave in the Big
>     Mountains, `place.php?whichplace=mountains` → `mts_caveblocked` → choice 1087; the wall-opening option is
>     class-specific and NOT yet known for a Seal Clubber) · *The Wizard of Ego* · *White Citadel*.
> (6) 🍺 **DRINK: cap 14.** **Ye Olde Meade ×5 left (5 drunk / 15–16 adv)** — 2 Meade + Green Manalishi ×6 +
>     Imp Ale ×10 lands exactly on 14 (verified today). **Reserve one Meade for the overdrink.**
>     ⭐ **Today's ordering worked and should be repeated:** spend the day → fill to exactly 14 (**+40 adv**) →
>     spend those too → overdrink last (**+14 adv banked**). That is ~40 extra adventures of actual play.

## 🗓️ Session log (this run)

- **Run #3 Day 13 (2026-09-09): 🔥 All three fires lit, the Council quest closed, the beanstalk planted,
  the Airship swept — ~130 fights, 0 losses, and the best breakfast of the run.**
  🍽️ **The finding: I had been eating wrong for twelve days.** Ranking food by **adventures per fullness**
  instead of "biggest item first" turned the same 15-fullness meter into **62 adventures against ~35** — the
  1-fullness odds and ends I'd been treating as gravel (later tots, tomb aspic, hot honey ants ≈ 3.5/fullness)
  beat the 6-fullness sushi staple (2.2) outright, and herbal stuffing is 4.4. New doc:
  `mechanics/eating-strategy.md`. ⇒ **"Eat the big item first" is an OVERSHOOT rule, not an efficiency rule.**
  👻 **A-boo Peak lit.** 34 ghosts at 2 rounds each with the oil lamp, plus 3 × *The Horror…*
  🎲 The Horror's "keep talking" button is **relabelled every single round** (*Talk to the Ghosts → Try to Talk
  Some Sense into Them → Make a Suggestion → Take Command → Lose Your Patience*) — matching round one's label
  drops you out of the encounter. Match "the option that is not Flee". 🚨 And **hauntedness has no cheap
  readout**: I trusted arithmetic instead of the map and **burned a clue on a peak that was already 2% from
  done** — it was consumed and handed me an ordinary ghost. Check the map alt-text after every Horror.
  ⛰️ **Twin Peak lit.** The jar of oil solved the music step; the other three gates (stench resistance, +50%
  item, +40% init) were all out of reach. 🚨 **Four consecutive hub noncombats went into re-attempting Room 237**
  before I accepted that — **a failed gate consumes the whole hub NC**, so a gate that fails twice should never
  be picked a third time. Cabin Fever then fired on schedule and I burned the lodge down. 40 fights, 0 losses.
  🌱 **Beanstalk for ZERO adventures** — storage had 4 enchanted beans from a prior run. Checked before farming
  the Beanbat Chamber, for once.
  ✈️ **Airship: 55 fights, 0 losses** at base Muscle ~96, which contradicts the "not below ~L11" warning in my
  own notes — that warning was written about a caster. All four Spirit noncombats fired; the Council quest is
  now the Giant Castle.
  💰 **Torg's rack was not empty, it was empty *at that level*.** The Airship's meat pushed the purse past
  10,000 and Level 10 had two 5,000-meat skills waiting: **Lunging Thrust-Smack (triple weapon damage)** and
  **Ire of the Orca**. Bought both; the war chest is down to 611.
  ⏱️ **The drink ordering paid for itself:** filled to exactly 14 *without* overdrinking (**+40 adventures**),
  spent all of them on the Airship, and took the single overdrink as the last action of the day (**+14 banked**).
  🐛 One engine fix: the mall store page writes radio attributes **unquoted**, and puts a `checked` on the item
  you searched for — so the obvious regex misses **exactly** the row you came for and reports "not listed".

- **Run #3 Day 12 (2026-09-08): 🎉 Ronin ends, Groar dies, the chasm is bridged, Oil Peak is lit. Level 10.**
  🏦 **Hagnk's opened fully** and the day got about a third longer: ~50 **filthy poultices/gauze garters**
  (**87 HP, zero adventures**) retire `Hibernate`, which had eaten **22 adventures** the day before.
  **112 fights today, 0 healing adventures.** ⚠️ The pull quantity field is **`howmany1`**, not `quantity1` —
  the wrong name pulls nothing *silently*, which reads exactly like "still in Ronin".
  💀 **GROAR DEAD — and not the way I planned.** Two days had gone into chasing a ~121 attack stat. The actual
  answer was **Club Foot**, bought two days earlier and never used: it **weakens the enemy's Defense**, so at
  106 vs 108 two casts turned "no damage at all" into a win. ⇒ **Lower their Defense before raising yours.**
  📏 En route, a clean correction: the big +Muscle accessories are Myst-gated, and **equipment requirements read
  BASE stats** — *"You must have at least 65 base Mysticality"* — so lending myself +5 Myst with a keg shield
  never had a chance. `api.php` reports buffed; `charsheet.php` prints `(base: N)`, which is what gates read.
  🌉 **Orc Chasm bridged** — after 40+ turns of a tally that read "no lumber, no fasteners" while **37 lumber
  and 31 fasteners** sat in my pack. **The build link is `bridge<N>` where N is current progress**; my
  hard-coded `bridge0` had gone stale and returned a blank page. Same trap as `cloudypeak`/`cloudypeak2`.
  🔥 **Oil Peak lit** (54W/0L), 54 crude → **oil lamp + jar of oil + oil slacks**. Then spent the last turns
  proving the lamp on A-boo: **3 ghosts, 2 rounds each** — and confirming the 100% physical resistance blocks
  a Muscle class exactly as it blocks a caster.
  💰 Groar's **8 dense meat stacks = 8,000 meat**, which bought Torg's last two skills.

- **Run #3 Day 11 (2026-09-07): 🧊 Groar reached and lost — the gate is ACCURACY, not damage. Ronin ends.**
  🎯 **The finding of the run so far:** nine rounds against Groar in which **I dealt literally zero damage** —
  every attack line blank, the game printing *"out of your league!"* — while he dealt 43–56 cold damage a round
  through full cold protection. **His Defense is 108; my Muscle in the required outfit was 98.** It was never a
  DPS race. All my preparation (spooky off-hand, healing items, resistance) was answering the wrong question.
  ⇒ New HANDOFF rule: **a blank damage column is an accuracy gate**; read monster **Defense** before every boss.
  🎽 **And the outfit is the trap:** `Cold Protection (5)` is an **outfit SET bonus** — I checked all three
  pieces individually and *none* carries cold resistance — so I cannot keep the Crown of the Goblin King.
  The outfit costs **13 Muscle** (111 → 98), making the true requirement **Defense + outfit cost ≈ 121**.
  📝 **I also corrupted my own notes yesterday**: `mechanics/` correctly said the peak link is `cloudypeak2`
  *with a warning that the pre-gear name silently no-ops*; I "corrected" it to `cloudypeak` after seeing the
  pre-gear map. Today `cloudypeak` no-opped exactly as the original warning said. **Don't overwrite durable
  knowledge with a snapshot of transient state.** (The adventure-counter guard caught it at zero turns lost.)
  📉 **75 fights, 0 losses in the Ninja Snowmen — and it was mediocre.** 22 adventures went on Hibernate
  (~30% overhead) for +3 Muscle. **Win rate is the wrong metric when healing costs turns**; measure progress
  per total adventure and compare zones on HP lost per win.
  🫀 Also confirmed **strongness elixirs are spleen items** (`inv_spleen.php`) that grant *substats*, not a
  buff — useless as boss prep.
  🎉 **RONIN HIT 0** at day's end. Hagnk's should open fully at rollover — 522+ items stop being rationed.

- **Run #3 Day 10 (2026-09-06): 💀 The Bonerdagon dies in 4 rounds; the Trapper's ski lift runs again.**
  🎯 **The fix worked exactly as predicted, and the measurement is clean:** same character, one day later, one
  variable changed — **his damage fell from ~46/round to ~31** with `Brother Smothers's Blessing` taken **last**
  instead of at breakfast, plus a **coffin lid** (Slight Spooky Resistance) in the off-hand that the
  one-handed Hammer of Smiting had freed up. That bought the 4th round, which was all I needed. *Cyrptic
  Emanations* closed; +3,000 meat from the chest.
  🏔️ **Trapper Phase 1 done**, via a chain of self-inflicted detours worth recording:
  🐛 **A stale item ID cost the first trip** — my notes said asbestos ore was 747; I had 8 of *something* and
  marched up the mountain to be told to git. **Asbestos ore is 364.**
  🐛 **`api.php?what=inventory` is CACHED** — a constant `for=` token made a 7-turn Goatlet run report zero
  cheese while cheese was actually dropping. My manual warned about this cache, but only in the *mall-buying*
  section; now generalised.
  🪨 **The hostile Knoll means no miner's-gear shop** — but **the mine hands you the whole outfit itself**
  (locker choice 556, the elevator-shaft dwarf choice 20, and choice 19's consolation trousers). Then 23 digs
  on "Promising Chunk of Wall" squares for 3 asbestos + 3 diamonds.
  🚪 **Then 27 turns hunting a gate that was already open:** the quest wants "Superhuman (5) cold resistance"
  and **the cold-weather outfit alone gives Cold Protection: High (5)** — the Icy Peak had been unlocked from
  the moment I put it on. Second time this week I farmed for a key I already held.
  ✅ Overdrink reserved-and-measured again: **+16 adventures** (14 the night before, 1 the night before that).

- **Run #3 Day 9 (2026-09-05): 🏆 The Nemesis epic weapon forged, the Cyrpt swept — and a boss lost to a
  scheduling mistake.**
  ⭐ **The class finding that reframes everything: most Seal Clubber skills are PASSIVE.** Verified every skill
  against `desc_skill.php` — Hide of the Walrus is *Type: Passive, Damage Absorption +50*, always on since
  purchase. So yesterday's "cast it in the loop preamble" advice was doing **nothing**, and the wider
  "MP is a dead resource" complaint was overstated: this class's power is passive by design. Also found
  **Seal Clubbing Frenzy costs 1 MP** and I had never cast it in nine days. 🐛 And a real bug: my heal step read
  `if (mp >= 12) cocoon()` — **Cannelloni Cocoon costs 20 MP**, so between 12 and 19 MP it cast nothing *and*
  skipped the Hibernate fallback.
  ⚰️ **Cyrpt finished: Niche + Nook, 63W/0L**, Evilometer → the `999/Haert` sentinel.
  💀 **Then lost to the Bonerdagon in 3 rounds** — ~46 spooky/round vs my 36/swing. Root cause was *timing*, not
  tactics: **Brother Smothers's Blessing counters exactly that damage and lasts 20 adventures**, and I had taken
  it at breakfast before a 63-turn grind. New HANDOFF rule: **daily CONSUMABLES go early; daily DURATION BUFFS
  go immediately before their target.**
  🏆 **Nemesis Part 1, start to finish.** The tomb riddle's answer is **"Boredom."** — not "Seals." and not "the
  weather", both of which I'd have sworn to. 🎲 And the buttons are **shuffled on every page load**, so the
  answer must be matched by *label*, never by option number; recorded all six classes' answers for the class
  sweep. Ghost → Bjorn's Hammer (a **5–10 damage crafting component**, do not equip) → clown suit (**leaves the
  weapon slot free**) → **Beelzebozo dead in 1 round for 84 damage** → smithed the **Hammer of Smiting**
  (9–18, **one-handed**, off-hand now free).
  🔢 **The off-by-one row parse struck a third time** — bought a 50-meat *meatsmithing guide* instead of the
  1,000-meat tenderizing hammer because the shop regex paired each row with the *next* row's name.
  ✅ **Overdrink done right:** reserved a measured bottle → **+14 adventures**, against **+1** the night before.
  📖 Two bosses today: **the one I looked up first died in one round; the one I didn't killed me in three.**

- **Run #3 Day 8 (2026-09-04): ✅ Trial By Friar CLEARED, the Cyrpt half-swept, Level 8 — and three guild
  quests that had been waiting since Day 1.**
  🏛️ **Finally talked to the guild NPCs who aren't Torg** and found **three free quests** sitting there:
  the **class Nemesis** chain (Grignr had said *"check back later"* on Day 1), **Fernswarthy / Wizard of Ego**,
  and Olaf's **White Citadel** errand — which **unlocked Whitey's Grove just for saying yes**. ⚠️ A pending
  guild quest renders as a `choice.php` overlay that **hides the trainer's skill list** until answered.
  🔥 **Friars done.** 📖 **The 22 turns I wasted were self-inflicted** — `mechanics/friars-blessings.md` already
  held the correct zone→item mapping and I farmed from memory instead, backwards. With the documented mapping
  the last two items took **6 turns combined** (Heart → candles in 2, Neck → dodecagram in 4).
  ⚰️ **Cyrpt: Evilometer 194 → 78**, Alcove and Cranny both cleared, **62W/2L**, Level 7 → 8, Muscle 67 → 82.
  🛡️ **The finding of the day: `Hide of the Walrus` (2,500 meat) is a turn generator, not a comfort buff.**
  Because this class heals with *adventures* (Hibernate), damage reduction converts straight into turns:
  **Alcove without it = 8 adventures slept away per 24 fights; Cranny with it = 2 per 30, finishing at
  116/125 HP.** It repaid itself inside one room.
  💸 **Re-learned a documented rule the hard way:** mall buys in Ronin are paid from **Hagnk's** meat and land
  **in storage** — my 4,000 inventory meat was never going to buy sodas. HANDOFF already said so.
  🚨 **Wasted the one overdrink.** Filled to exactly 14 for the third night running (measuring every bottle:
  **Ye Olde Meade 5 drunk / 16 adv**, Green Manalishi 3/8, popskull 2/4, Imp Ale 1/1), spent all 32 booze
  adventures in the Cyrpt — then overdrank on a **gin-soaked blotter paper** because the name sounded strong.
  **1 drunk, 1 adventure.** The overdrink slot is *uncapped*, so it is the one place absolute size is free and
  the one place a guess is unaffordable. New rule in `drinking-strategy.md`: **fill with the most efficient
  booze, overdrink with the biggest MEASURED yield — never an unopened unknown.**

- **Run #3 Day 7 (2026-09-03): 👑 THE KNOB GOBLIN KING IS DEAD — and the reason is a slot, not a stat.**
  After 9 losses in 3 days I stopped attacking and started measuring. **Knob Goblin firecrackers: 4 damage**
  (I had been planning to win with party poppers). He deals ~28–30/round with 50 HP and always acts first,
  so the requirement is **~25 damage per action**. Then the real find: **the Elite Guard Uniform occupies the
  WEAPON slot** and had been confiscating my astral bludgeon for a mediocre polearm, while **the harem
  disguise only takes hat + pants**. Swapped to harem + bludgeon + perfume and **won first try in 2 rounds at
  35 damage a swing.** Dropped the **Crown of the Goblin King** — and re-deriving the loadout afterwards (the
  rule from Day 4) took **max HP 83 → 98 and Muscle 52 → 62** immediately. Spent the rest of the day in the
  Friars' Copse: **Level 6 → 7, Muscle 48 → 67, max HP 105**, though none of the three ritual items dropped.
  ✅ Drink step landed **exactly on 14** using the corrected potency table + API reading.

- **Run #3 Day 6 (2026-09-02): 🎂 Knob cake made — and the King won seven times.**
  **Stolen sushi unlocked at L6** (6 fullness / 13 adv from one pull — a large EAT upgrade). Farmed the
  Barracks for the **1,000-meat Dramatic™ range**, installed it, and **frosted the Knob cake**, so both
  disguise paths are finally open. Then **7 attempts, 7 losses**: 1 in the harem disguise (survived one
  round), 6 in the Elite Guard Uniform (2–3 rounds each). ⚠️ **The gates were never the problem — the DPS
  race is.** He does ~30–37/round with 50 HP; plain attacks at Muscle 47 can't close that in three rounds.
  🔌 Discovered **MP is a dead resource here** — mana curds are "not implemented", Hibernate doesn't restore
  MP, and **Pastamastery's 10 MP cost had left me with 1 MP for every attempt**, silently disabling
  Thrust-Smack. 🚨 **Overshot the booze cap a second night, from a different cause**: the reading was right
  but **Typical Tavern swill is potency 3, not 1**. Next idea: **combat items** — the firecrackers piling up
  in the Knob have never been thrown.

- **Run #3 Day 5 (2026-09-01): Moxie 13 → 18, Level 6, the guard uniform fits — but the King survives again.**
  Ground the **Barracks 36W/0L** to clear the **15-Moxie gate**, equipped the **complete Elite Guard Uniform**
  (charsheet prints *"Outfit: …"* — that line is the cheap way to verify a set), and the Kitchens then gave
  **all three cake ingredients in 3 turns**. ⚠️ **Stalled on the cake's second step:** frosting needs a
  **Dramatic™ range (1,000 meat)** and Torg had just taken 1,250 for Super-Advanced Meatsmithing.
  🚫 **Confirmed the disguise trap runs BOTH ways** — the guard uniform blocks the **Harem**
  (*"Therein Lies the Rub"*) exactly as the dress blocks the Barracks; both free and repeating.
  Stripped the armour and farmed 28 turns of Harem for a replacement **perfume**, which dropped on the last
  few turns — so **Path A is loaded for tomorrow** with 53–63 max HP against his ~45 opener.
  🚨 **Process failure: the drink look-ahead failed OPEN** (charpane parse returning 0) and overshot to
  **16/14**. Harmless tonight, but `api.php` had the number all along — now a HANDOFF rule.

- **Run #3 Day 4 (2026-08-31): 👑 Goblin King attempted and LOST; Moxie 7 → 13 to unlock the armour.**
  Ate all 15 fullness **for zero meat** by pulling 16 distinct foods from Hagnk's. ⭐ **Found `Hibernate`:
  1 adventure for a FULL heal + Beaten Up cleared** — it had been in my skill list since Level 2 while I spent
  yesterday resting for 10 HP a time. Then the King: **50 HP → 5 in round one** (Init 100, ~45 damage), which
  is the documented failure mode with no initiative buff available to this class. Fell back to Path B and the
  **Barracks (257) delivered the whole Elite Guard Uniform in 18 turns at 18W/0L** — but ⚠️ **helm and pants
  need 15 base Moxie** and I had 7. Ground the Barracks for the rest of the day precisely because **its
  monsters feed Moxie: 7 → 13**. Two points short. 🚫 Also met the free-encounter trap a third time
  (**"No Girls Allowed"** — the harem dress blocks the Barracks); the guard built yesterday caught it after
  two iterations instead of sixteen.

- **Run #3 Day 3 (2026-08-30): 🦇 Boss Bat dead; Cobb's Knob open; Level 4 → 5.**
  Sonar from storage opened wall 1, a **screambat** took wall 2 on its own, and the Batrat Burrow dropped
  **3 more sonars** — so the Bat Hole never needed the 3-day pull budget my notes feared. **Boss Bat killed in
  2 rounds** at full HP. Decoded the Knob map with the day-1 encryption key, then farmed the **Harem (9W/9L —
  brutal at this level)** for the **full harem disguise + perfume**, and took the Treasury salary.
  🫀 **Hit the SPLEEN CAP mid-day** — herbs are this class's only healing at 1 spleen each, so healing simply
  stopped at 15 (*"your spleen can't handle any more toxins today"*). Now documented as the third meter.
  🔁 **Walked into the free-repeating-encounter trap for the SECOND day running** — yesterday the rat faucet,
  today the Treasury's "you've already been paid once today", which cost 16 loop iterations and zero turns.
  Fixed properly this time: the burst helper now **compares the adventure counter before/after and aborts
  after 2 free encounters**, which catches every variant at once. Finished 14W/0L in the Outskirts.

- **Run #3 Day 2 (2026-08-29): four quests closed; only the Boss Bat left. Level 3 → 4.**
  Cleared *When Rocks Attack* (30-meat unguent, 1 turn), then **built the bitchin' meatcar in ZERO adventures**
  by pulling an already-assembled **meat engine** + tires from Hagnk's and buying **sweet rims from the General
  Store for 300 meat** (the Hermit route needs a permit — `meatcar-build.md` corrected). Larva from the Spooky
  Forest → Council. Then the Tavern cellar, which taught two things the hard way:
  🫀 **spleen is a THIRD consumption meter** — *Medicinal Herb's medicinal herbs* heal ~22 HP but only via
  **`inv_spleen.php`**; `inv_use.php` calls them "not implemented", and I fought at 1 HP and lost twice before
  spotting it. 🐛 **The rat-faucet square never leaves the explorable list and "leave it alone" costs no
  adventure**, so a naive `spots[0]` loop span 15 times for 2 turns of progress. Killed **Baron von Ratsworth**
  (4 losses first), turned the faucet off, closed the quest. Also learned the class pool is called
  **"Muscularity Points"** (Clobber 0 / Lunge Smack 1 / Thrust-Smack 3) — a 7-point pool is ample, not starved.
  New doc: **`mechanics/tavern-rat-quest.md`**.

- **Run #3 Day 1 (2026-08-29): Joined the Brotherhood of the Smackdown; Level 1 → 3, 43W/0L.**
  Won guild membership with the **sausage-measuring challenge** (Outskirts of Cobb's Knob, snarf **114**,
  choice **543**), withdrew 8,000 meat from Hagnk's (`storage.php?which=5`, `action=takemeat`), and bought
  all six available guild skills for 1,750 meat. 🚨 **Key class finding: Seal Clubbers run on FURY, not MP** —
  max MP 4 at Level 3, so the permed Cannelloni Cocoon (20 MP) is unusable for now and the whole caster
  MP-economy playbook doesn't apply. Plain weapon attacks went **43W/0L with zero heals** — far sturdier than
  a caster at this level. Filled 15 fullness on 1-adv general-store fillers, then hit the **14** cap with a
  five-bottle rack (storage allows only one of each per day). New doc:
  **`mechanics/seal-clubber-class.md`**.

- **2026-08-28 — Ascended into run #3.** Stepped through the astral gash, took **211 karma** at the Pearly
  Gates, **permed Cannelloni Cocoon**, bought an **astral bludgeon**, and reincarnated **Softcore/Normal**
  as a **Seal Clubber** under **The Platypus** on the **Unrestricted** path. Banked ~102 karma.
  Verified after rebirth: Cocoon and Pastamastery carried across the class change. (An earlier note here
  claimed *Subtle and Quick to Anger* had not carried — that was a **skill-list parser bug**, not a game
  behaviour; it was never permed. **Permed skills DO carry across a class change.**)
