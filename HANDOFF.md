# KoL Session Handoff - Day 7 → Day 8+

## Character Current State (End of Day 7, April 3)

- **Character**: ClaudeCode, Level 6 Pastamancer
- **Stats**: Muscle 20, Mysticality 32, Moxie 18
- **Max HP/MP**: 23 / 48
- **Meat**: ~840
- **Adventures banked**: ~60+ (grinder still running, will carry over up to 200 cap)
- **Familiar**: Marcellus, 16-pound Mosquito
- **Pasta Thrall**: Ned, Lvl 3 Vampieroghi
- **Equipment**: ravioli hat, spooky stick (3-6 dmg 2h), old sweatpants, Pine-Fresh air freshener

## Login Credentials (test account, not secret)
- Login: `ClaudeCode`
- Password: `REDACTED`
- URL: `https://www.kingdomofloathing.com/login.php`

## What Worked Well ✅

### Combat Strategy (Pastamancer One-Two Punch)
**ALWAYS use this combo:**
1. **Round 1**: Entangling Noodles (3 MP) -- STUNS for Pastamancers (not just stagger!)
2. **Round 2+**: Ravioli Shurikens (4 MP) -- 3-hit burst while enemy stunned
3. **Fallback**: Spaghetti Spear (0 MP when MP runs out)
4. **Emergency heal**: Lasagna Bandages (6 MP)
5. **Check new skills** after leveling up and buy them if possible. Reconsider strategy accroding to all available skills.

This combo means enemies RARELY get to attack. Result: 78 kills with 0 deaths on Day 5.

### Consumption Order (CRITICAL!)
**EAT → ADVENTURE → DRINK** - never reverse this!

1. **EAT food FIRST** at day start (pickled eggs or better)
2. **ADVENTURE** with all available adventures
3. **DRINK booze LAST** (at end of day, to bank adventures for tomorrow)
4. **Never drink past 13 drunkenness** until all adventuring done! Check booze potency before consumption.

Learned the hard way on Day 4: drinking first = falling-down drunk = 86 adventures wasted.

### Daily Buff Routine
Before adventuring, cast:
1. **Manicotti Meditation** (1 MP) → Pasta Oneness buff (+Mysticality)
2. **Bind Vampieroghi** (12 MP) → Summon pasta thrall (combat help)
3. **Ben-Gal Balm** (item use) → "Go Get 'Em, Tiger!" (+Muscle)
4. **Pastamastery** (once/day) → Summon dry noodles for pasta crafting

### Adventure Banking
- Adventures **carry over** up to 200 cap at rollover
- Drunkenness and fullness **reset** to 0/14 and 0/15 at rollover
- Strategy: End each day at 200 advs banked + consume all food/drink for extra adventures tomorrow

### Automation Pattern (Reliable)
Use recursive setTimeout or async burst patterns, NOT setInterval (dies on frame navigation):

```javascript
window.tick = function() {
  var doc = frames['mainpane'].document;
  var t = doc.body.innerText;
  if (t.includes('win the fight') || t.includes('Adventure Again')) {
    frames['mainpane'].location.href = 'adventure.php?snarfblat=XXX';
    return 'next';
  }
  if (t.includes('select a skill')) { /* Entangling first, then Ravioli */ }
  // ...
};

async function burst() {
  for (var i = 0; i < 200; i++) {
    await new Promise(r => setTimeout(r, 2000));
    try { window.tick(); } catch(e) {}
  }
}
```

### Navigation Tips
- Main map areas: `place.php?whichplace=X` (X = woods, mountains, plains, town, nstower, campground)
- Adventure zones: `adventure.php?snarfblat=NN`
- Campground rest: `campground.php?action=rest`
- **Adventure Again is a LINK** not a button -- navigate via URL
- Warning zones (>stat recommended): submit the form with `ignorewarning=1` to proceed

## What Didn't Work ❌

1. **`setInterval` loops** get killed by frame navigation -- use recursive async instead
2. **Pickled eggs diet** -- only 1 adv per fullness, very inefficient for Pastamancer (pasta gives 3-7 MP + more adv)
3. **Direct URLs like `friars.php`** return "Invalid place" -- use the navigation links from the parent page
4. **Blocking operations** -- tick functions that stall on page load cause whole grinder to stop
5. **Rebuff detours mid-grind** -- slows things down significantly, better to rebuff only when absolutely needed

