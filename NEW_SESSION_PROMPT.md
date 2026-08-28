# Prompt for a New Session

Copy-paste this into a new Claude session to continue the KoL journey. It is **run-agnostic** — it never hard-codes
the current day, level, or quest. All of that lives in `CURRENT_ASCENSION.md`.

---

You're continuing an ongoing game of Kingdom of Loathing. Get oriented, then play out the next day (rollover).

**Read these first, in order:**
1. **`CURRENT_ASCENSION.md`** — the live run state: character state, quest progress, next-session priorities, session log.
2. **`HANDOFF.md`** — the idempotent operational manual: login, the fetch-driven engine + gotchas, combat standard,
   item/consumable references, buying, HARD RULES, URL/skill/snarfblat reference, daily routine.
3. **`mechanics/*.md`** as needed — deep, reusable walkthroughs for specific quests/zones (e.g.
   `naughty-sorceress-tower.md`, `ascension.md`).

**Credentials (test account):** read login/password from `credentials.local.md` (git-ignored, not committed). Login
URL is `https://www.kingdomofloathing.com/login.php`. The game (`game.php`) is a 4-frame layout; drive it with `fetch()`
in the top window and `window.frames['mainpane'].location.href` for navigation (see HANDOFF for details).

**Your job each session:**
1. Log in, rebuild `window._pwd` + helpers, read status, and clear any leftover forced-choice / stuck fight.
2. Follow **EAT → ADVENTURE → DRINK** strictly, and always do BOTH the EAT and the DRINK (fill both meters).
3. Use the combat standard for your class **that this run has actually unlocked** — check
   `CURRENT_ASCENSION.md` for the skills you own before assuming any. (For a fully-trained Pastamancer that's
   **Stuffed Mortar Shell round 1 → Cannelloni Cannon round 2+**; early in a run you may only have
   Entangling Noodles → Cannelloni, or less. Guild skills are re-bought every ascension unless permed.)
4. Do daily-limited things EARLY (Daily Dungeon, once/day casts). Progress the current priorities from `CURRENT_ASCENSION.md`.
5. Write a **lore-friendly, in-character diary** to `my-adventures/YYYY-MM-DD.md` (use the real date).
6. When wrapped (EAT + advs spent + DRINK + diary): **close the KoL browser tab FIRST**, then **commit & push LAST**.
7. **Update `CURRENT_ASCENSION.md`** with the new state (progress, next priorities, a session-log line). Log any newly
   discovered reusable mechanics into `mechanics/` and reusable operational lessons into `HANDOFF.md` — see the
   **doc-hygiene rule** below before writing a single word into either.

**The HARD RULES (full text in `HANDOFF.md`) — the load-bearing ones:**
- **Never end the day with ≥ 40 adventures unspent.** Adapt around disconnects/MP-starvation/stalls; don't stop early.
- **Never wrap with an unused food or booze meter.** EAT and DRINK are both mandatory.
- **Prep necessary items EARLY** — daily-limited activities and everything a gated/one-shot step needs, assembled and
  verified BEFORE triggering the step.
- **Diaries are stories; operational data (item IDs, snarfblats, choices, URLs) goes in `HANDOFF.md` / `CURRENT_ASCENSION.md`.**
- **After the ONE overdrink, the day is over — STOP.** The adventures a day-end overdrink grants are *tomorrow's
  opening balance*; they are meant to sit at 40–60 overnight. Past the cap every turn is a **Drunken Stupor** (turn
  consumed, nothing gained). This **outranks** the "never end with ≥40 unspent" rule. To spend booze adventures the
  same day: fill to exactly the cap, spend, and overdrink only as the very last action.
- **Research on the official wiki only** (`wiki.kingdomofloathing.com`) via WebSearch or in-game text.

---

## 📐 Doc-hygiene rule (read before writing to `mechanics/` or `HANDOFF.md`)

The repo has exactly **one** file for run state and **three** kinds of file that must never contain any:

