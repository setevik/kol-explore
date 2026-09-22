# Optional Side Quests — Wizard of Ego · White Citadel · A Quest, LOL

> Run-agnostic. Three quests that never appear on the Council's list, are easy to walk past for a whole run,
> and are each finishable in well under a day at endgame stats. All three are **guild- or NPC-given**.
> ⚠️ Sweep `guild.php?place=scg|ocg|paco` every few levels — see `guild-membership-and-skills.md`.

---

## 🧙 The Wizard of Ego (Fernswarthy's Tower)

**Given by the guild member of the OPPOSITE class in your stat pair** (Seal Clubber ⇄ Turtle Tamer,
Pastamancer ⇄ Sauceror, Disco Bandit ⇄ Accordion Thief). Available at **11+ unbuffed mainstat**.

1. Adventure **The Unquiet Garves (snarf 21)** until a **grave robbing shovel** / **rusty grave robbing shovel**
   drops, then keep going with the shovel held until **A Grave Situation** hands over **Fernswarthy's key**.
   ⭐ **A previous ascension's storage very often already holds a shovel** — check before spending a turn.
2. **Re-visit the quest-giver** until they point you at the ruins (needs **18+ unbuffed mainstat**).
   ✅ Verified: simply *visiting* the NPC page hands over the key/orders — there is no form to submit.
3. **`fernruin.php` is the quest hub** (linked from `place.php?whichplace=plains` as *The Ruins of
   Fernswarthy's Tower`*, **not** as a snarfblat on the map). The adventureable zone behind it is
   **`adventure.php?snarfblat=22`** ("Tower Ruins"). The key **breaks off in the lock on first visit** —
   access is permanent thereafter.
4. Adventure 22 until a **dusty old book** drops, then hand it to the same guild member.

**Reward:** area access, and a class-appropriate **stat book** —
**Manual of Labor** (Muscle) · **Manual of Transmission** (Myst) · **Manual of Dexterity** (Moxie).
⚠️ **The Manual is a STAT BOOK, not a skill.** It gives substats **once per day for five days only**
(20 / 40 / 100 / 40 / 20 = **220 total**), then *"you've already learned everything there is to learn"*.
⇒ **Read it the day you get it** and once per day after; the 5-day clock is the only cost.
✅ Measured: the whole quest took **16 turns in snarf 22, 13W/0L**, at base Muscle ~272.

---

## 🍔 Go To White Citadel

**Given by the guild's janitor** (`guild.php?place=paco` — the same NPC as the Bitchin' Meatcar quest),
after the meatcar is built. He wants lunch.

1. Adventure **Whitey's Grove (snarf 100)** until **It's A Sign!**, which unlocks the road.
   ⭐ **Accepting the quest alone unlocks Whitey's Grove** — a free zone, no turns (see `leveling-zones.md`).
2. **The Road to the White Citadel = `adventure.php?snarfblat=413`** (off `place.php?whichplace=woods`).
   **100% combat, ML 34–39.** Adventure twice, then **defeat 30 pairs of burnouts**.
   (An **opium grenade** wins the current fight *and* clears 2 extra pairs — 10 of them clear the mob in 10 turns.)
3. **Defeat the biclops** (drops *duonoculars*); it appears only after the 30 pairs.
4. **Choice 931 — *Life Ain't Nothin But Witches and Mummies***. ⚠️ **Your familiar is turned into a pig**
   for this stretch and does nothing. The clean route, **matched by label**:
   **`Knock on the shutters`** → **`Kick in the front door`** → confirm **`Screw it, kick in the front door`**
   → single-option **`So much for the direct approach.`** → two fights:
   **spider-legged witch's hut** (50 HP, *50% physical AND 50% elemental resistance*) → **extremely annoyed
   witch** (32 HP, drops *wand of pigification*). ✅ Both died in **1 round** at base Muscle ~273.
   ⚠️ **Several of 931's steps cost NO adventure** and re-serve the same choice number — the free-encounter
   guard will trip on them. That is expected here; step through by label rather than looping.
