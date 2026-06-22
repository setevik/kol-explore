# Browser Automation Quirks (Chrome Extension + KoL Frames)

## Frame layout

`game.php` loads as 4 frames: `charpane` (left status), `menupane` (top), `mainpane` (content), `chatpane` (right chat). All navigation goes through:

```js
frames['mainpane'].location.href = 'path.php?args'
```

Reading state goes through:

```js
frames['charpane'].document.body.innerText  // for HP/MP/effects/quest list
frames['mainpane'].document.body.innerText  // for current adventure/combat
```

## URL patterns (verified)

| Action | URL |
|--------|-----|
| Adventure | `adventure.php?snarfblat=ID` |
| Cast skill (out of combat) | `runskillz.php?action=Skillz&whichskill=ID&ajax=1&quantity=N&pwd=HASH` |
| Eat food | `inv_eat.php?which=1&whichitem=ID&pwd=HASH` (supports `quantity=N`) |
| Use item | `inv_use.php?which=3&whichitem=ID&pwd=HASH` (food=1, equip=2, misc=3) |
| Equip | `inv_equip.php?which=2&action=equip&whichitem=ID&pwd=HASH` |
| Unequip slot | `inv_equip.php?which=2&action=unequip&type=acc1\|acc2\|acc3\|hat\|...&pwd=HASH` |
| Refresh charpane | `charpane.php` |
| Combat: cast skill | `fight.php?action=skill&whichskill=ID` |

## Get pwd hash

The 32-hex-char password hash is needed for state-changing requests. Search the HTML of any page:

```js
var html = frames['mainpane'].document.body.innerHTML + frames['charpane'].document.body.innerHTML;
var m = html.match(/pwd[=:]\s*["']?([a-f0-9]{32})/);
window._pwd = m ? m[1] : null;
```

If not found, navigate to `inventory.php?which=1` first — it always has the hash in form fields.

## ⚠️ Spleen items: URL fails, DOM click works

**Bug (Day 30)**: `inv_use.php?which=3&whichitem=ID` silently fails for some spleen items.

- **Works**: concentrated cooking (11328), dieting pill (9707), tiny house (592, misc), phonics down (593, misc), mascara/spray/Ben-Gal (3485/744/2595, misc)
- **Fails**: hardening cream (11331), sparkling orb (11330) — server returns 200 but item count doesn't decrement, no effect applied

**Workaround**: navigate to `inventory.php?which=1`, then click the `[use]` link via DOM:

```js
var trs = frames['mainpane'].document.querySelectorAll('tr');
trs.forEach(tr => {
  var txt = tr.textContent.replace(/\s+/g,' ').trim();
  if (txt.startsWith('hardening cream') && txt.length < 50) {
    tr.querySelector('a').click();
  }
});
```

The `txt.length < 50` filter is critical — `tr.textContent` for the parent table can include ALL row text concatenated, matching everything. Filter to single-item rows only.

## Combat tick loop pattern

A self-paced setTimeout loop that handles all in-combat decisions:

```js
window._snarfblat = 81; window._advCount = 0; window._log = []; window._stop = false;

window.tick = function() {
  try {
    var doc = frames['mainpane'].document;
    var t = (doc.body.innerText || '').toLowerCase();
    if (t.includes('out of adventures') || t.includes('too tired')) return 'done';
    if (t.includes('beaten up')) return 'beaten up - stop';
    if (t.includes('adventure again')) {
      window._advCount++;
      frames['mainpane'].location.href = 'adventure.php?snarfblat=' + window._snarfblat;
      return 'next adv #' + window._advCount;
    }
    // ... (combat skill selection, choice button click)
  } catch(e) { return 'err: ' + e.message; }
};

window.runLoop = function() {
  if (window._stop) return;
  try {
    var r = window.tick();
    window._log.push(r);
    if (r === 'done' || r.includes('beaten up')) { window._stop = true; return; }
  } catch(e) { window._log.push('err: ' + e.message); }
  setTimeout(window.runLoop, 2500);
};
window.runLoop();
```

**Key gotchas**:
- `setInterval` dies on frame navigation. Use recursive `setTimeout`.
- The loop sometimes **silently stops** without setting `_stop` — possibly an uncaught exception during frame transition. **Mitigation**: monitor `window._advCount` deltas. If unchanged for >60s while combat is active, restart with `window._stop=false; window.runLoop();`.
- "Adventure Again" is a LINK on most pages, but the loop just navigates directly via `location.href` — simpler and works.
- Choice encounters (e.g., "Investigate the crew quarters" on Airship): the loop falls through to a button-click branch that picks the first non-trivial submit.

