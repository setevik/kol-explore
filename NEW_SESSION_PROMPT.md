# Prompt for New Session

Copy-paste this into a new Claude session to continue the KoL journey:

---

You're continuing a Kingdom of Loathing adventure already in progress. Familirize yourself with the game, wiki and read `/Users/setevik/github/kol-explore/HANDOFF.md` first for full context, then start next day (rollover).

**Quick context:**
- Character: **ClaudeCode, Level 6 Pastamancer**
- Credentials (test account, not secret): login `ClaudeCode`, password `REDACTED`
- Login URL: `https://www.kingdomofloathing.com/login.php`
- Game at `https://www.kingdomofloathing.com/game.php` uses a 4-frame layout (charpane, menupane, mainpane, chatpane). All navigation goes through `frames['mainpane'].location.href = 'path'`

**Your job:**
1. Log in (may require me to click login manually if JavaScript submit fails)
2. Follow the **EAT → ADVENTURE → DRINK** order strictly
3. Use the proven combat combo: **Entangling Noodles round 1, then Ravioli Shurikens round 2+**
4. Progress active quests (see HANDOFF for list -- Friars, Billiards, Knob, Goblin King)
5. Write a daily diary in `my-adventures/YYYY-MM-DD.md` (use real date)
6. Log new mechanics findings to `mechanics/` folder if you discover anything not already documented. Commit and push diary and mechanics files after each session.

**Day 8 specific priorities:**
1. Cast Pastamastery EARLY (once-per-day summon of dry noodles -- better food than pickled eggs!)
2. Craft and eat pasta dishes (Pastamancer gets +3-7 MP per fullness from pasta)
3. Find the "imp in a beret" in Dark Neck of the Woods (Friars artifact thief)
4. Grind toward 1,750 Meat for **Springy Fusilli** skill (+40% initiative)
5. Try the Haunted Billiards Room (need Pool Skill 14+: cue +3, chalk +3, drunkenness up to 10 gives +10)

**Automation tips (learned the hard way):**
- Use recursive `setTimeout` or async bursts, NOT `setInterval` (dies on frame nav)
- "Adventure Again" is a LINK, not a button -- navigate directly to `adventure.php?snarfblat=XXX`
- Warning zones ("recommended X Mysticality"): submit the form with `ignorewarning=1` to bypass
- If Chrome extension disconnects, ask user to check it -- it's transient

**Stats targets for progression:**
- To adventure Dark Heart/Elbow safely, need 45 Mysticality (currently 32)
- Safe Moxie for any zone = monster max exp × 4
- Level 7+ zones open new quests from Council

Be diary-entertaining. The humor of KoL (puns, pop culture jokes) deserves documentation.

---

**Alternative short prompt (if you want to get started immediately):**

> Continue Day 8 of KoL. Read `~/github/kol-explore/HANDOFF.md` for full state. Character is Level 6 Pastamancer "ClaudeCode", password "REDACTED". Start by logging in, cast buffs (Manicotti + Vampieroghi + Ben-Gal), use Pastamastery to summon dry noodles, craft pasta dishes to eat, then grind quests. Use Entangling Noodles → Ravioli Shurikens combat combo. Write diary to `my-adventures/YYYY-MM-DD.md`. Never drink booze until all adventuring is done.
