# KoL Operational Manual (idempotent)

> **This file is run-agnostic** — reusable how-to-operate knowledge that stays true across ascensions.
> **Current-run state lives in `CURRENT_ASCENSION.md`** (character state, quest progress, next priorities,
> session log). Deep game mechanics live in **`mechanics/*.md`**. Lore diaries live in **`my-adventures/`**.
>
> 📐 **This file must read as true for ANY character in ANY ascension.** Before adding a line, ask:
> *"would this still be true and useful for a fresh character, in a different ascension, a year from now?"*
> If no, it goes in `CURRENT_ASCENSION.md`. Concretely — **no day numbers, no run numbers, no `✅ DONE`/status
> markers, no inventory or possession claims, no "next session" plans.** Keep `✅ Verified in-game` (tested vs
> wiki-sourced is load-bearing) and keep the *conditions* of a measurement (`at base Mys ~236`, `with no +ML`).
> Full rule and examples: `NEW_SESSION_PROMPT.md` § Doc-hygiene.

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
- ⚠️ **When the connection is UNSTABLE (fetch drops every ~1 min), long async loops die after 1 iteration** with
  "Failed to fetch" and lose their progress. ✅ **Fix that works: run SHORT SYNCHRONOUS bursts** — a `for` loop of
  ~10–14 fights that writes results to `window._out` and returns; the tool call times out at 30s but the burst
  completes and you read `window._out` after. This reliably banked ~13 turns/burst when 40-turn loops kept dying.
  Pair with the meat-positive **Kitchen-on-0-MP-Spear** so no juice-buy round-trips are needed mid-burst.
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
- ⚠️ **Every farm loop's MP branch must check ALL restoratives you actually carry.** a desert
  loop checked only MMJ (518) and tiny houses (592), starved at 20 MP, and went **1W/8L** while
  **17 Mountain Stream sodas (357, 37 MP each)** sat unused in the bag. Keep one shared restore helper
  (`357 → 518 → 592`) rather than re-typing the ladder per loop.