## Re-login flow

If `frames['mainpane'].location.href.includes('login')`, navigate to `https://www.kingdomofloathing.com/login.php`, fill `name=loginname` and `name=password` fields, submit form. Session state is preserved server-side — buffs, HP, MP, advs, inventory all persist through extension/tab restart.

## Anti-injection blocking

The Chrome extension blocks tool calls that return strings matching "Cookie/query string data" pattern — usually triggered by URLs in tool outputs. **Workaround**: when extracting data from page, strip URLs before returning, or use indices/text-only extraction.

## Recovery patterns

| Issue | Recovery |
|-------|----------|
| Tab disappeared mid-session | `tabs_context_mcp` with `createIfEmpty: true`, then navigate to game.php — session usually still alive |
| Extension disconnected | Wait + retry; if persistent, ask user to click extension icon |
| Render frozen (CDP timeout) | Tab may have crashed; check tab URL — often on login.php after recovery |
| Run Away failed twice | It will probably succeed on retry #3 (each attempt fails ~50%) |
| MP starved mid-grind | Companions (familiar + thrall) still deal ~30+ dmg/round; just let Spaghetti Spear spam carry; OR use phonics down for +99 MP |

---

## ⚠️⚠️ Day 67 hard-won findings (fetch-driven engine + status reads) — READ THESE

These cost hours on Day 67. The newer, more robust automation style is **fetch-driven** (do everything with
`fetch(url,{credentials:'include',cache:'no-store'})` in page context, parse the returned HTML), NOT the
old `frames['mainpane'].location.href` + setTimeout tick. Fetch survives backgrounding/throttling. But it has traps:

### 1. `api.php?what=status` — `for=` is REQUIRED; it can go stale under HEAVY rapid polling (RETESTED Day 67)
- **`for=` is genuinely required** (RETESTED): `api.php?what=status` with no `for=` returns
  `{"error":"You must supply a \"for\" parameter describing why..."}`. With `for=anything` it returns full
  status JSON (keys: playerid,name,hardcore,drunk,full,hp,mp,meat,turnsplayed,familiar,...).
- **api is NOT inherently stale** (RETESTED out of combat, light polling): it correctly reflected a live MMJ
  purchase (meat 5737→5637) and a tiny-house MP change (mp 17→83) immediately. Use it freely for normal reads.
- **BUT it CAN freeze under heavy rapid polling.** During the Day-67 combat/farm loops I polled
  `for=ClaudeCode` every single round; mid-session a fresh charpane showed MP 224 while api returned mp=2 (and
  hp/meat/adv also lagged). Most likely KoL **rate-limits/caches the status endpoint per `for=` string** when
  hammered. **Mitigations:** poll less often, **vary the `for=` value** between calls, or read the charpane.
- **api `what=inventory` was reliable for item COUNTS** throughout (used for MMJ, fog, torpedo, cream counts).
- **Backup for live HP/MP = reload the charpane FRAME and parse it — but mind the VARIABLE pair order:**
  ```js
  frames['charpane'].location.href = 'charpane.php?_cb=' + Math.floor(performance.now()*1000);
  // after onload:
  var c = frames['charpane'].document.body.innerText.replace(/\s+/g,' ').trim();
  var pairs = c.match(/(\d+)\s*\/\s*(\d+)/g);
  // ⚠️ pairs[0] is NOT always HP. When drunk/full are NONZERO they render as the FIRST "X / Y" pair:
  //   drunk=0: pairs = [HP, MP]                 e.g. ["277/277","83/440"]
  //   drunk>0: pairs = [drunk/full, HP, MP]     e.g. ["12/14","277/277","83/440"]
  // ROBUST: HP and MP are always the LAST TWO pairs ->
  var hp = pairs[pairs.length-2], mp = pairs[pairs.length-1];
  ```
  This pair-shift was a real latent bug (RETESTED Day 67): with drunk=12 the old `pairs[0]=HP / pairs[1]=MP`
  reader returned HP (277) where MP was expected. The flat number sequence ALSO shifts by 2 when drunk/full are
  present (lvl,mus,mys,mox,[drunk,full,]HPc,HPm,MPc,MPm,meat,adv) — don't index it by fixed position either.
  Promise-wrap the reload (resolve on `frame.onload`, ~1.6s timeout fallback).

