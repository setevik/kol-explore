# CURRENT ASCENSION — live run state

> **This is the ONLY file that holds current-run state** (character state, quest progress, next
> priorities, session log). Reusable know-how lives elsewhere and must stay run-agnostic:
> - `HANDOFF.md` — idempotent operational manual (engine, rules, item refs, gotchas).
> - `mechanics/*.md` — idempotent game mechanics / walkthroughs.
> - `NEW_SESSION_PROMPT.md` — idempotent session-start prompt.
> Prior completed runs are archived in `runs/` (e.g. `runs/ascension-01-pastamancer.md`).

**Character:** ClaudeCode — **Ascension #2 (the SECOND run)**, a **Level 1 Pastamancer**, Softcore/Normal.
**Started:** Day 86 / 2026-07-13 (immediately after winning + ascending run #1).

---

## 🎉 We ASCENDED (2026-07-13)

Run #1 is WON and archived (`runs/ascension-01-pastamancer.md`): beat the Naughty Sorceress (all 3 forms,
via the Wand of Nagamar) + freed King Ralph XI, then stepped through the astral gash and reincarnated.

**This new run's ascension choices (Softcore, per the plan in `mechanics/ascension.md`):**
- **Lifestyle: Normal (Softcore)** — in **Ronin for the first 1,000 turns** (may pull ≤20 items OR 20,000 meat/day
  from **Hagnk's** during Ronin; last run's whole inventory is sitting in Hagnk's). Earns **111 karma** on completion.
- **Class: Pastamancer** (kept — synergy with permed Pastamastery).
- **Moon Sign: The Opossum** (+10% Mysticality gains; unlocks Little Canadia). Good for a Mys caster.
- **Path: Standard** (2026 yearly path; **+50 bonus karma**, reward angelbone chopsticks; note: pre-2024
  limited-time content disallowed — irrelevant to our basic playstyle).
- **Permed: Pastamastery** (now available every non-Hardcore run forever — daily dry-noodle food summon).
- **Astral pet:** bought the **astral chapeau** (caster hat; equip it early).
- Karma left over: ~1 (banks). Familiars stay in the terrarium; permed skills + account unlocks carry over.

---

## 📊 Character state (run #2 — end of Day 86 / opening)

- **Level 3 Pastamancer.** Mysticality ~13. HP 4/6, MP 20/20. **Meat 0. adv 2.** full 0, drunk 0. **Ronin 1,000.**
- **Equipped:** astral chapeau (hat, item 5030) · pasta spoon (weapon, 5) · old sweatpants (pants, 4711).
- **Have:** permed **Pastamastery** (daily dry-noodle summon), starter jewels (hamethyst + 4 porquoise — sellable),
  a Newbiesport™ tent, a **telegram from Lady Spookyraven** (starts the Manor quest later). Terrarium: (none equipped).
- **In Hagnk's** (pull ≤20/day during Ronin): **123 stolen sushi (6293)**, **22 MMJ (518)**, + last run's 400+ item types.
  ⚠️ No booze in storage (used all the Fog last run) and the Hidden Tavern isn't unlocked this early → **DRINK blocked** for now.
  ⚠️ Sushi-eat was finicky/flaky-connection this session; retry EAT next session (pull sushi, `inv_eat.php?whichitem=6293`).

---

## 🔜 Next-session priorities (ordered) — continue the early game

✅ Done Day 86: Toot Oriole (starter package), equipped gear, reached **Level 3**, **Council quest active = get a
mosquito larva**. Still fragile (6 HP, no combat spells re-learned).

1. **EAT first** (it refuels the day — sushi gives ~+12 adv each): pull stolen sushi (6293) from Hagnk's, `inv_eat.php`.
2. **Visit the Pastamancer guild (`guild.php`)** — learn low-level combat skills (Spaghetti Spear, etc.); sell a jewel or
   two for starter meat if guild skills cost meat. Better combat = safer questing.
3. **Mosquito larva quest:** adventure the **Spooky Forest (snarf 15)** → get the mosquito larva → return to Council
   (unlocks the Bat Hole / Boss Bat). Then the L3+ Council chain (Tavern rats, Boss Bat, Cobb's Knob, …) all over again.
4. **Level up** in the **Dire Warren (snarf 240)** (safe, unlimited fluffy bunnies) whenever you need stats.
5. **DRINK** once the Hidden Tavern is unlocked (Tavern quest) or buy booze once you have meat.
6. **Long-term:** finish this Softcore run (→ 111 karma, perm the next skill — a meat/econ skill), then escalate toward
   Hardcore ascensions. See `mechanics/ascension.md` for the perm-priority plan.

⚠️ **Softcore/Ronin reminders:** no player buffs/gifts and limited Hagnk's pulls for the first 1,000 turns; after that
Hagnk's opens fully. The old mall-buying still works (Softcore allows the mall).

---

## 🗓️ Session log (this run)

- **Day 86 (2026-07-13) — 🏆 WON run #1 & ASCENDED.** Restocked (60 MMJ), then cracked **NS form 2** using the fixed engine
  (varying `for=` HP reads + full-maxHP entry + Entangle stun + Cannelloni + aggressive heals). Reached **form 3**, lost to it
  → unlocked the **Bear Verb Orgy** at The VERY Unquiet Garves (snarf 58) → got the **Wand of Nagamar** (9 fights). Re-fought
  the NS with the wand → **beat all 3 forms**, **broke King Ralph's prism** → quest complete → astral gash. **Ascended
  Softcore** (Pastamancer / Opossum / Standard; permed Pastamastery; astral chapeau).
  **Then opened run #2:** Toot Oriole starter package (letter from King Ralph → pork elf goodies sack = jewels),
  equipped gear, ground the **Dire Warren (240)** to **Level 3** (Council quest = mosquito larva now active). EAT/DRINK
  couldn't be filled (finicky sushi-eat + flaky connection; no booze source unlocked yet).
  *(Run #1's full session log Days 28–86 is archived in `runs/ascension-01-pastamancer.md`.)*
