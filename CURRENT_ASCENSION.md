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

## 📊 Character state (end of run #3 Day 3 / 2026-08-30)

- **LEVEL 5 Seal Clubber.** Base Mus **28**. **HP 47, MP 8.** **Meat 460. adv 21 banked.**
  full 15, drunk 17 (cap **14** + overdrink), **spleen 15/15 — EXHAUSTED**. **Ronin: ~820 turns left.**
- ✅ **Boss Bat dead** (2 rounds at full HP). Bat Hole fully open.
- ▶ **Current Council quest: "The Goblin Who Wouldn't Be King"** — Cobb's Knob is **open** (map decoded with
  the encryption key). Zones: Barracks 257 · Kitchens 258 · Harem 259 · Treasury 260.
- 🎭 **Harem disguise COMPLETE and equipped** (veil + pants) **+ Knob Goblin perfume in hand** — that is the
  full kit the Goblin King throne room requires. Also hold **Cobb's Knob lab key**.
- **Skills:** + **Buoyancy of the Beluga** (L5, 1,250). Torg still owes Super-Advanced Meatsmithing at L5.
- **Equipment:** astral bludgeon (2-handed) · ring of half-assed regeneration · harem veil + pants.
- **Day 3: ~70 fights, 11 losses** (9 of them in the Harem — see the zone table in the class doc).

### 🫀 The three meters — all three matter on this class

**Fullness 15 · Booze cap 14 · SPLEEN 15.** The spleen cap is the one that bit today: **Medicinal Herb's
medicinal herbs are the only healing this class has, and they cost 1 spleen each**, so healing is hard-capped
at ~15 heals/day and then simply stops (*"Your spleen can't handle any more toxins today"*). Budget it:
save spleen for hard zones, and fall back to `campground.php?action=rest` (1 adv, ~10 HP) once it's spent.

---

## 🔜 Next-session priorities

> **21 adventures banked + the new day's allowance.**
> (1) 👑 **THE GOBLIN KING — the kit is already assembled.** Harem veil + pants equipped, perfume in hand.
>     Read `mechanics/cobb-knob-quest.md` first: the throne room is
>     **`cobbsknob.php?action=throneroom`**, and the documented failure mode is **losing initiative and being
>     one-shot** — the caster fix was Springy Fusilli, so **find the Muscle equivalent or just go in at full
>     HP with high Muscle**. Enter at FULL HP with spleen herbs unspent.
> (2) **Torg every level** (`guild.php?place=trainer`). Still unbought at L5: **Super-Advanced Meatsmithing**.
>     L6 unlocks **Scowl of the Auk / Thirst of the Weasel**.
> (3) ⚠️ **Meat is low (460).** The **Treasury (260) is 20W/0L and meat-positive** — but the harem salary is
>     **once/day and then becomes a FREE repeating encounter**, so use the adventure-counter guard.
> (4) **At Level 6, stolen sushi unlocks** — storage holds **55**, and at 1 pull/day that is one good 6-fullness
>     food every day instead of fifteen 1-adventure fillers. Big EAT upgrade.
> (5) **Still unmeasured for the class doc: how Fury accumulates and what spends it.**
> **DRINK LAST — cap 14**, then STOP. Cellar/Knob booze drops into inventory (not pull-limited); a
> 4 × 3-potency + 1 × 2-potency rack lands exactly on 14.

---

## 🗓️ Session log (this run)

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