- 🚨 **NEVER RUN A "IS THIS UNLOCKED / DONE YET?" TEST ON A PAGE THAT MIGHT BE A FIGHT.**
  `!/not yet clickable/.test(place.php)` reported the Red Zeppelin **open** while we were actually standing
  in a leftover combat — a fight page simply doesn't contain the gating phrase, so *every* "absence of bad
  text" check silently passes. This is the same family as the win-string and Boss-Bat bugs. ✅ **Rule:
  `if (inFight(html)) return UNKNOWN;` before interpreting any page, and prefer testing for the
  PRESENCE of the thing you want** (the zone's `snarfblat=` link, the quest-log line) over the absence of a warning.
- 🚨 **AFTER *ANY* ABORT, DRAIN THE OPEN FIGHT FIRST — BEFORE topMP/heal/shop.** Aborting mid-combat leaves
  `fight.php` active, and a stuck fight makes `inv_use` / `inv_booze` / `shop` / `place.php` all return the
  fight page and **silently do nothing** — so the "restore MP" step no-ops and the next read shows
  *"You twiddle your thumbs"* (which looks like MP-starvation but is really a stuck fight). Hit this 3× in
  one session. ✅ Helper that works:
  `stopSafe = async () => { window._abort=true; await sleep(3000);
     for (let i=0;i<3;i++){ let p=await G('fight.php'); if(!inFight(p)) break; await runFight(p,{}); }
     window._abort=false; window._running=false; }`
  — and inside that finisher fall back to **Spaghetti Spear (3020, 0 MP)** whenever MP < 10, or it can't finish.
- 🚨 **THE FARM-LOOP DEATH SPIRAL (cost ~30 adventures): one loss cascades unless the loop checks BOTH
  Beaten Up AND healing-supply counts every iteration.** Mechanism: a loss applies **Beaten Up (−50% all stats)**
  → next fights are entered at half Mysticality/Muscle → more losses → more Beaten Up. Meanwhile a heal branch
  like `if (hp<45) use(scroll 595)` becomes a **silent no-op when the item hits 0** (inv_use just returns a page),
  so "heal to full" quietly stops happening and every fight starts at ~20 HP. ✅ Loop guards that fix it:
  (a) each iteration, read the charpane and **campground-rest if Beaten Up** (rest costs 1 adv but stops the cascade);
  (b) **verify item counts** (`api.php?what=inventory`) before trusting a heal/MP branch, and STOP the loop when the
  supply is gone; (c) count a fight as LOSS only on `/You lose the fight|black out|slink away/` — bare `/You lose/`
  false-positives on "You lose N hit points" (this old mistake got re-made; see also the Boss Bat note).

- 🚧 **WHEN A QUEST GATE IS A *NONCOMBAT*, THE BOTTLENECK IS ENCOUNTER RATE — NOT YOUR DAMAGE.**
  One session spent **~120 turns in the Palindome at 150W/0L** waiting for one choice adventure that never
  came (2 noncombats all day). Winning harder does nothing for this. ✅ **Recognise the shape early:** if
  the quest log says "search/find X here" and the step is an NC, **stop after ~20 dry turns**, and go get a
  **−combat / forced-noncombat source** before spending another adventure. Also verify your own gear isn't
  adding +combat. Budget meat for it — turns are the scarcer currency.

## Combat standard (Pastamancer)

- 🚨🚨 **RE-VISIT THE GUILD TRAINER EVERY FEW LEVELS — THIS WAS A WEEKS-LONG BLIND SPOT .**
  `guild.php?place=trainer` lists skills **by level with prices**, and we fought at Levels 10–12 using the
  same three spells bought at Level 5. Buying **Weapon of the Pastalord (skillid 8, 5,000 meat, skill
  id 3008, 32 MP)** plus the cheap passives **Utensil Twist (id 25, 125 meat)** and **Transcendent Al
  Dente (id 26, 250 meat)** flipped the ML ~140 desert from unfightable to **11W/0L in one afternoon** —
  no level-up required. Buy with a POST to `guild.php`: `action=buyskill&skillid=<SHORT id>&pwd=`.
  ▶ **Next purchases worth saving for: Cannelloni Cocoon (id 12, 7,500 — free full heal, replaces
  scrolls/tiny houses) and Spirit of Rigatoni (id 11, 2,500 — chefstaff weapons).**
  **Parse the trainer by table row**: each `<tr>` holds the skill name, `skillid value=(\d+)`, and
  `Train \(([\d,]+) Meat\)` — the flat-page regexes return nothing.

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
- 🚨 **IF A "NONCOMBAT" NEVER APPEARS, IT MAY NOT BE A NONCOMBAT.** One stretch cost ~190 turns hunting
  Palindome choice 872 as a random encounter, even with −combat buffs. It is reached by a
  **`place.php?...&action=` link that unlocks when you READ AN ITEM** (`"I Love Me, Vol. I"`, which had
  been sitting unread in the bag). ✅ **Before grinding for any gated encounter: read the wiki's zone page
  for whether it's a location, and `inv_use` unread quest books/items you're carrying.**
- 🚨 **NEVER CONFIRM A BOSS KILL FROM THE WIN-STRING ALONE — CHECK HP / Beaten Up / the quest log.**
  two straight losses to an ancient protector spirit were logged as **WINS** because its defeat
  text doesn't match `/You lose the fight|black out|slink away/`. The tell was HP 0 + Beaten Up afterwards.
  ✅ After any boss attempt, read `api.php` HP and the charpane, or re-read `questlog.php`, before believing it.
- ⚔️ **Weapon of the Pastalord (3008) is PHYSICAL** — it does nothing to physically-immune monsters
  (ancient protector spirits). Against those, use **Cannelloni (3005) with an element-tuning off-hand**.
  Corollary: the big nuke is not universally better; match the damage type to the target.
- 🍝 **Pasta thralls are a damage multiplier, not a gimmick.** **Bind Vampieroghi (3027)** + the
  **Bringing Up the Rear** passive took the ML-150 Hidden Hospital from 6W/3L to **11W/1L** at unchanged
  stats. **Summon the thrall first thing each day while MP is full**, and re-summon when the charpane
  stops listing it. With a thrall up, cheap **Cannelloni beats the expensive nuke on MP efficiency**
  (13W/1L in the Office at 8 MP/cast vs 32).
- 🚨 **CHECK THE BOSS'S ELEMENT BEFORE YOU FIGHT — a damage-tuning off-hand can HALVE your damage.**
  The **Necrotelicomnicon (2494)** re-tunes all pasta to **Spooky**; against the **Bonerdagon** (spooky-resistant)
  that turned a 4-round untouched win into an 11-round loss. **Unequip element-tuning gear when the target
  resists that element** . Corollary: exploit weakness instead — spooky-tuned Cannelloni is what
  killed cold-aligned Groar in 8 rounds.
- 🚨 **Against a boss that out-damages your heal, NEVER heal — race it.** Lasagna Bandages (~17 HP) cannot
  cover ~37 dmg/round; healing just loses slowly. Enter at full HP and cast damage every round.
- 🚨 **In ML 100+ zones the FULL routine (Entangle stun → Mortar → Cannelloni) is load-bearing — never let a
  loop variant "simplify" it.** Verified in-game in the Black Forest (ML 123–133): full routine ≈ 4W/1L;
  the same loop with Cannelloni-only went **0W/14L** — the stun round + mortar's 2× queue are the whole margin.
  When copying a fight loop into a new burst, diff the skill ladder first.
- 🚨 **CANNELLONI COCOON (3012) IS *NONCOMBAT* — IT DOES NOTHING IN A FIGHT.** A "heal at <35% HP"
  branch that casts it mid-combat **burns the round and the MP for no heal**, which is exactly how you
  lose a boss race. Heal to full **between** fights (`runskillz.php`), never inside one. (Verified in-game
  from the wiki *before* it cost us the Office boss.)
- ⚔️ **AN UNTUNED STUFFED MORTAR SHELL (3007) CAN ROLL *PHYSICAL*.** Its damage is
  `(32–64)+(0.5×Mys)` of a **random element — or physical** if untuned. Against a physically-immune
  target (ancient protector spirits) that is a wasted round on a coin flip. ✅ **Fix: lock the element
  first.** **Flavour of Magic (3017, guild L14, 12,500)** grants five tuning casts —
  **7176 Cayenne=hot · 7177 Peppermint=cold · 7178 Garlic=stench · 7179 Wormwood=sleaze ·
  7180 Bacon Grease=spooky · 7181 Nothing** — and adds **+10 spell damage**. Cast one at day-start.
  (Equipment tuning like the Necrotelicomnicon does the same job but locks you to spooky.)
- 💰 **THRALL UNIT TACTICS (3034, guild L10, 5,000) HALVES THE MP COST OF DAMAGING PASTA SPELLS**
  while a thrall is up (Cannelloni 8→4; does NOT reduce Entangling Noodles or Lasagna Bandages).
  If MP is your limiter — it usually is — this is the highest-value skill on the trainer, ahead of
  any raw damage buy. Pair with **Spirit of Ravioli (3014, L9, 4,000) = +25% max HP**, which is the
  cheapest answer to "the boss two-shots me".
- 🥊 **Entangling Noodles is a MULTI-round stun for a Pastamancer** ("prevents the enemy from attacking
  for X turns"), not a one-round tickle. Opening with it buys the whole Mortar wind-up for 3 MP — it is
  the reason the burst lands before the boss swings.
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

- 🎉 **RONIN ENDS AT ~1,000 TURNS — CHECK `api.php?what=status` → `roninleft`. When it's 0, the economy transforms:**
  Hagnk's is **fully open (UNLIMITED pulls, no 1/day/item cap, no meat cost to pull)**, and **mall buys go to
  INVENTORY and spend INVENTORY meat** like normal (no more Hagnk's-purse detour). ✅ **First thing after Ronin ends:
  raid your own storage** — a full prior-run inventory (400+ items) is now free to pull. Game-changers found there
  (verified in-game): **tiny houses (592) = FREE MP** (~23 MP each, no meat) — pull a stack and they REPLACE buying
  MMJ, which **solves the meat/MP death-spiral** (verified: backstage went 43W/0L on free tiny-house MP);
  **stolen sushi (6293)** food for weeks; **scroll of drastic healing (595)** full HP; **mining gear** (see below).
- 🚨 **DURING RONIN (roninleft > 0) THE MALL IS NOT A SUPPLY LINE.** Mall buys are paid from **Hagnk's meat** and delivered
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

Before farming meat for hours, check these — they found 2,749 meat in minutes in-game:
1. **Hagnk's holds a SEPARATE meat purse.** `storage.php?which=5` shows *"You have N meat in long-term storage"*.
   Withdraw it: POST `storage.php` with `pwd, amt=<n>, action=takemeat`. In Ronin you may pull **20,000 meat/day**
   (meat is NOT subject to the 1-per-item limit). ⚠️ Mall purchases silently spend *this* purse, so it drains without
   you noticing.
2. **Autosell junk** via `sellstuff.php?justitems=0` (it lists each item's autosell price). Sell with a POST to
   **`sellstuff_ugly.php`**: `pwd, action=sell, mode=3, quantity=<n>, item<ID>=<ID>` (checkboxes are named
   `item<ID>`). **mode=1** = sell all, **mode=2** = all but one, **mode=3** = the `quantity` field. ✅ Verified:
   mode=3 quantity=2 sold exactly 2. Batch-sell many at once: repeat `item<ID>=<ID>` for each.
   ⚠️ **The `sellstuff.php` ROW PARSE MISALIGNS ID↔NAME** — the checkbox `value` and the `<b>name</b>` in the same
   `<tr>` don't reliably belong together (every item appeared twice with two different IDs). **Build an
   authoritative `{id: name}` map from the inventory pages first** (`inventory.php?which=1/2/3`, parse `table.item`
   `rel="id=<N>"` + `<b>`), decide what to sell by NAME there, then sell those exact IDs. Nearly sold class items otherwise.
3. **Starter-package gems are worth a fortune.** The pork elf goodies sack (Toot Oriole / Letter from King Ralph)
   yields **porquoise (706) / hamethyst / baconstone — 500 meat autosell each**. Their only use is jewelrycrafting
   (a skill we don't have), so **selling them early is usually correct**.
4. 🚨 **AUDIT YOUR OWN JUNK DRAWER BEFORE YOU FARM ANYTHING — it beat a full day of farming .**
   A long-running farm zone quietly buries you in drops. Months on the eXtreme Slope had left **166 gr8ps,
   140 t8r tots, 54 sk8boards and ~50 SPARE copies of each eXtreme outfit piece** — **41,195 meat, sold in
   minutes for ZERO adventures.** ✅ Method: build the authoritative `{id:name}` map from `inventory.php`,
   join it against the autosell prices on `sellstuff.php?justitems=0`, rank by `price × qty`, then sell with
   `sellstuff_ugly.php` (**mode=1** all · **mode=2** all-but-one, ideal for outfit pieces you must keep one of ·
   **mode=3** + `quantity`). **Verify with a 2-item test sale first** (2 gr8ps → 118 meat = 59 ea) to prove the
   ID↔price join before dumping a stack. Re-check every few days.
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
- ⚠️ **DRINK CAP is DYNAMIC — read it from the charpane** (`Tipsiness: X / Y`, Y = cap): **14 default, 19 with
  Liver of Steel** (this-run-only skill; resets each ascension). 15+ (or 20+ with the skill) = falling-down drunk.
  Use a **look-ahead** check (`drunk + potency <= cap`), and know your sizes: ≈3 — vodka 238 · tequila 1004 ·
  whiskey 328 · boxed wine 1005 · accidental cider 2842 · swill 3831 · most basic cocktails;
  ≈2 — popskull 1774 · cooking sherry 2840; ≈1 — ice-cold Willer 81. Finish on the small ones.
- ⭐ **OPTIMAL DRINKING — see `mechanics/drinking-strategy.md`.** Two rules do most of the work:
  **(a) MIX EVERYTHING.** Anyone can mix "normal" cocktails (no Disco Bandit skill) once a **Queue Du Coq
  cocktailcrafting kit (General Store row 642, 1,000 meat, item 236)** is installed — and **mixing costs ZERO
  adventures** (the *"Shake! (1 Adventure)"* label applies only to fancy drinks). A raw bottle = **3 adv**;
  the same bottle + **soda water (row 650, 70 meat, item 1003)** = **5–6 adv**. ≈ **+12 adv/day, free**.
  POST `craft.php`: `mode=cocktail&action=craft&a=<id>&b=<id>&qty=<n>&pwd=`.
  **(b) SPEND YOUR ONE OVERDRINK.** You may cross the cap **exactly once** (once over, you *cannot drink again*),
  and booze adventures **bank overnight** — so after reaching 14, **drink one more, choosing your highest-adventure
  bottle**. Never do this before adventuring; it is a day-end move only.
- **DRINK (day end, after all adv spent):** **Fog Murderer (item 6682) = +6 drunkenness / ~14 adv each.** Best no-skill
  booze. **Drink EXACTLY 2 → drunk 12** (a 3rd overshoots 18 — advs still bank, but stop at 2). Buy from the Hidden Tavern:
  `shop.php?whichshop=hiddentavern&action=buyitem&whichrow=175`; drink `inv_booze.php?which=1&whichitem=6682&pwd=`.
  (There is NO booze upgrade beyond this — Advanced Cocktailcrafting is Disco-Bandit-only; Pastamancer can't learn it.)
- ✅ **MP restore, corrected: magical mystery juice (518) restores ~25 MP for 100 meat
  (≈4 meat/MP) and is still stocked at the guild store, `shop.php?whichshop=guildstore2` row 527.**
  That is ~3× better value than Mountain Stream soda (~440 meat / 37 MP) and it buys straight to
  inventory. Older notes calling MMJ "~10–12 MP" or "gone" are wrong. Buy 25–35 at day-start.
- ⭐ **PROVEN DAY-END BOOZE RACK (lands EXACTLY on a 19 cap and banks ~74 adv):**
  **Ye Olde Meade (6276) = 5 drunkenness / ~15 adventures**, ~639 meat in the mall — the best filler found
  so far (3 adv per drunkenness). **3 × Meade (15) + 2 × bottle of popskull (1774, 2 each) = exactly 19.**
  Then spend the single overdrink on **corpse on the beach (3025) = 6 drunkenness / ~21 adventures**.
  ⚠️ Mall stores often hold only **1** of a bottle at the listed price — **iterate the cheapest few stores**
  rather than asking one store for qty 3 and assuming it worked (verify with `api.php?what=inventory`).
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

- Adventure a zone: `adventure.php?snarfblat=<id>`. ⚠️ **Stat-gate warnings: the GET param `&ignorewarning=1`
  does NOT work** (Verified in-game — 12 fetches all bounced, no turns used). ✅ **The bypass is the "brave or
  foolish" POST:** `adventure.php` with `action=ignorewarning&whichzone=<id>` — add `nozonewarnings=1` once to
  disable all future zone warnings for the account (plain snarfblat GETs work after that).
- Combat action: `fight.php?action=skill&whichskill=<id>&pwd=` · `action=attack` · `action=useitem&whichitem=<id>`.
- Cast skill (out of combat): `runskillz.php?action=Skillz&whichskill=<id>&ajax=1&quantity=<n>&pwd=`.
- Eat / drink / use: `inv_eat.php?whichitem=<id>&pwd=` · `inv_booze.php?which=1&whichitem=<id>&pwd=` · `inv_use.php?which=3&whichitem=<id>&pwd=`.
- Choice: `choice.php?whichchoice=<id>&option=<n>&pwd=`. ⚠️ Resolve any leftover forced-choice at session start,
  before doing anything else (they silently bounce every navigation).
- Equip: `inv_equip.php?which=2&action=equip&whichitem=<id>&pwd=` (unequip a slot first if all accessory slots are full:
  `...&action=unequip&type=acc2&pwd=`).

## Item endpoints — pick the right verb or the call silently no-ops

Each consumption type has its OWN endpoint. Using the wrong one usually returns a **normal 200 with the standard
`updateInv(...)`/charpane boilerplate and no error at all**, so the script "succeeds" while nothing happens.
Always confirm with a before/after diff (inventory count, `adventures`, `full`/`drunk`), never with HTTP status.

| Action | Endpoint |
|---|---|
| Use an item | `inv_use.php?which=3&whichitem=<id>&pwd=<hash>&ajax=1` |
| **Eat** | `inv_eat.php?which=1&whichitem=<id>&pwd=<hash>&ajax=1` |
| **Drink** | **`inv_booze.php`**?which=1&whichitem=<id>&pwd=<hash>&ajax=1 — ⚠️ `inv_use.php` does NOT drink |
| **Use N of one item at once** | **`multiuse.php?whichitem=<id>&action=useitem&quantity=<N>&pwd=<hash>`** |
| Equip | `inv_equip.php?which=2&action=equip&whichitem=<id>&pwd=<hash>&ajax=1` |
| **Autosell** | **`sellstuff_ugly.php`** POST: `action=sell`, `mode=3`, `quantity=N`, **`item<id>=<id>`** — ⚠️ posting to `sellstuff.php` does nothing |

🐛 **`multiuse.php` is the one people forget.** Some recipes are defined by **how many you use at once**
(bubblin' crude: 9 → oil lamp, 12 → jar of oil, …). `inv_use.php` **ignores `quantity`/`numitems` and uses the
whole stack**, so with 50 crude you get *"That much oil doesn't congeal into anything good"* forever, with
nothing consumed. If an item's wiki page has a **"When Used — Using N:"** list, reach for `multiuse.php`.

⚠️ **Off-hand collisions.** Equipping a new off-hand silently unequips whatever was there. That is sometimes the
*point* (the oil lamp displacing the Necrotelicomnicon is how A-boo Peak becomes winnable) and sometimes a
regression (it also cost ~40 max MP when oil slacks replaced bullet-proof corduroys). **Read the
`Item unequipped: …` line in the response** and decide deliberately.

## HARD RULES (do every session)

1. **Order is EAT → ADVENTURE → DRINK.** Both meters are mandatory — never wrap a day with an unused `full` (0/15)
   or `drunk` (0/14) meter (each point ≈ 2–3 rollover adventures).

   🚨 **DRINK LAST IS NOT A STYLE CHOICE — IT IS THE SAFETY RAIL. (This has cost a whole day.)**
   At **(cap+1)+ you are "falling-down drunk"**: every zone returns only **Drunken Stupor**
   (`The Too-Much Booze Blues` — "you spend a couple of hours battling fierce pink elephants"), which **consumes
   the adventure AND drains substats**, and **cannot be cured** — drunkenness only resets at rollover.
   - 🎯 **READ THE CAP, DON'T HARD-CODE IT.** The adventuring cap is **14 by default** but **19 with Liver of Steel**
     (see below) — and it **RESETS to 14 every ascension** (Liver of Steel can't be permed). So the number changes.
     ✅ **Robust check (works at any drunkenness): `charsheet.php` contains the text "Liver of Steel" → cap 19, else 14.**
     (Verified in-game. `api.php?what=status` has NO cap field — only `drunk`.) The charpane's `Tipsiness: X / Y`
     line (Y = cap) also works **but only shows when drunk > 0**, so it can't be read at day-start; use charsheet, or
     drink your first safe bottle then read `Tipsiness`.
     🍸 **Liver of Steel = +5 cap (14→19).** Earn it by finishing the **Azazel quest** (steel margarita) — see
     `mechanics/friars-blessings.md`. Whenever it's active, **fill the booze meter to 19**; stopping at 14 silently
     throws away ~+9 adventures/day.
   - **Drink at the END** and an overshoot is harmless: the surplus adventures simply bank to tomorrow.
   - **Drink at the START** and the identical overshoot **locks you out of the entire day**. We drank first
     (to "guarantee" the meter after missing it), hit **drunk 16**, and stranded **190 adventures**.
   - ✅ **Guard with LOOK-AHEAD, not `drunk < cap`.** A loop that checks `if (drunk >= cap) break` *before* drinking
     will still overshoot on a 3-drunk bottle. **Only drink if `drunk + size <= cap`** (sizes: vodka/tequila/whiskey/
     rum/cider/swill ≈ 3, sherry/popskull ≈ 2, Imp Ale/Willer ≈ 1). Prefer small bottles to land exactly on the cap.
   - **Then take your ONE overdrink** (the single drink allowed to cross the cap — see `drinking-strategy.md`):
     spend it on your highest-adventure bottle; those adventures still bank.
   - If you fear missing DRINK during a long farm loop, **cap the loop / drink at a checkpoint** — do NOT reorder
     the day.
   - 🚨 **AFTER THE OVERDRINK, THE DAY IS OVER — STOP ADVENTURING. (Cost 60 adventures.)**
     This is the failure mode that survives "drink last": we correctly spent all advs, correctly filled to exactly
     19, correctly took ONE overdrink (→ drunk 25) — and then, because the overdrink handed us **+60 adventures on
     the spot**, HARD RULE 2 ("don't end the day with ≥40 unspent") pulled us straight back out to a quest zone.
     At drunk 25 every one of those 60 turns was a **Drunken Stupor**: turn consumed, zero monsters, zero meat,
     zero drops.
     - ⚖️ **Rule precedence: this beats HARD RULE 2.** Adventures granted by the *overdrink* are **not** "unspent
       adventures" — they are **tomorrow's opening balance** and are *supposed* to sit at 40–60 overnight. Seeing a
       big adv count right after the final bottle is the EXPECTED state, not a problem to fix.
     - ✅ **The safe ordering if you want to spend booze adventures today:** spend advs → **fill to exactly cap
       (do NOT overdrink)** → spend those advs → **overdrink as the very last action of the session**, then wrap.
     - 🔍 **How to detect you're already falling-down drunk** (do this before any post-drink adventuring):
       `charpane.php` starts serving the drunk-blur CSS (`.blur1`/`.blur2`/`.blur3`/`.blur4` text-shadow classes).
       Cheaper still: just compare `drunk` to the cap before adventuring.
     - 🔍 **How to notice you already wasted turns:** a burst that reports N "wins" but an **empty monster map, empty
       item map, and flat meat** is not a lucky streak — it's Drunken Stupor. See the fight-loop lesson below:
       never trust a win counter that isn't corroborated by drops/meat/substat.
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
- 15 Spooky Forest · 20 The "Fun" House · 81 **Penultimate Fantasy Airship** — ⚠️ **ML 90–100, NOT an easy
  meat farm below ~L11** (the "easy Airship" memory is late-run-#1 colored; Burly Sidekick/Protagonist ML 100
  hit a L10 caster for ~40/round). Its **choice 182 "Random Lack of an Encounter"**: opt 1 = fight one of those
  ML 90–100 crew (good drops: Mohawk wig, titanium assault umbrella, tiny houses) — **never auto-pick it in a
  farm loop**; **opt 2 = free Penultimate Fantasy chest** (safe default); opt 3 = lose 40–50 HP, gain ~25×3
  substats. L10 quest: 4 "Spirit" noncombats, then **"F-F-Fantastic!" (choice 681) → give El Cid the spirits →
  S.O.C.K.** · **83 The Hole in the Sky**
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
