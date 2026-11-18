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

## 📊 Character state (end of run #7 Day 3 / 2026-11-18)

- **Level 6 Accordion Thief** (base Moxie 37 — Level 7 at 40), max HP ~29 (~56 with Power Ballad). 💰 Meat 6,649 on
  hand; **~10,393 meat still in Hagnk's**. **35 adventures banked**, full 15 · drunk 17 (cap 14).
- 🎽 mariachi hat · stolen accordion · astral shorts · batskin belt · ring of half-assed regeneration · Pine-Fresh air
  freshener. Crown of the Goblin King, harem veil/pants, DD tools (pole, lockpicks, ring) in inventory.
- 🗺️ Guild ✅ · Toot ✅ · Larva ✅ · Tavern ✅ · Boss Bat ✅ · **Knob Goblin King ✅ (Day 3)** · **Friars quest active**
  (Dark Neck: 2 of 4 noncombats seen, no dodecagram yet). Hero keys: **Boris's ✅** (Day 3 DD).
- Skills bought: L1–6 set (Polka, Accordion Appreciation, Jackasses' Symphony, Concerto de los Muertos).
- Combat items: water pipe bomb, sake bomb, depantsing bomb (1 each; beer bomb used). Restoratives: garters ×2,
  poultices ×2, Monstar ×2, Magi-Wipes, antidote.

### 🔓 CAPS & SKILLS THIS RUN
**Fullness 15 · Booze cap 14 (no Liver of Steel yet) · Spleen 15.**
**Permed, carried in:** Lunging Thrust-Smack · Double-Fisted Skull Smashing · The Long View (+3 adv/day) ·
Pastamastery · Cannelloni Cocoon · Expert Panhandling · **Ambidextrous Funkslinging (NEW — two combat items/round)**.
✅ All `(P)` on the charsheet. Guild skills: see Character state.

## 🔜 Next-session priorities — run #7, Day 4

1. Login (`fill_credentials` recipe in HANDOFF). Load engine; `window._openers=[['6029',2]]`; heal = campground rest.
2. Pulls (20): DD tools are already in inventory. Food (L6 OK: sweet roll, mana curds, gruel + F3 from inventory) ·
   booze (only 1 martini/margarita were in storage — use backwoods, Manalishi, whiskey sour, daiquiri, screwdriver,
   gin/vodka/whiskey) · bombs (beer bomb 2350 ×1/day) · a few hundred meat if needed. One missing item rejects a
   whole pull batch.
3. Daily Dungeon early (325, `_freeMax=8`) → Jarlsberg's key (row 94).
4. Harem (259) to Level 7 (base Moxie 40), buy L7 skills (Fat Leon's 6010 → skillid 10, Five Finger Discount 35).
5. Friars: retry the groves at Level 7; Hellions in the Dark Neck beat L6. Try Dark Heart (540) / Elbow (539) first.

## 🗓️ Session log (this run)

- **Run #7 Day 3 (2026-11-18): 👑 Knob Goblin King dead, Level 6, Boris's key — ~90 wins, 2 losses.** 🏦 20 pulls
  (harem disguise, DD tools, food, booze, bombs). 🍽️ sweet roll, mana curds, gruel, brains = 15 (36 adv). 🍺 martini,
  backwoods, Manalishi, whiskey sour, popskull = 14, cider 17. DD full run (7 turns) → Boris's key. Harem 10–0 → L6,
  L6 skills; King in 2 rounds (Bash + bombs). Friars Dark Neck: 2 Hellion losses at L6 → back to Harem, 72–0.

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
