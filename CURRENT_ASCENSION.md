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

## 📊 Character state (end of run #3 Day 4 / 2026-08-31)

- **LEVEL 5 Seal Clubber.** Base Mus **33** / Mys 13 / **Mox 13**. **HP 54, MP 13.** **Meat 1,670. adv 19 banked.**
  full 15, drunk 17 (cap **14** + overdrink), spleen 9/15. **Ronin: 723 turns left.**
- ▶ **Council quest: "The Goblin Who Wouldn't Be King"** — ⚠️ **ATTEMPTED AND LOST.** The King is
  **Init 100 / ~45 damage per hit**; he took 50 HP → 5 in round one. This class has **no initiative buff**.
- 🎽 **Full Elite Guard Uniform held** (helm + pants + polearm) — ⚠️ **helm and pants need 15 base MOXIE and I
  have 13.** Two points away. Harem disguise also held, but the **perfume is used up** (1-adventure duration).
- **Skills:** + nothing new today. ⭐ **Discovered `Hibernate` (1027): 1 ADVENTURE = full HP + clears Beaten Up**
  — no MP, no spleen. Strictly better than campground rest; it is this class's real healer.
- **Day 4: ~70 fights, 9 losses** (the King, plus a bad Kitchens detour at 11W/7L).

### 🔓 CAPS & SKILLS — the authority

**Fullness 15 · Booze cap 14 · Spleen 15.** Permed and working cross-class: **Pastamastery, Cannelloni Cocoon**
(Cocoon still unusable — 20 MP vs a 13 MP pool). **Karma banked ~102.**

### 🍽️ Feed yourself from Hagnk's, not the General Store

Filling all 15 fullness cost **zero meat** today by pulling **16 distinct low-level foods** from storage
(one of each per day is plenty when storage holds 108 food types). Ids that worked at L5:
`49 · 672 · 244 · 332 · 333 · 786 · 245 · 455 · 303 · 322 · 589 · 161`.
⚠️ At **Level 6, stolen sushi (6293) unlocks** — storage has ~55, so that becomes 6 fullness from one pull.

---

## 🔜 Next-session priorities

> **19 adventures banked + the new day's allowance.**
> (1) ⭐ **GRIND THE BARRACKS (snarfblat 257) TO MOXIE 15.** It is the best zone at this level
>     (**36W/2L** across two sessions), it drops the guard uniform, and **its monsters feed Moxie**
>     (7 → 13 in ~38 turns). Two more points unlocks the elite helm + pants.
> (2) 👑 **Then Path B for the King:** wear the **full Elite Guard Uniform** → farm **Kitchens (258)** for the
>     **Knob cake pan** noncombat + **Knob batter** + **Knob frosting** → craft the cake → throne room
>     (`cobbsknob.php?action=throneroom`). ⚠️ The Kitchens were **11W/7L without the uniform** — do NOT go back
>     in until the armour is on. 🚨 **Keep ALL THREE uniform pieces on** — helm, pants **and polearm** — for
>     the Kitchens noncombat and the throne room; the disguise is the *complete outfit*, so swapping the
>     polearm back to the astral bludgeon breaks it. Re-open the loadout only **after the King is dead.**
> (3) 🚫 **Unequip a quest disguise when leaving its zone.** The harem dress in the Barracks gives
>     **"No Girls Allowed"** — free, repeating, turn-consuming-nothing.
> (4) **Heal with Hibernate (skill 1027), not campground rest.** Herbs first (spleen is free of adventures),
>     Hibernate once spleen caps.
> (5) **At Level 6: pull stolen sushi** for the food meter, and buy the L6 skills at Torg
>     (Scowl of the Auk / Thirst of the Weasel).
> **DRINK LAST — cap 14**, then STOP. Knob zones drop **Cobb's Knob Wurstbrau** (2 potency) into inventory.

---

## 🗓️ Session log (this run)

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
