# Booze options (resolved Day 47 / 2026-06-02)

For many days the notes said "no implemented booze" (open sauce / Ye Olde Meade both throw
"not implemented yet"). That gap is now closed: the **Hidden Tavern** is our booze tap.

## Class note
**Pastamancer gets NO booze class bonus** — booze favoritism belongs to Saucerors. We drink
purely for the raw adventures, which roll over to the next day (the point of "DRINK last").

## Source: The Hidden Tavern
`shop.php?whichshop=hiddentavern` (unlocked Day 45). Three drinks, **500 Meat each, level 6**:

| Drink | Shop row | Item id | Desc quality/potency | ⚠️ ACTUAL in-game yield |
|---|---|---|---|---|
| Cursed Punch | 173 | 7325 | good / potency 1 | ~+1 drunk, ~3 advs, **+ random Curse debuff** |
| Bowl of Scorpions | 174 | (n/a) | crappy / potency 8 | (not drunk — also a drunk-pygmy fight-skip item) |
| Fog Murderer | 175 | 2273 | good / potency 6 | ~+1 drunk, ~1.5 advs |

- **Buy**: `shop.php?whichshop=hiddentavern&action=buyitem&whichrow=ROW&quantity=N&pwd=`
- **Drink**: `inv_booze.php?which=1&whichitem=ID&pwd=`

## ⚠️ KEY EMPIRICAL FINDING
On this server, **each drink only added ~+1 drunkenness and ~1.5–3 adventures**, FAR below
what the item descriptions advertise (Fog Murderer "potency 6", Bowl of Scorpions "potency
8"). Tested: 2 Fog Murderer + 2 Cursed Punch = 4 drinks → drunk 0→4, +9 advs total.
So booze here is a **weak, expensive rollover-adv source (~500 Meat per ~2 advs)**.

**Recommendation**: only drink end-of-day if Meat is plentiful and you want a small
rollover-adv top-up. Don't over-invest. **Cursed Punch inflicts a random curse** (saw "Once
Bitten Twice Fried", "Kiss of the Black Fairy") — prefer Fog Murderer if drinking.

## Drunkenness cap
14/14 (no Liver of Steel). Drinking past adventuring is the last daily step; drunkenness
resets at rollover and the gained adventures carry over.

## Other booze sources (not used)
- Typical Tavern / Barroom Brawl (snarf 233), mall booze — pricier or weaker; Hidden Tavern
  is the convenient option now.
