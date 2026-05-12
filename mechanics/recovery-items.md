# Recovery & Buff Items (Mid-Game Pastamancer)

## Tier S — Save for emergencies

### tiny house (item)
- **Effect**: Full HP/MP restore + **clears Beaten Up** + may clear other negative effects
- **Cost**: Does NOT cost an adventure (verified Day 28)
- **Source**: Drops in Penultimate Fantasy Airship
- **Use case**: After a Beaten Up, after a tough fight, before a boss. The single best recovery item I have.

### phonics down (item)
- **Effect**: +98 HP, +99 MP, +**Tingly Wrists** (3 turns, +Mys), +**Tingly Elbows** (3 turns, +Mys/Mox)
- **Cost**: 1 use per item, no adv cost
- **Source**: Player letters / wedding favors
- **Use case**: Pre-boss buff (the Tingly stack noticeably boosts Mys), or recovery after a long grind.

### scroll of drastic healing (item)
- **Effect**: Full HP and MP restore
- **Caveat**: Does NOT clear Beaten Up (confirmed Day 28 — tried it during BU, no help)
- **Source**: Various drops
- **Use case**: When you're alive and just need topup. Tiny house is strictly better when BU is involved.

## Tier A — Use freely, plentiful

### Lasagna Bandages (Pastamancer skill, ID 3009)
- **Cost**: 6 MP per cast
- **Heal**: ~12-21 HP per cast (scales with Mys?)
- **Use**: Out of combat to top up between adventures, or in-combat via `fight.php?action=skill&whichskill=3009` as emergency heal

### Campground rest
- **URL**: `campground.php?action=rest`
- **Effect**: +8 HP, +10 MP
- **Cost**: 1 adventure per rest (with no IOTM bedding upgrade)
- **Caveat**: Inefficient — only worth it if you have NO other recovery options. Lasagna at 6 MP is way more efficient.

## Tier B — Spleen items (limit 15 spleen/day, resets on rollover)

I have these in stash but haven't tested effects:
- **sparkling orb** (5 in stock) — likely +Mys (Magicalness)
- **hardening cream** (6) — possibly +Muscle
- **strongness elixir** (12) — +Strongness (= Muscle XP per fight)
- **concentrated cooking** (7) — possibly +HP/MP regen
- **dieting pill** (4) — reduces fullness/drunk maybe?
- **pool shark hair oil** (1) — temporary +Pool Skill (for Haunted Billiards Room!)

**TODO**: Test each spleen item type and document effect/duration.

## Tier C — Combat items (may bypass spell disruption mechanics)

For bosses that disrupt skills (Bonerdagon's wing-flap):
- **smut orc keepsake box** (3) — combat item
- **dried face** (2) — combat item
- **hellion cube** (1) — combat item
- **spooky shrunken head** (2) — combat item
- **bunny liver** (3) — combat item

These should fire damage even when spells are disrupted. Test against Bonerdagon next attempt.

## Effect summary table

| Effect | Source | Duration | Bonus |
|--------|--------|----------|-------|
| Pasta Oneness | Manicotti Meditation (1 MP) | 5 turns | +2 Mys |
| Springy Fusilli | Springy Fusilli skill (10 MP) | 10 turns | +20% initiative |
| Sugar Rush | candy/something (carries over) | ~varies | +Moxie |
| Tingly Wrists | phonics down | 3 turns | +Mys |
| Tingly Elbows | phonics down | 3 turns | +Mys/Mox |
| Beaten Up | failed combat | 3 turns | -stats, HP cap 75%, blocks adventures |
