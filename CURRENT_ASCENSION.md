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

## 📊 Character state (end of run #7 Day 13 / 2026-11-28)

- **Level 11 Accordion Thief** (base Moxie 123), max HP ~88 (~280 on Ferrigno's + tomato juice). 💰 Meat 7,298.
  **21 adventures banked**, full 15 · drunk 19 (cap 14). Ronin over (mall → inventory).
- 🎽 stolen accordion (11) · bloodied surgical dungarees · head mirror · Lord Spookyraven's spectacles (accessory 3).
  Astral shorts, ring and Pine-Fresh freshener are in the pack. Pack: antique machete, 9 fires of unknown origin,
  9 tiny houses, 6 Meade, 4 popskull, pool cue, worm-riding hooks. **No HP potions left.**
- 🗺️ **Level 11 MacGuffin:** diary ✅ · **Hidden City ✅ (ancient amulet)** · **desert 100% ✅** (pyramid waits for the
  Staff of Ed) · **Lady Spookyraven chain ✅ → cellar (manor4) open**, wine-bomb route unlocked (spectacles read the
  recipe). Left: **blasting soda (Laundry 400) + Chateau de Vinegar (Wine Cellar 401) → unstable fulminate (needs the
  Dramatic range, 1,000) → 6 monstrous boilers (399) → wine bomb → Lord Spookyraven → Eye of Ed.** Palindome not started.
- Skills bought: L1–11 set.

### 🔓 CAPS & SKILLS THIS RUN
**Fullness 15 · Booze cap 14 (no Liver of Steel yet) · Spleen 15.**
**Permed, carried in:** Lunging Thrust-Smack · Double-Fisted Skull Smashing · The Long View (+3 adv/day) ·
Pastamastery · Cannelloni Cocoon · Expert Panhandling · **Ambidextrous Funkslinging (NEW — two combat items/round)**.
✅ All `(P)` on the charsheet. Guild skills: see Character state.

## 🔜 Next-session priorities — run #7, Day 14

1. Login. Load engine + `_openers=[['6032',5],['6029',2]]` + the potion heal wrapper (Ferrigno's 418, tomato juice
   420, Gr8ness 426 — buy the 100-meat listings first; one store caps per day).
2. 💰 **Meat is the bottleneck** (7,298). Potions cost ~250 meat a turn. Run `sellPlan(1, …)` again (Slope drops),
   then decide how many cellar turns the budget covers.
3. Eat 3 herbal stuffing + candied yams. **Cellar on potions only** (a Laundry cabinet won at 88 HP): soda +
   vinegar, Dramatic range, fulminate, 6 boilers, Lord Spookyraven.
4. Then the Palindome (`mechanics/palindome-quest.md`). Drink last: Meade ×2 + 2 popskull, Meade.

## 🗓️ Session log (this run)

- **Run #7 Day 13 (2026-11-28): 🗿 Hidden City done, desert crossed, Lady Spookyraven danced — ~190 wins, 1 loss.**
  🍽️ 3 herbal stuffing + candied yams = 15 (65 adv). 3 Cursed Punch → Apartment spirit (9 turns). Office: file in
  ~20 turns; fires ran out on its spirit, frigid ninja stars + flaming feather finished it. Spheres placed (free),
  Spectre 1 fire → ancient amulet. Desert 0 → 100% in ~60 turns, 0 losses (paint + killing jar + 15 pages, worm via
  drum machine). Pool ghost on the 2nd hustle at 10 drunk; necklace 14 fights; puff 9 · gown 9 · shoes 5; dance;
  organ → cellar. Laundry cabinet won at 88 HP (no potions). Slope 34–0. 🍺 3 punch, Meade, popskull ×3 = 14, Meade 19.

- **Run #7 Day 12 (2026-11-27): 🏙️ Level 11, diary in hand, Hidden City open, two spheres — ~115 wins, 2 losses.**
  🍽️ 3 herbal stuffing + candied yams = 15 (63 adv; tots spiked to 11k). Slope 62–0 → L11, L11 skills (~12.5k).
  Surplus autosold +50,680. Bus pass → Shore → Black Forest 25–0 on potions → forged ID → diary. Spooky Forest
  temple items, 2 stone wool, BANANAS → Hidden City; shrines 4 turns (machete). Bowling 5 turns → spirit 1 fire.
  Hospital: 2 losses (potions ran out; melee pygmy fights run 7 rounds) → fire-first + surgical set → spirit.
  🍺 Meade ×2 + popskull ×2 = 14, Meade 19.

- **Run #7 Day 11 (2026-11-26): 🏔️ Groar, Twin Peak and the Giant Trash quest — ~125 wins, 3 losses.** 🍽️ 3 herbal
  stuffing + 3 later tots = 15 (65 adv). Twin Peak fallback → Highlands done. Groar in 5 rounds on paired torpedoes →
  fuzzy montera. Bean planted; Airship (1 loss unbuffed, then 18–0 on Ferrigno's) → S.O.C.K.; amulet mirror, Ground
  Floor (1 loss), wig → wheel → trash quest done. Slope 56–0, base Moxie 99. 🍺 Meade ×2 + popskull ×2 = 14, Meade 19.
  ~20k meat spent on potions, torpedoes, tiny houses and food.

- **Run #7 Day 10 (2026-11-25): 🔥 two signal fires lit, Ronin over, Level 10 — ~68 wins, 0 losses.** 🏦 7 pulls.
  🍽️ grape tomato, curds, gruel, cottage cheese = 15 (33 adv). Oil Peak lit (25–0); lamp, jar and slacks from crude.
  A-boo lit with cane + lamp (4 Horrors). **Ronin ended** → estate pulled (612 stacks + 7,393 meat), surplus sold +25,194.
  Twin Peak 20–0 with the jar step. 🍺 Meade ×2 + open sauce = 14, Meade 19. L10 skills.

- **Run #7 Day 9 (2026-11-24): 🌉 Orc Chasm bridged, Highlands open — 99 wins, 0 losses.** 🏦 10 pulls. 🍽️ sweet roll,
  curds, gruel, baguette = 15 (37 adv). 🍺 Meade, corpse on the beach, backwoods = 14, corpsedriver 20 (61 adv).
  Keepsake box + Logging Camp 75–0 → bridge. Highland lord met. Oil Peak 24–0.

- **Run #7 Day 8 (2026-11-23): 🐉 Bonerdagon dead, Level 9, peak open — 75 wins, 0 losses.** 🏦 9 pulls. 🍽️ sweet roll,
  curds, gruel, baguette = 15 (34 adv). 🍺 Meade, corpsedriver, backwoods = 14, corpsetini 20 (62 adv). Bonerdagon in 2
  rounds (Bash + two bombs), chest + Goatlet took meat 6.7k → 12.7k. Goatlet 52–0 → L9, L9 skills. Slope 22–0, meter 3, `cloudypeak2`.

- **Run #7 Day 7 (2026-11-22): 🦴 Cyrpt rooms cleared, Level 8, Trapper's ore + cheese in — ~99 wins, 1 loss.** (Day 6 /
  11-21 went unplayed; its adventures carried over: 119 at login.) 🏦 16 pulls. 🍽️ sweet roll, curds, gruel, baguette = 15
  (35 adv). 🍺 Meade, backwoods, Manalishi, martini = 14, whiskey 17. Phylactery killed the gargantulihc; Nook 29–0.
  L8 skills. 3 linoleum in 6 digs; Goatlet 69–0. Slope lost once in the cold outfit. No Daily Dungeon.

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
