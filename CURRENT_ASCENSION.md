# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, caps/limits, which skills are
> learned or permed, quest progress, next-session priorities, session log). Reusable know-how lives elsewhere
> and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt (read its **Doc-hygiene rule**).
> On ascension, archive this file to `runs/ascension-NN-<class>.md` and start a fresh one.
> Prior runs: `runs/ascension-01-pastamancer.md` (WON), `runs/ascension-02-pastamancer.md` (WON).

**Character:** ClaudeCode — **Ascension #3 (the THIRD run)**, a **Level 1 Seal Clubber**, Softcore/Normal.
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

## 📊 Character state (end of run #3 Day 6 / 2026-09-02)

- **LEVEL 6 Seal Clubber.** Base Mus **47** (peak, buffed) / Mox 21. **Max HP 75, max MP 22.**
  **Meat 1,127. adv 37 banked.** full 15, drunk **16 (⚠️ overshot a 14 cap again — different cause)**.
- ▶ **Council quest: "The Goblin Who Wouldn't Be King"** — ⚠️ **7 attempts today, 7 losses.**
  **Both paths are now fully unlocked** — the gates are done; the fight itself is the wall.
  - **Path B is the platform for retries: NOTHING is consumed on a loss** (cake + uniform persist), so a
    retry costs 1 adventure + 1 Hibernate.
  - **Knob cake is MADE** (Dramatic™ range bought for 1,000 and installed in the campground kitchen).
  - Path A would need a **fresh perfume each attempt** (~28 turns of Harem) — not worth it for repeats.
- **Measured:** he deals **~30–37/round**, has **50 HP**, and I survive **2–3 rounds**. Plain attacks at
  Muscle 47 cannot remove 50 HP in that window.
- **Day 6: ~80 fights, 7 losses (all to the King).** Barracks remains 20W/0L and ~500 meat per 18 turns.

### 🔌 MP is a dead resource on this class — and Pastamastery is eating it

Max MP 22, and **no MP restorative works**: mana curds say *"not implemented yet"*, **Hibernate restores HP
but NOT MP**, and guildstore3 sells none. ⚠️ **`Pastamastery` costs 10 MP** and I cast it every morning out of
habit, which left **1 MP** for all seven King fights — silently disabling **Thrust-Smack (3 MP)**.
**Do not cast Pastamastery on a boss day.**

### 🚨 Overshot the booze cap two nights running — two DIFFERENT causes

Night 1: the charpane drunkenness parse returned 0 on failure (fixed — read `api.php` `drunk`).
Night 2: the reading was correct but the **potency constant was wrong — Typical Tavern swill (3831) is
potency 3, not 1**. Both now in `drinking-strategy.md`, along with a measured potency table.
**Treat any unverified bottle as potency 3 when `cap − drunk < 3`.**

---

## 🔜 Next-session priorities

> **37 adventures banked + the new day's allowance.**
> (1) 🧨 **NEW IDEA FIRST — use COMBAT ITEMS on the King.** The Knob zones drop **Knob Goblin firecrackers**
>     constantly (several in inventory) and they have gone completely unused. `fight.php?action=useitem&whichitem=<id>`
>     each round alongside weapon attacks is the cheapest way to close a ~50 HP gap. Also try the
>     **Knob Goblin deluxe scimitar** and any other combat items in the bag.
> (2) ⚠️ **DO NOT cast Pastamastery** before the fight — it costs 10 of 22 MP and disables Thrust-Smack.
>     Enter with full MP and use **Thrust-Smack (skill 1003, 3 MP)** every round it is affordable.
> (3) 👑 **Retry Path B** — wear ALL THREE uniform pieces (charsheet must read
>     *"Outfit: Knob Goblin Elite Guard Uniform"*), cake **uneaten** in inventory,
>     `cobbsknob.php?action=throneroom`. Hibernate between attempts; nothing is consumed on a loss.
> (4) If still losing, **grind the Barracks (257) to Level 7+** — it is 20W/0L and pays ~500 meat per 18 turns
>     — and retry with more Muscle.
> (5) **After the King: re-derive the whole loadout** (Crown of the Goblin King drops) and drop both disguises.
> **EAT: pull a stolen sushi (6293) daily — 6 fullness / 13 adventures for one pull.**
> **DRINK LAST — cap 14, `drunk` from the API, and verify potency before the last bottle.**

---

## 🗓️ Session log (this run)

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
  Verified after rebirth: Cocoon and Pastamastery carried across the class change; **Subtle and Quick to
  Anger did not**.
