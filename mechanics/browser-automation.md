# Browser Automation Quirks (Chrome Extension + KoL Frames)

> The **canonical** automation reference — the fetch-driven engine, login/session, `pwd` hash,
> `api.php`/charpane caveats, URL patterns, stuck-fight no-op, single-instance guard, win/loss
> detection, and MP sources — lives in **`HANDOFF.md`** ("The fetch-driven engine", "api.php /
> charpane / tool-output caveats", "Common URL patterns"). This file holds only the extra
> browser/DOM quirks that aren't in HANDOFF.

## Frame layout (quick recap)

`game.php` loads 4 frames: `charpane` (status), `menupane` (top), `mainpane` (content),
`chatpane` (chat). Frame nav: `frames['mainpane'].location.href = 'path.php?args'`. Prefer
`fetch(url,{credentials:'include',cache:'no-store'})` in page context over frame navigation —
it survives backgrounding/throttling (see HANDOFF). The old `setTimeout` + `location.href`
"tick loop" is deprecated by the fetch-driven engine; don't reintroduce it.

## Get pwd hash — fallback

Regex any page's HTML for the 32-hex hash: `/pwd[=:]\s*["']?([a-f0-9]{32})/`. If a page lacks
it, navigate to `inventory.php?which=1` first — its form fields always carry the hash.

## ⚠️ Spleen items: `inv_use` URL silently fails; DOM click works

Some **spleen** items return HTTP 200 from `inv_use.php?which=3&whichitem=ID` but **don't
decrement or apply** (no effect):

- **Fails**: hardening cream (11331), sparkling orb (11330).
- **Works via URL**: concentrated cooking (11328), dieting pill (9707), tiny house (592),
  phonics down (593), mascara/spray/Ben-Gal (3485/744/2595).

**Workaround** — navigate to `inventory.php?which=1` and click the item's `[use]` link in the DOM:

```js
var trs = frames['mainpane'].document.querySelectorAll('tr');
trs.forEach(tr => {
  var txt = tr.textContent.replace(/\s+/g,' ').trim();
  if (txt.startsWith('hardening cream') && txt.length < 50) {  // length filter is critical:
    tr.querySelector('a').click();                             // a parent <tr> concatenates all
  }                                                            // row text and matches everything
});
```

(If a `shop.php`/`inv_use`/`inv_booze` fetch no-ops, first rule out being **stuck mid-combat** —
see HANDOFF's stuck-fight no-op gotcha — before assuming the item is broken.)

## ⚠️ charpane HP/MP parsing: use the LAST TWO "X / Y" pairs

When reading HP/MP by reloading the charpane frame and matching `/(\d+)\s*\/\s*(\d+)/g`, the
pair order **shifts** with drunk/full:

```
drunk=0/full=0: pairs = [HP, MP]              e.g. ["277/277","83/440"]
drunk/full > 0: pairs = [drunk/full, HP, MP]  e.g. ["12/14","277/277","83/440"]
```

**Robust:** HP and MP are always the LAST TWO pairs — `hp = pairs[pairs.length-2]`,
`mp = pairs[pairs.length-1]`. Do NOT index by fixed position (the flat number sequence
lvl,mus,mys,mox,[drunk,full,]HPc,HPm,MPc,MPm,meat,adv also shifts by 2 when drunk/full are set).
Promise-wrap the reload (resolve on `frame.onload`, ~1.6s timeout fallback). Reloading the
charpane while a fight/farm loop is also reloading it deadlocks both `onload` promises — read
the charpane only when the loop is idle. (`api.php` with a varying `for=` is usually the better
HP/MP source — see HANDOFF.)

## Extension / recovery quirks

| Issue | Recovery |
|-------|----------|
| Tab dropped from the MCP group | Session cookies persist — `navigate` a remaining tab back to `game.php` (still logged in, 4 frames) and **rebuild all `window.*` helpers** (page-scoped JS, wiped by navigation). |
| Extension disconnected | Wait + retry; if persistent, ask the user to click the extension icon. |
| Render frozen (CDP timeout) | Tab may have crashed; check its URL — often on `login.php` after recovery. |
| "Run Away" failed | Each attempt fails ~50%; it usually succeeds by retry #3. |
