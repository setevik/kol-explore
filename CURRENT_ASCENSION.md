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

## 📊 Character state (end of run #7 Day 5 / 2026-11-20)

- **Level 7 Accordion Thief** (base Moxie 52 — Level 8 at 53), max HP ~45 (~75 with Power Ballad). 💰 Meat 9,148 on
  hand; **~7,393 meat still in Hagnk's**. **33 adventures banked**, full 15 · drunk 17 (cap 14).
- 🎽 mariachi hat · stolen accordion · astral shorts · batskin belt · ring of half-assed regeneration · Pine-Fresh air
  freshener. Crown of the Goblin King, harem disguise, DD tools in inventory.
- 🗺️ … Boss Bat ✅ · Knob King ✅ · Friars ✅ · **Cyrpt in progress: Alcove 0 ✅ · Cranny 0 ✅ · Niche 12 (its boss,
  the gargantulihc, is next — a plus-sized phylactery is in inventory and kills him outright) · Nook 50.**
  **Hero keys: Boris's ✅ Jarlsberg's ✅ Sneaky Pete's ✅ (all three).**
- Skills bought: L1–7 set.
- Combat items: **none left** (all four bombs spent on room bosses). Restoratives: garters ×2, poultices ×2,
  Monstar ×2, Magi-Wipes, antidote.

### 🔓 CAPS & SKILLS THIS RUN
**Fullness 15 · Booze cap 14 (no Liver of Steel yet) · Spleen 15.**
**Permed, carried in:** Lunging Thrust-Smack · Double-Fisted Skull Smashing · The Long View (+3 adv/day) ·
Pastamastery · Cannelloni Cocoon · Expert Panhandling · **Ambidextrous Funkslinging (NEW — two combat items/round)**.
✅ All `(P)` on the charsheet. Guild skills: see Character state.

## 🔜 Next-session priorities — run #7, Day 6

1. Login (`fill_credentials` recipe in HANDOFF). Load engine + the Cyrpt helpers (Ballad heal override, `_cy`
   chooser, `evil()`, `_bombIf` for room bosses — see `mechanics/bonerdagon-boss.md`).
2. Pulls: food (sweet roll, mana curds, gruel + brains/baguette) · Meade 6276 + backwoods / Manalishi / gin / vodka /
   whiskey (whiskey sour and screwdriver are gone from storage) · **bombs: beer 2350, water pipe 2348, sake 2067,
   depantsing 2397** (one each).
3. Daily Dungeon (no keys needed — skip unless it pays; hero keys are done).
4. **Brother Smothers's Blessing** (`friars.php` POST `action=buffs&bro=3`) → Niche: **use the plus-sized phylactery in
   the gargantulihc fight** → Nook (use evil eyes, −3 each) → **Bonerdagon** at full HP with Ballad (he is a max-HP
   check, ~46 spooky/round; take Smothers right before `crypt.php?action=heart` → choice 527 option 1).

## 🗓️ Session log (this run)

- **Run #7 Day 5 (2026-11-20): 🔑 all three hero keys, Cyrpt half cleared — ~73 wins, 0 losses.** 🏦 9 pulls.
  🍽️ sweet roll, mana curds, gruel, brains = 15 (32 adv). 🍺 Meade, backwoods, Manalishi, gin = 14, vodka 17.
  DD → Sneaky Pete's key. Smothers → Cranny 25–0 and Alcove 18–0 (both bosses bombed), Niche 26–0 to 12 evil.

- **Run #7 Day 4 (2026-11-19): 🕯️ Friars ritual done, Level 7, Jarlsberg's key — ~75 wins, 0 losses.** 🏦 10 pulls +
  3,000 meat. 🍽️ sweet roll, mana curds, gruel, brains = 15 (36 adv). 🍺 Ye Olde Meade (15 adv!), backwoods,
  Manalishi, whiskey sour = 14, daiquiri 17. DD (7 turns) → Jarlsberg's key. Harem 31–0 → L7, L7 skills. Friars:
  Heart, Elbow, Neck 29–0 → ritual → Cyrpt quest. Harem 11–0 to finish.

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
