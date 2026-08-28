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

## 📊 Character state (end of run #3 Day 1 / 2026-08-29)

- **LEVEL 3 Seal Clubber.** Base Mus **14** / Mys 4 / Mox 4. **HP 26, MP 4.** **Meat 4,042. adv 19 banked.**
  full 15, drunk 17 (cap **14** + overdrink). **Ronin: 945 turns left.**
- ✅ **Guild joined** — The Brotherhood of the Smackdown (sausage challenge, ~7 turns in snarf 114).
- **Skills owned:** Seal Clubbing Frenzy · Clobber (starters) · Lunge Smack · Fortitude of the Muskox ·
  Hibernate · Audacity of the Otter · Cold Shoulder · Blubber Up (bought, 750 + 1,000 meat)
  · **Pastamastery (P)** · **Cannelloni Cocoon (P)**.
  ⚠️ **Cocoon costs 20 MP and max MP is 4** — unusable for many levels yet. HP recovery is
  **Medicinal Herb's medicinal herbs (item 1274, 100 meat, guildstore3 row 536)** for now; ~8 left.
- **Equipment:** astral bludgeon (**2-handed** — blocks the off-hand, so the enchanted brass knuckles
  sit unused).
- **Day 1: 43 fights, 0 losses, 0 heals needed.**

### 🔓 CAPS & SKILLS THIS RUN — the authority for both

- **Booze cap = 14** (default liver; Liver of Steel was lost on ascension and must be re-earned via the
  Azazel quest to reach 19). Verified in the charpane this run.
- **Fullness cap = 15.**
- **Permed skills that carried in: Pastamastery, Cannelloni Cocoon.** (*Subtle and Quick to Anger* was
  permed but does not exist on this class — see `mechanics/ascension.md`.)
- **Karma banked: ~102.**

### 🎒 Hagnk's / Ronin budget

- **Storage holds run #2's whole estate (538 item types) + ~954 meat** (8,000 was withdrawn on day 1).
- ⚠️ **20 pulls/day, and only ONE of each distinct item per day.** Meat costs 1 slot per 1,000.
- Day-1 spend: 8,000 meat (8 slots) + 6 booze pulls.

---

## 🔜 Next-session priorities

> **19 adventures banked + the new day's allowance.**
> (1) **Re-visit Torg every level** — `guild.php?place=trainer`, POST `action=buyskill&skillid=<short id>`.
>     L4 unlocks **Wrath of the Wolverine / Thrust-Smack** (~500–1,000 meat). This was a documented blind
>     spot last run; don't repeat it.
> (2) **Open quests:** *My Other Car Is Made of Meat* (guild meatcar — parts at **Degrassi Knoll**, talk to
>     Olaf at `guild.php?place=paco`) and *When Rocks Attack* (buy Pungent Unguent for the injured Knob
>     Goblin). The Council chain restarts from the top — `mechanics/` quest walkthroughs still apply.
> (3) **Level up in snarf 114** (Outskirts of Cobb's Knob) — 43W/0L there at L2–3 on plain weapon attacks.
>     Move on when the win rate or the stat gain collapses (`mechanics/leveling-zones.md`).
> (4) **Keep filling `mechanics/seal-clubber-class.md`** as the class reveals itself — especially **how Fury
>     actually works in combat**, which is still unmeasured.
> **DRINK LAST — cap is 14 this run.** Storage's 1-per-day rule means the rack must be **five different
> bottles** (gin 237 + vodka 238 + rum 787 + boxed wine 1005 = 12, + popskull 1774 = 14), then ONE
> overdrink, then STOP.

---

## 🗓️ Session log (this run)

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
