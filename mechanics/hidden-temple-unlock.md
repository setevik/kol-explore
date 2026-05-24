# Hidden Temple — unlock paths

## Status (end of Day 38)

- Hidden Temple = **snarfblat 280**. Verified locked by adventuring it →
  *"You don't know nothin' 'bout no hidden temples."*
- The Temple is the gateway to the **Hidden City** (needed for the **ancient amulet**,
  one of the 3 Staff of Ed components — see `staff-of-ed-quest.md`).
- Two known unlock paths:
  1. **Dakota Fanning** (Distant Woods) — fetch quest, 3 items from 3 zones.
  2. **Spooky Forest sapling chain** — get 3 items via Arboreal Respite sub-NCs,
     `use` the Spooky Temple Map → Hidden Temple revealed.

## Path A — "Dakota" Fanning

`place.php?whichplace=woods&action=woods_dakota_anim` — meet Dr. Henry "Dakota" Fanning.

He wants:
- **bendy soda straw** — from a **Fallen Archfiend** (Pandemonium / demon zones).
- **very powerful, high-octane plant food** — from the **Haunted Conservatory** (389).
- **sewing needle** — Hippy Camp filthy hippies, Frat House orcs, or vending machines.

Bring all three back → he climbs up, and you can follow → Hidden Temple unlocked.

## Path B — Spooky Forest Arboreal Respite (preferred)

Adventure in **Spooky Forest (15)** until **Arboreal Respite** NC fires (~1 in 6 advs).

### Top-level options

- **Opt 1** "Follow the old road" → **The Road Less Traveled** sub-NC.
- **Opt 2** "..." → **Consciousness of a Stream** (per wiki: gives larva / vampire
  hearts / a quest coin / possibly the tree-holed coin).
- **Opt 3** "..." → **Through Thicket and Thinnet** (fertilizer; with a tree-holed coin,
  unlocks **O Lith, Mon** for the temple map).

### Needed items

1. **Spooky Sapling** — Arboreal opt 1 → Road Less Traveled → opt 2 "Knock on the
   cottage door" → expected to lead to **"Tree's Last Stand"** sub-NC → choose
   "Buy a tree for 100 meat" (or similar wording). **VERIFY THE EXACT SUB-OPTION LABEL.**
   Day 38 tried this path and the chain ended without acquiring a sapling — the
   third-level option my auto-handler picked wasn't the buy-tree one.
2. **Spooky-Gro Fertilizer** — Arboreal opt 3 → Through Thicket and Thinnet → pick the
   fertilizer-named sub-option. Verify exact label.
3. **Spooky Temple Map** — needs a **tree-holed coin** first. Tree-holed coin comes from
   Consciousness of a Stream (opt 2) sub-options — verify. Then Arboreal opt 3 → Through
   Thicket and Thinnet → "Follow the coin" → **O Lith, Mon** → trade coin for map.

### Final step

Once you have all three items (Sapling + Fertilizer + Map), **`use` the Spooky Temple
Map** in inventory → Hidden Temple location is revealed → `adventure.php?snarfblat=280`
becomes accessible.

### Backup: buy spooky sapling for 100 meat from the Hermit

The wiki claims the Hermit (Mountains) sells Spooky Saplings for 100 meat — but the
Hermit requires a **Hermit Permit** I don't currently have. So this isn't a true
shortcut. Skip.

## Day 39 attack plan

1. Adventure Spooky Forest until Arboreal Respite fires.
2. **Manually pause** at each sub-NC level (don't rely on auto-handler):
   - Arboreal Respite: read top-level option labels, pick opt 1.
   - Road Less Traveled: read labels, pick opt 2 "Knock on cottage door".
   - **Resulting sub-screen** (Tree's Last Stand or similar): read options carefully
     and pick the one that mentions "buy", "sapling", "100 meat", or "tree".
3. Document the exact verified labels back into this file.
4. Repeat for fertilizer (opt 3 → Thicket and Thinnet) and tree-holed coin
   (opt 2 → Stream) and map (opt 3 with coin → "Follow the coin" → O Lith, Mon).
5. Use the map → Hidden Temple unlocks.

## After unlock: Hidden Temple → Hidden City → ancient amulet

Once Hidden Temple is open (snarfblat 280):
- Adventure until **"Such Great Heights"** → climb down vines → **Nostril of the Serpent**
  (key to enter Hidden City).
- Hidden City: 4 buildings — Hidden Hospital, Bowling Alley, Apartment Building, Office
  Building — each has an **ancient protector spirit** (immune to physical, needs
  **elemental damage**). Cannelloni Cannon landed "hailstones" on Lord Spookyraven
  (Day 37) → likely **COLD** — should work.
- Each spirit drops a **sphere** → trade at overgrown shrines for a **stone triangle**.
- All 4 stone triangles → enter **A Massive Ziggurat** → defeat **Protector Spectre**
  (also physical-immune) → **ancient amulet**.

## References

- [Spooky Temple Map Quest — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/Spooky_Temple_Map_Quest)
- [Arboreal Respite — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/Arboreal_Respite)
- [O Lith, Mon — KoL Wiki](https://wiki.kingdomofloathing.com/O_Lith,_Mon)
- [The Hidden Temple — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/The_Hidden_Temple)
- [The Hidden City — Coldfront](https://kol.coldfront.net/thekolwiki/index.php/The_Hidden_City)
