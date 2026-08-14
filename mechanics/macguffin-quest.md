# Level 11 — Quest for the Holy MacGuffin (opening chain) — run #2, Day 106+

Council at L11 → "father missing; collect his diary." The real chain (quest log is the guide):

1. **Transportation first:** the Shore/Desert Beach needs a vehicle. **Bitchin' meatcar** route
   (`mechanics/meatcar-build.md`): if a **meat engine (126)** survives in Hagnk's, only **tires (136) +
   sweet rims (135) → Dope Wheels (137)**, then engine+wheels → **meatcar (134)** (2 meat paste). Mall has
   all parts (~700 meat total).
2. **Vacation ≠ diary.** A Shore trip (adventure.php?snarfblat=**355** → choice **793**, 500 meat, 3 adv)
   just gives scrip + updates the quest log: **"find the Black Market, to get some forged ID."**
3. **The Black Market is in the Black Forest (snarf 405, Distant Woods).**
   🚨 **ML 123–133 (rec stat 110) — every fight is Groar-tier.** Unprepped we went **1W/10L**; with
   **Buffy shells + Springy Fusilli + Entangle→Mortar→Cannelloni** it's ~**4W/1L**. ⚠️ A later loop that
   dropped Entangle/Mortar (Cannelloni-only) went **0W/14L** — never strip the stun/mortar here.
   - **Progress:** each black-monster win = 2–3 progress. **Market unlocks at 50.** Milestones: 10 =
     "All Over the Map" (choice **923**) appears; 20/30/40 = more map options; 50 = the market option.
   - **A reassembled blackbird familiar (or hatchling in inventory) adds +2–3/fight** — collect its 4
     quest pieces from forest monsters (sunken eyes, bird brain, …) and combine.
   - **Choice 923 "All Over the Map"** — pick the **black market** option when it appears. Sub-chains:
     **924 blackberry patch: opt 1 = FIGHT blackberry bush (resolves the choice); opts 2/3 just hop to
     other sub-choices and RE-FORCE 923/924 forever (a no-adv ping-pong that stalls loops).**
     Cobbler house = choice **928** (opt 6 leaves; 3 blackberries → galoshes).
   - **Beehive side-chain:** "buzzing sound" → *Bee Persistent* (1018) → keep going ×2 (costs HP + advs,
     advs count as forest progress) → **beehive** item.
4. **At the market: forged identification documents = 5,000 meat.**
5. **Shore vacation WITH the forged ID → "your father's diary."** Reading it unlocks the Spookyraven
   cellar (choice 921 gate), the desert chain, etc.

## ✅ Opening chain COMPLETED — Day 107 (verified sequence)

1. Meatcar → Desert Beach.
2. **Black Forest (405) until the quest log says "You've found the Black Market"** — took ~55 wins total
   across 2 days at base Mys 104–115. ⚠️ **Don't wait for a "black market" button inside choice 923** —
   the market appears as a **new link on `place.php?whichplace=woods`** (`shop.php?whichshop=blackmarket`)
   and the **quest log flips first**. Check the quest log every ~10 fights instead of scanning 923's options.
   ⚠️ **Blackberry-bush fights (choice 924 opt 1) give NO market progress** — they're a detour; only real
   black monsters count. If 923 keeps firing, just take opt 1 → 924 opt 1 to clear it and move on.
3. **Black Market row 281 = forged identification documents, 5,000 meat.**
   💰 Funding trick: **dense meat stacks (258) autosell 1,000 each** — Hagnk's had 8 from the Groar kill.
4. **Adventure The Shore (355) → choice 793 → ANY trip option**: the agent spots the documents
   ("Ah, Mr. Abercrombie"), and instead of a vacation you get **your father's MacGuffin diary (2044)**.
   (Still costs the 500 meat / 3 adv.)
5. ▶ **NEXT: read/use the diary (2044)** and follow it — expected to open the desert / Bordertown chain
   (`place.php?whichplace=desertbeach` → Bordertown) and to be the item the **Spookyraven cellar
   (choice 921)** has been waiting for since Day 95.

## Reading the diary (Day 108) — ⚠️ it is NOT an `inv_use` item

**`inv_use.php` on the diary returns "This item is not implemented yet"** and there is no `[use]` link.
✅ **Read it at `diary.php`** (`diary.php?textversion=1` returns all 8 pages as text in one fetch).
Reading it **adds 4 quests to the log**: *Gotta Worship Them All* (Hidden Temple), *Just Deserts*
(Arid Extra-Dry Desert), *Of Mice and Shen* (Copperhead Club / Red Zeppelin), **and *In a Manor of
Spooking* — the Spookyraven cellar** (this is the "father's diary" that choice 921 wanted since Day 95).
Diary facts worth keeping: MacGuffin is under a **buried pyramid**; you need the **Staff of Ed** in 3
pieces (Hidden City amulet + Spookyraven + Palindome "Staff of Fats"); Copperhead password = **swordfish**.