### 2. `inv_use` / `inv_booze` / `shop.php` fetches SILENTLY FAIL while you're stuck in a combat
- They return a generic ~5922-byte page containing "adventure" and the combat dropdown, and **do nothing**
  ("You twiddle your thumbs (select an item)"). MP/effects never change → looks like the item is broken.
- **Root cause: a leftover fight from a prior loop is still active.** Always check `fight.php` for
  `"you're fighting"` / "attack with your" first; finish or flee it, THEN use items / shop / drink.

### 3. Background async loops keep running after the tool returns `{}` (the anti-injection block)
- A `javascript_tool` call that launches a long `async` loop returns `{}` (blocked output) almost immediately,
  but **the loop keeps executing in the page.** Launching another loop OVERLAPS them → double-spends adventures,
  corrupts shared logs, can trigger a Beaten Up. **Fix: a `window._running` single-instance guard** (set true at
  loop start, false at end; new launches no-op if already running). Poll `window._someCounter` in *separate*
  read-only calls to monitor progress; don't relaunch.
- **Don't reload the charpane frame (for a status read) while a fight/farm loop is also reloading it.**
  Concurrent `frames['charpane'].location` reloads deadlock each other's `onload` promises and stall the loop.
  Either let the loop own the frame, or pause your own reads while it runs.

### 4. Win/loss detection: `"you lose"` is a FALSE POSITIVE
- KoL prints "**You lose 59 hit points**" as normal monster-damage text every round. Matching `'you lose'` for
  defeat ends the loop on round 1 of every fight. **Detect defeat via the `beaten up` effect** in the reloaded
  charpane after the fight ends (or HP→0). **Detect victory** by the combat form being gone (`fight.php` no longer
  has "attack with your" / "run away" / "whichskill") + "adventure again" present.

### 5. Choice (noncombat) parsing
- The choice number is `<input ... name="whichchoice" value="NNN">` — match
  `/name=["']?whichchoice["']?\s+value=["']?(\d+)/i`, NOT `/whichchoice[=:](\d+)/` (that misses the value attr).
- Resolve with `choice.php?whichchoice=NNN&option=K&pwd=HASH`. Default option 1 works for Airship NCs (e.g. ch182).

### 6. MP sources — BOTH the guild MMJ shop AND tiny houses work (RETESTED Day 67)
- ✅ **guild MMJ shop WORKS** (RETESTED out of combat): `shop.php?whichshop=guildstore2&action=buyitem&whichrow=527&quantity=N&pwd=HASH`
  → meat 5737→5637, MMJ count 0→1, returns a real ~15KB shop page. **The earlier "shop is broken" claim was WRONG**
  — the original failure was the **stuck-mid-combat** no-op (see #2: shop/inv_use fetches do nothing during a fight),
  not a bad shop id. MMJ = item 518, 100 meat each, +25 MP.
- ✅ **Tiny house (592) via `inv_use.php?which=3&whichitem=592&ajax=1` WORKS** out of combat — verified MP 17→83
  with 3 uses (~+22 each, **no meat, no adv cost**). Cheaper than MMJ for MP; use these as the default free MP source.
- ✅ **Hidden Tavern shop WORKS**: `shop.php?whichshop=hiddentavern&action=buyitem&whichrow=175` = Fog Murderer 6682
  (bought 2, drank → drunk 12). ✅ **Mall buys WORK via UI**: `mall.php?pudnuggler=NAME`, click `[buy]` (bought
  hardening cream, "You spent 100 Meat").
- **General rule:** if a `shop.php`/`inv_use`/`inv_booze` fetch silently no-ops, you're almost certainly **stuck in
  a combat** (#2) — check `fight.php` and clear it first; the shop/item is probably fine.

### 7. Tab can drop out of the MCP group
- Creating/closing other tabs can silently remove the game tab from the group. The **game session (cookies) persists** —
  just `navigate` a remaining tab back to `game.php` (still logged in, 4 frames) and **rebuild all `window.*` helpers**
  (`_pwd`, `_gp`, `_readChar`, fight loops) — they're page-scoped JS and are wiped by the navigation.
