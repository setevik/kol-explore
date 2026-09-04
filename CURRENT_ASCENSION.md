# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, caps/limits, which skills are
> learned or permed, quest progress, next-session priorities, session log). Reusable know-how lives elsewhere
> and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt (read its **Doc-hygiene rule**).
> On ascension, archive this file to `runs/ascension-NN-<class>.md` and start a fresh one.
> Prior runs: `runs/ascension-01-pastamancer.md` (WON), `runs/ascension-02-pastamancer.md` (WON).

**Character:** ClaudeCode — **Ascension #3 (the THIRD run)**, a **Level 8 Seal Clubber**, Softcore/Normal.
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

## 📊 Character state (end of run #3 Day 8 / 2026-09-04)

- **LEVEL 8 Seal Clubber.** Base **Mus 82** / Mys 36 / Mox 35. **Max HP 128, max MP 36.**
  **Meat 678. adv 1 banked.** full 15, drunk 15 (landed exactly on the 14 cap, then ONE overdrink).
  **Ronin 307 left.** Spleen 0/15 (unused today — herbs no longer needed now that DR is up).
- 🎁 **Loadout:** Crown of the Goblin King · astral bludgeon · Knob Goblin elite pants · ring of half-assed
  regeneration. (Re-derived after the King; unchanged today.)
- ✅ **Trial By Friar COMPLETE** — ritual performed. Pandamonium is now open but its talisman zones are
  **mainstat 55/60**, so Liver of Steel stays a Level ~9–10 goal (see `friars-blessings.md`).
- ⚰️ **The Cyrpt is half done: Evilometer 194 → 78.** **Alcove CLEARED · Cranny CLEARED · Niche at 28 · Nook
  untouched (50).** Evil drops **exactly 1 per kill**; each room's boss spawns at 25 and clears the rest.
  Cyrpt fights at L7–8 ran **62W / 2L** — both losses to the Alcove boss (conjoined zmombie).
- 💰 **The Cyrpt is also this run's best meat farm so far:** ~1,500–1,900 meat per 25-turn room.
- **Day 8: ~102 fights, 2 losses. Level 7 → 8, Muscle 67 → 82, max HP 105 → 128.**

### 🆕 THREE GUILD QUESTS ARE OPEN (found only because I finally talked to the non-trainer NPCs)

| NPC | Quest | State |
|---|---|---|
| **Grignr** (`place=scg`) | **Me and My Nemesis** — Nemesis stole a guild artifact | Search the **Misspelled Cemetary** for the **Tomb of the Unknown Seal Clubber**. Unlocked **The Unquiet Garves**. |
| **Terri** (`place=ocg`) | **The Wizard of Ego** — dig up Fernswarthy's grave for a key | open |
| **Olaf** (`place=paco`) | **White Citadel** takeout errand | accepted → **unlocked Whitey's Grove (snarf 100)** |

⚠️ Grignr had said *"check back with me later"* on **Day 1** and I didn't return until **Day 8**.

### 🔓 CAPS & SKILLS THIS RUN

**Fullness 15 · Booze cap 14 (no Liver of Steel) · Spleen 15.**
**Skills known:** Seal Clubbing Frenzy · Thrust-Smack · Lunge Smack · Super-Advanced Meatsmithing · Blubber Up ·
Fortitude of the Muskox · Audacity of the Otter · **Hide of the Walrus** · Clobber · Hibernate · Cold Shoulder ·
Wrath of the Wolverine · Buoyancy of the Beluga · **Scowl of the Auk** · **Furious Wallop** ·
**Thirst of the Weasel** · *Pastamastery (permed)* · *Cannelloni Cocoon (permed)*.
**Not yet bought (L8 tier):** Claws of the Walrus (3,250) · Club Foot (3,250).
🛡️ **`Hide of the Walrus` is the buy of the run so far** — DR cut Hibernate spending from **8 adventures per
24 fights to 2 per 30**. Cast it in every grind loop's preamble.
🔌 **MP is no longer fully dead** (max 36 at L8): Cannelloni Cocoon (12 MP) is now castable, but there is still
no cheap restore, so **Hibernate (1 adv, full HP) remains the workhorse.**
Karma banked ~102.

---

## 🔜 Next-session priorities

> **1 adventure banked + the new day's allowance. Meat is low (678) — the Cyrpt refills it fast.**
> (1) ⚰️ **FINISH THE CYRPT** — Niche (**263**, at 28 evil) then Nook (**264**, at 50). Evil = 1/kill, boss at
>     25 clears the room. Then **the Haert** (`crypt.php?action=heart`) → **the Bonerdagon**.
>     ⚠️ Read `mechanics/bonerdagon-boss.md` first — but its combat advice is caster-specific.
> (2) 🛡️ **Cast Hide of the Walrus at the start of every grind loop** — it is worth ~6 adventures per 25 fights.
> (3) 🏛️ **Three guild quests are open** (table above). The **Nemesis** chain is the class-signature one and is
>     exactly what this run exists to document → **write it up in `mechanics/nemesis-quest.md`.**
> (4) 💰 **Buy Claws of the Walrus / Club Foot (3,250 each)** once the Cyrpt has paid out.
> (5) **EAT: pull a stolen sushi (6293) daily** (6 full / 14 adv) + **Knob jelly donuts** (1 full / 3 adv, ~24
>     left in inventory) to land on 15 for zero meat.
> (6) 🍺 **DRINK: cap 14.** Fill with **Ye Olde Meade (5 drunk / 16 adv — best measured)** + Green Manalishi +
>     Imp Ale toppers. 🚨 **Reserve a MEASURED big bottle for the overdrink** — see the Day 8 mistake below.

---

## 🗓️ Session log (this run)

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