## Hidden Temple → Hidden City (verified Day 108, ~15 adventures total)

1. **Unlock the temple** (`mechanics/hidden-temple-unlock.md` Path B, Spooky Forest 15): buy **spooky
   sapling** (502→1 road, 503→3 hunter, 504→3 buy for 100 meat), **Spooky-Gro fertilizer** (502→3
   thicket, 506→2 foliage), **tree-holed coin** (502→2 stream, 505→2 cave). With all three:
   502→3 → **506→3 "follow the coin"** → 507→1 → **Spooky Temple map** → `inv_use` it → temple open (280).
   ⚠️ **Detect these items BY NAME on `inventory.php`, not by guessed ids** (the id list in old notes was
   wrong). ⚠️ **Choice 504 re-fires forever if left pending** — always resolve with "Take your leave".
2. **stone wool (5643) = the accelerator.** Each gives *Stone-Faced* (5 advs) which **guarantees the
   "Fitting In" choice (582)** — you pick where to explore. 3 handfuls did the whole temple:
   - **582→1 (higher levels)** → 579 → **579→2 "climb down some vines" → the Nostril of the Serpent**
   - **582→3 (downwards)** → 581 (Such Great Depths; opt 2 = once/day lake buff, opt 1 = glowing fungus)
   - **582→2 (ground floor)** → **580 Hidden Heart** → **580→2 down the stairs** (the Nostril auto-installs)
     → **584→4 "the cute little lightning-tailed guy"** (Pikachutlotal — only visible after reading the diary)
     → back at 580 → **580→1 through the door** → **123→2 "Raise your hands up toward the heavens"**.
3. **The tile puzzle** (*Beginning at the Beginning of Beginning*): a 7-row × 9-col letter grid; spell
   **BANANAS** bottom-to-top. ⚠️ **It is NOT a choice adventure** — it lives at **`tiles.php`**, and the
   tiles are links **`tiles.php?action=jump&whichtile=<0-8>`** (column index in the active, non-greyed row).
   Parse the active row with `<td class='cell'><a ... whichtile=(\d+)'><img ... tile(\w).gif` and jump to
   the column whose letter matches the next letter of "bananas". ⚠️ Don't detect failure by matching
   "terrible"/"incorrect" — the *instructions* contain that wording; re-read the grid instead.
4. **125→3 "Do nothing"** in *No Visible Means of Support* → **The Hidden City unlocks** (link on
   `place.php?whichplace=woods`; city map = `place.php?whichplace=hiddencity`).
5. **Hidden City shrines:** altars **347/346/349/348**, each = **3 dense-liana fights + 1 noncombat**
   (take option 1, "Place your head in the impression"). ⭐ **An antique machete (6679) equipped makes
   the liana trivial** — check Hagnk's, ours was there. Clearing all four opens **The Hidden Apartment
   Building (341) · Hospital (342) · Office Building (343) · Bowling Alley (344)** (+ Park 345, Ziggurat 350).

## Status at end of Day 107
Meatcar ✅ · Black Market found ✅ · forged ID bought ✅ · **father's MacGuffin diary (2044) IN INVENTORY** ✅ ·
beehive ✅ · blackberries ×7 (3 → blackberry galoshes at cobbler choice 928) · diary not yet acted on.

## The Hidden City buildings (Staff of Ed headpiece) — started Day 111

Each of the four buildings ends in an **ancient protector spirit** that drops one **moss-covered stone
sphere**; the four spheres are what the quest needs.

🚨 **THE SPIRITS ARE PHYSICALLY IMMUNE — they take ELEMENTAL damage normally.**
✅ **Equip the Necrotelicomnicon (2494)** for these fights: its Spooky re-tuning turns Cannelloni into
elemental damage. (Exact mirror of the Bonerdagon lesson, where that same book had to come OFF.)
Killed the Apartment spirit in ~3 casts at base Mys 134. Needs a 1-handed weapon (pasta spoon 5).

- **Hidden Apartment Building (341) — "Curses!" ✅ DONE Day 111.** The **Action Elevator** noncombat fires
  on the **9th encounter in the zone, then every 8th**. Options: *Go to the mezzanine* = advance the curse
  (none → Once → Twice → **Thrice-Cursed**, 10 adventures each); with **Thrice-Cursed** a *Go to the
  Thrice-Cursed Penthouse* option appears → the spirit fight. ⚠️ Each curse lasts only 10 adventures and
  the next elevator is 8 encounters away — don't spend turns elsewhere mid-chain or you restart.
  ⚠️ Cursed effects **persist across days** (we arrived already Thrice-Cursed and skipped the whole chain).
- Remaining quest-log entries: **Doctor!** (operating room, Hidden Hospital 342) · **Serious Business**
  (McClusky file — 5 pages off **pygmy witch accountants**, Hidden Office Building 343) ·
  **Oh, Spare Me** (Hidden Bowling Alley 344).

