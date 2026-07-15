# Stats, Leveling & Resource System

## Stat System

### Three Main Stats
- **Muscle** - physical power, HP, melee damage (primary for Seal Clubber, Turtle Tamer)
- **Mysticality** - magical power, MP, spell damage (primary for Pastamancer, Sauceror)
- **Moxie** - agility/charm, ranged damage, initiative (primary for Disco Bandit, Accordion Thief)

### Substats
Each main stat has associated substats that accumulate toward stat point gains.

**Observed substat names:**
- Muscle: Beefiness, Muscleboundness
- Mysticality: Enchantedness, Wizardliness, Magicalness, Mysteriousness
- Moxie: Smarm, Chutzpah, Sarcasm

**Substat -> Stat conversion:** To reach main stat level y, you need y^2 total substats. Each additional stat point requires 2y+1 substats.

**Substat distribution per fight:** 2:1:1 ratio (main stat gets 2 substats per 1 for each secondary stat).

### Leveling Formula
To reach level x, you need **(x-1)^2 + 4** of your primary stat.

Full substat formula for level x: **((x-1)^2 + 4)^2** total substats, or expanded: x^4 - 4x^3 + 14x^2 - 20x + 25.

| Level | Main Stat Required | Total Substats Needed |
|-------|-------------------|----------------------|
| 1     | 4                 | 16                   |
| 2     | 5                 | 25                   |
| 3     | 8                 | 64                   |
| 4     | 13                | 169                  |
| 5     | 20                | 400                  |
| 6     | 29                | 841                  |
| 7     | 40                | 1,600                |
| 8     | 53                | 2,809                |
| 9     | 68                | 4,624                |
| 10    | 85                | 7,225                |

Maximum level: 256 (32-bit integer limitation on substat storage).

## Adventure System

### Daily Rollover
- Players receive **40 adventures** at daily rollover (plus campground/equipment bonuses)
- Additional adventures from food, booze, and other sources
- **Adventures CARRY OVER** between days up to **200 cap**
- If you have <200 adventures at rollover, you gain +40 on top
- If total exceeds 200, excess is lost
- **Strategy**: Save adventures before rollover to maximize day-start count
- Drunkenness and fullness **reset to 0** at rollover (consumption caps refresh)
- Minor HP/MP restoration happens during rollover

### Gaining Adventures
- **Food** (eating) - primary source of bonus adventures
- **Booze** (drinking) - another major source, also gives stat gains
- **Resting** at campsite - restores HP/MP but does NOT grant adventures
- **Effects/items** - various methods to gain bonus adventures

## Organ Limits (Consumption Caps)

### Fullness (Food)
- Default cap: **15 fullness per day**
- Each food item has a fullness value
- Cannot eat beyond the cap

### Drunkenness (Temulency)
- Default adventuring limit: **14 drunkenness**
- You CAN drink past the limit (unlike fullness)
- At or above limit: become "falling-down drunk"
- While falling-down drunk: only encounter "Drunken Stupor" adventures (can't adventure normally)

**CRITICAL CONSUMPTION ORDER**:
1. **EAT food first** (fill fullness, gain adventures)
2. **ADVENTURE** with all available adventures
3. **DRINK booze LAST** (end of day, to bank adventures for tomorrow via rollover)
4. Never exceed 14 drunkenness until ALL adventuring is done!

Alternative safe-drink strategy:
- Drink carefully to exactly 13 drunkenness during the day (leave 1 buffer)
- Adventure normally
- End of day: drink one final big drink to go over 14 (banks those adventures)

**You CAN eat/use spleen while falling-down drunk** -- only adventuring is blocked.

### Spleen
- Default cap: **15 spleen per day**
- Used by spleen items (third consumption category)
- Skills exist to increase all organ caps (e.g., +5 to cap)

## Moon System

### The Two Moons
- **Ronald** - completes one revolution per KoL month (8 days), changes phase daily
- **Grimace** - completes one revolution per 2 KoL months, changes phase every other day
- **Hamburglar** - mini-moon (former chunk of Grimace), orbits through 11 positions, advances 2 positions/day

Names reference McDonald's mascots (Ronald McDonald, Grimace, Hamburglar).

### Moon Cycle
- Full cycle: **16 days** (both moons return to starting position)
- Within each 16-day cycle: 2 Muscle stat days, 2 Mysticality stat days, 2 Moxie stat days
- **Stat days** grant bonus stat gains when moon phase conditions are met
- Moon phases affect resting gains ("The bright face of Ronald smiles upon you")

## Calendar
- **8 days** per KoL month (one Ronald cycle)
- **12 months** per KoL year
- **96 days** per KoL year total
- Month names appear to be food/cooking themed (observed: "Starch")

Sources: [KoL Wiki - Advancement](https://wiki.kingdomofloathing.com/Advancement), [KoL Wiki - Stat Days](https://wiki.kingdomofloathing.com/Stat_Days), [KoL Wiki - Drunkenness](https://wiki.kingdomofloathing.com/Drunkenness), [Moons Over Loathing](https://jrsiebz.x10host.com/Moons_Over_Loathing.html)
