# Ronin / Softcore: Hagnk's, the mall, and pulls (the rules that break your plans)

> Idempotent. Verified in-game on run #2, Day 4. These invalidate several "obvious" assumptions — read before
> planning any shopping or consumable strategy in the first 1,000 turns of a Softcore run.

## The three rules

1. **In Ronin, mall purchases go to Hagnk's storage, and are paid for with Hagnk's meat — NOT your inventory.**
   The buy succeeds and the response says:
   > "You acquire an item: sonar-in-a-biscuit **(stored in Hagnk's Ancestral Mini-Storage)**…
   > You spent 100 meat **from Hagnk's**. You have 1,149 meat left."

   So your **inventory meat is untouched** and the item is **not usable yet**. Hagnk's meat is a *separate purse*
   from inventory meat — track both.

2. **You may pull only ONE of each distinct item per day.** The daily cap is 20 items, but a second pull of the
   same item returns:
   > "**You already pulled one of those today.**"

   Pulling `howmany1=4` silently yields **1**, and burns only 1 of the 20. So a stack in storage (e.g. 121 stolen
   sushi, 4 burritos) trickles out at **1/day**.

3. **⇒ The mall cannot stock up a consumable during Ronin.** Buying 4 burritos gets you 1 today, 1 tomorrow…
   The mall is only useful for things you need **one of** (a piece of gear, one quest item).

## What this means in practice

- ❌ **Don't** plan "buy N food from the mall and fill the meter" in Ronin. It cannot work.
- ✅ **NPC shops deliver straight to inventory** and are unaffected by all of this. In Ronin these are the real
  supply line: the **guild store (`shop.php?whichshop=guildstore2`, Gouda)**, the general store, etc.
  See `guild-membership-and-skills.md`.
- ✅ Items **already in inventory** (and all combat drops) are unrestricted — farm what you need.
- ✅ Fill the food meter with **1 good food (pulled) + a stack of 1-fullness filler already in inventory**
  (e.g. 1 burrito = 3 fullness + 12 oranges = full 15).
- ⚠️ **CHECK HAGNK'S BEFORE BUYING.** Storage carries the whole previous run (400+ item types). On Day 4 we
  bought 3 sonars and an air freshener for ~520 meat while **already owning 5 sonars and 3 fresheners** in
  storage. Read `api.php?what=storage&for=<x>` (→ `{itemId: qty}`) first.

## Useful URLs

- **Read storage:** `api.php?what=storage&for=<name>` → `{itemId: qty}` (same shape as `what=inventory`).
- **Pull an item:** `storage.php?action=pull&whichitem1=<id>&howmany1=<n>&pwd=<hash>`
  (`howmany1` > 1 is pointless during Ronin — see rule 2).
- The storage page reports remaining pulls: *"You may take 17 more items or 17,000 more Meat out of storage today."*
  `storage.php` itself is JS-rendered — parse the **pull links** (`action=pull&whichitem1=…`), not `<form>`s.

## Verifying a mall buy (don't trust a naive regex)

A generic `/You spent|acquire/` test **false-positives** — it matched even though nothing reached inventory.
Verify with a **real signal**: check `meat` before/after, or read storage. Note that `api.php?what=inventory`
also caches briefly after a buy, so use a varying `for=` param.

**Mall buy mechanics** (`mallstore.php`): the item radio is `input[name="whichitem"]` with value
`"<itemid>.<price>"` (e.g. `316.300`). ⚠️ Match it via **DOM** (`[...d.querySelectorAll('input[name="whichitem"]')]
.find(i => i.value.startsWith(id + '.'))`) — a regex like `name="whichitem" value="…"` fails on attribute order.
