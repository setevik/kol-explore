# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, caps/limits, which skills are
> learned or permed, quest progress, next-session priorities, session log). Reusable know-how lives elsewhere
> and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt (read its **Doc-hygiene rule**).
> On ascension, archive this file to `runs/ascension-NN-<class>.md` and start a fresh one.
> Prior runs: `runs/ascension-01-pastamancer.md` (WON) · `runs/ascension-02-pastamancer.md` (WON) ·
> `runs/ascension-03-seal-clubber.md` (WON) · `runs/ascension-04-turtle-tamer.md` (WON).

**Character:** ClaudeCode — **Ascension #5 (the FIFTH run)**, a **Sauceror**, Softcore/Normal,
**Opossum** sign (+Mysticality), **Unrestricted** path (`path` 0 verified). **Started 2026-10-09** (immediately
after winning run #4).

---

## 🎯 THE PLAN FOR THIS RUN — document a fourth class

The goal is **one ascension per class**, documenting each class's specifics, until all six are covered.
Run #5 is the **Sauceror** (Mysticality / spellcaster).

**Classes covered so far:** Pastamancer ✅✅ · Seal Clubber ✅ · Turtle Tamer ✅ · **Sauceror ▶ in progress** ·
Disco Bandit · Accordion Thief.

⚠️ **The Sauceror is the Pastamancer's sibling** (same guild store `guildstore2`, same stat), so
`mechanics/pastamancer-class.md` is the closest analogue — but its skills, resource (**soulsauce**) and class
quest flavour differ. **Create `mechanics/sauceror-class.md`** on the first day and record: the guild
challenge, the skill tree with measured prices, the class resource, starting gear, and the early damage plan.

---

## 📊 Character state (end of run #5 Day 6 / 2026-10-14)

- **LEVEL 8 Sauceror**, base Mys 53, max HP ~44, MP ~105. 💰 Meat 2,361 (L8 skills 3,250 ×2). **3 adventures
  banked**, full 15/15 · drunk 17. Ronin ~340 left.
- 🎽 astral chapeau · saucepan · old sweatpants · batskin belt · Pine-Fresh air freshener.
- 🎒 **6 ghuol guolash** (Cranny drop — tomorrow's food), plus-sized phylactery, Imp Ales, boxed wine ×4, vodka.
- 🗺️ **Cyrpt: Alcove 0 · Cranny 0 · Niche 12 (boss next — use the plus-sized phylactery) · Nook 50.**
  **Spookyraven: finery delivered, danced ✅** (cellar waits for the Level 11 diary). Hidden Temple open.

### 🔓 CAPS & SKILLS THIS RUN

**Fullness 15 · Booze cap 14 · Spleen 15** (re-read the booze cap from `charsheet.php`).

**Permed, carried in (verified `(P)` on the new charsheet):**
- ⭐ **The Long View** (passive) — **+3 adventures per day** from the first proper rollover. **NEW this run.**
- **Lunging Thrust-Smack** (8 MP) and **Double-Fisted Skull Smashing** (passive) — melee perms; a caster may
  still use Thrust-Smack while MP is cheap and spells are weak.
- **Pastamastery** (10 MP, 1/day) — Summon Dry Noodles.
- **Cannelloni Cocoon** (20 MP heal).
- Class start: **Sauce Contemplation**, **Salsaball** (Salsaball shows `(P)` on the charsheet).

**Bought from the guild:** Simmer · Curse of Vichyssoise (L1) · **Stream of Sauce** · **Saucy Salve** (L2) ·
Expert Panhandling · Icy Glare (L3) · Inner Sauce · Elemental Saucesphere (L4) · **Saucestorm** · Advanced Saucecrafting (L5) · Curse of Marinara · Soul Saucery (L6) · Wave of Sauce · Jalapeño Saucesphere (L7) · Curse of the Thousand Islands · Itchy Curse Finger (L8).

## 🔜 Next-session priorities — run #5, Day 7

> **Meat is low (2,361). Food is covered: 6 ghuol guolash in inventory (3 × 5 = 15 full).**
1. Eat 3 guolash (+milk pull). Pull Meade + stuffing for later, booze to 14 (Meade 5 + Meade… one per day).
2. **Cyrpt:** Niche boss (gargantulihc — use the **plus-sized phylactery** in the fight), then the **Nook**
   (evil eyes: `inv_use` for −3), then the **Bonerdagon** (Brother Smothers's blessing just before; Saucestorm).
3. Level 8 → Council (Trapper). Autosell junk / sell a ghuol egg stack if meat stays low.

## 🗓️ Session log (this run)

- **Run #5 Day 6 (2026-10-14): 🥫 Level 7 → 8, Spookyraven finery + dance, Cyrpt 3/4 rooms nearly — ~90 wins, 0 losses.**
  🍽️ **Food +66** (stuffing 28/19, Mornington 9, sweet roll 10). 🍺 Meade 14 + 16, Flamin' 6, 2 Imp Ale = 14; boxed
  wine overdrink 17. Gown (2 turns) · shoes via the Gallery maze (19 turns) · finery → dance. **Cyrpt with Saucestorm
  + Elemental Saucesphere: Alcove and Cranny cleared, Niche 50 → 12, 78 W / 0 L.** 6 ghuol guolash from the Cranny.

- **Run #5 Day 5 (2026-10-13): 🥫 Level 6 → 7, Spookyraven opened through the powder puff — ~80 wins, 0 losses.**
  🍽️ Food +45 (Mornington 19 with milk, sushi 12, sweet roll 10). 🍺 3 cocktails + Imp Ale = **exactly 10 for pool**,
  then daiquiri + Imp Ale = 14, brandy overdrink 16.
  Harem to Level 7 (L7 skills 2,500 each; junk autosold ~2,000). Cyrpt deferred. Kitchen key in 12 fights →
  pool: skill 3 + 3 practices → 16 → **won first hustle** → library: necklace in 8 → Lady → Bathroom puff (23 turns)
  → Bedroom: **spectacles** on turn ~4.

- **Run #5 Day 4 (2026-10-12): 🥫 Level 5 → 6, Knob Goblin King + Friars done — ~90 wins, 2 losses.**
  🍽️ Food +55 (guolash 29 with milk, chowder 11, Mornington 9, salacious crumbs 6). 🍺 3 cocktails + swill +
  cooking sherry = **14 exactly**, Imp Ale overdrink.
  👑 Ferrigno's + Ben-Gal + 2 strongness elixirs → max HP 23 → 57 → **King in 2 rounds** (harem disguise +
  perfume). 🔥 Friars with Elemental Saucesphere: dodecagram ~10 turns, candles ~36, butterknife ~32 → ritual.
  Then 36 Harem wins.

- **Run #5 Day 3 (2026-10-11): 🥫 Level 4 → 5, Boss Bat dead, Hidden Temple open — ~105 wins, 1 loss.**
  🍽️ Food +46 (**ghuol guolash 23**, vampire chowder 11, Mornington roll 9). 🍺 4 cocktails = 12 (Imitation White
  Russian is food) → white lightning overdrink 15.
  🦇 Entryway: 25 fights, no walls. Guano Junction: 2 sonars + 2 screambats in 18 → Lair → Boss Bat, 0 losses.
  Level 5 → Saucestorm. Knob opened (map + key); harem disguise pulled; perfume in 6 Harem fights; **King one-shot
  me at 21 HP.** Spooky Forest: coin → map → sapling → **Hidden Temple unlocked.**

- **Run #5 Day 2 (2026-10-10): 🥫 Level 3 → 4, larva + Tavern rats done — ~60 wins, 0 losses.**
  🏦 20 level-legal pulls. 🍽️ Food +28 (Spam Witch sammich 8, sweet roll Alabama 11, small fillers).
  🍺 4 liquor bottles (3 each) + Imp Ale = 13, then a **Tavern swill turned out to be 3 drunk** → 16 (doc fixed).
  Outskirts → Level 4 (L4 skills 750 each). Spooky Forest with Sauce Contemplation: larva in 5 turns, then 16
  more wins. Tavern cellar 15 wins, faucet off, quest done (Baron skipped).

- **Run #5 Day 1 (2026-10-09): 🥫 Sauceror born, guild joined, Level 1 → 3 — ~55 wins, 1 loss.**
  🏦 Pulled 9 consumables + 11,000 meat — **six of the nine are level-gated** (L6–L9), so food was 15 fortune
  cookies (+25 with milk) and booze only Imp Ale + boxed wine (drunk 4). 🥪 Poltersandwich in 6 Pantry turns →
  member. 🌲 Spooky Forest one-shot me at Level 2 (max HP 4) → rest → Outskirts with Stream of Sauce:
  Level 3, 48 wins / 0 losses. Pork elf gems sold +1,500. New doc `mechanics/sauceror-class.md`.

- **2026-10-09 — Ascended into run #5.** Run #4 (Turtle Tamer) won on Day 17. Karma 3 → 114; permed **The Long
  View** (100) + **astral chapeau** (10), 4 banked. Reborn **Normal · Sauceror · Opossum · Unrestricted**.
