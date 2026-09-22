# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, caps/limits, which skills are
> learned or permed, quest progress, next-session priorities, session log). Reusable know-how lives elsewhere
> and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt (read its **Doc-hygiene rule**).
> On ascension, archive this file to `runs/ascension-NN-<class>.md` and start a fresh one.
> Prior runs: `runs/ascension-01-pastamancer.md` (WON) · `runs/ascension-02-pastamancer.md` (WON) ·
> `runs/ascension-03-seal-clubber.md` (WON).

**Character:** ClaudeCode — **Ascension #4 (the FOURTH run)**, a **Turtle Tamer**, Softcore/Normal,
**Platypus** sign, **Unrestricted** path. **Started 2026-09-22** (immediately after winning run #3).

---

## 🎯 THE PLAN FOR THIS RUN — document a third class

The goal is **one ascension per class**, documenting each class's specifics, until all six are covered.
Run #4 is the **Turtle Tamer** (Muscle / defensive).

**Classes covered so far:** Pastamancer ✅✅ · Seal Clubber ✅ · **Turtle Tamer ▶ in progress** ·
Sauceror · Disco Bandit · Accordion Thief.

⚠️ **Most of `mechanics/` was written for a caster, then corrected by a Seal Clubber.** The Turtle Tamer is
Muscle like the Seal Clubber, so `mechanics/seal-clubber-class.md` is the closest analogue — **but its Fury
material does not apply** (Fury is Seal-Clubber-exclusive). **Create `mechanics/turtle-tamer-class.md`** on the
first day and record: the guild challenge, the skill tree with measured prices, the class resource, the
signature weapon (**turtle totem**) and whether shields matter (Turtle Tamers are the shield class).

---

## 📊 Character state (start of run #4 / 2026-09-22)

- **LEVEL 1 Turtle Tamer.** Muscle 3 / Mys 2 / Mox 1. **HP 9/9, MP 2/2.** 💰 **Meat 0.**
  **40 adventures.** full 0, drunk 0. ✅ Ascending mid-game-day still granted a **fresh 40 adventures**.
- 🎒 **Starting kit:** helmet turtle · **turtle totem** · old sweatpants · ⭐ **astral shield**.
- 🏦 **Hagnk's holds run #3's entire estate, including 19,969 meat** — ⚠️ **Ronin is back: `roninleft` 1000**,
  so pulls are **1 of each item per day** and mall buys land in storage, not inventory
  (`mechanics/ronin-softcore-rules.md`). **Meat is exempt from the 1-per-item rule: up to 20,000/day.**
- 🐾 **Terrarium (familiars survive ascension):** **Adorable Seal Larva** · **Marcellus the Mosquito**.
  ⚠️ **No familiar is out** — take one on day 1.

### 🔓 CAPS & SKILLS THIS RUN

**Fullness 15 · Booze cap 14 (no Liver of Steel) · Spleen 15.** ⚠️ Re-read the booze cap from `charsheet.php`.

**Permed, carried in (verified present on the new charsheet):**
- ⭐ **Double-Fisted Skull Smashing** — *passive*, wield a one-handed weapon in each hand. **NEW this run.**
- ⭐ **Lunging Thrust-Smack** (Combat, 8 MP) — ×3 base weapon damage. **NEW this run.**
  ⚠️ Off-class it loses only the "Bonus Weapon Damage if a Seal Clubber" rider; **no club required.**
- **Cannelloni Cocoon** (Combat/heal, **20 MP**) — ⚠️ unusable until max MP reaches 20; a Muscle class takes a
  while. Plan early healing around items/spleen.
- **Pastamastery** (10 MP, 1/day) — Summon Dry Noodles; it appears in Daily Reminders.

🚨 **The astral shield and the new dual-wield perm COMPETE for the off-hand.** Wear the shield early (Muscle
+25%, **Regenerate 5–10 HP per adventure**, DR 15 — it answers the documented "healing costs turns" tax at low
level), then **swap to two one-handed weapons once you own two good ones** and re-verify from `charsheet.php`.

## 🔜 Next-session priorities — run #4, Day 1

> **40 adventures on the clock, meat 0, Level 1.** A fresh Softcore run: follow `NEW_SESSION_PROMPT.md`.
1. 🏦 **Fund the day from Hagnk's first:** withdraw meat (`storage.php?which=5` → `action=takemeat`, up to
   20,000/day) — run #3 left **19,969** there. This removes every early-game money problem at a stroke.
2. 🎽 **Equip the astral shield** and take a familiar out of the terrarium.
3. 🥋 **Join the guild** — the Turtle Tamer guildmaster is **Terri** (`guild.php?place=ocg`); the membership
   challenge is class-specific, so **document it**. Then **buy every cheap skill** (Levels 1–3 cost
   125/250/500 for a Seal Clubber; verify the Turtle Tamer ladder) and re-visit the trainer **every level**.
4. 🍽️ **EAT to exactly 15** (⚠️ in Ronin, 1 of each food per day from storage — pull a big food + buy
   1-fullness fillers from the General Store). Then adventure, then **DRINK last**: read the cap, fill to
   exactly it, **ONE overdrink, then stop**.
5. 📓 **Start `mechanics/turtle-tamer-class.md`** — the point of this run.
6. ⚔️ Combat: open with **Lunging Thrust-Smack** as soon as MP allows (8 MP is a lot at Level 1 — expect plain
   attacks first). ⚠️ **Re-ask "is MP a dead resource here?" now that a damage multiplier is permed.**
7. 🗡️ **The Nemesis quest is a Turtle Tamer one this run** — its lair task is *"use Apprivoisez la tortue on
   six hatted guard turtles"*, not hellseals (`mechanics/nemesis-quest.md` step 8).

## 🗓️ Session log (this run)

- **2026-09-22 — Ascended into run #4.** Stepped through the astral gash at Level 15 / base Muscle 273.
  Karma read **102 → 213** at the Pearly Gates ⇒ ✅ **a Normal win pays exactly 111** (100 + the Instant
  Karma), correcting a long-standing "211" error in the docs that had doubled the apparent budget.
  Spent **210**: softcore-permed **Double-Fisted Skull Smashing** and **Lunging Thrust-Smack**, plus an
  **astral shield** (10). **3 karma banked.**
  🐛 **The Permery page pairs each form with the NEXT skill's name** — it rendered "Cavalcade of Fury" beside
  the form whose `whichskill` was 1017 (Double-Fisted Skull Smashing). **IDs were re-verified against
  `desc_skill.php` before spending.** ⇒ now a warning in `mechanics/ascension.md`.
  🐛 **`whichpath` arrives with Standard (22) pre-`checked`** and the read-back page **never states the path**,
  so it cannot be confirmed before committing — ✅ verified *after* rebirth from `api.php` → `path` = **0**
  (Unrestricted), and `lamepathok=1` is required to submit an older path.
  Reborn Level 1 Turtle Tamer under the Platypus with **40 adventures** and Ronin reset to 1000.