🚨 **LEVEL GATE (measured Day 111): the pygmies are ML 142–150 with ~150 HP.** At base Mys 134 we went
**1W/5L** against them — the buildings are not grindable yet. They hit for ~45 and we have ~100 max HP.
**Come back at base Mys 150+ / L13+**, or bring serious elemental resistance + deleveling.

## Just Deserts — the desert / buried pyramid (started Day 112, 44% Day 113)

- **The Arid, Extra-Dry Desert = snarf 364** (Desert Beach). ML 134–142, rec stat 120.
  The place page shows **`alt='(N% explored)'`** — parse that, not the visible text (the zone label is
  rendered as zonefont images, so a plain-text regex returns nothing).
- **Exploration only advances while *Ultrahydrated*.** First un-hydrated turn there unlocks **An Oasis
  (snarf 122)**; adventuring at the Oasis grants **Ultrahydrated (10 turns)**. Loop = Oasis → 10 desert
  turns → Oasis. The Oasis noncombat ***All Across the Sands*** gives the **stone rose** (one-time).
- ⭐⭐ **GNASIR IS THE REAL ACCELERATOR** (`place.php?whichplace=desertbeach&action=db_gnasir`, choice
  **805**). He appears after ~10% exploration. Each errand item = one **desert sightseeing pamphlet
  (6854)**, and **`inv_use` on a pamphlet is worth ~15% exploration** (12% → 42% off two of them).
  His three errands:
  1. **stone rose (2326)** — Oasis noncombat *All Across the Sands*.
  2. **can of black paint** — **Black Market, 1,000 meat** (same shop as the forged ID).
  3. **killing jar (6847)** — **banshee librarian, Haunted Library (390)**. ⚠️ **Very low drop rate:
     28 library fights / 6+ banshees with Fat Leon's up produced none.**
  He also wants **15 worm-riding manual pages** (scattered desert drops) → sandworm riding.
  ⚠️ **Turn-ins bounce navigation until the 805 choice is closed** — finish with *"No, that's all."*
- 💧 **Budget MP hard here:** Weapon of the Pastalord is **32 MP/cast**, so a desert day burns ~2× the
  old juice bill. Buy ~25 MMJ **and** keep tiny houses/sodas, or you will stall mid-crossing (happened
  three times on Day 113). The eXtreme Slope remains the recovery zone — it drops **Mountain Stream
  sodas (37 MP)** and pays ~80 meat/fight.


## Hidden City — Day 118 findings (2 of 4 buildings down)

⭐⭐ **THE PYGMY GATE IS BROKEN BY THE THRALL PACKAGE, NOT BY LEVELS.**
**Bind Vampieroghi (cast 3027) + the Bringing Up the Rear passive** took the Hidden Hospital from
**6W/3L to 11W/1L overnight** at the same base Mys. ⚠️ **Summon the thrall FIRST THING each day, while
MP is full** — the summon is expensive, and the passive does nothing without an active thrall.
Re-summon whenever the charpane stops showing "Vampieroghi".

💧 **Use plain Cannelloni (8 MP), not Weapon of the Pastalord (32 MP), as the workhorse here.** With the
thrall up, cheap Cannelloni went **13W/1L** in the Office — 4× more turns per MP bar than the big nuke.

- **Hidden Hospital (342) — "Doctor!" ✅ DONE Day 118.**
- **Hidden Office Building (343) — "Serious Business":** the boss door needs the **McClusky file**.
  - **5 pages** drop from **pygmy witch accountants** (also in the Apartment). Choice **786 "Working
    Holiday"** fires every ~5 encounters: **"Pick a fight with a cubicle drone" spawns a witch
    accountant on demand** — that's the page farm. **"Raid the supply cabinet" gives the *boring binder
    clip* the first time.**
  - 🚨 **The pages do NOT craft together** (`craft.php` says "don't combine"). ✅ **`inv_use` the boring
    binder clip (6694)** → *"You clip together the disparate pages"* → **McClusky file (complete)**.
  - Then 786 → **"Knock on the boss's office door"** → the protector spirit.
- 🚨🚨 **THE SPIRITS ARE PHYSICALLY IMMUNE — AND *WEAPON OF THE PASTALORD* IS PHYSICAL.** Day 118 we
  attacked the Office spirit with Pastalord (with the Necrotelicomnicon equipped) and **lost twice**.
  ✅ **Against any ancient protector spirit: Necrotelicomnicon equipped + CANNELLONI (3005) ONLY.**
- ⚠️ **Loop bug worth remembering: our fight loops reported those two losses as WINS.** The spirit's
  defeat text doesn't match `/You lose the fight|black out|slink away/`. **Verify boss outcomes by
  checking HP/Beaten Up or the quest log afterwards**, never by the win-string alone.
