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

## 📊 Character state (end of run #3 Day 9 / 2026-09-05)

- **LEVEL 8 Seal Clubber.** Base **Mus 91**. **Max HP 148, max MP ~43.** **Meat 1,467. adv 14 banked.**
  full 15, drunk 19 (landed exactly on the 14 cap, then ONE overdrink ✅). **Ronin 181 left.**
- ⚔️ **LOADOUT UPGRADED: the `Hammer of Smiting` (2559) — Damage 9–18 and ONE-HANDED**, roughly double the
  astral bludgeon (5–10, two-handed). **The off-hand slot is now free and unused — find something for it.**
  Also: Crown of the Goblin King · Knob Goblin elite pants · ring of half-assed regeneration
  (⚠️ clown shoes + big red clown nose are still occupying the other two accessory slots — re-derive).
- ⚰️ **THE CYRPT IS SWEPT.** All four rooms cleared (Evilometer now reads the `999 / Haert: 999` sentinel).
  **Only the Bonerdagon remains.** Day 9 Cyrpt record: **63W / 0L**.
- 💀 **Bonerdagon attempted and LOST in 3 rounds** — see the plan below; this is tomorrow's first job.
- 🏆 **NEMESIS PART 1 COMPLETE** — riddle → ghost → Bjorn's Hammer → Beelzebozo → distilled seal blood →
  smithed the Epic Weapon. Guild is now in the **lair-search delay** ("we will attempt to locate your Nemesis").
- 🤍 **Whitey's Grove (snarf 100) unlocked** by accepting Olaf's errand. 35W/0L there.
- **Day 9: ~140 fights, 1 loss (the Bonerdagon). Muscle 82 → 91, max HP 128 → 148.**

### 💀 THE BONERDAGON — measured, and the plan that should win

| | |
|---|---|
| His stats (wiki) | **HP 120** · Att 90 · Def 81 · No-Hit 100 · **Init 90 (he strikes first)** |
| His damage (measured) | **~46 SPOOKY per round** |
| My damage then | 36/swing with the astral bludgeon → needed 4 swings, survived 3 rounds |

**Why I lost: I wasted the counter.** `Brother Smothers's Blessing` (+3 all-elemental res) is the answer to
46 spooky/round — but it lasts **20 adventures** and I took it at day-open, then ground 63 turns. It had been
gone ~40 turns when I opened the door. ⚠️ **Damage Absorption (Hide of the Walrus +50) does NOT help here** —
absorption ≠ elemental resistance.

✅ **Tomorrow's sequence:** Hibernate to full HP → cast Seal Clubbing Frenzy (1 MP) →
**take `bro=3` blessing LAST** → `crypt.php?action=heart` → choice 527 opt 1 → **plain attacks only**
(he disrupts skills/items ~25%). With **120 HP at ~45/swing from the Hammer of Smiting that is 3 swings**,
and 148 max HP absorbs 3 of his hits. It should be winnable.

### 🔓 CAPS & SKILLS THIS RUN

**Fullness 15 · Booze cap 14 (no Liver of Steel) · Spleen 15.**
⭐ **Most of this class's skills are PASSIVE** (always on, nothing to cast): Hide of the Walrus (**Damage
Absorption +50**), Fortitude of the Muskox, Audacity of the Otter, Cold Shoulder, Wrath of the Wolverine,
Buoyancy of the Beluga, Thirst of the Weasel, Super-Advanced Meatsmithing.
**Castable:** Seal Clubbing Frenzy (**1 MP** — cast it constantly), Blubber Up (7), Scowl of the Auk (10),
*Cannelloni Cocoon (**20 MP**, permed)*, *Pastamastery (10, permed, 1/day)*. Combat: Clobber/Lunge Smack (1),
Thrust-Smack (3), **Furious Wallop (1 Gal. Fury = guaranteed crit)**.
**Not yet bought (L8 tier):** Claws of the Walrus (3,250) · Club Foot (3,250).
Healing ladder: **Cannelloni Cocoon (20 MP)** → **Hibernate (1 adv, full HP + clears Beaten Up)**.
Karma banked ~102.

---

## 🔜 Next-session priorities

> **14 adventures banked + the new day's allowance. Meat 1,467. Ronin 181 — plan for its end (unlimited pulls).**
> (1) 💀 **KILL THE BONERDAGON FIRST, while the daily blessing is fresh** — exact sequence in the box above.
>     Then report to `council.php` to close *Cyrptic Emanations*. Drops: skull of the Bonerdagon (off-hand —
>     **and the off-hand is now free**) + chest of the Bonerdagon (`inv_use` → 3,000 meat).
> (2) 🎽 **Re-derive the loadout** — clown shoes + big red clown nose are still equipped from the Fun House.
> (3) 🏆 **Nemesis Part 2** is in its gated delay; re-check `guild.php?place=scg` each day. Meanwhile the
>     Nemesis puts a **bounty** on you (wandering "disreputable" monsters) — that's expected, not a bug.
> (4) 📜 **Two guild quests still open:** *The Wizard of Ego* (Fernswarthy's grave) and *White Citadel*.
> (5) **EAT: pull a stolen sushi (6293) daily** + toppers (Knob jelly donuts are nearly gone — cottage
>     cheese ×8 / fortune cookies ×4 / ghuol eggs are the 1-fullness fallbacks).
> (6) 🍺 **DRINK: cap 14.** Best measured: **Corpse Island iced tea 6/22**, Ye Olde Meade 5/14–16,
>     Green Manalishi 3/8, limoncello 2/6. **Reserve a measured big bottle for the overdrink.**
>     🍷 Whitey's Grove choices **74 and 75** pay 3 boxes of wine / 3 jars of white lightning.

---

## 🗓️ Session log (this run)

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
