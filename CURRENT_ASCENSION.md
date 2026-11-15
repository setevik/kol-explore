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
> `runs/ascension-05-sauceror.md` (WON).

**Character:** ClaudeCode — **Ascension #6 (the SIXTH run)**, a **Disco Bandit**, Softcore/Normal, **Marmot** sign
(+Moxie), **Unrestricted** path (`path` 0 verified). **Started 2026-10-27** (immediately after winning run #5).

---

## 🎯 THE PLAN FOR THIS RUN — document a fifth class

The goal is **one ascension per class**. Run #6 is the **Disco Bandit** (Moxie). **Classes covered so far:**
Pastamancer ✅✅ · Seal Clubber ✅ · Turtle Tamer ✅ · Sauceror ✅ · **Disco Bandit ▶ in progress** · Accordion Thief.
**Create `mechanics/disco-bandit-class.md`** on the first day (guild challenge, skills with prices, class resource,
early combat plan). The Moxie guild is separate from both previous guilds.

---

## 📊 Character state (end of run #6 Day 18 / 2026-11-15)

- **LEVEL 14 Disco Bandit**, max HP ~178, MP ~190. 💰 Meat 21,055. **14 adventures banked**, full 15 · drunk 24 (cap 19).
- 🎽 broken beer bottle · oil lamp · amulet · Mega Gem · **Blue Diamond of Honesty** (acc, +7 all, +9% item) · War
  Hippy headband · oil slacks. magilaser blastercannon in the bag (ranged).
- 🏰 **Tower: contests ✅ (sash) · coronation ✅ · hedge maze ✅ · door 5/6 — only Sneaky Pete's lock left.**
- 🧰 **Tower kit in hand:** beehive (Wall of Skin) · electric boning knife (Wall of Bones) · 2 scented massage oil +
  3 filthy poultice + 16 gauze garters (Shadow). Wand of Nagamar: **craft it** — have ruby W ×1 · lowercase N ×1 · heavy D ×4; **buy 1 metallic A** (tradeable), 3 meat pastes.
- 🔐 Login: `request_login` (retry once on `page_changed`) → `tools/kol-cdp.mjs` + `tools/engine/*`.
- Skills: trainer bought through **L13 + Sensitive Fingers**; **Smooth Movement (L14) not yet bought.**

### 🔓 CAPS & SKILLS THIS RUN

**Fullness 15 · Booze cap 19 (Liver of Steel, earned Day 12; was 14) · Spleen 15.**
**Permed, carried in (verified `(P)`):** Lunging Thrust-Smack · Double-Fisted Skull Smashing · The Long View (+3
adv/day) · Pastamastery · Cannelloni Cocoon · **Expert Panhandling (+10% meat, NEW)**. Class start: Disco Aerobics,
Suckerpunch (shows `(P)`). **Bought:** Disco Eye-Poke · Deft Hands (L1) · Disco Dance of Doom · Overdeveloped Sense
of Self Preservation (L2) · Disco Nap · Disco State of Mind (L3) · Electric Boogaloo · Frantic Gyrations (L4) · That's Not a Knife · Advanced Cocktailcrafting (L5) · Nimble
Fingers · Disco Face Stab (L6) · Tricky Knifework · Flashy Dancer (L7) · Mad Looting Skillz · Disco Smirk (L8) ·
Disco Greed · Knife in the Dark (L9) · Disco Shank · Disco Bravado (L10) · Disco Dance 3 · Adventurer of Leisure (L11) ·
Ambidextrous Funkslinging · Disco Inferno (L12) — trainer page shows only L13+ left (✅ checked Day 15).

## 🔜 Next-session priorities — run #6, Day 19 — 🏁 THE NAUGHTY SORCERESS

1. Login + engine. EAT (milk + 3 herbal stuffing + fillers). Buy Meade ×4, Monstar ×8. **Stay sober until the NS.**
2. **Daily Dungeon** → token → **Sneaky Pete's key** (row 95) → `ns_lock3` → `ns_doorknob`.
3. Walls: beehive · Wall of Meat ×5–6 (full HP/MP between) · boning knife · **gaze** the mirror · Shadow (oils/poultice,
   no skills). **Before the NS: buy metallic A → paste W+A, N+D, WA+ND → Wand of Nagamar in inventory** (no planned
   loss). Read § Step 5: she strips every buff at the start. Win → free the King (`ns_11_prism`) → `mechanics/ascension.md`.

## 🗓️ Session log (this run)

- **Run #6 Day 18 (2026-11-15): 🪩 Contests won, maze run, 5 of 6 locks — ~150 wins, 3 losses.**
  🍽️ milk + 3 herbal stuffing (57) + 3 Knob nuts = 15. 🍺 3 Meade + rum + Imp Ale = 19, Meade 24.
  DD → Jarlsberg's. Desk: Smartest #2 (Myst potions), Sleaziest #11, Fastest #11. Lost to the Dervish (no HP potions)
  and twice to a Porkpocket (grease → thrown knife); sold pixels/gel +22,851. Sash → coronation → maze 9 turns →
  locks 1/2/4/5/6. Beehive 4 turns; castle ~85 turns → knife + ~17k meat. Sensitive Fingers 12,500.

- **Run #6 Day 17 (2026-11-14): 🪩 War WON, Level 14, four tower keys — ~115 wins, 1 loss.**
  🍽️ milk + 3 herbal stuffing (59) + ant + 2 Knob nuts = 15. 🍺 3 Meade + rum + Imp Ale = 19, Meade 24.
  Login blocked until the app was restarted (pass-connector rewrite). Loot +6,999. Front #25 → #32 (lost once to the
  War Frat Streaker). Easily Embarrassed cured by antidote → The Man in 14 rounds (Connery's, bombs) → +5,000 stack.
  Daily Dungeon 7 turns → Boris's. Hole in the Sky 13 → star key. 8-Bit 66 fights → digital key.

- **Run #6 Day 16 (2026-11-13): 🪩 Farm done, front #12 → #25, L13 skills — ~170 wins, 2 losses.**
  🍽️ milk + 3 herbal stuffing (60) + tot + 2 honey ants = 15. 🍺 3 Meade + rum + Imp Ale = 19, Meade 24.
  Loot +9,186 → L13 skills 20,000. Farm 36 turns (Barn 8, zones 10/9/9). Two Naughty Sorority Nurse losses
  (30-round limit; she heals) → beat with two bombs a round. 22 Monstars + 7,800 Meat of MP.

- **Run #6 Day 15 (2026-11-12): 🪩 Desert 100%, Ed dead, war started, Level 13 — ~160 wins, 1 loss.**
  🍽️ milk + 3 herbal stuffing (58) + 3 later tots = 15. 🍺 3 Meade + rum + Willer = 19, Meade 24.
  Login landed in pass-connector's Chrome → drove it over DevTools. Gnasir: jar + 15 pages → hooks + drum machine
  (2,800) → 100%. Pyramid 16 turns; 6 ratchets lost to an unread label (12 bought/dropped, 3 wheels, exactly enough).
  Ed 7 forms, 0 damage. Shore ×2 → dinghy. War on turn 1; battlefield 111 W / 1 L (attack-only test), #0 → #12;
  Sonofa 25 turns → Lighthouse.

- **Run #6 Day 14 (2026-11-11): 🪩 Level 12, Lord Spookyraven + Copperheads + Dr. Awkward → Staff of Ed — ~150 wins, 0 losses.**
  🍽️ milk + 3 herbal stuffing (61) + 3 later tots = 15. 🍺 3 Meade + rum + Willer = 19, Meade 24.
  Wine bomb (4 boilers) → Lord Spookyraven. Loot sold +48k. Shen (Eye/Stone/Flag) ~30 turns, protesters 43, Ron 13,
  Palindome 34 → Awkward. Desert 0 → 62%.

- **Run #6 Day 13 (2026-11-10): 🪩 diary read, Hidden City done in a day, cellar opened — ~180 wins, 0 losses.**
  🍽️ milk + 3 herbal stuffing (59) + 3 later tots = 15. 🍺 3 Meade + rum + Willer = 19, Meade 24.
  Black Forest 39 W → market → forged ID → diary. Temple 4 turns, shrines 4, Hospital 13, Bowling 5, Apartment 16,
  Office 30, Spectre 1 fire. Ballroom 921 → cellar; soda (30), vinegar (8), fulminate cooked, boilers 13.

- **Run #6 Day 12 (2026-11-09): 🪩 Castle done, Liver of Steel, Level 11 — ~150 wins, 3 losses.**
  🍽️ milk + 3 herbal stuffing (58) + 2 honey ant + later tots = 15 (68 adv). 🍺 steel margarita 5 → 2 Meade + rum +
  Willer = 19, Meade overdrink 24. Castle 25 turns with the Muscle set. Laugh Floor + Backstage → Azazel.
  Top Floor grind lost twice once potions lapsed → Airship 114 W / 1 L to Level 11. L11 skills 12,500.

- **Run #6 Day 11 (2026-11-06): 🪩 Twin Peak burnt, Level 10, out of Ronin, S.O.C.K. — 82 wins, 3 losses.**
  🍽️ sweet roll, marrow, pestopiary, baguette, aspic, honey ant, Knob nuts = 15. 🍺 4 bottles + 2 Willer = 14,
  sherry 16. Twin Peak 50-turn fallback → Cabin Fever → all fires lit. Bean in 6 Beanbat fights → planted;
  Airship 30 turns → S.O.C.K. Basement 1–2, backed off. Storage pulled, +88,077 sold. L10 skills 10,000.

- **Run #6 Day 10 (2026-11-05): 🪩 Oil Peak and A-boo Peak lit — 61 wins, 3 losses.**
  🍽️ sweet roll, marrow, pestopiary, baguette, aspic, honey ant, tuna = 15. 🍺 4 bottles + 2 Willer = 14, sherry 16.
  Oil Peak 28 more → lit; crude → lamp, jar, slacks. A-boo 44 turns with clues → lit. Twin Peak: jar step done,
  then lost 3 to the Bubblemint Twins — stopped.

- **Run #6 Day 9 (2026-11-04): 🪩 Groar dead, Orc Chasm bridged, Oil Peak started — 115 wins, 0 losses.**
  🍽️ sweet roll, marrow, pestopiary, tuna, honey ant, baguette, Knob nuts = 15. 🍺 4 bottles + 2 Imp Ale = 14,
  sherry 16 (then 5 turns wasted adventuring overdrunk — mistake). Groar 6 rounds on Ferrigno's + Ben-Gal.
  5 dense meat stacks +6,000. Bridge 72 fights; Oil Peak 21.

- **Run #6 Day 8 (2026-11-03): 🪩 Bonerdagon dead, Level 9 — ~70 wins, 3 losses.**
  🍽️ sheet cake 15 (25 adv — poor). 🍺 4 bottles + 2 Imp Ale = 14, sherry 16.
  Bonerdagon 4 rounds on Ferrigno's + Ben-Gal. Slope 3 Extremity NCs in 15 turns → peak: 2 yetis, Groar lost (no HP
  potions). Slope 54 W / 1 L to Level 9; L8–9 skills bought out.

