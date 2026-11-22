# Accordion Thief — class notes (Moxie)

> Idempotent class reference. Current-run state lives in `CURRENT_ASCENSION.md`. Sibling class: Disco Bandit
> (same guild — the Department of Shadowy Arts and Crafts — and the same store, `guildstore1`).

## Start of a run

- **Starting kit (in the equipment tab, NOT worn):** *mariachi hat* (4718), *stolen accordion* (11), *old sweatpants*.
  ✅ A freshly reborn character's charsheet shows an **empty Equipment block** — equip the kit before the first fight.
- **Starting skills:** **Moxie of the Mariachi** (6000, noncombat, 1 MP: *Mariachi Mood* +1 Moxie +3 HP) and
  **Sing** (combat, 0 MP, shows `(P)`). Level 1 = **Moxie 3, max HP 5, MP 1**.
- 🩹 **Early healing:** the Cocoon needs 20 MP and nothing else heals at 1 MP, so **rest at the campground**
  (`campground.php?action=rest`, 1 adventure — at max HP 8 it fills you) until restoratives are affordable.

## Guild

- **Challenge (Shifty): "steal your own pants"** — identical to the Disco Bandit's: the **Sleazy Back Alley (112)**
  noncombat **542 `Yoink!`**. ✅ Arrived after ~6 alley turns. Re-equip your pants afterwards (the gag empties the slot).
  Alley noncombats on the way: **108** *Aww, Craps* → `Walk away` · **21** *Under the Knife* → `No thanks!`.
- **Trainer (Lefty), POST `action=buyskill&skillid=<whichskill − 6000>`.** ✅ Measured prices: Level 1–2 = 125/250,
  L3 = 500, L4 = 750 (the standard ladder).

| Lvl | Skill | whichskill | Type / MP |
|---|---|---|---|
| 1 | The Moxious Madrigal | 6004 | Buff, 2 (+10 Moxie) |
| 1 | Dissonant Riff | 6029 | Combat, 2 — damages + weakens (the early opener) |
| 2 | The Magical Mojomuscular Melody | 6007 | Buff, 3 |
| 2 | Cadenza | 6030 | Combat, once per fight, accordion-specific |
| 3 | Cletus's Canticle of Celerity | 6005 | Buff, 4 (+20% init) |
| 3 | Crab Claw Technique | 6031 | Passive — accordion attacks more accurate |
| 4 | The Power Ballad of the Arrowsmith | 6008 | Buff, 5 (+10 Muscle, +20 HP) |
| 4 | Accordion Bash | 6032 | Combat, 5 — stun |
| 5 | The Polka of Plenty | 6006 | Buff, 7 (+50% meat) |
| 5 | Accordion Appreciation | 6033 | Passive — double accordion enchantments |
| 6 | Jackasses' Symphony of Destruction | 6012 | Buff, 9 |
| 6 | Concerto de los Muertos | 6034 | Combat, 8 |
| 7 | Fat Leon's Phat Loot Lyric | 6010 | Buff, 11 (+item) |
| 7 | Five Finger Discount | 6035 | Passive |
| 8 | Brawnee's Anthem of Absorption 6009 · Suspicious Gaze 6036 | | ✅ POST skillid 9 / 36 |
| later | Psalm of Pointiness 6011 · Stevedave's Shanty 6013 · Ode to Booze 6014 · Sonata of Sneakiness 6015 · Carlweather's Cantata 6016 · Ur-Kel's Aria 6017 · Aloysius' Antiphon 6003 · Bawdy Refrain 6037 · Thief Among the Honorable 6038 · Sticky Fingers 6039 · Cone of Zydeco 6040 · Master Accordion Master Thief 6041 · Knowing Smile 6042 · Mariachi Memory 6043 | | |

## Combat at Levels 1–4

✅ **Dissonant Riff (2 MP) round 1, then stolen-accordion attacks:** Sleazy Back Alley, Outskirts (114), Spooky Forest
and the Tavern cellar — **~45 wins, 0 losses, Level 1 → 4** with campground rests as the only healing. Set the engine's
openers with `window._openers = [['6029',2]]` (see `tools/engine/fight.js`).
- **Outskirts noncombats (114):** **111** *Malice in Chains* → `Serve your sentence` (✅ costs a normal turn; `Plot a
  cunning escape` was silently refused and left the choice open) · **113** → `Abscond with some goodies` · **118**
  *When Rocks Attack* → `"Sorry, gotta run."`.

## Levels 4–5: Boss Bat and leveling

- **The Power Ballad of the Arrowsmith (6008) is the HP fix:** max HP 16 → 46 at Level 5. Cast it right before a
  boss — it is short. A Level 5 Accordion Thief at 17 max HP **lost to the Boss Bat on attacks alone**; with the
  Ballad + Moxious Madrigal, then **Accordion Bash (6032) → two bombs per round** (Ambidextrous Funkslinging), he died
  in 4 rounds. Beefy bodyguard bats fell to Bash/Riff + attacks.
- **Guano Junction (31)** with the Pine-Fresh air freshener: 18 wins / 0 losses, 1 sonar + screambat walls → Lair
  open in ~18 turns. The freshener's Mysticality 10 requirement is checked against **buffed** Mysticality.
- **Haunted Kitchen (388)** at Level 5 with Dissonant Riff + attacks: **69 wins / 0 losses**, ~4.3 raw Moxie per
  turn — base Moxie 21 → 28 in one day, clearing the Knob's base-25 gate. Kitchen noncombat **893** → `Refuse to Take
  the Heat`.
- **Harem (259) is the Level 5–7 zone:** 82 wins / 0 losses with Dissonant Riff + attacks, ~5 raw Moxie per turn
  (base 28 → 37 in one day). Drops the disguise pieces and perfume as you go.
- **Knob Goblin King:** harem disguise + perfume, Power Ballad + Cletus + Madrigal up (max HP 55), then **Accordion
  Bash → two bombs** (`_bombIf=/Knob Goblin King/`) — dead in 2 rounds at Level 6.
- **Friars groves at Level 7:** keep Power Ballad recast between fights (heal override rests until MP ≥ 12, then
  casts 6008) and open with Bash → Riff — all three ritual items, 29 wins / 0 losses. At Level 6 Hellions won twice.
