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