- **Run #6 Day 7 (2026-11-02): 🪩 Level 8, Cyrpt rooms cleared, Trapper's ore + cheese — ~80 wins, 0 losses.**
  🍽️ Full 15 (sweet roll Alabama, marrow, pestopiary, small fills). 🍺 4 bottles + 2 Imp Ale = 14, sherry 16.
  Ferrigno's → Alcove + Cranny bosses one fight each; Niche boss without the phylactery; Nook 31 fights → 999.
  Goatlet 3 cheese in 5; mine 15 digs for 3 linoleum (cave-in to 0 HP, Galaktik elixirs). Goatlet +17 wins.

- **Run #6 Day 6 (2026-11-01): 🪩 Lady's dance, Friars done, Cyrpt half-cleared — 81 wins, 0 losses.**
  🍽️ Full 15 (6293 + 8412 + 545 + mutton/onigiri/salad/crudités). 🍺 4 bottles + 2 Imp Ale = 14, sherry 16.
  Ballroom dance (1 turn). Groves 17/21/17 turns, 43 W. Evilometer 200 → 124: Cranny → 14, Alcove → 10.

- **Run #6 Day 5 (2026-10-31): 🪩 Level 7, all of Lady Spookyraven's finery delivered — 2 losses.**
  🍽️ Full stomach from pulls. 🍺 rum, whiskey, gin, tequila, Imp Ale = 13 → cooking sherry 15.
  Telegram → Kitchen key → billiards (pool cue) → Library necklace → Bathroom puff (cosmetics wraith) → Bedroom gown
  (+ spectacles) → Gallery shoes (maidens' Dreams and Lights, maze 904→910→911→905). Two 30-round losses from a
  Suckerpunch fallback loop, fixed. L7 skills 5,000.

- **Run #6 Day 4 (2026-10-30): 🪩 Knob Goblin King dead — ~70 wins, 1 loss.**
  🍽️ **Food +31** (stolen sushi 13, crumbs, marrow). 🍺 4 bottles + sherry = 14, Imp Ale 15.
  King lost at 57 HP on plain attacks → That's Not a Knife (broken beer bottle) + Harem 40 wins → King won with the dance
  combo (Dance of Doom → Dance II → Face Stab) on the second Ferrigno's. Dense meat stacks sold +2,000.

- **Run #6 Day 3 (2026-10-29): 🪩 Level 4 → 6, Boss Bat dead, Knob opened — ~95 wins, 0 losses.**
  🍽️ **Food +35** (vampire chowder 10, sweet roll 9, crumbs 7, marrow 7). 🍺 4 bottles + sherry = 14, Imp Ale 15.
  Guano Junction 13 fights → lair → Boss Bat. Knob map used (key from Day 1). Outskirts to base Moxie 25 → Harem 47 wins.
  2 Ferrigno's bought into storage for tomorrow.

- **Run #6 Day 2 (2026-10-28): 🪩 Larva + Tavern done, Hidden Temple unlocked — 59 wins, 0 losses.**
  🍽️ Food +21. 🍺 4 bottles + cooking sherry = **14 exactly**, Imp Ale 15. Toot Oriole gems +1,000. Spooky Forest larva
  on the first marsh visit, Tavern 13 fights, temple items (coin rule misfired on a wrong item id).

- **Run #6 Day 1 (2026-10-27): 🪩 Disco Bandit born, guild joined, Level 1 → 4 — 70 wins, 0 losses.**
  🏦 17 level-legal pulls + 3,000 meat. 🍽️ Food +19 (sweet roll refused at L1). Guild: **steal your own pants**
  (Sleazy Back Alley 542 *Yoink!*, 4th turn). Outskirts with disco ball + Suckerpunch → Level 4. 🍺 3 bottles + boxed
  wine + Imp Ale = 13, swill overdrink 16. New doc `mechanics/disco-bandit-class.md`.

- **2026-10-27 — Ascended into run #6.** Run #5 (Sauceror) won on Day 19. Karma 4 → 115; permed **Expert
  Panhandling** (100) + **astral shorts** (10), 5 banked. Reborn **Normal · Disco Bandit · Marmot · Unrestricted**.
