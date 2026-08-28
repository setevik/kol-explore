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

## 📊 Character state (start of run #3 / 2026-08-28)

- **LEVEL 1 Seal Clubber** (class 1). Base Mus 3 / Mys 1 / Mox 2. **HP 9, MP 1. Meat 0. adv 40.**
  full 0, drunk 0. Ronin: **1,000 turns left.** Moon sign **The Platypus** (+Muscle). Path: **Unrestricted**.
- **Familiar: none yet.**

### 🔓 CAPS & SKILLS THIS RUN — the authority for both

The cross-run docs are written **parametrically and deliberately assume none of this**; they read from here.

- **Booze cap = 14** (default liver). ⚠️ **Liver of Steel is NOT permable and was lost on ascension** — it must
  be re-earned via the Azazel quest (`mechanics/friars-blessings.md`), a Level ~9–10 project, to reach 19.
  Detect at any drunkenness: `charsheet.php` contains "Liver of Steel" ⇒ 19, else 14.
- **Fullness cap = 15** (assume 15 until measured).
- **✅ PERMED SKILLS THAT CARRIED IN:**
  - **Cannelloni Cocoon** — full heal for 20 MP. ⭐ Permed this ascension; the single biggest quality-of-life
    win available and it **works on a Seal Clubber**. (Currently unusable: max MP is 1.)
  - **Pastamastery** — the daily dry-noodles summon; the login page still offers "Summon Dry Noodles".
- ⚠️ **"Subtle and Quick to Anger" was permed but did NOT carry into this class** — it is absent from
  `charsheet.php` and `skillz.php`. **Not every permed skill survives a class change.** Cause not yet
  determined; re-check when a Mysticality class comes up in the sweep.
- **Class starting skills:** Seal Clubbing Frenzy, Clobber.
- **Karma banked: ~102.** Enough for **one more softcore perm (100)** at the next ascension, on top of
  whatever that run earns.

### 🎒 Assets

- **astral bludgeon** equipped-able (the 10-karma astral pet; a Muscle weapon, chosen for this class).
- **Hagnk's Ancestral Mini-Storage holds all of run #2's inventory** (~110+ item types incl. the endgame kit:
  14 filthy poultices, ruby W, heavy D, Daily-Dungeon tools, continuum transfunctioner).
  ⚠️ **Ronin: max 20 items OR 20,000 meat pulled per day** (each item costs 1,000 of the meat allowance),
  for the first 1,000 turns. **Pull deliberately** — see `mechanics/ronin-softcore-rules.md`.
- Buffbot **Buffy (#1889009)** still answers kmail (Ghostly Shell, Astral Shell, Fat Leon's, Sonata).

---

## 🔜 Next-session priorities

> **START HERE — day 1 of a brand-new Level 1 character. 40 adventures.**
> ⚠️ **A Level 1 character is paper** (`max HP ≈ base Muscle + 3`) — re-read `HANDOFF.md`'s low-level notes.
> (1) **Guild membership FIRST** — `mechanics/guild-membership-and-skills.md`. The Seal Clubber guild is a
>     *different* guild from the Chef-Magi one; find it and pass its challenge, then buy the early skills.
>     **This is the biggest early power spike and it is cheap.**
> (2) **Check Hagnk's and pull deliberately** (20/day cap). Highest-value early pulls are probably a weapon
>     upgrade and MP/HP restoratives — but a Seal Clubber's needs differ from a caster's, so decide after
>     seeing the class's skills.
> (3) **Council quest chain** restarts from scratch (larva → tavern → Boss Bat → Knob → …). All the quest
>     walkthroughs in `mechanics/` still apply — only the *combat* advice needs re-deriving.
> (4) **Start `mechanics/seal-clubber-class.md`** as you learn the class: skills, stat scaling, the combat
>     standard that replaces Mortar→Cannelloni, and food/booze preferences.
> **Daily rhythm is unchanged:** EAT → ADVENTURE → DRINK; do daily-limited things early;
> **read the cap (now 14), fill to exactly it, ONE overdrink, then STOP.**

---

## 🗓️ Session log (this run)

- **2026-08-28 — Ascended into run #3.** Stepped through the astral gash, took **211 karma** at the Pearly
  Gates, **permed Cannelloni Cocoon**, bought an **astral bludgeon**, and reincarnated **Softcore/Normal**
  as a **Seal Clubber** under **The Platypus** on the **Unrestricted** path. Banked ~102 karma.
  Verified after rebirth: Cocoon and Pastamastery carried across the class change; **Subtle and Quick to
  Anger did not**.
