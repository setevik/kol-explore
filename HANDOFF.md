# KoL Session Handoff (latest as of Day 38 / 2026-05-24)

## Character Current State (End of Day 38 - FINAL)

- **Character**: ClaudeCode, **Level 11** Pastamancer
- **Stats**: Mus 90 / **Mys 127 base (138 buffed w/ Pasta Oneness)** / Mox 86
- **Max HP/MP**: 143/207
- **Currently**: HP 143, MP ~24
- **Meat**: ~44,511
- **Adventures**: 0 (HARD RULE satisfied, zero Beaten Ups all session)
- **Day 38 outcome: slow.** Tried Dakota Fanning (needs 3 items I lack: bendy soda straw / high-octane plant food / sewing needle). Pivoted to Spooky Forest Arboreal Respite chain. NC fired ~4 times. Sub-NC tree more nested than expected ("Arboreal opt 1 'Follow the old road' → 'Road Less Traveled' opt 2 'Knock on the cottage door' → ???") — chain ended without acquiring sapling. **0/3 Hidden Temple unlock items acquired.** Stats +1 each base from grinding. Still 0 tiny houses. Eye of Ed (from Day 37) intact.
- **Day 39 plan**: step through Arboreal Respite manually next time it fires, inspect the cottage-door sub-screen's option labels, then encode the correct path. Sapling expected from a "buy a tree for 100 meat" option at "Tree's Last Stand" inside the Road Less Traveled chain.

## Earlier — End of Day 37 state (historical)

- Mus 90 / Mys 126 base (137 buffed) / Mox 85, HP/MP 143/206, Meat ~42,833, advs 0.
- **🏆 BIG Day 37 win: SPOOKYRAVEN CELLAR QUEST COMPLETE — Eye of Ed acquired (1 of 3 Staff of Ed parts).**
  - All 6 mortar-dissolving reagents collected (today added: turpentine, sublicalc, triatomaceous dust).
  - **Lab + Storage Room are on manor3 (3rd floor): Lab = 396, Storage Room = 398.** (Old hypothesis "Boiler Room 399 = Lab" was wrong.)
  - **Wall auto-mixes** with all 6 reagents (no manual crafting needed).
  - **Lord Spookyraven** killed in 3 rounds via Entangle→Mortar→Cannelloni — Mortar's queued ~200-dmg detonation is decisive on bosses.
  - Drops: **Eye of Ed** + Lord Spookyraven's ear trumpet + +Mus point + heavy stat XP.
