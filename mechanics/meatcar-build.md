# Bitchin' Meatcar — build recipe (meatpasting)

The "My Other Car Is Made of Meat" quest deliverable. Pure in-inventory meatpasting — **no Untinker needed**
(that was the old wrong blocker).

## ⚠️ The key fix: crafting needs `action=craft`
Meatpaste/combine via fetch URL:
```
craft.php?mode=combine&action=craft&a=<id1>&b=<id2>&qty=1&pwd=<HASH>&ajax=1
```
**`mode=combine` alone does NOTHING** (no items consumed, no result). You MUST include `action=craft`. Each combine
consumes **1 meat paste (item 25)** automatically + the two inputs.

## Part item IDs (verified)
- meat paste = **25**  · meat stack = **88** (NOT dense meat stack 258 — wrong item, recipe needs regular)
- spring = **118** · sprocket = **119** · cog = **120** · empty meat tank = **124**
- sweet rims = **135** (from the Hermit: trade 1 Worthless item) · tires = **136**

## Assembly chain (each step = one `action=craft` combine; result IDs verified by inventory diff)
1. meat stack (88) + empty meat tank (124) → **Full Meat Tank (125)**
2. tires (136) + sweet rims (135) → **Dope Wheels (137)**
3. spring (118) + sprocket (119) → **intermediate (121)**
4. intermediate (121) + cog (120) → **Cog & Sprocket Assembly (122)**
5. Full Meat Tank (125) + Cog & Sprocket Assembly (122) → **Meat Engine (126)**
6. Meat Engine (126) + Dope Wheels (137) → **Bitchin' Meatcar (134)** 🎉

Total: 5 meat paste + 1 each of (meat stack, tank, tires, sweet rims, spring, sprocket, cog).

## After building
- Bitchin' Meatcar = item **134**. `inv_use` on it gives a "vroom" flavor message and does NOT consume it
  (it's a passive unlock; it stays in inventory). It unlocks Desert Beach travel.

## Inventory-diff trick for crafting (reusable)
To learn an unknown result item id: snapshot `api.php?what=inventory` before/after the combine and diff —
the id whose count increased is the result. Used this to map every intermediate id above.
