# KoL Operational Manual (idempotent)

> **This file is run-agnostic** — reusable how-to-operate knowledge that stays true across ascensions.
> **Current-run state lives in `CURRENT_ASCENSION.md`** (character state, quest progress, next priorities,
> session log). Deep game mechanics live in **`mechanics/*.md`**. Lore diaries live in **`my-adventures/`**.
> Don't put dated day-logs, current key counts, or "next session" plans here — those go in `CURRENT_ASCENSION.md`.

---

## Login & session

- **Test account:** read test account login/password from `credentials.local.md` (it's not a secret and shouldn't be treated so). URL `https://www.kingdomofloathing.com/login.php`.
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
- 🚨 **STALE HP SILENTLY BREAKS HEAL-GATES — GUARD WITH `hp <= maxhp`.** The classic symptom is a read like
  **`hp=23/15`** or `hp=37/12` (HP *above* max is impossible). A gate like `if (hp/maxhp < 0.6) heal()` then
  computes 153% health, **skips healing, and you walk into the next fight nearly dead** — which looks exactly like
  "the zone one-shots me" and produced a WRONG conclusion for two sessions. ✅ **Fix (works):**
  `STsafe = async () => { for (let i=0;i<5;i++){ await sleep(250); const s = await ST(); if (+s.hp <= +s.maxhp && +s.mp <= +s.maxmp) return s; } return await ST(); }`
  — re-read until the values are self-consistent. ✅ **Even better, avoid the gate:** at low level **one Lasagna
  Bandages (~16 HP) exceeds max HP**, so just cast it once unconditionally before each fight. The **charpane is
  ground truth** if you need to settle an argument (`Muscle:/Mysticality:/Moxie:` parse cleanly; the HP/MP pairs run
  together, so don't range-match them).
- **⚠️ `api.php` HP is STALE during rapid combat polling.** In a long fight (e.g. the Naughty Sorceress) where you poll
  `api.php?what=status` every round, the HP value caches per-`for=` string and lags reality — so a "heal at <X% HP" branch
  never fires. **✅ FIX (works): vary the `for=` param each round** — `api.php?what=status&for=CC${tick++}` returns fresh
  data every call. (Do NOT instead range-match charpane `X / Y` pairs for HP — maxHP/maxMP shift mid-fight and the ranges
  cross-match, giving a wrong/stuck value. api.php with a varying `for=` gives correct hp/maxhp directly, no parsing.)
- ⚠️ **Don't identify a monster by a substring that its minions also contain.** Matching `/Boss Bat/i` to detect the
  Boss Bat **false-positived on the "beefy bodyguard bat"**, whose description says *"the Boss Bat chose him as a
  bodyguard"* — we reported a kill that hadn't happened. **Match the full combat header** (`/fighting The Boss Bat/i`)
  **and confirm quest completion via `council.php` / `questlog.php`**, not the fight text alone.
- ⚠️ **A long farm loop can run through ROLLOVER.** If a loop is still going at rollover, adventures/full/drunk reset
  mid-run and **the DRINK step is silently missed** (it happened: the day ended with drunk 0). For any loop that could
  run near rollover, **do the DRINK step before starting it**, or cap the loop short.
- **Concurrent frame reloads deadlock.** Don't reload the charpane frame (`_readChar`) while a fight/farm loop is also
  reloading frames — onload promises stall. Poll in-memory `window._X` while a loop runs; read the charpane only when idle.

## Combat standard (Pastamancer)

- ⚠️ **A fresh run has almost no skills — FIX THAT FIRST.** The guild trainer is locked until you pass the
  **guild challenge** (Pastamancer: tame the poltersandwich in the Haunted Pantry, snarf 113, choice **544**).
  It's doable at Level 1–4 in ~5 safe turns and unlocks buying **Cannelloni Cannon / Entangling Noodles /
  Lasagna Bandages** for meat. **Do it on day 1 of any new run.** Full detail: `mechanics/guild-membership-and-skills.md`.
- ⚠️ **"It gets the jump on you" + `rounds=0` = you were one-shot before acting.** For a Mys class
  **max HP ≈ base Muscle + 3**, so a low-level caster is paper, and **Moxie is the initiative stat** (Moxie 8 at L5
  ⇒ nearly everything acts first). Don't confuse this with MP-starvation or elemental damage — read the log.
  ⚠️ **BUT before blaming the zone, verify you entered at FULL HP** — a stale-HP heal-gate (see api.php section)
  fakes this exact symptom. At an honest full HP, a "lethal" ML 25–30 Knob monster died in 2 rounds untouched.
- **The low-level caster combo that works:** **Entangling Noodles (3004, 3 MP — stun) round 1 → Cannelloni (3005,
  8 MP) round 2+**, heal with **Lasagna Bandages (3009, 6 MP)** between fights, **magical mystery juice (518)** for MP.
  ~11 MP/fight. If you win initiative you take **zero** damage; if you lose it you may simply die. That coin-flip
  *is* the early game until **Springy Fusilli (3015, +init, guild Level 6)**.
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

- 🚨 **DURING RONIN THE MALL IS NOT A SUPPLY LINE.** Mall buys are paid from **Hagnk's meat** and delivered
  **into Hagnk's storage**, and you may pull only **ONE of each item per day**. So "buy 5 food, eat 5 food"
  is impossible in Ronin. **Check storage before buying** (you likely already own it from last run), and use
  **NPC shops** (guild store, general store) which deliver straight to inventory. Full rules + URLs:
  **`mechanics/ronin-softcore-rules.md`**.
- **Fixed shops** (fast, reliable): `shop.php?whichshop=<id>&action=buyitem&whichrow=<row>&quantity=<n>&pwd=<hash>`.
  Parse a shop's rows by splitting its HTML on `<tr>` and reading `whichrow=(\d+)` + the item `<b>name</b>` + `rel="itemid"`.
- **Mall:** search `mall.php?didadv=0&pudnuggler=<NAME>` (the search field is `pudnuggler`); results link to
  `mallstore.php?whichstore=ID&searchitem=ITEMID&searchprice=PRICE`. Load the cheapest store page, find the
  `<input name="whichitem">` radio for the item — **its value is `"<itemid>.<price>"`** (e.g. `"2620.180"`), so pick the
  radio whose value starts with the item id — then POST `mallstore.php` with
  `pwd, whichstore, buying=Yep., whichitem=<value>, quantity=N, searchitem=<itemid>, searchprice=<price>`.
  ⚠️ Never loop mall buys gated on `api.php?what=inventory` — it caches and you'll overbuy. (Verified: 2 jerky for 360 meat.)

## Raising meat fast (when a skill/item is unaffordable)

Before farming meat for hours, check these — they found 2,749 meat in minutes on run #2 Day 6:
1. **Hagnk's holds a SEPARATE meat purse.** `storage.php?which=5` shows *"You have N meat in long-term storage"*.
   Withdraw it: POST `storage.php` with `pwd, amt=<n>, action=takemeat`. In Ronin you may pull **20,000 meat/day**
   (meat is NOT subject to the 1-per-item limit). ⚠️ Mall purchases silently spend *this* purse, so it drains without
   you noticing.
2. **Autosell junk** via `sellstuff.php?justitems=0` (it lists each item's autosell price). Sell with a POST to
   **`sellstuff_ugly.php`**: `pwd, action=sell, mode=3, quantity=<n>, item<ID>=<ID>` (checkboxes are named
   `item<ID>`). **mode=1** = sell all, **mode=2** = all but one, **mode=3** = the `quantity` field. ✅ Verified:
   mode=3 quantity=2 sold exactly 2.
3. **Starter-package gems are worth a fortune.** The pork elf goodies sack (Toot Oriole / Letter from King Ralph)
   yields **porquoise (706) / hamethyst / baconstone — 500 meat autosell each**. Their only use is jewelrycrafting
   (a skill we don't have), so **selling them early is usually correct**.
4. **Boss drops:** e.g. **dense meat stack (258)** ≈ 850 meat autosell each (it is NOT usable — don't try).

## Consumables & item reference

- ✅ **milk of magnesium (item 1650, ~100 meat in the mall)** — **"the next food item you eat gives +5 Adventures",
  once/day.** Use it immediately **before your BIGGEST food**. ⚠️ **It has NO visible effect** — the old **"Got Milk"
  effect is RETIRED**, so don't check the charpane for it and conclude the item failed (verified: burrito 16 → 21 adv).
  ⚠️ **Does not work with sushi** or Hobopolis food.
- ✅ **NPC shops sell bulk filler straight to inventory** (immune to the Ronin storage/pull trap):
  **General Store** (`shop.php?whichshop=generalstore`) — **fortune cookie row 645 (40 meat, 1 fullness)**,
  pickled egg 646, lukewarm tea 644. **Guild store** (`shop.php?whichshop=guildstore2`) — **magical mystery juice
  row 527 (100 meat, MP restore)**, MSG row 532.
- ⚠️ **FOOD HAS LEVEL REQUIREMENTS** — pick the best food whose level req you meet (`mechanics/pastamancer-food.md`).
  **stolen sushi (6293) needs Level 6.** Useful low-level options (verified on the wiki):
  **insanely spicy bean burrito (316)** = awesome, 3 fullness, **Level 4**, ~13 adv, **+27–32 Muscle** (→ +max HP,
  which a caster desperately needs); its **Mysticality** twin **insanely spicy enchanted bean burrito (319)** is
  **Level 5**; **gnocchetti di Nietzsche** = 6 fullness, ~24 adv, Level 6. Plain **orange (242, item id is 242 —
  NOT 332)** = crappy 1-fullness filler, ~1 adv — fine for topping the meter off.
- **EAT (day open):** **stolen sushi (6293) = 6 fullness / ~12 adv** — the workhorse **once Level 6+**.
  **unidentified jerky (2620) = 2 fullness / +6 adv**. **Eat the big item first, then 1-fullness fillers to top**
  (filler-first can overshoot and strand you). Target full 14–15.
  ⚠️ In **Ronin** you can only pull 1 of each per day — so the pattern is **1 pulled big food + inventory filler**.
  ⚠️ Pastamancer pasta filling is still **unsolved** (dry noodles 304 + long-pork/lihc-eye/olive/bean all "no recipe");
  buy ready food instead.
- ⚠️ **DRINK CAP = 14. Never exceed it** — 15+ = falling-down drunk = no adventuring at all (see HARD RULE 1).
  Use a **look-ahead** check (`drunk + size <= 14`), and know your bottle sizes before pouring:
  ≈3 drunk — vodka 238 · tequila 1004 · whiskey 328 · rum 1005 · accidental cider 2842 · Typical Tavern swill 3831;
  ≈2 — bottle of popskull 1774 · cooking sherry 2840; ≈1 — ice-cold Willer 81. Finish on the small ones.
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

   🚨 **DRINK LAST IS NOT A STYLE CHOICE — IT IS THE SAFETY RAIL. (Cost us a whole day, Day 93.)**
   **The adventuring limit is `drunk` 14.** At **15+ you are "falling-down drunk"**: every zone returns only
   **Drunken Stupor** (`The Too-Much Booze Blues` — "you spend a couple of hours battling fierce pink elephants"),
   which **consumes the adventure AND drains substats**. It **cannot be cured** — drunkenness only resets at rollover.
   - **Drink at the END** and an overshoot is harmless: the surplus adventures simply bank to tomorrow.
   - **Drink at the START** and the identical overshoot **locks you out of the entire day**. We drank first
     (to "guarantee" the meter after missing it on Day 92), hit **drunk 16**, and stranded **190 adventures**.
   - ✅ **Guard with LOOK-AHEAD, not `drunk < 14`.** A loop that checks `if (drunk >= 14) break` *before* drinking
     will still jump 13 → 16 on a 3-drunk bottle. **Only drink if `drunk + size <= 14`** (bottle sizes: vodka/
     tequila/whiskey/rum/cider/swill ≈ 3, sherry ≈ 2, Willer ≈ 1). Prefer small bottles to land exactly on 14.
   - If you fear missing DRINK during a long farm loop, **cap the loop / drink at a checkpoint** — do NOT reorder
     the day.
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

- **113 The Haunted Pantry** (ML 1–2, safe at any level; guild-challenge poltersandwich, choice 544) ·
  **Bat Hole: 30 Entryway · 31 Guano Junction (needs Stench Resistance) · 32 Batrat & Ratbat Burrow ·
  33 Beanbat Chamber · 34 Boss Bat's Lair** (verified via `place.php?whichplace=bathole`; the old
  "snarf 33–35" note was wrong) — see `mechanics/bat-hole-boss-bat.md`.
- 15 Spooky Forest · 20 The "Fun" House · 81 **Penultimate Fantasy Airship** (meat farm) · **83 The Hole in the Sky**
  (stars/lines; atop the beanstalk — NOT 84) · 126 Themthar Hills (Nunnery) · 136 Sonofa Beach · 140 wartime battlefield ·
  297 Twin Peak (Great Overlook Lodge) · **325 the Daily Dungeon** (inside the Dungeoneers' Assoc.; NOT 322) ·
  322/323/324 Giant Castle basement/ground/top · 355 The Shore · **565 Vanya's Castle** (8-Bit Realm; also 563/564/566).
- Places: `place.php?whichplace=` → `beanstalk` `giantcastle` `plains` `woods` `forestvillage` (Crackpot Mystic =
  `&action=fv_mystic`) `8bit` (Treasure House = `&action=8treasure`) `nstower` `mountains` `nemesiscave` `highlands`
  **`bathole`**. ✅ **`place.php` is the source of truth for a zone's snarfblat** — the wiki's "Zone Num" and old
  notes have both been wrong; confirm there before writing a snarf into a loop.
- **Guild:** `guild.php` · trainer `guild.php?place=trainer` · challenge `guild.php?place=challenge` ·
  guild store `shop.php?whichshop=guildstore2`. Buy a skill: POST `guild.php` with
  `action=buyskill&skillid=<SHORT id, e.g. 3005→5>&pwd=`.
- **Skill MP cost / description:** `desc_skill.php?whichskill=<id>&self=true` prints "MP Cost: N".

## Daily routine template

1. Log in; rebuild `window._pwd` + helpers; read status (level/stats/meat/adv/full/drunk/MP).
2. Check for & clear any leftover forced-choice or stuck fight.
3. **EAT** to full 14–15 (sushi first, then topper).
4. **Daily Dungeon** run (hero-key token) + any once/day casts, EARLY.
5. Spend the day's adventures on the current priorities (see `CURRENT_ASCENSION.md`); keep MP topped (tiny houses),
   heal to full between fights, refarm meat at the Airship (81) when the war chest runs low.
6. When advs ≈ 0: verify not mid-fight → **DRINK 2 Fog Murderers** → drunk 12.
7. Write the lore diary → close the KoL tab → commit & push.