- **Big correction**: cellar gives **Eye of Ed**, NOT Staff of Fats as old notes claimed. Staff of Fats is from **Palindome (Dr. Awkward boss)** — separate questline (Mr. Alarm → wet stunt nut stew → Mega Gem → Palindome → Dr. Awkward). Mechanics files updated.
- **Cannelloni Cannon damage element**: landed "hailstones" on Lord Spookyraven → looks like **COLD**. Should let us beat Hidden City protector spirits (immune to physical, need elemental). Verify in-game.
- **Day 37 misses**: still 0 tiny houses (Airship grind didn't drop any in ~10 fights).

## Staff of Ed assembly status (1/3 components)

```
ancient amulet (Hidden City — protector spirits + Protector Spectre boss)  [❌]
                  +
Eye of Ed (Spookyraven cellar — Lord Spookyraven boss)                     [✅ Day 37]
                  ↓
            headpiece of the Staff of Ed
                  +
Staff of Fats (Palindome — Dr. Awkward boss)                               [❌]
                  ↓
              STAFF OF ED → insert into pyramid socket (Desert Beach)
```

## Earlier state (historical)

- End Day 36: Mys 124 base, cellar unlocked, 3/6 reagents.
- End Day 35: Mys 122 base, Library unlocked, Spookyraven library key in inventory.
- End Day 34: Mys 120 base, desert 100%, pyramid revealed.
- **🔺 HOLY MACGUFFIN: Arid Desert exploration = 100% — COMPLETE. Pyramid at Desert Beach REVEALED** (`place.php?whichplace=desertbeach` → `db_pyramid1`). It needs the **Staff of Ed (3 parts)** inserted into the model's socket.
- **Have worm-riding hooks** (from Gnasir, turning in the 15 manual pages — choice 805 option 3). drum machine never obtained, but desert is 100% so it's moot.

### Day 34 quick summary
Rollover 44 advs → ate to 78 (2× stolen sushi = +25 adv & stat points; **centipede eggs POISON you — never eat them**). Gnasir gave worm-riding hooks. Burned food-poison off in Spooky Forest (15). AUTO-CYCLE desert(364)/Oasis(122) ground exploration 63→100%. Pyramid revealed & investigated (needs Staff of Ed). Spent the tail safely farming Airship (81) at Mys 131. Airship dropped **no tiny houses** — still 0 in stock.
- **Drunk**: 0/14 (NO usable booze — open sauce/Ye Olde Meade unimplemented), **Full**: 15/15
- **Familiar**: Marcellus, 20-pound Mosquito (drains blood, heals me)
- **Pasta Thrall**: Ned, Lvl 10 Vampieroghi (drains blood, heals me, deals damage)
- **Equipment** (current):
  - Hat: fuzzy earmuffs (Power 130, +5 Mys)
  - Weapon: pasta spoon (1-2 dmg 1h) — keep for Pastamancer synergy
  - Off-Hand: **UV-resistant compass** (+1% desert exploration/fight — keep equipped during Holy MacGuffin desert phase; was skull of the Bonerdagon)
  - Pants: snowboarder pants (Power 100)
  - Accessories: Baron von Ratsworth's monocle (+10% item drops), whalebone corset, imp unity ring
- **Inventory hot items (Day 32 EOD)**:
  - **17 tiny house** (Airship stockpile — partial HP/MP restore + clears Beaten Up)
  - 8 scroll of drastic healing (full HP), 22 soft green echo eyedrop antidote, 0-1 phonics down
  - **Buff stash**: ~4 glittery mascara, ~1 hair spray, ~4 Ben-Gal Balm, super-spiky hair gel
  - Spleen: 0 hardening cream (used up — NEED MORE for Really Hard DR 50), 0 sparkling orb, ~4 strongness elixir, ~5 concentrated cooking, ~4 dieting pill
  - ~10 cocoa eggshell fragment, 42 dry noodles
  - **open sauce + Ye Olde Meade = UNIMPLEMENTED** ("not implemented yet" — cannot drink, no adv banking)
  - giant heirloom grape tomato (Top Floor drop, ~15 adv/each — best food)
  - Combat items: 8-ball, antique hand mirror, Battlie Light Saver, brass gear, photoprotoneutron torpedo (×7), etc.

## ⚔️ Combat Template (Day 32 — proven)
**Entangle-first loop**: Round 1 = **Entangling Noodles** (3 MP, STUNS for Pastamancer) → Rounds 2+ = **Stuffed Mortar Shell** then **Cannelloni Cannon**. Lasagna at HP<40%, Spaghetti at MP<6, weapon-attack at 0 MP. Track per-fight turn with `window._ft` (reset to 0 each new adventure). Stun + familiar (Marcellus heals ~40/rd) + thrall (Ned) = clean ~3-round wins at ~100% HP, near-zero Beaten Ups even with no DR. Loop also needs `window._idleN`→re-adventure after 2 idle ticks (recovers from blank/donation-banner stalls after disconnects).

## 💧 MP Economy (Day 32 — SOLVED)
**`inv_use.php?which=3&whichitem=592&pwd=HASH` (tiny house) WORKS via URL** — ~+23 MP, no adv cost, no DOM-click needed. Refill between fights to keep Mortar/Cannelloni fast. Campground rest x8 also builds a buffer (1 adv each, ~+13 MP). 17 tiny houses were available Day 32 (now ~0 — replenish from Airship).

## 🎓 Guild Skills (Day 32)
Account already knows the ENTIRE Pastamancer tree (Level 4–15, permed). Nothing to train. Brie list = full catalog. Underused already-known skills: Entangling Noodles (R1 stun), Cannelloni Cocoon (expensive full heal — often hidden from menu when MP too low), Spirit of Ravioli (DR), Spirit of Rigatoni, Weapon of the Pastalord, Thrall Unit Tactics. Buyskill param = `whichskill` not `skillid`.

## ⛔ HARD RULE: Don't End the Day With ≥40 Advs Unspent
Banked adventures roll over but waste daily potential. **Keep adventuring until < 40 advs remain** (ideally ~0). Disconnects / MP starvation / stalled quest / boredom are NOT stop reasons — adapt instead: re-login, refill MP via tiny house (`inv_use.php?which=3&whichitem=592` — works, ~+23 MP, no adv cost), or fall back to Airship (snarfblat 81, sustainable at 0 MP via Spaghetti+companions). Only stop early if truly out of advs, Beaten-Up with no recovery, or user says so. Diary+commit is the LAST step after advs are spent.

## ⚠️ Operational Note: Extension Disconnects + Tab Throttling (Day 34)
Chrome extension drops ~every 8-12 min (service-worker sleep when backgrounded). **Worse #1 limiter: background-tab timer throttling** — a backgrounded tab's in-page `setTimeout` loop drops to ~1 tick/min. **Workaround (Day 34, works):** fire an `async` burst of ~7-9 `_tick()`s with ~4.4s spacing from one `javascript_tool` call. CDP eval "times out" at 45s **but the async keeps running in-page past the timeout** — the timeout error is benign; verify progress with a follow-up read. Each burst ≈ 2-4 advs. Keeping the Chrome tab foregrounded eliminates the throttle entirely (best fix). Also: returning page HTML/hrefs containing `pwd=`/query strings → `[BLOCKED: Cookie/query string data]`; strip query strings, return only labels + parsed params.

## ⚔️ Day 34 Combat/Consumable Lessons
- **NEVER eat centipede eggs** — inflicts "Somewhat Poisoned" (~−53 flat Mys, capped HP/MP, ~9-10 turns). Burn it off in a safe no-warning zone (Spooky Forest 15) before doing high-Mys zones.
- **stolen sushi** = excellent food: ~12-13 adv + big substats + often a stat point each. Eat these first.
- **Do NOT trade combat kill-speed for MP economy while 0 tiny houses.** Tried low-MP (Entangle+Spaghetti+companions) — tanky desert monsters (cactuary) out-damage it once stun lapses → HP to 26%. The proven R1 Entangle → R2 Mortar → R3+ Cannelloni combo is mandatory for safety. Accept the ~1-rest-per-fight tax.
- **Tiny house restock is the top logistical priority** — 0 in stock all of Day 34 caused a ~50%-efficient rest spiral. Airship (81) did NOT drop any. Source them early Day 35.

## Login Credentials (test account, not secret)
- Login: `ClaudeCode`
- Password: `REDACTED`
- URL: `https://www.kingdomofloathing.com/login.php`

## Active Quests (Day 32 EOD — verified via questlog.php)

### Council Quests
1. **There Can Be Only One Topping** (Highland Lord signal fires)
   - A-Boo Peak ✓, Oil Peak ✓, **Twin Peak (mysterious!)** still pending
   - **Twin Peak = snarfblat 297** (confirmed Day 31). Hedge-maze topiary animals → "Great Overlook Lodge" interior.
   - Gated by 4 noncombats needing: hot res ≥4, stench res ≥4, drunkenness check, Spookyraven library quest done. **Blocked** — don't grind here without prep gear.
2. ~~**The Rain on the Plains is Mainly Garbage**~~ ✅ **COMPLETE Day 32** — kitchen-counter noncombat fired on Top Floor (324) after ~22 advs; turned in at Council; reward: giant discarded plastic fork
3. **The Holy MacGuffin** (Council) — desert phase **DONE (Day 34)**. **Now: assemble the Staff of Ed (3 parts, any order), insert into the pyramid socket at Desert Beach (`db_pyramid1`).**
   - ✅ **Arid Desert 100% explored → pyramid revealed & investigated (Day 34)**. AUTO-CYCLE desert(364)/Oasis(122); Oasis warning bypass = POST form `action=ignorewarning`+`nozonewarnings=1` (NOT `ignorewarning=1`).
   - **Staff of Ed parts still needed** — full wiki-sourced walkthrough now in **`mechanics/staff-of-ed-quest.md`**. Assembly = ancient amulet + Eye of Ed → headpiece; headpiece + Staff of Fats → Staff of Ed. Routes: (a) **Staff of Fats** = Spookyraven Haunted Wine Cellar (wine bomb: Chateau de Vinegar + blasting soda → unstable fulminate → +100 ML boiler → wine bomb → blow wall); (b) **ancient amulet** = Hidden Temple → Hidden City (4 protector spirits → spheres → shrines → 4 stone triangles → Ziggurat → Protector Spectre; **spirits are PHYSICAL-IMMUNE, need elemental dmg** — possible Pastamancer blocker, verify); (c) **Eye of Ed** = Hidden Temple noncombat; plus the Copperhead/Shen + Red Zeppelin/Ron sub-track. After Staff inserted → pyramid Upper/Middle/Lower chambers → **Ed the Undying** boss. ⚠️ Several steps are search-derived & flagged "verify in-game" in the mechanics file.
   - Older Staff-of-Ed phase log (Day 33):
   - ✅ Black Market (Black Forest 405) → forged identification documents (`shop.php?whichshop=blackmarket` whichrow=281, 5k meat)
   - ✅ Desert Bus pass (General Store `shop.php?whichshop=generalstore` whichrow=657, 5k meat) → Desert Beach unlocked
   - ✅ The Shore Inc (snarfblat 355 / **choice 793 OPTION 1** "Distant Lands Dude Ranch" — works ONLY with forged ID in inventory) → **father's MacGuffin diary** (3 adv + 500 meat)
   - ✅ Read diary (inventory [read] link) → **Staff of Ed questline** unlocked
   - 🔺 **NOW: Arid Extra-Dry Desert exploration = 63%** (snarfblat 364). Need 100% → pyramid noncombat. Mechanic: Oasis (snarfblat 122) gives **Ultrahydrated** (~5 turns) → desert becomes Ultrahydrated version where exploration counts + worm-riding manual pages drop (need 15 → Gnasir → worm-riding hooks + drum machine = +30%; pages did NOT drop Day 33, raw exploration is the route). **UV-resistant compass equipped = +1%/fight.** **AUTO-CYCLE loop**: snarfblat = /Ultrahydrated/.test(charpane) ? 364 : 122.
   - **Gnasir's Place** (Desert Beach map, element title 'Gnasir' → click closest('a')): errands → desert sightseeing pamphlets (+15% explore each, up to 3). Day 33: gave can of black paint → 1 pamphlet used (+15%). Also "A Ruined House" on map (stone rose / more errand items).
   - **Staff of Ed = 3 parts (any order)** needed to open pyramid: Hidden Temple (Distant Woods), Spookyraven Manor cellar (see `mechanics/spookyraven-ghost-chain.md`), Copperhead Club (Wrong Side of the Tracks → Shen Copperhead) + Red Zeppelin (Ron Copperhead). Can pursue in parallel with desert.
4. ~~**Cryptic Emanations**~~ ✅ CLOSED Day 28 (Bonerdagon)

### Guild Quests (Pastamancer)
4. **Me and My Nemesis** — Retrieve the Epic Weapon (see `mechanics/nemesis-quest.md`)
5. **My Other Car Is Made of Meat** — parts gathered; Untinker at Degrassi Knoll (knoll_friendly path was blocked — needs different approach)

## Critical Discoveries (Days 28–32)

### ⭐ Stuffed Mortar Shell (skill 3007, 8 MP) — Day 31
- **~2× Cannelloni Cannon damage** at same Mys/MP cost
- Damage is **delayed to NEXT round**, and it can only be cast **once per fight** (vanishes from skill menu while a Mortar is pending)
- Optimal combo: R1 Mortar (queues ~100) → R2 Cannelloni (~55 immediate + Mortar lands) = ~155 burst over 2 rounds for 16 MP
- Combat tick prefers Mortar if present in dropdown, else Cannelloni

### Pastamastery (skill 3006, 10 MP, once/day) — Day 31
- Summons +3 dry noodles. Only appears in skills.php on days not yet cast. "Daily Reminders" on main.php tracks it.

### Tiny house — CORRECTED (Day 30)
- **PARTIAL** restore (~21 HP, ~23 MP), NOT full. But **does clear Beaten Up**.
- Use `scroll of drastic healing` (8 in stock) for full HP. Have **17 tiny house** (Airship stockpile).
- Spleen/some misc items fail via `inv_use.php?which=3` URL — **DOM-click the [use] link** in inventory.php instead (see `mechanics/browser-automation.md`).

### Phonics down — split behavior (Day 32)
- Buff (Tingly Wrists/Elbows: +Mys and/or +Mox, 3 turns) → applies via URL ✅
- +99 MP restore → does NOT apply via `inv_use.php?which=3` ❌. Use campground rest or tiny-house DOM-click for MP.

### Booze items unimplemented (Day 32)
- `open sauce` (6274), `Ye Olde Meade` (6276) → "This item is not implemented yet." Cannot drink. No rollover-booze adv banking. Need a real booze source (Bat Hole / Typical Tavern 233 / mall).

### giant heirloom grape tomato (Day 32)
- Top Floor giant drop. ~15 adventures each. Best food available — always eat these.

### Bonerdagon wing-flap mechanic (CORRECTED via wiki + observation)
- **Boss has only 120 HP** — one Cannelloni at Mys 97+ does ~98 dmg = nearly one-shots
- Wing-flap disrupts both skills AND items (per wiki: 25%, but my observed rate was ~86%)
- MP not consumed when disrupted, but you still take 37 spooky dmg
- **Safe Moxie = 98** (he can't hit you above this)
- Guaranteed drops: chest of the Bonerdagon, skull of the Bonerdagon
- **Strategy options**:
  - Push **Moxie to 98+** (safe Moxie threshold) — he can't hit you, just keep casting until 1 lands
  - Or bring lots of MP + tiny houses + scroll of drastic healing for sustainability through disrupts
  - Or test combat items (smut orc keepsake box, hellion cube, dried face) — wiki says items also disrupted, but worth testing

### Skill IDs from page DOM
- Manicotti Meditation = 3000
- Lasagna Bandages = 3009
- Springy Fusilli = 3015
- Cannelloni Cannon = 3005
- Entangling Noodles = 3004
- Spaghetti Spear = 3020

### URL patterns (verified working)
- Cast skill quantity: `runskillz.php?action=Skillz&whichskill=ID&ajax=1&quantity=N&pwd=HASH`
- Eat: `inv_eat.php?which=1&whichitem=ID&pwd=HASH`
- Use item: `inv_use.php?which=3&whichitem=ID&pwd=HASH` (some items need which=1)
- Combat skill: `fight.php?action=skill&whichskill=ID`
- Get pwd hash: regex from page HTML `pwd[=:]\s*['"]?([a-f0-9]{32})`

### Consumables economy
- ghuol egg = 1 fullness, 1 adv (low quality, fills space)
- stale baguette = ~3 fullness, 6 advs (-7 meat from hooligans event)
- pink slime = ~4 fullness, similar advs
- glass of goat's milk = 1 booze, 1 adv (only "drink" I had)

## Combat Strategy Status

### Pasta One-Two Punch (Pastamancer combo)
1. **Round 1**: Entangling Noodles (3 MP) → STUNS for Pastamancers
2. **Round 2+**: Cannelloni Cannon (8 MP) — does ~98 dmg at Mys 97-103
3. **Threshold**: HP < 35% → Lasagna Bandages (6 MP, ~12-21 HP heal)
4. **MP < 6**: Spaghetti Spear (1 MP) basic chip damage
5. **Backup**: Marcellus + Ned drain blood every round → heal you for ~25-50 HP, also damage enemy ~20

### Combat tick code (works in DevTools / mainpane JS)

```javascript
window._snarfblat = 81; // airship, change as needed
window.tick = function() {
  var doc = frames['mainpane'].document;
  var t = (doc.body.innerText || '').toLowerCase();
  if (t.includes('adventure again')) {
    if (t.includes('out of adventures') || t.includes('tired')) return 'done';
    frames['mainpane'].location.href = 'adventure.php?snarfblat=' + window._snarfblat;
    return 'next adv';
  }
  if (t.includes('beaten up')) return 'beaten up - stop';
  var sels = doc.querySelectorAll('select');
  var hasSkillBtn = false;
  doc.querySelectorAll('input[type="submit"]').forEach(b => {
    if ((b.value || '').includes('Use Skill')) hasSkillBtn = true;
  });
  if (t.includes("you're fighting") && hasSkillBtn && sels.length >= 2) {
    var skillSel = sels[1];
    var charText = frames['charpane'].document.body.innerText;
    var nums = charText.match(/(\d+)\s*\/\s*(\d+)/g) || [];
    var hpFrac = 1, mp = 999;
    if (nums.length >= 1) {
      var p = nums[0].split('/').map(s => parseInt(s.trim()));
      hpFrac = p[0]/p[1];
    }
    if (nums.length >= 2) {
      var p = nums[1].split('/').map(s => parseInt(s.trim()));
      mp = p[0];
    }
    var target;
    // FIXED: gate Lasagna on MP >= 6
    if (hpFrac < 0.35 && mp >= 6) target = 'Lasagna';
    else if (mp < 8) target = 'Spaghetti';
    else target = 'Cannelloni';
    for (var i = 0; i < skillSel.options.length; i++) {
      if (skillSel.options[i].textContent.includes(target)) {
        skillSel.selectedIndex = i;
        skillSel.dispatchEvent(new Event('change', {bubbles: true}));
        break;
      }
    }
    var btns = doc.querySelectorAll('input[type="submit"], button');
    for (var b of btns) {
      if ((b.value || '').includes('Use Skill')) { b.click(); break; }
    }
    return 'cast ' + target + ' (HP ' + (hpFrac*100|0) + '% MP ' + mp + ')';
  }
  if (!hasSkillBtn) {
    var btns = doc.querySelectorAll('input[type="submit"], button');
    for (var b of btns) {
      var v = (b.value || b.textContent || '').toLowerCase();
      if (v && !v.includes('away') && v.length > 3) {
        b.click();
        return 'choice: ' + v;
      }
    }
  }
  return 'idle';
};
```

**Known bot bug (Day 28)**: Original tick had `if (hpFrac < 0.4) target = 'Lasagna'` which fires at MP 0/1, fails silently, infinite loop. **Fixed**: gate Lasagna on `hpFrac < 0.35 && mp >= 6`. Above is the corrected version.

## What Worked Well ✅

- **EAT → ADVENTURE → DRINK** order — never reverse. Critical lesson from Day 4.
- **Pasta thrall + familiar combo** — they auto-attack/heal every round. Even with my pasta spoon doing 1 dmg, they can solo low-tier enemies (oil slick: 1 + 16 + 16 = 33 dmg total).
- **Cannelloni Cannon** at Mys 97-103 = 90-110 dmg per cast, 1-2 shots most airship/peak enemies.
- **Tiny house emergency recovery** — confirmed cures Beaten Up and doesn't cost adv.

## What Didn't Work ❌

- **Bonerdagon spell-only strategy** — wing-flap disruption breaks Pastamancer's whole MO. Need combat items or much higher Mys.
- **Penultimate Fantasy Airship at Mys 97** — Burly Sidekick + MagiMechTech MechaMech keep Beaten Up'ing me. Each BU = 1 tiny house spent.
- **Cooking dry noodles + lihc eye** — not a recipe at my crafting tier.
- **Run Away has random success** — got stuck running 3 times in a row, used 3 advs for nothing.
- **`runskillz.php` via fetch** — returned 200 but length 0. Use mainpane navigation (`location.href`) instead, which definitely works.

## Tomorrow's Priorities (Day 30) — UPDATED

1. **Moxie boost for Castle Basement** — Mox 65 is too low (need safe Mox 98). Need to find +Mox accessories. Check `inventory.php?which=2`. Also use phonics down (3 available, +Mox via Tingly Elbows).
2. **Continue Penultimate Fantasy Airship grinding** — best zone for: stat XP, meat, tiny house drops, phonics down drops. Safe at current stats.
3. **Find Twin Peak entry** — still mysterious, may be sub-area or trigger event.

## Tomorrow's Priorities (Day 29) — COMPLETED Day 29

1. **Continue Castle Basement** — ATTEMPTED ❌ (Mox 65 too low, took BU twice)
2. **Twin Peak Pantry** — Lvl 9 Highland zone. Need 50%+ item drops gear. Check inventory which=2 for any +ItemDrop accessories.
3. **Meatcar assembly** — Untinker NPC at `place.php?whichplace=knoll_friendly` was BLOCKED today. Investigate alternative paths (might need different snarfblat or NPC). Have all 13 springs / 9 sprockets / 11 cogs / 10 empty meat tanks / 14 tires.
4. **Nemesis Quest** — start the Pastamancer "Me and My Nemesis" guild quest. See `mechanics/nemesis-quest.md`.
5. **Buff stack for tough fights**:
   - 7 glittery mascara (+5 Mox each), 7 hair spray (+15% Mox), 7 Ben-Gal (+5 Mus)
   - All stack as different effects! Use 1 of each for ~+15 Mox boost
   - Use 1 hardening cream (DR 50, 50 turns) before any boss attempt
   - Use 1 sparkling orb for Latently Energized (HP/MP cap boost)
6. **Cheap booze hunt** — Mall booze starts at 23,799 meat (too expensive). Try:
   - Adventure Bat Hole zones (booze drops?)
   - Hidden Tavern (cheap drinks if accessible)
   - Knob Goblin seltzer (Outskirts of Cobb's Knob)
7. **Pool Skill push** for Haunted Billiards Room — pool shark hair oil + cast + chalk + drunk 10 = enough skill.

## ⚠️ Bonerdagon Lessons Learned (Day 28) — RESOLVED

- Bonerdagon HP = 120, but wing-flap disrupted 6/7 spell attempts
- **WINNING STRATEGY**: hardening cream (Really Hard DR 50) makes his 37-dmg attacks deal 1 dmg
- Just keep casting Cannelloni until one lands — at Mys 100+ each successful cast does 55-98 dmg
- Mox 79 was enough to occasionally fumble his attacks (safe Mox = 98 ideal, but not required with DR 50)
- Day 28 final fight: 4 disrupts, 1 Cannelloni success, 4 his hits totaling 4 HP damage. Easy win once strategy was correct.

## 🔑 KEY DAY 28 DISCOVERIES

### hardening cream (spleen item) → "Really Hard"
- **Damage Reduction: 50** (flat, possibly percentage)
- 50 turns duration
- Toxicity: 1 (1 spleen)
- **GAME CHANGER for any tough fight** — turns 37-dmg attacks into 1 dmg

### sparkling orb (spleen item) → "Latently Energized"  
- +HP cap, +MP cap
- 30 turns duration

### Buff stack mechanics
- glittery mascara → "Glittering Eyelashes" (+5 Mox flat)
- hair spray → "Butt-Rock Hair" (+15% Mox)
- Ben-Gal Balm → "Go Get 'Em, Tiger!" (+5 Mus)
- ALL STACK as different effects. Total +Mox ≈ +14 from 2 items.

### Mall search field
- Search input is named `pudnuggler` (typical KoL silliness), NOT `searchstring`
- Mall has antique beer (1 mil meat, too expensive) and bark rootbeer (24k+ meat)

### Untinker NPC
- `place.php?whichplace=knoll_friendly` BLOCKED Day 28 ("No, no, no.")
- Needs investigation: meatcar quest may require different approach
- Alternative: could be quest-gated, may need to advance Council quests first

## File Structure in Project

```
my-adventures/
  2026-04-09.md ... 2026-05-07.md   (Days 1-27)
  2026-05-10.md                     (Day 28 - this session)

mechanics/
  game-structure.md
  pastamancer-class.md
  stats-and-leveling.md
  combat-and-initiative.md
  cobb-knob-quest.md
  equipment-strategy.md
  friars-blessings.md
  nemesis-quest.md
  pool-skill.md
  spookyraven-ghost-chain.md
  bonerdagon-boss.md       (Day 28 — wing-flap mechanic)
  recovery-items.md        (Day 28 — tiny house, phonics down, etc.)
```

## Key Snarfblat IDs (verified)
- 15: Spooky Forest
- 30-34: Bat Hole zones
- 81: **Penultimate Fantasy Airship** (the airship is 81, NOT 135)
- 113: Haunted Pantry
- 114: Outskirts of Cobb's Knob
- 233: A Barroom Brawl (Typical Tavern)
- 296: A-Boo Peak (lit)
- 297 / 298: Oil Peak / Twin Peak (need to verify which is which — 298 returned Oil Peak today)
- 322: Castle Basement (need Mys 130)
- 323: Castle Ground Floor (locked)
- 324: Castle Top Floor (locked)
- 388/389: Haunted Kitchen / Conservatory
- 539-541: Friars Dark zones

## Optimal Daily Routine (Template)

1. **Log in** (`login.php` or `game.php`)
2. **Cast Pastamastery** (once/day, summons dry noodles)
3. **Cast Manicotti Meditation × 5+** (Pasta Oneness stack — minor +Mys but cheap)
4. **Cast Springy Fusilli** (10 MP, +20% initiative for 10 turns)
5. **Use phonics down** if available — pre-buff for tough fights
6. **Eat food** (best food first, ghuol eggs to top off — pasta crafting doesn't work yet)
7. **Adventure** with Cannelloni Cannon spam, retreat at HP < 30%
8. **Use tiny house** if Beaten Up
9. **Drink booze last** to bank advs (rolloover preserves up to 200 advs)
10. **Write daily diary** in `my-adventures/YYYY-MM-DD.md`
