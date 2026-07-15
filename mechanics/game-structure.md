# Kingdom of Loathing — Game Structure & Early-Game Reference

> Scope: UI/frame architecture, zone/URL reference, and early-game quest structure. Deeper
> mechanics live in dedicated files — **stats/organs/leveling/moon → `stats-and-leveling.md`**,
> **combat/initiative/familiars/Beaten-Up → `combat-and-initiative.md`**, **fetch engine, buying,
> and the full snarfblat table → `HANDOFF.md`**. This file avoids re-deriving those.

## UI Architecture

KoL uses a **frameset-based HTML layout**:
- `game.php` — main frameset container
- `charpane.php` — left sidebar, character stats (auto-refreshes)
- `topmenu.php` — top navigation bar
- `mainpane` — center content frame, where all game content loads
- `chatpane` / `chatlaunch.php` — right sidebar, chat

Navigation happens within frames (links use `target` attributes; hand-drawn maps use clickable
image maps). Automating this is covered in `browser-automation.md` + `HANDOFF.md`.

## URL / zone reference

- `adventure.php?snarfblat=<id>` — adventure a zone (numeric "snarfblat" ID)
- `inventory.php?which=<n>` — inventory tabs (1=consumables, 2=equipment, 3=misc)
- `council.php` · `guild.php?place=trainer` (skill trainer) · `craft.php?mode=<cook|cocktail|combine|smith>`
- `campground.php?action=rest` · `familiar.php` · `skills.php` (non-combat skills)
- `place.php?whichplace=<...>` and area maps: `woods.php`, `mountains.php`, `manor.php`, `town.php`
- Shops: `shop.php?whichshop=<generalstore|meatsmith|doc|armory|...>`

### Early-game snarfblat IDs
- 240 Noob Cave · 92 The Dire Warren · 15 The Spooky Forest · 113 The Haunted Pantry
- 30 The Bat Hole Entrance · 31 Guano Junction (needs stench protection) · 32 Batrat and Ratbat Burrow
- 233 A Barroom Brawl (Typical Tavern) · 388 The Haunted Kitchen · 389 The Haunted Conservatory

(The endgame/farming snarfblat table is in `HANDOFF.md`.)

### Non-snarfblat adventure pages
- `cellar.php` — The Tavern Cellar (5×5 grid, click-to-explore)
- `tavern.php?place=barkeep` (Bart Ender / quest NPC) · `place=susguy` · `place=pooltable`
- `place.php?whichplace=bathole` — Bat Hole map

## Tavern Cellar Mechanics

- Unlocked by talking to Bart Ender (`tavern.php?place=barkeep`) after the Council quest.
- 5×5 grid of "darkness" squares; click one to trigger combat or reveal a location.
- Special squares: **Rat Faucet**, **Baron von Ratsworth's mansion**, **Stairs Up**. Turning off
  the faucet + reporting to Bart Ender closes the quest. (Precise square-order mechanic, when a run
  is mid-quest, goes in `CURRENT_ASCENSION.md`.)

## Bat Hole Progression

3 blocked passageways, unlock one per **sonar-in-a-biscuit**:
1. Batrat and Ratbat Burrow (snarf 32) → 2. Beanbat Chamber → 3. Boss Bat's Lair

Sonar sources: random drop from Guano Junction enemies; defeating a **screambat** auto-breaks a
wall (no sonar); a ten-leaf clover in Guano Junction yields 2 sonars.

## Spookyraven Manor

Quest chain triggers at Level 5 (telegram from Lady Spookyraven, delivered by mail after
rollover): Haunted Conservatory (389) → Haunted Kitchen (388, billiards room key) → Haunted
Billiards Room → upper floors. The full ghost/cellar chain is in `spookyraven-ghost-chain.md`.

## Drunkenness restrictions (falling-down drunk)

At/over the drunkenness limit, most zones send you to **Drunken Stupor** adventures (no rewards,
can *decrease* stats); the Tavern Cellar blocks with "too drunk for darkness." This is why DRINK
is the **last** daily step — the gained adventures roll over to the next day. (Organ caps and the
EAT→ADVENTURE→DRINK rule: `stats-and-leveling.md` + `HANDOFF.md`.)

## Guild & skills

- Combat skills appear only in `fight.php` during combat; non-combat skills cast from `skills.php`.
- Skills are learned/bought from the guild trainer (`guild.php?place=trainer`).
- **Guild skill costs by level:** 125, 250, 500, 750, 1250, 1750, 2500, 3250, 4000 Meat.
- **League of Chef-Magi initiation:** exorcise the poltersandwich in the Haunted Pantry (a
  non-combat after several fights) → unlocks trainer (Brie), shop (Gouda), Meatcar (Blaine),
  staff crafter (Rodoric).

## Crafting

- Modes: **Cook** (E-Z Cook oven), **Cocktail** (My First Shaker), **Combine** (meat paste, 10
  Meat), **Smith**. Recipes are "discovered" on first craft.
- Examples: `popsicle stick + fruit = fruit popsicle`; `vodka + orange = screwdriver`.

## Campsite

- Dwelling (Newbiesport tent starter) + Kitchen (E-Z Cook oven, My First Shaker).
- **Rest** (`campground.php?action=rest`) restores some HP/MP and clears Beaten Up, 0 adventures.

## Spleen item: ancient pills

From spooky mummies in the Spooky Forest — large substat gains across all three stats plus a big
MP restore. Uses spleen capacity (separate from food/drink). (Spleen/organ caps: `stats-and-leveling.md`.)

## Quest structure (orientation)

- **Tutorial (Mt. Noob):** Toot Oriole → equip → Noob Cave (smash crates) → learn skills (Manicotti
  Meditation, Spaghetti Spear in the Dire Warren) → campsite/tent/rest → cook & eat → mix & drink →
  unlocks Seaside Town.
- **Council of Loathing** is the main quest line; the class **guild initiation** runs in parallel.
  The full leveling questline (Boss Bat → Cobb's Knob → Friars → Cyrpt → … → Naughty Sorceress) is
  covered per-quest in the other `mechanics/*.md` files.
