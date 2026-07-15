# The Palindome / Dr. Awkward → Staff of Fats

Part of the Holy MacGuffin → Staff of Ed chain. The Palindome yields the **Staff of Fats**
(second Staff of Ed component, the first being the headpiece item 2323). This file also
covers the **Shen Copperhead / Red Zeppelin** unlock chain that gates the Palindome.

## Unlock chain

1. **Shen Copperhead quest** (3 snake artifacts) → **Copperhead Charm (rampant)** (item 7186).
   Shen poisons you and demands a snake artifact; which one is fixed by the ascension-day you
   start his quest. He asks for **3 in a row** (same pool); after the 3rd you're cured and get
   the charm. The six possible artifacts, and where each drops:

   | Artifact | Snake | Zone |
   |---|---|---|
   | Stankara Stone | Batsnake | The Batrat and Ratbat Burrow |
   | The First Pizza | Frozen Solid Snake | Lair of the Ninja Snowmen |
   | Murphy's Rancid Black Flag | Burning Snake of Fire | Castle Top Floor |
   | The Eye of the Stars | The Snake With Like Ten Heads | The Hole in the Sky |
   | The Lacrosse Stick of Lacoronado | The Frattlesnake | Smut Orc Logging Camp |
   | The Shield of Brook | Snakeleton | The VERY Unquiet Garves |

2. **Clear ~80 Zeppelin protesters** (snarf **384**, off `place.php?whichplace=zeppelin`).
   Zone relabels "Massive Mob" → "Scattered Mob" and **"The Red Zeppelin (1)"** appears
   when done. NCs "Fire Up Above" / "Bench Warrant" (opt 1) multi-clear but seem
   once-ish per day; mostly it's 1 protester per fight.
3. **Red Zeppelin = snarf 385.** Adventure ~15 regular fights (red skeleton, etc.) → boss
   **Ron "The Weasel" Copperhead** appears as a normal combat.
   - Ron: ~42 dmg/round, **stun-immune**, moderate HP (~175). Enter at FULL HP. Burst
     Cannelloni + thrall/familiar; finish with a **photoprotoneutron torpedo** if needed.
   - Drops: **black snake skin** + **Copperhead Charm** (plain, item 7178).
4. **Forge Talisman o' Namsilat (item 486)**: meat-paste the two charms —
   `craft.php?mode=combine&action=craft&a=7178&b=7186&qty=1&pwd=HASH`.
5. **EQUIP the talisman** (accessory). Needs a FREE accessory slot — unequip one first:
   `inv_equip.php?which=2&action=unequip&type=acc1` then
   `inv_equip.php?which=2&action=equip&whichitem=486&pwd=HASH`.
6. **Palindome unlocks**: it appears in **The Nearby Plains** (`place.php?whichplace=plains`)
   ONLY while the talisman is equipped. **The Palindome interior = snarf 386.**
   - ⚠️ `place.php?whichplace=palindome` ALWAYS returns "isn't accessible to you right now"
     even when unlocked. Don't trust it — go via the Plains / snarf 386.

## Inside the Palindome (snarf 386)

Palindrome-themed: monsters (Evil Olive, etc.), NCs ("Do Geese See God?", "Rod Nevada,
Vendor"). Monsters are spell-vulnerable, slightly tanky (~5 rounds with Cannelloni), no
Beaten-Up issues with the stun combo.

### The 4 photographs
Needed for the Dr. Awkward path:
- **photograph of God** — choice **129 "Do Geese See God?"**, option 1, 500 Meat.
- **photograph of a red nugget** — choice **873 "Rod Nevada, Vendor"**, option 1, 500 Meat.
- **photograph of a dog** — drops from a Palindome monster (no NC).
- **photograph of an ostrich egg** — drops from a Palindome monster (no NC).

### Mega Gem → Dr. Awkward
- **wet stunt nut stew** = cook **bird rib + lion oil + stunt nuts**. Bird rib + lion oil drop
  in **WHITEY'S GROVE** (NOT the Palindome); stunt nuts drop in the Palindome.
- **Mr. Alarm** (Palindome NPC) hands over the **Mega Gem** in exchange for the stew. ⚠️ He may
  not appear until the stew is already cooked/in hand — cook it first rather than grinding the
  Palindome waiting for his NC.
- Final: place/use the 4 photographs + Mega Gem → **Dr. Awkward** boss → **Staff of Fats**.
  Enter at FULL HP (hard hitter like Ron; keep torpedoes ready).

## Then: complete the Staff of Ed
```
headpiece of the Staff of Ed (2323) + Staff of Fats → STAFF OF ED
  → insert into pyramid socket (Desert Beach, db_pyramid1)
  → Upper / Middle / Lower Chambers → Ed the Undying → HOLY MACGUFFIN
```
The other two Staff components: **Eye of Ed** (Spookyraven cellar — see
`spookyraven-ghost-chain.md`) + **ancient amulet** (Hidden City — see
`hidden-temple-unlock.md`) combine into the **headpiece (2323)**. The pyramid endgame after
insertion is in `pyramid-lower-chamber-wheel.md`.

## Combat / automation notes
- **Entangle-first stun combo**: R1 Entangling Noodles (3004, stuns) → R2 Cannelloni (3005) →
  R3 Mortar (3007) → R4+ Cannelloni; Spaghetti (3020) at MP<8. Holds HP ~90-100% with ~0
  Beaten Ups — better than Mortar-first for a tanky-but-not-boss zone. (General combat
  standard lives in HANDOFF.)
- **`whichskill=4` is NOT Ravioli Shurikens** — the "4" in the combat dropdown is its mana
  cost. There is no skill id 4; use Spaghetti (3020) as the 0-MP fallback.
