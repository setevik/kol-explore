# Combat Mechanics and Initiative

> **Per-class combat doctrine lives in `mechanics/<class>-class.md`**: the Pastamancer default is **Stuffed Mortar Shell → Cannelloni
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

---

## 🎯 A DASH IN THE DAMAGE COLUMN MEANS *ACCURACY*, NOT DAMAGE — check Defense vs your attack stat

✅ **Measured (Seal Clubber vs Groar):** nine rounds in which **zero damage was dealt — not low damage, none** —
while spooky resistance, off-hand items and healing potions were all being carefully optimised. The game says so
in plain words:

> *"...out of your league!"*

**Groar's Defense is 108; the attacking Muscle was 98.** It was never a DPS race — no attack could connect.

✅ **Log damage-dealt every round, and treat a run of blanks as a HARD STOP, not bad luck:**
```js
const dmg  = (p.match(/for (\d+) damage/)||[])[1];      // undefined => you did not hit
const took = (p.match(/You lose (\d+) hit points/i)||[])[1];
log.push('R'+r+' dealt '+(dmg||'-')+' took '+(took||'-'));
// 2-3 consecutive '-' dealt => abort: this is an ACCURACY gate, not a damage gate
```
🎯 **The rule: your MAIN STAT must exceed the monster's Defense to land hits reliably.** Before any boss, read
**Defense** from the wiki alongside HP, and compare it to your *buffed, as-you-will-actually-be-dressed* stat.
⚠️ Phrases to recognise as accuracy failures (not damage failures): *"out of your league"*, and any round where
your attack line reports no number at all.
⚠️ Corollary: **+damage gear, elemental resistance and healing items are all worthless below the accuracy
gate.** Fix accuracy first; everything else is wasted preparation.

## ⬇️ CAN'T RAISE YOUR STAT? LOWER THEIRS — defense-debuffs beat the accuracy gate

The companion to the accuracy rule below. When your attack stat sits under a monster's Defense, there are
**two** ways to close the gap, and the second is usually far cheaper:

| | |
|---|---|
| Raise your stat | levelling, gear, buffs — slow, and a required outfit may claw it straight back |
| **Lower their Defense** | **one combat skill, immediately, from inside the fight** |

✅ **Measured:** at attack stat **106 vs Defense 108** the first attempt still landed nothing. Casting a
defense-weakening combat skill **twice** (Seal Clubber's `Club Foot`, 8 MP — *"Weakens enemy defense"*) turned
the same fight into a win. **Two days had gone into trying to out-level the wall.**

🎯 **Before grinding levels for a boss, read your own combat skill list for anything that says *weakens*,
*sunders*, *shatters* or *-Defense*.** Most classes have one and it is usually cheap. Check with
`desc_skill.php?whichskill=<id>&self=true`.
⚠️ It also stacks with being *close* — a 2-point deficit is a very different animal from a 10-point one; a debuff
finishes a near-miss but will not rescue a rout.

## 🔤 ACTION NAMES CAN ENCODE PROGRESS — scrape the link, never hard-code it

`place.php` actions sometimes carry state in the name, and **the stale name silently returns an empty page** —
no error, no turn spent, no clue:

| Thing | Action while incomplete | After progress |
|---|---|---|
| Orc Chasm bridge | `bridge0` | **`bridge5`, `bridge12`, … (the number is your current progress)** |
| Mist-Shrouded Icy Peak | `cloudypeak` | **`cloudypeak2`** (after the gear step) |

❌ A tally-checking loop hard-coded to `bridge0` reported "no lumber, no fasteners" for 40+ turns while **37
lumber and 31 fasteners** sat in the pack — the bridge finished instantly once the right link was clicked.
✅ **Always resolve the action from the place page:**
```js
const pl  = await G('/place.php?whichplace=orc_chasm');
const act = (pl.match(/action=(bridge\d+)/)||[])[1];        // or /action=(\w*peak\w*)/ etc.
await G('/place.php?whichplace=orc_chasm&action='+act);
```

## 🧪 NOT EVERY ITEM WORKS IN COMBAT — and a no-op item spins the fight loop forever

`Monstar energy beverage` restores MP **out of combat only**; in a fight it answers *"that can't be used in
combat"* — **the round does not advance**. A loop that keeps choosing it burns iterations indefinitely while HP,
MP and the adventure count all sit still. (Verified in-combat MP restore: **Mountain Stream soda**.)

✅ **Guard every in-fight item use, and blacklist on refusal:**
```js
const banned = new Set();
…
p = await G('/fight.php?action=useitem&whichitem='+item);
if (/can't be used in combat/i.test(p)) { banned.add(item); r--; continue; }   // retry the round differently
```
⚠️ Same family as the free-encounter guard: **any action that leaves state unchanged must be detected and
retired**, not repeated.
