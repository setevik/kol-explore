# Eating strategy — fill the fullness meter by ADVENTURES PER FULLNESS

> Run-agnostic, class-agnostic. The counterpart to `drinking-strategy.md`. Class-specific food bonuses (a
> Pastamancer's pasta-MP, Saucemaven, Carboloading) live in `<class>-food.md`; this file is the arithmetic
> that applies to everybody. Which foods you actually hold is `CURRENT_ASCENSION.md`'s business.

## 🎯 The one rule

**Rank every food you can eat by `average adventures ÷ fullness`, then fill the meter with the best ones that
add up to exactly your cap.** Size is not quality. A 6-fullness "workhorse" food can be *half* as efficient as
a 1-fullness snack, and eating it costs you the same meter.

⚠️ **This corrects a rule of thumb that reads like an efficiency rule and is not one.** "Eat the big item
first, then 1-fullness fillers to top up" is about **not overshooting the cap** — you cannot un-eat a 6-fullness
dish that leaves you at 16/15. It says nothing about which foods are *good*. Once your combination sums to the
cap exactly, order is irrelevant and the only question is adv-per-fullness.

✅ **Measured, same character, same 15-fullness cap, one day apart:**

| Plan | Composition | Adventures |
|---|---|---|
| "big item first" | 2 × 6-fullness workhorse food (2.2 adv/full) + 3 fullness of filler | **~35** |
| **best adv/fullness** | 2 × 4-fullness at 4.4/full + 7 × 1-fullness at ~3.5/full | **62** |

⇒ **+27 adventures for the same meter and no extra meat.** This is larger than most gear upgrades and it is
available every single day.

## 📊 Measured adv-per-fullness table

Averages from the official wiki item pages (`avg.` where the page states one, otherwise the midpoint of the
stated range). ✅ The three ratios in bold were re-verified in-game the day this table was written.

| Food | Size | Lvl | Adv | **adv/full** |
|---|---|---|---|---|
| **herbal stuffing** | 4 | 7 | 17.5 | **4.4** ⭐ best found so far |
| later tots | 1 | — | 3–4 | **3.5** ⭐ |
| tomb aspic | 1 | — | 3–4 | 3.5 ⭐ |
| hot honey ant | 1 | — | 3–4 | 3.5 ⭐ |
| incredible pizza | 4 | 9 | 12–16 | 3.5 |
| candied yams | 3 | 5 | 9.5 | 3.2 |
| plain snowcone | 1 | 4 | 3 | 3.0 |
| Knob nuts | 1 | 4 | 3 | 3.0 |
| pestopiary | 2 | — | 5–7 | 3.0 |
| moose chocolate | 3 | 6 | 8–9 | 2.8 |
| giant heirloom grape tomato | 5 | 6 | 14 | 2.8 |
| sweet roll Alabama / vampire chowder | 4 | 4 | 9–11 | 2.5 |
| **stolen sushi** | 6 | 6 | 13 | **2.2** |
| succulent marrow / salacious crumbs | 3 | — | 5–7 | 2.0 |
| sponge cake | 2 | 3 | 3–5 | 2.0 |
| ancient frozen dinner | 4 | — | 4–8 | 1.5 |
| dire fudgesicle | 2 | — | 2–4 | 1.5 |
| ghuol egg · hot wing · white chocolate chips | 1 | — | 1 | 1.0 ❌ |

🚨 **The 1-fullness snacks are the surprise.** *later tots*, *tomb aspic* and *hot honey ant* beat the
6-fullness staple by 60%, and they come in stacks from earlier content. **The reason they get overlooked is
that they read as "filler"** — they are the second-best food in the list.

⚠️ Do not treat the last two rows as fillers either: **a 1-adventure snack is nearly a wasted point of
fullness.** If a 1-fullness gap is all that is left and everything you own for it yields 1 adventure, that is
fine — but never build a plan around them.

## 🧮 How to run the step

1. **Read the cap** (`api.php?what=status` → `full`; the cap is 15 unless a run-specific effect changes it).
2. **Enumerate what you can actually eat** — parse `inventory.php?which=1` *and* `storage.php?which=1`;
   once Ronin is over, storage is part of your pantry and pulls are free.
   ⚠️ **Check `Level required:` before planning around a food** — a food above your level simply won't eat.
3. **Look up sizes and averages in one Bash pass** rather than guessing:
   ```bash
   curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/120 Safari/537.36" \
     "https://wiki.kingdomofloathing.com/<Item_Name>" \
   | python3 -c "
   import sys,re
   t=re.sub(r'\s+',' ',re.sub(r'<[^>]+>',' ',re.sub(r'<script.*?</script>','',sys.stdin.read(),flags=re.S)))
   sz=re.search(r'Size:\s*(\d+)',t); lv=re.search(r'Level required:\s*(\d+)',t)
   av=re.search(r'avg\.\s*([\d.]+)',t); ad=re.search(r'You gain ([\d\-]+) Adventures?',t)
   print('size',sz and sz.group(1),'lvl',lv and lv.group(1),'adv',(av or ad) and (av or ad).group(1))"
   ```
   One loop over a dozen candidate names costs seconds and pays for itself many times over.
4. **Pick the highest-ratio combination that sums to the cap exactly.** In practice: take the best big item(s)
   you own, then close the gap with the best 1-fullness items — not the worst ones.
5. **Milk of magnesium goes first** (see below), then eat.
6. **Verify each bite** — read `full` and `adventures` after every item. A food that reports `+0 full` did not
   eat (level gate, or the wrong endpoint); a food that reports far fewer adventures than the table is worth
   re-checking before you buy a stack of it.

## 🥛 Milk of magnesium — take it every day

**"The next food item you eat gives +5 Adventures", once per day.** ✅ Measured in-game: a 4-fullness food
whose wiki average is 17.5 yielded **22**.

- **It has no visible effect** — the old "Got Milk" charpane effect is retired. Don't conclude it failed.
- ⚠️ **It does not work with sushi** or Hobopolis food.
- **It is flat per *food*, not per fullness**, so on a tie it is worth slightly more on your *first* item than
  spread around — but the difference is small; the composition of the meter matters far more.
- **Sourcing:** the mall carries it at ~100 meat. ⚠️ It is very commonly listed **`(Limit 1 / day)` per
  store**, so a `quantity=5` order fills only one. Buy one per store if you want a stockpile.

## ⚠️ Endpoint reminders

- Eat with **`inv_eat.php?which=1&whichitem=<id>&pwd=<hash>&ajax=1`**. The wrong verb returns a normal page and
  eats nothing (see `HANDOFF.md` § "Item endpoints").
- **Food, booze and spleen are three separate meters** with three separate endpoints — a "food" that refuses
  `inv_eat` may be a spleen item.