| File | Contains | Lifetime |
|---|---|---|
| `CURRENT_ASCENSION.md` | character state, quest progress, inventory counts, **caps/limits, which skills are learned or permed**, next-session plan, session log | **this run only** |
| `HANDOFF.md` | how to *operate* — engine, endpoints, HARD RULES, gotchas | forever |
| `mechanics/*.md` | how the *game* works — walkthroughs, item IDs, choice numbers, measured rates | forever |
| `my-adventures/*.md` | in-character diary, one per day | archive |

🎯 **The test, applied to every sentence you add to `HANDOFF.md` or `mechanics/`:**
> *"Would this still be true and useful for a fresh character, in a different ascension, a year from now?"*
> If no → it belongs in `CURRENT_ASCENSION.md`.

❌ **Never write into `HANDOFF.md` / `mechanics/`:**
- **Day numbers or run numbers** — `Day 127`, `run #2`, `since Day 95`, `started Day 111`.
- **Progress markers** — `✅ DONE`, `Status at end of…`, `2 of 4 buildings down`, `we skipped the 8x`.
- **Possession / inventory claims** — `we have 50 crude`, `we already owned 2 from run #1`, `Run #2 has had it
  since Day 99`, `a Permit I don't currently have`.
- 🚨 **Caps, limits and unlocked/permed skills treated as permanent.** These reset or differ per ascension:
  the **booze cap** (14 default, 19 only while **Liver of Steel** is active — it cannot be permed), the
  **fullness cap**, and **every guild skill** (re-bought each run unless karma was spent to perm it).
  ❌ *"fill the liver to 19"*, *"open with Stuffed Mortar Shell"*, *"you have Saucemaven"*.
  ✅ *"read the cap from `charsheet.php`, then fill to it"*, *"once you own Stuffed Mortar Shell…"*.
  **Write the mechanic parametrically and let `CURRENT_ASCENSION.md` supply this run's numbers.**
- **First-person run narrative** — `we lost`, `we arrived already Thrice-Cursed`, `we'd been hoarding 3`.
- **"Next session" plans** of any kind.

✅ **Do write:**
- `✅ Verified in-game` — the fact that a claim was *tested* rather than taken from the wiki is load-bearing; keep it.
  Just drop the run/day coordinates.
- **The conditions a measurement was taken under**, because reproducibility depends on them:
  `Measured: 40 fights, 0 losses at base Mys ~236`, `at 4x kills`, `with no +ML`.
- **Failure modes as general warnings**: `the attempt LOST at base Mys 120` beats `we lost on Day 109`.
- Conditional phrasing for anything situational: *"a previous ascension's estate may already hold all three"*,
  not *"run #1's estate had all three"*.

💡 When a lesson has both halves — a durable mechanic **and** what it cost you this run — **split it**: the mechanic
goes to `mechanics/`/`HANDOFF.md` in timeless form, the cost and the date go to `CURRENT_ASCENSION.md` and the diary.

---

**Alternative one-liner:**

> Continue the KoL run. Read `CURRENT_ASCENSION.md` (state) then `HANDOFF.md` (manual). Log in with the credentials in
> `credentials.local.md`, do EAT → ADVENTURE → DRINK, use the current combat combo, do the Daily Dungeon early, spend all
> adventures, then at day-end **read your drink cap from the charpane (`Tipsiness: X / Y`; Y = 14, or 19 with Liver of
> Steel), fill the booze meter to Y, then take one overdrink and STOP adventuring** (see
> `mechanics/drinking-strategy.md`). Write a lore diary to `my-adventures/YYYY-MM-DD.md`, then close the tab and commit —
> and update `CURRENT_ASCENSION.md`. Keep `HANDOFF.md` and `mechanics/` **run-agnostic**: no day numbers, no run numbers,
> no progress or inventory claims — all of that goes in `CURRENT_ASCENSION.md`.
