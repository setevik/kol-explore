# Kingdom of Loathing - Game Structure & Technical Details

## UI Architecture

KoL uses a **frameset-based HTML layout** (classic early 2000s web design):
- `game.php` - main frameset container
- `charpane.php` - left sidebar, character stats (auto-refreshes)
- `topmenu.php` - top navigation bar with icon links
- `mainpane` - center content frame, where all game content loads
- `chatpane` / `chatlaunch.php` - right sidebar, chat system

Navigation happens within frames. Links use `target` attributes to load content in the correct frame. Image maps are used for area navigation (clickable regions on hand-drawn maps).

## URL Patterns

- `adventure.php?snarfblat=<id>` - adventure in a zone (each zone has a numeric "snarfblat" ID)
- `inventory.php?which=<n>` - inventory tabs (1=consumables, 2=equipment, 3=misc)
- `council.php` - Council of Loathing quests
- `guild.php` - class guild
- `craft.php?mode=<type>` - crafting (cocktail, cook, combine)
- `campground.php?action=rest` - rest at campsite
- `tutorial.php?action=toot` - Toot Oriole tutorial
- `skills.php` - non-combat skills page
- `town.php` / `town_right.php` / `town_wrong.php` - Seaside Town areas
- `manor.php` - Spookyraven Manor
- `mountains.php` - Big Mountains area

### Known Snarfblat IDs
- 240 - Noob Cave (Mt. Noob)
- 92 - The Dire Warren (Mt. Noob)
- 113 - The Haunted Pantry (Spookyraven Manor)
- 15 - The Spooky Forest (Distant Woods)
- 30 - The Bat Hole Entrance (Nearby Plains)
- 31 - Guano Junction (Bat Hole, requires stench protection)
- 114 - The Bat Hole (map)
- 233 - A Barroom Brawl (Typical Tavern)

### Non-Snarfblat Adventure Pages
- `cellar.php` - The Tavern Cellar (5x5 grid maze, click-to-explore)
- `tavern.php?place=barkeep` - Bart Ender (tavern quest NPC)
- `tavern.php?place=susguy` - Suspicious Guy
- `tavern.php?place=pooltable` - Pool table
- `manor.php` - Spookyraven Manor First Floor
- `place.php?whichplace=bathole` - Bat Hole map

### More Known Snarfblat IDs
- 32 - Batrat and Ratbat Burrow (Bat Hole, unlocked by 1 sonar)
- 388 - The Haunted Kitchen (Spookyraven Manor 1F)
- 389 - The Haunted Conservatory (Spookyraven Manor 1F)
- 233 - A Barroom Brawl / Typical Tavern

## Tavern Cellar Mechanics

- Unlocked by talking to Bart Ender (`tavern.php?place=barkeep`) after Council quest
- 5x5 grid of "darkness" squares
- Click any darkness square to trigger combat or discover locations
- Special squares revealed: **A Rat Faucet**, **A Tiny Mansion**, **Stairs Up**
- Finding the Rat Faucet completes the quest
- Return to Bart Ender for reward (3 flagons of Typical Tavern swill)

## Bat Hole Progression

3 blocked passageways, unlock one per sonar-in-a-biscuit:
1. Batrat and Ratbat Burrow (snarfblat 32)
2. Beanbat Chamber
3. Boss Bat's Lair

Sonar sources:
- Drops randomly from Guano Junction enemies
- Defeating a **screambat** auto-breaks a wall (no sonar needed)
- Using a ten-leaf clover in Guano Junction yields 2 sonars

## Spookyraven Manor Quest Chain

Triggered at Level 5 (telegram from Lady Spookyraven delivered by mail after rollover):
1. **Haunted Conservatory** (389) - special "Lights Out" event w/ grave choices
2. **Haunted Kitchen** (388) - search for billiards room key (skullery maids, zombie chefs)
3. **Haunted Billiards Room** (locked until kitchen key found)
4. More floors above...

Quest items from telegram: necklace in library desk (gift from husband), billiards room key

## Drunkenness Restrictions