## Key Snarfblat IDs
- 15: Spooky Forest
- 30: Bat Hole Entryway
- 31: Guano Junction (needs Pine-Fresh air freshener)
- 32: Batrat and Ratbat Burrow
- 33: Beanbat Chamber
- 34: Boss Bat's Lair (DEFEATED)
- 113: Haunted Pantry
- 114: Outskirts of Cobb's Knob
- 233: A Barroom Brawl (Typical Tavern)
- 388: Haunted Kitchen
- 389: Haunted Conservatory
- 539: Dark Neck of the Woods (Friars)
- 540: Dark Heart of the Woods (Friars, need 45 Myst)
- 541: Dark Elbow of the Woods (Friars, need 45 Myst)

## Active Quests (Day 7 EOD)
1. **Deep Fat Friars**: Got 3 Imp Ales, need to find "imp in a beret" (artist imp) who has the artifact. Grind Dark Neck (lowest level zone)
2. **Goblin King**: Infiltrate Cobb's Knob Throne Room (need to find entry point)
3. **Haunted Billiards Room**: Need Pool Skill 14+ to beat spectre. Get: pool cue (+3) + hand chalk → Chalky Hand (+3) + drink to 10 drunk (+10) = 16 skill
4. **Injured Knob Goblin**: Buy Pungent Unguent from Doc Galaktik's Medicine Show
5. **Degrassi Knoll**: Meatcar rebuild (haven't started -- use shopping list)

## Skills Known (Pastamancer)
- Manicotti Meditation (1 MP, buff)
- Spaghetti Spear (1 MP, combat)
- Ravioli Shurikens (4 MP, combat, 3-hit)
- Entangling Noodles (3 MP, combat, STUN)
- Lasagna Bandages (6 MP, heal)
- Cannelloni Cannon (unconfirmed if owned)
- Bind Vampieroghi (12 MP, summon pasta thrall)
- Transcendent Al Dente (1 Adventure, buff)
- Pastamastery (summons dry noodles, once/day)
- Bind Vermincelli (summon second thrall type)

## Next Skill Priorities
- **Springy Fusilli** (1,750 Meat, Level 6) -- +40% combat initiative = guaranteed first strike
- **Bringing Up the Rear** (1,750 Meat, Level 6) -- double spell damage cap with thrall

## File Structure in Project
```
my-adventures/
  2026-04-09.md  (Day 1: tutorial, poltersandwich, Marcellus)
  2026-04-10.md  (Day 2: Bat Hole, Haunted Kitchen fail, Barroom)
  2026-04-11.md  (Day 3: Tavern Cellar, Spookyraven Manor unlock)
  2026-04-12.md  (Day 4: drinking blunder - lesson learned)
  2026-04-13.md  (Day 5: SUPERDAY - Boss Bat slain, Cobb's Knob cracked)
  2026-04-14.md  (Day 6: Level 6, Kitchen conquered, Ned the thrall)
  2026-04-15.md  (Day 7: Friars quest started, diet lesson)

mechanics/
  game-structure.md        (frames, URLs, snarfblats, combat flow)
  pastamancer-class.md     (class mechanics)
  stats-and-leveling.md    (leveling formula, organ limits, moons)
  combat-and-initiative.md (safe Moxie, initiative)
```

## Optimal Daily Routine (Template for any day)

1. **Log in** (game.php)
2. **Check charpane**: stats, adventures, active effects
3. **Check Council**: `council.php` for any new quests
4. **Open any mail items** (Toot Oriole care package if present)
5. **Cast Pastamastery** (once/day, summons dry noodles)
6. **Cast Manicotti Meditation** (Pasta Oneness buff)
7. **Cast Bind Vampieroghi** (summon thrall for combat)
8. **Use Ben-Gal Balm** (Go Get 'Em Tiger buff)
9. **Eat food first** (craft pasta from dry noodles if available, else pickled eggs)
10. **Adventure** with Noodles→Shurikens combo
11. **Drink booze LAST** at end of day to bank adventures
12. **Write daily diary** in `my-adventures/YYYY-MM-DD.md`
