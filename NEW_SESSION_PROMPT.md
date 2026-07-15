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
3. Use the proven combat combo: **Stuffed Mortar Shell (round 1) → Cannelloni Cannon (round 2+)**.
4. Do daily-limited things EARLY (Daily Dungeon, once/day casts). Progress the current priorities from `CURRENT_ASCENSION.md`.
5. Write a **lore-friendly, in-character diary** to `my-adventures/YYYY-MM-DD.md` (use the real date).
6. When wrapped (EAT + advs spent + DRINK + diary): **close the KoL browser tab FIRST**, then **commit & push LAST**.
7. **Update `CURRENT_ASCENSION.md`** with the new state (progress, next priorities, a session-log line). Log any newly
   discovered reusable mechanics into `mechanics/` and reusable operational lessons into `HANDOFF.md` — but keep those
   two run-agnostic; all run-state goes in `CURRENT_ASCENSION.md`.

**The HARD RULES (full text in `HANDOFF.md`) — the load-bearing ones:**
- **Never end the day with ≥ 40 adventures unspent.** Adapt around disconnects/MP-starvation/stalls; don't stop early.
- **Never wrap with an unused food or booze meter.** EAT and DRINK are both mandatory.
- **Prep necessary items EARLY** — daily-limited activities and everything a gated/one-shot step needs, assembled and
  verified BEFORE triggering the step.
- **Diaries are stories; operational data (item IDs, snarfblats, choices, URLs) goes in `HANDOFF.md` / `CURRENT_ASCENSION.md`.**
- **Research on the official wiki only** (`wiki.kingdomofloathing.com`) via WebSearch or in-game text.

---

**Alternative one-liner:**

> Continue the KoL run. Read `CURRENT_ASCENSION.md` (state) then `HANDOFF.md` (manual). Log in with the credentials in
> `credentials.local.md`, do EAT → ADVENTURE → DRINK, use Mortar→Cannelloni, do the Daily Dungeon early, spend all adventures,
> drink 2 Fog Murderers, write a lore diary to `my-adventures/YYYY-MM-DD.md`, then close the tab and commit — and
> update `CURRENT_ASCENSION.md`.
