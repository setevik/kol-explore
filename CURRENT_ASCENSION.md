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

## 📊 Character state (end of run #3 Day 5 / 2026-09-01)

- **LEVEL 6 Seal Clubber.** Base Mus **32** / Mox **18**. **HP 53 (63 with the uniform on), MP 13.**
  **Meat 354. adv 28 banked.** full 15, drunk **16 (⚠️ overshot a cap of 14 — see below)**, spleen 15/15.
- ▶ **Council quest: "The Goblin Who Wouldn't Be King"** — ⚠️ still open, but **BOTH paths are now within reach**:
  - **Path A is READY:** harem veil + pants held, **and a fresh Knob Goblin perfume is in inventory.**
    At **53–63 max HP** I should now survive his ~45 opening hit, which is what killed the Level 5 attempt.
  - **Path B is one purchase away:** full Elite Guard Uniform **equippable** (Moxie 18 ≥ 15), and the
    **unfrosted Knob cake** is made — it needs a **Dramatic™ range (General Store row 643, 1,000 meat)** to
    frost, and I have 354.
- **Skills:** + Super-Advanced Meatsmithing (L6, 1,250).
- **Day 5: ~95 fights, 3 losses.** Moxie 13 → 18, Level 5 → 6.

### 🚨 Day 5's process failure — the drink guard failed OPEN

The look-ahead guard read drunkenness by scraping the charpane, and **returned 0 whenever the regex missed**,
so it waved every bottle through and I landed on **16 against a cap of 14**. No damage done (0 adventures were
left and 28 banked either way), but the lesson is general and now in `HANDOFF.md`:
**read `drunk`/`full`/`spleen`/`adventures` from `api.php?what=status`, never from a charpane regex, and make
any guard fail CLOSED.**

### 🔓 CAPS & METERS

**Fullness 15 · Booze cap 14 · Spleen 15.** Healing ladder: **herbs (spleen, no adventures) → `Hibernate`
(skill 1027, 1 adventure, FULL heal)**. Never campground rest. Permed: Pastamastery, Cannelloni Cocoon
(Cocoon still unusable at 13 MP). Karma banked ~102.

---

## 🔜 Next-session priorities

> **28 adventures banked + the new day's allowance. The King should die today.**
> (1) 👑 **PATH A FIRST — it needs no meat and is one turn of setup.**
>     Equip **harem veil + pants** (⚠️ remove the guard uniform first), heal to FULL, then
>     **use the perfume LAST — it lasts exactly 1 adventure** — and go straight to
>     `cobbsknob.php?action=throneroom`. Fight at full HP; he opens for ~45 and has Initiative 100, so the
>     whole question is whether you survive round one. **Hibernate before entering if HP is short.**
> (2) 🎂 **If Path A fails, Path B is a 1,000-meat purchase:** farm meat, buy the **Dramatic™ range
>     (General Store row 643)**, then `craft.php mode=cook a=4946 b=4945` to frost the cake, wear the
>     **complete** Elite Guard Uniform (all three pieces — the charsheet must show
>     *"Outfit: Knob Goblin Elite Guard Uniform"*) and enter with the cake **uneaten** in inventory.
> (3) 🚫 **Swap disguises deliberately — each one BLOCKS the other's zone** with a free repeating noncombat
>     (harem → Barracks *"No Girls Allowed"*; guard → Harem *"Therein Lies the Rub"*).
> (4) **After the King is dead, re-derive the whole loadout** — you get the **Crown of the Goblin King** and
>     no longer need either disguise (see `equipment-strategy.md` § "Outfits are all-or-nothing").
> (5) **Level 6 unlocks stolen sushi (6293)** — storage holds ~55, so pull one daily for 6 fullness instead
>     of a dozen 1-adventure fillers.
> **DRINK LAST — cap 14 — and take `drunk` from the API, not the charpane.**

---

## 🗓️ Session log (this run)

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
