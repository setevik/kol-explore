# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, caps/limits, which skills are
> learned or permed, quest progress, next-session priorities, session log). Reusable know-how lives elsewhere
> and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt (read its **Doc-hygiene rule**).
> On ascension, archive this file to `runs/ascension-NN-<class>.md` and start a fresh one.
> Prior runs: `runs/ascension-01-pastamancer.md` (WON) · `runs/ascension-02-pastamancer.md` (WON) ·
> `runs/ascension-03-seal-clubber.md` (WON) · `runs/ascension-04-turtle-tamer.md` (WON) ·
> `runs/ascension-05-sauceror.md` (WON) · `runs/ascension-06-disco-bandit.md` (WON).

**Character:** ClaudeCode — **Ascension #7 (the SEVENTH run)**, an **Accordion Thief**, Softcore/Normal, **Marmot**
sign (+Moxie), **Unrestricted** path (`path` 0 ✅ verified right after rebirth). **Started 2026-11-16**
(immediately after winning run #6 on its Day 19).

---

## 🎯 THE PLAN FOR THIS RUN — document the sixth and last class

Goal: **one ascension per class**. Covered: Pastamancer ✅✅ · Seal Clubber ✅ · Turtle Tamer ✅ · Sauceror ✅ ·
Disco Bandit ✅ · **Accordion Thief ▶**. **Create `mechanics/accordion-thief-class.md`** on Day 1 (guild challenge,
skills with prices, class resource, early combat plan). The Moxie guild is shared with the Disco Bandit
(`guildstore1`), but the trainer rack is the Accordion Thief's own.

## 📊 Character state (end of run #7 Day 2 / 2026-11-17)

- **Level 5 Accordion Thief** (base Moxie 28 — Level 6 at 29), max HP ~20 (46 with Power Ballad). 💰 Meat 9,651 on
  hand; **~10,393 meat still in Hagnk's**. **33 adventures banked**, full 15 · drunk 17 (cap 14).
- 🎽 mariachi hat · stolen accordion · astral shorts · batskin belt · ring of half-assed regeneration · Pine-Fresh air freshener.
- 🗺️ Guild ✅ · Toot ✅ · Larva ✅ · Tavern ✅ · **Boss Bat ✅ (Day 2)** · **Cobb's Knob OPEN** (map decoded; base
  Moxie 28 ≥ 25 gate) — L5 Knob King quest active. Haunted Kitchen open (telegram read); Spookyraven billiards room key in inventory.
- Skills bought: L1–4 set + **Polka of Plenty · Accordion Appreciation** (L5).
- Combat items left: depantsing bomb ×1. Restoratives: gauze garter ×1, filthy poultice ×1, Monstar ×1.

### 🔓 CAPS & SKILLS THIS RUN
**Fullness 15 · Booze cap 14 (no Liver of Steel yet) · Spleen 15.**
**Permed, carried in:** Lunging Thrust-Smack · Double-Fisted Skull Smashing · The Long View (+3 adv/day) ·
Pastamastery · Cannelloni Cocoon · Expert Panhandling · **Ambidextrous Funkslinging (NEW — two combat items/round)**.
✅ All `(P)` on the charsheet. Guild skills: see Character state.

## 🔜 Next-session priorities — run #7, Day 3

1. Login (`fill_credentials` recipe in HANDOFF). Load engine; `window._openers=[['6029',2]]`; heal = campground rest
   override (see `tools/engine/README.md`).
2. Pulls (20): **harem veil 306 + harem pants 305 + Knob Goblin perfume 307** (King disguise) · **eleven-foot pole 6302,
   Pick-O-Matic lockpicks 280, ring of Detect Boring Doors 6303** (Daily Dungeon — skipped Day 2) · food (L5: sweet
   roll Alabama, mana curds, flavorless gruel, + an F3) · booze to 14 + one overdrink · a sonar is no longer needed.
3. Daily Dungeon early (325, `_freeMax=8`). Buy L6 skills when Level 6 hits.
4. Knob King: Harem (259) — check win rate; disguise + perfume → throne room only with **Power Ballad up (max HP ~46+)**
   and Bash → bombs ready. Kitchen (388) is the safe fallback for levels.

## 🗓️ Session log (this run)

- **Run #7 Day 2 (2026-11-17): 🦇 Boss Bat dead, Cobb's Knob open, Level 5 — ~75 wins, 1 loss.** 🏦 20 pulls.
  🍽️ sweet roll Alabama, vampire chowder, mana curds, marrow = 15 (39 adv). 🍺 martini, margarita, backwoods
  screwdriver, Green Manalishi, brandy = 14, rum 17. Guano Junction 18–0 + 2 sonars → Lair; Boss Bat lost once on
  plain attacks, then won with Ballad + Bash + bombs. Knob map decoded. Haunted Kitchen 69–0, base Moxie 21 → 28.
  Login moved to the connector's new `fill_credentials` flow (`tools/kol-login-target.mjs`).

- **Run #7 Day 1 (2026-11-16): 🪗 Accordion Thief born, guild joined, Level 1 → 4 — ~50 wins, 0 losses.**
  🏦 11 pulls + 9,000 meat. 🍽️ guolash, baguette, crumbs, marrow, tots = 15 (39 adv). 🍺 rum, vodka, gin, whiskey,
  sherry = 14, boxed wine 17. Pants yoinked (6 alley turns); L1–4 skills 2,750. Toot gems +2,500. Larva (marsh, first
  visit), Tavern cellar (~15 turns), Bat Hole 15. New doc `mechanics/accordion-thief-class.md`.

- **2026-11-16 — Ascended into run #7.** Run #6 (Disco Bandit) won on Day 19. Karma 6 → 116 → permed **Ambidextrous
  Funkslinging** (100) + **astral shorts** (10), 6 banked. Reborn **Normal · Accordion Thief · Marmot · Unrestricted**.
