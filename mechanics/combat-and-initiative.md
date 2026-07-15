# Combat Mechanics and Initiative

> **Canonical combat standard lives in HANDOFF.md**: the Pastamancer default is **Stuffed Mortar Shell → Cannelloni
> Cannon**. The low-level skill notes below (Spaghetti Spear / Ravioli Shurikens) are **early-game** and superseded once
> those skills are available.

## Initiative System

When a combat begins, one side gets the "jump" -- meaning they act first.

**Key observations:**
- If the monster gets the jump on you, it attacks before you can act
- If you get the jump, you attack first (huge advantage)
- Low Moxie relative to zone = frequent jumps against you
- High Moxie relative to zone = frequent jumps for you

## Safe Moxie Formula

From the KoL wiki: **"Safe moxie" = monster's maximum experience × 4**

- Monsters in a zone yielding ~3-4 exp need Moxie ~12-16 to dodge all non-critical hits
- Critical hits can still land even at "safe moxie"
- Defensive strategy: keep Moxie above zone's safe threshold

## Class-Specific Combat Benefits

### Pastamancer
- **Entangling Noodles stuns** (vs just staggering for other classes)
- **Shield of the Pastalord**: -30% physical damage (Level 8 skill)
- **+50% max MP** (innate class bonus)
- **Cannelloni Cocoon**: full HP heal (Level 12 skill)
- **Leash of Linguini**: +5 familiar weight (Level 11 skill)

## Skill Damage Analysis (early-game skills)

Observed in combat:
- **Spaghetti Spear** (1 MP): single hit, 3-4 damage at base Mys
- **Ravioli Shurikens** (4 MP): 3 hits, total 12-15 damage (5+5+4 typical)
- **Ravioli Shurikens** has damage variance: each shuriken has a random element
  - "hair oil" damage
  - "glacial runoff" damage
  - Multiple elemental types per cast

### Damage/MP Efficiency
- Spaghetti Spear: ~3 damage per MP
- Ravioli Shurikens: ~3.5 damage per MP BUT with better burst = fewer rounds per kill

## Multi-Round Combat

- Early-game, most fights take 1-2 rounds with Ravioli Shurikens
- Tougher enemies (vampire bats, briefcase bats) take multiple rounds
- Each round the monster gets an attack unless stunned
- Marcellus triggers once per round of combat (typically after your action)

## Familiar Combat Contribution

### Marcellus (Mosquito)
- Drains blood from enemies, heals YOU
- Heal amount **scales with familiar weight** (roughly ~5 HP at low weight up to ~20-26 HP at high weight)
- Triggers automatically each combat round (after your action)

## Beaten Up Effect

- Duration: 3 adventures
- Reduces all stats to roughly half
- Blocks adventuring ("too beaten up")
- Removed by resting at campsite (free, 1 rest = removed)
- Resting also restores some HP/MP

## Healing During Combat

Options:
1. **Marcellus healing** (passive, each round, scales with weight)
2. **Lasagna Bandages** skill (active heal)
3. **Healing items** (consumed mid-fight)
4. **Cannelloni Cocoon** (Level 12 full heal -- not yet accessible)

## Combat Messages Decoded

- "gets the jump on you" -- monster acts first
- "You get the jump on him" -- you act first  
- "twiddle your thumbs" -- no action taken (wasted round?)
- "Adventure Again (Zone Name)" -- fight won, can continue
- "You lose. You slink away, dejected and defeated." -- you lost, now Beaten Up
- "Marcellus plunges his tiny proboscis" -- familiar blood drain attack

## Combat UI Structure

- `select[name="whichitem"]` -- dropdown of combat items
- `select[name="whichskill"]` -- dropdown of combat skills
- `input[value="Use Skill"]` -- skill action button
- `input[value="Use Item"]` -- item action button
- Skills show `(X MP)` cost next to name
