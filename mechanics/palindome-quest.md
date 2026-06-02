# The Palindome / Dr. Awkward → Staff of Fats (verified Day 47)

Part of the Holy MacGuffin → Staff of Ed chain. The Palindome yields the **Staff of Fats**
(second Staff of Ed component, the first being the headpiece item 2323).

## Unlock chain (DONE as of Day 47)

1. **Shen Copperhead quest** (3 snake artifacts) → **Copperhead Charm (rampant)** (item 7186).
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
BU issues with the stun combo.

### The 4 photographs (DONE Day 47 — all held)
Needed for the Dr. Awkward path:
- **photograph of God** — choice **129 "Do Geese See God?"**, option 1, 500 Meat.
- **photograph of a red nugget** — choice **873 "Rod Nevada, Vendor"**, option 1, 500 Meat.
- **photograph of a dog** — drops from a Palindome monster (no NC).
- **photograph of an ostrich egg** — drops from a Palindome monster (no NC).

### Still TODO (next session)
- **Mr. Alarm** (Palindome NPC) — did NOT appear in ~40 Palindome fights with all 4 photos
  in hand. Hypotheses: gated behind having the **wet stunt nut stew** already, or a rarer
  NC. He gives the **Mega Gem** in exchange for the stew.
- **wet stunt nut stew** = cook **bird rib + lion oil + stunt nuts**. These drop in
  **WHITEY'S GROVE** (NOT the Palindome). Verify Whitey's Grove accessibility.
- Final: place/use the 4 photographs + Mega Gem → **Dr. Awkward** boss → **Staff of Fats**.
  Enter at FULL HP (hard hitter like Ron; keep torpedoes ready).

## Then: complete the Staff of Ed
```
headpiece of the Staff of Ed (2323) + Staff of Fats → STAFF OF ED
  → insert into pyramid socket (Desert Beach, db_pyramid1)
  → Upper / Middle / Lower Chambers → Ed the Undying → HOLY MACGUFFIN
```

## Combat / automation notes (Day 47)
- **Entangle-first stun combo is the standard now**: R1 Entangling Noodles (3004, stuns) →
  R2 Cannelloni (3005) → R3 Mortar (3007) → R4+ Cannelloni; Spaghetti (3020) at MP<8.
  Min HP stayed ~90-100% over ~100 fights, 0 Beaten Ups. Far better than Mortar-first.
- **`whichskill=4` is NOT Ravioli Shurikens** — that "4" in the combat dropdown is its
  mana cost. There is no skill id 4; use Spaghetti (3020) as the 0-MP fallback.
- **Rapid `fetch` loops can force a logout.** A ~150ms sleep between adventures fixed it.
  Re-login (or any frame navigation) wipes all `window.*` helpers — reinstall after.
- **Mall buying**: store buy-form `whichitem` is a composite `itemid.price` (e.g.
  `592.214` for a tiny house). `mallstore.php?whichstore=S&buying=Yep.&whichitem=ID.PRICE&quantity=N&pwd=`.
- **MMJ** (item 518) from `shop.php?whichshop=guildstore2&action=buyitem&whichrow=527` at
  100 Meat each. Burns ~1/fight — buy in bulk (40+).
