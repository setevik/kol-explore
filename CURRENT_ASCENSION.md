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

## 📊 Character state (end of run #3 Day 2 / 2026-08-29)

- **LEVEL 4 Seal Clubber.** Base Mus **22** / Mys 7 / Mox 7. **HP 38, MP 7.** **Meat 2,162. adv 18 banked.**
  full 15, drunk 17 (cap **14** + overdrink), **spleen 8/15**. **Ronin: 871 turns left.**
- **Quests done:** guild membership · *When Rocks Attack* · *My Other Car Is Made of Meat* (**meatcar built in
  0 adventures** from Hagnk's parts) · mosquito larva · *Ooh, I Think I Smell a Rat* (Tavern cellar).
- **Only Council quest left: the Boss Bat** (Bat Hole, Nearby Plains).
- **Skills:** Seal Clubbing Frenzy · Clobber · Lunge Smack · Fortitude of the Muskox · Hibernate ·
  Audacity of the Otter · Cold Shoulder · Blubber Up · **Wrath of the Wolverine · Thrust-Smack** (L4, 750 ea)
  · **Pastamastery (P)** · **Cannelloni Cocoon (P)** *(still unusable — 20 MP vs a 7 MP pool)*.
- **Equipment:** astral bludgeon (2-handed) · ring of half-assed regeneration.
  ⚠️ **Baron von Ratsworth's monocle is unwearable** — needs 10 base Mysticality, this class has 7.
- **Unlocked:** Desert Beach (Bordertown, The Shore, South of the Border), Degrassi Knoll (`knoll_hostile`).
- **Day 2: ~70 fights, 6 losses** (4 of them to Baron von Ratsworth, 2 to a bad heal threshold).

### 🔓 CAPS & SKILLS THIS RUN — the authority for all three meters

- **Booze cap 14** (default liver — Liver of Steel was lost on ascension and must be re-earned via the Azazel
  quest). **Fullness cap 15.** **Spleen cap 15** — a third meter; see below.
- **Permed and confirmed working cross-class: Pastamastery, Cannelloni Cocoon.**
- **Karma banked: ~102.**

### 🫀 Healing on this class — spleen, not skills

**Medicinal Herb's medicinal herbs (item 1274)**, guildstore3 row 536, 100 meat, heals **~22 HP for 1 spleen**.
🐛 **Use `inv_spleen.php`, NOT `inv_use.php`** — the latter says *"not implemented yet"*, which cost two lost
fights before I noticed. Keep ~10 in stock and **heal at 60–70% HP, not 35%** (no in-combat heal on this class).

---

## 🔜 Next-session priorities

> **18 adventures banked + the new day's allowance.**
> (1) 🦇 **The Boss Bat** is the only Council quest left. `mechanics/bat-hole-boss-bat.md` applies, but its
>     "Springy Fusilli makes it trivial" advice is **caster-specific** — re-derive for Muscle. The Bat Hole
>     needs **sonar-in-a-biscuit** to open walls; check Hagnk's before buying (storage had 5+ last run).
> (2) **Torg every level** — `guild.php?place=trainer`, POST `action=buyskill&skillid=<short id>`.
>     L5 unlocks **Buoyancy of the Beluga / Super-Advanced Meatsmithing**.
> (3) **Restock herbs** (guildstore3 row 536) before any hard fight, and remember spleen caps at 15/day.
> (4) **Keep filling `mechanics/seal-clubber-class.md`** — still unmeasured: **how Fury actually accumulates
>     and what spends it** (the status API shows `fury` climbing; it was 3 at day's end).
> (5) A **familiar** would help a lot and I have an empty Familiar-Gro Terrarium — a second mosquito larva
>     from the Spooky Forest (~16 turns) is the cheapest source.
> **DRINK LAST — cap 14.** Booze that DROPS into inventory (the tavern cellar gives gin/vodka/rum/whiskey/wine)
> is **not** pull-limited, so the rack is easier than day 1: 4 × 3-potency + 1 × 2 = 14, then ONE overdrink.

---

## 🗓️ Session log (this run)

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