When falling-down drunk (at or over drunkenness limit):
- **Most zones** send you to "Drunken Stupor" adventures (silly consequences, no real rewards)
- Stupor adventures can DECREASE stats ("You lose 3 Strongness")
- The Tavern Cellar explicitly blocks with "You're too drunk for darkness right now."
- Some zones DO work while drunk (shore, hobopolis, etc - not yet verified)
- Strategy: save adventures for Day 3 when drunkenness resets to 0/14

## Class Skill Page Notes

- `skills.php` - Cast non-combat skills (buffs, meditations)
- Combat skills only appear in `fight.php` during combat
- Both active skills and combat skills must be learned/purchased from guild trainer
- Guild trainer URL pattern: `guild.php?place=trainer`
- Guild skill costs: 125, 250, 500, 750, 1250, 1750, 2500, 3250, 4000 (by level)

## Buy Button Form Structure

KoL shop buy buttons are type="button" (NOT submit) and live inside a single form with hidden inputs:
- `<input type="hidden" name="pwd" value="...">`
- `<input type="hidden" name="whichshop" value="generalstore">`
- `<input type="hidden" name="action" value="buyitem">`
- `<input type="button" value="Buy">` (multiple, one per item)

Finding the right button: use index-based access on all Buy buttons (they match item order) since row-text matching can accidentally pick the first row if the shop is a single table.

### Additional URL Patterns
- `place.php?whichplace=town_market` - Market Square
- `shop.php?whichshop=generalstore` - General Store
- `shop.php?whichshop=meatsmith` - Meatsmith
- `shop.php?whichshop=doc` - Doc's
- `shop.php?whichshop=armory` - Armory
- `familiar.php` - Familiar management
- `woods.php` - Distant Woods area map
- `manor.php` - Spookyraven Manor map

## Familiar System

- Familiars are pet companions that adventure with you
- Require a **Familiar-Gro Terrarium** at campsite (500 Meat from General Store)
- Hatch from larva/egg items via [put in terrarium] in inventory
- Familiars have: weight (pounds), experience, kill count
- Start at 1 pound, 0 exp, 0 kills
- Active familiar shown in character pane
- Managed at `familiar.php` - can take/return from terrarium
- First familiar obtained via Council quest: mosquito larva from Spooky Forest

## Non-Combat Adventures (Choice Adventures)

Some zones have non-combat events with branching choices:
- **Arboreal Respite** (Spooky Forest): Follow old road / Explore stream / Brave dark thicket
  - Stream -> Consciousness of a Stream: March to marsh / Squeeze into cave / Go further upstream
    - Marsh: yields mosquito larva
- **A Sandwich Appears!** (Haunted Pantry): poltersandwich exorcism (guild quest)
- Choice adventures don't always appear - random occurrence between combat encounters

## Beaten Up Effect

- Triggered when HP reaches 0 in combat (losing a fight)
- Duration: 3 adventures
- Reduces all stats significantly
- Prevents adventuring ("too beaten up")
- Removed by resting at campsite (free action)

## Spooky Forest Non-Combat Frequency

The Spooky Forest has a very high non-combat rate. The main non-combat is "Arboreal Respite" with branching paths:
- Follow the old road -> The Road Less Traveled -> Follow the ruts (leads to old wagon)
- Explore the stream -> Consciousness of a Stream -> March to marsh (mosquito larva) / Squeeze into cave / Go upstream
- Brave the dark thicket -> (unknown)

Non-combats cost an adventure but don't give stat gains or Meat directly. They can yield unique items and quest objectives.

## Familiar Growth

- Familiars gain weight (pounds) from combat experience
- Marcellus grew from 1 to 8 pounds across ~60 combat adventures
- Weight gain rate: approximately 1 pound per 8-10 combats
- Heavier familiars are more effective (Mosquito drains more HP at higher weight)

## Spleen Item: Ancient Pills

- Found from spooky mummies in the Spooky Forest
- Gives massive substat gains across ALL three stats (10 Muscle, 24 Mysticality, 10 Moxie substats observed)
- Also restores large amount of MP (39 MP observed)
- One of the most efficient stat items found so far
- Uses spleen capacity (separate from food/drink)

## Game Calendar

- KoL uses its own calendar system. Observed date: **"Starch 5"**
- "Starch" appears to be a month name (pasta-themed, fitting for the Kingdom)
- The date is displayed in the right-side announcements pane

