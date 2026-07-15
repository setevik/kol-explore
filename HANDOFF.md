# KoL Operational Manual (idempotent)

> **This file is run-agnostic** — reusable how-to-operate knowledge that stays true across ascensions.
> **Current-run state lives in `CURRENT_ASCENSION.md`** (character state, quest progress, next priorities,
> session log). Deep game mechanics live in **`mechanics/*.md`**. Lore diaries live in **`my-adventures/`**.
> Don't put dated day-logs, current key counts, or "next session" plans here — those go in `CURRENT_ASCENSION.md`.

---

## Login & session

- **Test account (not secret):** login `ClaudeCode`, password `REDACTED`. URL `https://www.kingdomofloathing.com/login.php`.
- `game.php` uses a **4-frame layout**: `charpane`, `menupane`, `mainpane`, `chatpane`. Frame nav goes through
  `window.frames['mainpane'].location.href = 'path'`. Most actions are done by `fetch()` in the top-window context.
- **If the login form shows** (`input[name="loginname"]`): set `forms['Login'].loginname/password`, call `.submit()`.
  A direct `navigate` to game.php sometimes times out on the tool side but still lands the page — verify with a JS read.
- **Get the pwd hash:** scan a frame's HTML for `pwd=([0-9a-f]{20,})`; stash it on `window._pwd`. Almost every
  write action needs `&pwd=`.
- **Session drops** (logouts / `api.php` returns an ~11KB HTML account page instead of JSON): re-login, re-grab pwd,
  rebuild helpers. Work in short bursts. The game session (cookies) persists even if the MCP tab drops from its group.

## The fetch-driven engine (rebuild each session; wiped on login/reload)

Drive combat/farming with `fetch()` GETs in page context — robust against extension disconnects and tab throttling.
Standard helpers: `G=(u)=>fetch(u,{credentials:'include'}).then(r=>r.text())`, a status reader
(`api.php?what=status&for=ClaudeCode` → JSON), an `inFight(t)` test (`/name=["']?whichskill/` or "Attack with your weapon"),
and a `getChoice(t)` (`whichchoice value=(\d+)`).

**Gotchas (each of these has bitten us):**
- **Single-instance guard.** A `javascript_tool` call that launches a long async loop returns `{}` (blocked) but the
  loop keeps running in the page. Launching another overlaps them (double-spends advs). Guard with `window._running`.
- **Abort flag.** Put `if (window._abort) break;` at the top of the loop so you can stop a mis-targeted run cleanly.
  (Last-resort kill: overwrite `window.fetch` to reject, wait, then restore — crude, avoid if the flag exists.)
- **Async returns `{}`.** The tool often returns `{}` for an `async` IIFE before it resolves. **Write results to a
  `window._X` global inside the async, then read `window._X` in a second, synchronous call.**
- **Stuck-fight no-op.** `inv_use` / `inv_booze` / `shop` fetches return a generic page and **silently do nothing if
  you're stuck mid-combat** (a leftover fight from a prior loop). **Before any EAT/DRINK/buy step, check `fight.php`
  for an active fight** and finish it (MP-free **photoprotoneutron torpedoes, item 630** kill anything in a few rounds).
- **MP-starvation looks like invincibility.** At MP 0 every skill "twiddles your thumbs" and does nothing — a naive
  fight loop then looks like the monster can't be hurt. It can: **top MP between fights** and/or fall back to
  weapon attack (`fight.php?action=attack`) / torpedoes at low MP. Give the loop a round cap + torpedo/attack fallback.
- **⚠️ `api.php` HP is STALE during rapid combat polling.** In a long fight (e.g. the Naughty Sorceress) where you poll
  `api.php?what=status` every round, the HP value caches per-`for=` string and lags reality — so a "heal at <X% HP" branch
  never fires. **✅ FIX (works): vary the `for=` param each round** — `api.php?what=status&for=CC${tick++}` returns fresh
  data every call. (Do NOT instead range-match charpane `X / Y` pairs for HP — maxHP/maxMP shift mid-fight and the ranges
  cross-match, giving a wrong/stuck value. api.php with a varying `for=` gives correct hp/maxhp directly, no parsing.)