5. **Choice 932 — *No Whammies***, a chest minigame. `Investigate the chests` → three chests, **exactly one
   is trapped**; each safe chest raises the pot, **a trapped one forfeits the whole pot and the turn**.
   🎯 **You only need to bank *some* meat to progress** ⇒ open **one** chest, then
   `Leave the treasure chamber` → confirm `Leave the treasure chamber` again. ✅ Measured payout for one
   chest: **400 meat**. Don't gamble a quest step for pocket change.
6. **Defeat Elpízo Crosybdis** (ML 38, drops *glass of bourbon*). The road is then **replaced** by the Citadel.
   ⚠️ The dead zone answers as a **free no-op** afterwards — that is the signal it's done, not a bug.
7. **The White Citadel is an NPC food shop: `shop.php?whichshop=whitecitadel`.** Simply loading it with
   **300 meat** in hand auto-buys the **White Citadel Satisfaction Satchel** (the take-out order).
8. Hand it back at `guild.php?place=paco`.

**Reward:** **lucky rabbit's foot** (accessory, **+7% item drops, +7% meat**, needs 15 base Myst) and a
permanent NPC store: *White Citadel burger* 100 · *fries* 80 · *onion shurikens* 80 · three **Cloaca Colas**
80 each (all colas restore MP identically).
✅ Measured: the whole chain ran **~35 turns at 0 losses** from the first burnout to Olaf.

---

## 💀 A Quest, LOL (Baron Rof L'm Fao)

Offered by **Black Angus in the Highlands** after the **Orc Chasm** quest. Logged under *Other Quests*.
**The Valley of Rof L'm Fao = `adventure.php?snarfblat=80`** (off `place.php?whichplace=mountains`).

### The zone
ML ~77–87, **every monster is "weak against dictionary"**, and each is aligned to *bad spelling*.

| Monster | Scroll it drops |
|---|---|
| **1335 HaXx0r**, **Anime Smiley** | **334 scroll** (547) |
| **Lamz0r N00b** | **33398 scroll** (550) |
| **XXX pr0n** | **30669 scroll** (549) |
| Flaming Troll · Spam Witch · me4t begZ0r | none |

**Scroll item ids:** 334 = **547** · 668 = **548** · 30669 = **549** · 33398 = **550** · 64067 = **551** ·
64735 = **552** · 31337 = **553**.

### You need a dictionary, and it CANNOT be bought
🚨 **`dictionary` (item 536) is "Cannot be traded or discarded"** — a mall search is a dead end. Its
reachable source is the **Haunted Library (snarf 390)**, **choice 889 *Take a Look, it's in a Book!* (Fall)**,
option **`Read the dictionary`**. ✅ Measured: **15 turns, 13W/0L** with a +item buff up; choices 888 and 889
both fire there, so **key the rule by choice number** and take the dictionary option whenever it is offered.
⚠️ The quest **only completes if you are holding a dictionary**, so get it before summoning the Baron.

### The rampaging adding machine — the one step that can destroy your progress
Combine scrolls by **using two of them as combat items on a `rampaging adding machine`**; it spits out the sum.
- **334 + 334 → 668** · **30669 + 33398 → 64067** · **668 + 64067 → 64735**
- 🚨 **An invalid pair consumes BOTH scrolls and returns nothing.** Compute the pair from inventory, never guess.
- 🚨 **The machine has only 70 HP and each combine costs it 21–31 HP** ⇒ **2, sometimes 3, combines per machine.**
  **Do not attack it** — every round should be a scroll. If it dies with combines left, find another.
  ✅ **A combine that reduces it to 0 HP still yields its output scroll.**
- ⚠️ **The dictionary and facsimile dictionary do NO damage to this monster** (they work on everything else here).
- ✅ Measured: machines are **common** (~2 per 15 fights), so losing one is cheap — but all three combines have
  fitted on a single machine, so **keep feeding it until it dies.**

### Finishing
**`inv_use` the 64735 scroll (552)** → you are transported to the Baron's gates.
✅ **With a dictionary in inventory the Baron simply gives up — there is no fight and no adventure is spent.**
**Rewards: facsimile dictionary + drywall axe.**
✅ Measured end-to-end: **~36 turns of Valley farming at 0 losses** (with **+27% item drops** up) for all four
base scrolls, plus 3 turns to find and feed a machine.

---