## Moon System

Two main moons visible in the top menu:
- **Ronald** - observed as "Full" (smoon5.gif)
- **Grimace** - observed as "Half Waxing" (smoon3.gif)
- Also a **small dark moon** (sminimoon2.gif)
- Moon phases likely affect gameplay (common in KoL lore)

## Combat System

### Flow
1. Enter zone via `adventure.php?snarfblat=<id>`
2. Combat or non-combat event is randomly chosen
3. **Initiative check**: either "You get the jump on it" or "It gets the jump on you"
4. Player chooses action: Attack (melee), Use Skill (from dropdown), or Run Away
5. Combat resolves, loot/stats awarded

### Damage
- Melee: weapon damage range (e.g., pasta spoon: 1-2)
- Spells: based on Mysticality (Spaghetti Spear dealt 2-6 damage at Mys 4-6)
- CRITICAL HITs can occur for both player and enemies
- Combat messages are randomized and pun-heavy

### Loot
- Meat (currency) dropped by most enemies
- Items have individual drop rates
- Stat gains (substats) awarded per fight

## Stat System

### Three Main Stats
- **Muscle** - physical power, affects melee damage and HP
- **Mysticality** - magical power, affects spell damage and MP (primary for Pastamancer)
- **Moxie** - agility/charm, affects ranged damage and initiative

### Substats (observed names)
Muscle substats: Beefiness, Muscleboundness
Mysticality substats: Enchantedness, Wizardliness, Magicalness, Mysteriousness
Moxie substats: Smarm, Chutzpah, Sarcasm

Substats accumulate and convert to main stat points at thresholds.

### Leveling
- Level is determined by total main stat points
- Level 1 -> Level 2 happened around Mysticality 5

## Resource System

### Adventures
- Spending resource for all zone activities (1 per adventure typically)
- Start with 40 per rollover (daily reset)
- Food gives additional adventures
- Booze gives additional adventures
- Observed: started with 80 adventures (likely from initial rollover + food/drink)

### Fullness / Drunkenness
- **Temulency** (drunkenness): 3/14 after one screwdriver
- Drinking booze gives adventures but increases temulency
- Maximum temulency appears to be 14 (going over likely causes passing out)
- Food has a parallel system (fullness) with its own cap

### Meat (Currency)
- Dropped by enemies, found in items
- Used for crafting (meat paste costs 10), buying skills, equipment
- Nest egg item likely contains Meat when used

## Crafting System

### Types
- **Cook** - combine food ingredients (requires E-Z Cook oven at campsite)
- **Cocktail** - mix drinks (requires My First Shaker at campsite)
- **Combine** - general item combining
- **Smith** - metalworking

### Recipes
- popsicle stick + fruit = fruit popsicle (e.g., strawberry popsicle)
- vodka + orange = screwdriver
- Recipes are "discovered" on first craft

## Campsite

- Player housing area with installable items
- **Dwelling**: Newbiesport tent (starter)
- **Kitchen**: E-Z Cook oven + My First Shaker
- **Rest action**: restores HP and MP, costs 0 adventures
- HP/MP restoration affected by moon phases ("The bright face of Ronald smiles upon you")
- Decorative items: Certificate of Participation

## Quest Structure

### Tutorial (Mt. Noob)
1. Visit Toot Oriole -> get starter equipment
2. Learn about Inventory -> equip items
3. Learn about Adventuring -> Noob Cave (smash 3 crates)
4. Learn about Skills -> use Manicotti Meditation, then Spaghetti Spear on 3 enemies in Dire Warren
5. Learn about Campsite -> install tent, rest
6. Learn about Food -> install oven, cook popsicle, eat it
7. Learn about Cocktails -> install shaker, mix drink, drink it
8. Unlocks Seaside Town

### Council of Loathing (main quest line)
- Level 2: explore three starter areas (Haunted Pantry, Outskirts of Cobb's Knob, Sleazy Back Alley)
- Guild initiation quest runs in parallel

### Class Guild (League of Chef-Magi)
- Initiation: exorcise poltersandwich in Haunted Pantry (non-combat encounter after several fights)
- Unlocks: skill trainer (Brie), shop (Gouda), Meatcar (Blaine), staff crafter (Rodoric)