- **Concurrent frame reloads deadlock.** Don't reload the charpane frame (`_readChar`) while a fight/farm loop is also
  reloading frames — onload promises stall. Poll in-memory `window._X` while a loop runs; read the charpane only when idle.

## Combat standard (Pastamancer)

- **Opener/combo:** **Stuffed Mortar Shell (3007)** round 1 → **Cannelloni Cannon (3005)** round 2+.
  Mortar queues ~2× Cannelloni damage on the NEXT round and is castable **once per fight**; Cannelloni (Mys-scaled)
  is the main nuke. Most zone monsters die in ~2 rounds with MP topped.
- **Bosses (ramp/tank):** enter at FULL HP (scroll 595) + FULL MP (tiny houses), **Mortar → Cannelloni every round**,
  heal only under ~35% HP. Turtling loses to ramping bosses (e.g. "The Man") — it's a DPS race. Torpedoes (630) in reserve.
- **Low MP / 0 MP fallback:** weapon attack with the Greek Pasta Spoon of Peril (2561) is a free finisher on weak zones.
- **Skill IDs:** Mortar 3007 · Cannelloni 3005 · Entangling Noodles 3004 (stun) · Spaghetti Spear 3020 (0 MP) ·
  Ravioli Shurikens 3003 · Lasagna Bandages 3009 (heal, works out-of-combat via runskillz) · Springy Fusilli 3015 (+init) ·
  Pastamastery 3006 (daily dry-noodle summon) · Manicotti Meditation 3000 · Bind Spaghetti Elemental 3041.
  ⚠️ Springy Fusilli can't be cast mid-choice — cast it BEFORE triggering a +init check.

## api.php / charpane / tool-output caveats

- **`api.php?what=status&for=<name>`** → JSON (level, class, mysticality/muscle/moxie, hp/maxhp, mp/maxmp, meat,
  adventures, full, drunk, spleen, equipment{}). Needs the `for=` param. Can **freeze under heavy rapid polling** —
  poll lightly. `what=inventory` → `{itemId: qty}` (no names); it can be briefly **stale/cached** after a buy.
- **charpane** shows a live **"Score: N"** line for the 8-Bit Realm, plus the current quest and buffs. To read it,
  reload `charpane` and parse `document.body.innerText` (skips the CSS block that dominates the raw HTML).
- **Tool output-filter blocking:** returning raw page HTML/text that contains a `pwd=` / long hex / query string is
  masked as `[BLOCKED: Cookie/query string data]`, and some integer values as `[BLOCKED: Sensitive key]`. **Work around
  it by parsing in-page and returning only small parsed values** (booleans, item counts, a specific number/name) —
  strip `pwd=` and `[0-9a-f]{16,}` before returning any snippet.

## Buying (mall + fixed shops)

- **Fixed shops** (fast, reliable): `shop.php?whichshop=<id>&action=buyitem&whichrow=<row>&quantity=<n>&pwd=<hash>`.
  Parse a shop's rows by splitting its HTML on `<tr>` and reading `whichrow=(\d+)` + the item `<b>name</b>` + `rel="itemid"`.
- **Mall:** search `mall.php?didadv=0&pudnuggler=<NAME>` (the search field is `pudnuggler`); results link to
  `mallstore.php?whichstore=ID&searchitem=ITEMID&searchprice=PRICE`. Load the cheapest store page, find the
  `<input name="whichitem">` radio for the item — **its value is `"<itemid>.<price>"`** (e.g. `"2620.180"`), so pick the
  radio whose value starts with the item id — then POST `mallstore.php` with
  `pwd, whichstore, buying=Yep., whichitem=<value>, quantity=N, searchitem=<itemid>, searchprice=<price>`.
  ⚠️ Never loop mall buys gated on `api.php?what=inventory` — it caches and you'll overbuy. (Verified: 2 jerky for 360 meat.)

## Consumables & item reference

- **EAT (day open):** **stolen sushi (6293) = 6 fullness / ~12 adv** — the workhorse. **unidentified jerky (2620) =
  2 fullness / +6 adv** — best ratio when available (buy ~180 meat in the mall). **Eat sushi first, then jerky/1-fullness
  fillers to top** (jerky-first can overshoot and strand you). Target full 14–15.
  ⚠️ Pastamancer pasta filling is still **unsolved** (dry noodles 304 + long-pork/lihc-eye/olive/bean all "no recipe");
  buy ready food from the mall instead.
- **DRINK (day end, after all adv spent):** **Fog Murderer (item 6682) = +6 drunkenness / ~14 adv each.** Best no-skill
  booze. **Drink EXACTLY 2 → drunk 12** (a 3rd overshoots 18 — advs still bank, but stop at 2). Buy from the Hidden Tavern:
  `shop.php?whichshop=hiddentavern&action=buyitem&whichrow=175`; drink `inv_booze.php?which=1&whichitem=6682&pwd=`.
  (There is NO booze upgrade beyond this — Advanced Cocktailcrafting is Disco-Bandit-only; Pastamancer can't learn it.)
- **MP restore:** **tiny house (592)** = free ~23 MP, no meat/adv cost, `inv_use.php?which=3&whichitem=592&pwd=` —
  the default battery, also clears **Beaten Up**. **Mountain Stream soda (357)** = ~37 MP, tradeable (~440 meat),
  `inv_use.php?which=3&whichitem=357&pwd=` — buy a stack for quest days. (magical mystery juice / Doc Galaktik are gone/gnome-only.)
- **HP:** **scroll of drastic healing (595)** = full HP (does NOT clear Beaten Up); **Lasagna Bandages (3009)** heals
  ~16 HP/cast out of combat. Campground rest (`campground.php?action=rest`) clears Beaten Up (~+10 MP/adv — poor MP source).
- **Combat item:** **photoprotoneutron torpedo (630)** — MP-free reliable damage; boss insurance & stuck-fight finisher.
- **Antidote:** soft green echo eyedrop antidote (588) cures poison via `uneffect.php` (`using=true&whichitem=588&whicheffect=284`).
- **Free buffs:** the buffbot **"Buffy" (#1889009)** casts e.g. **Fat Leon's Phat Loot Lyric (+20% item)** — just kmail
  the buff name (`sendmessage.php` POST towho=1889009, message="Fat Leon's Phat Loot Lyric", sendmeat=1); auto-casts in seconds.

## Common URL patterns

- Adventure a zone: `adventure.php?snarfblat=<id>` — Mys/other warnings bypass with `&ignorewarning=1` (or the
  "brave or foolish" submit for some zones).
- Combat action: `fight.php?action=skill&whichskill=<id>&pwd=` · `action=attack` · `action=useitem&whichitem=<id>`.
- Cast skill (out of combat): `runskillz.php?action=Skillz&whichskill=<id>&ajax=1&quantity=<n>&pwd=`.
- Eat / drink / use: `inv_eat.php?whichitem=<id>&pwd=` · `inv_booze.php?which=1&whichitem=<id>&pwd=` · `inv_use.php?which=3&whichitem=<id>&pwd=`.
- Choice: `choice.php?whichchoice=<id>&option=<n>&pwd=`. ⚠️ Resolve any leftover forced-choice before doing anything
  else next session (they silently bounce every navigation).
- Equip: `inv_equip.php?which=2&action=equip&whichitem=<id>&pwd=` (unequip a slot first if all accessory slots are full:
  `...&action=unequip&type=acc2&pwd=`).

## HARD RULES (do every session)

1. **Order is EAT → ADVENTURE → DRINK.** Both meters are mandatory — never wrap a day with an unused `full` (0/15)
   or `drunk` (0/14) meter (each point ≈ 2–3 rollover adventures).
2. **Don't end the day with ≥ 40 adventures unspent.** Banked advs roll over but waste daily potential — keep
   adventuring until near 0. Disconnects / MP starvation / a stalled quest are reasons to **adapt** (re-login, tiny-house
   MP, switch to a sustainable zone like the Airship snarf 81), NOT to stop. Only stop early if genuinely out of advs,
   Beaten-Up with no recovery and <3 advs, or the user says so.
3. **Prep daily-limited & one-shot things EARLY.** Do the **Daily Dungeon** at day-open (1 run/day). Cast once/day
   summons/buffs at open. Before a gated/one-shot quest step (e.g. the NS contest desk), assemble ALL required
   items/gear/buffs FIRST, verify, then trigger. If too broke for what a step needs, farm meat first (with a +item buff up).
4. **Wrap order:** EAT + advs spent + DRINK all done → write the lore diary (`my-adventures/YYYY-MM-DD.md`) →
   **close the KoL browser tab FIRST** → **commit & push LAST** (tab closes before the commit).
5. **Diaries are lore-friendly stories**; **this manual + CURRENT_ASCENSION.md hold the operational data** (item IDs,
   snarfblats, choice numbers, URLs). Keep raw operational data OUT of the diary.
6. **Research on the OFFICIAL wiki only** (`wiki.kingdomofloathing.com`). ✅ **Best method: `curl` in Bash with a browser
   user-agent — it returns HTTP 200 and the full page.** (WebFetch is 403'd — the server blocks *its* bot user-agent, not
   the network; the Coldfront mirror 301-redirects to a malformed `Main_Pageindex.php/...` URL, so skip it.) Pattern:
   `curl -sS -A "Mozilla/5.0 ... Chrome/120 Safari/537.36" "https://wiki.kingdomofloathing.com/<Page_Name>"` then strip tags
   in python. Item pages expose `Level required:`, `Size:`, `Type:`, avg Adventures, etc. `WebSearch` (allowed_domains) and
   in-game text are fallbacks.

## Operational notes (extension / throttling)

- The Chrome extension drops every ~8–12 min (service-worker sleep). It usually reconnects; if not, ask the user to
  wake Chrome. Keeping the KoL tab foregrounded avoids background-tab timer throttling.
- Detect defeat via the **"Beaten Up" effect** in the reloaded charpane (or HP→0) — NOT by matching "you lose N hit
  points" (that's normal damage text).

## Key snarfblat / zone reference (verified)

- 15 Spooky Forest · 20 The "Fun" House · 81 **Penultimate Fantasy Airship** (meat farm) · **83 The Hole in the Sky**
  (stars/lines; atop the beanstalk — NOT 84) · 126 Themthar Hills (Nunnery) · 136 Sonofa Beach · 140 wartime battlefield ·
  297 Twin Peak (Great Overlook Lodge) · **325 the Daily Dungeon** (inside the Dungeoneers' Assoc.; NOT 322) ·
  322/323/324 Giant Castle basement/ground/top · 355 The Shore · **565 Vanya's Castle** (8-Bit Realm; also 563/564/566).
- Places: `place.php?whichplace=` → `beanstalk` `giantcastle` `plains` `woods` `forestvillage` (Crackpot Mystic =
  `&action=fv_mystic`) `8bit` (Treasure House = `&action=8treasure`) `nstower` `mountains` `nemesiscave` `highlands`.

## Daily routine template

1. Log in; rebuild `window._pwd` + helpers; read status (level/stats/meat/adv/full/drunk/MP).
2. Check for & clear any leftover forced-choice or stuck fight.
3. **EAT** to full 14–15 (sushi first, then topper).
4. **Daily Dungeon** run (hero-key token) + any once/day casts, EARLY.
5. Spend the day's adventures on the current priorities (see `CURRENT_ASCENSION.md`); keep MP topped (tiny houses),
   heal to full between fights, refarm meat at the Airship (81) when the war chest runs low.
6. When advs ≈ 0: verify not mid-fight → **DRINK 2 Fog Murderers** → drunk 12.
7. Write the lore diary → close the KoL tab → commit & push.
