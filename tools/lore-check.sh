#!/usr/bin/env bash
# Fails if a diary in my-adventures/ contains out-of-world (non-lore) content.
# Diaries are in-character stories; operational data belongs in HANDOFF.md /
# CURRENT_ASCENSION.md / mechanics/.
#
# Usage:
#   tools/lore-check.sh              # check STAGED diaries (what the hook runs)
#   tools/lore-check.sh <file>...    # check specific files
#   LORE_CHECK_SKIP=1 git commit ... # deliberate override
set -uo pipefail

# bash 3.2 compatible (macOS default) -- no mapfile
FILES=""
if [ "$#" -gt 0 ]; then
  FILES="$*"
else
  FILES=$(git diff --cached --name-only --diff-filter=ACM 2>/dev/null | grep -E '^my-adventures/.*\.md$' || true)
fi
[ -z "$FILES" ] && exit 0

# High-precision patterns only. Deliberately NOT banned because they are real
# KoL vocabulary: guard (Elite Guard Uniform), page, Ronin, Hagnk's, MP/HP,
# adventures, meat, substats, snarf(le)blat is banned but "Snarfblat" as a
# proper noun does not occur in prose.
read -r -d '' PATTERNS <<'PAT'
\bloops?\b|\bscripts?\b|\bfunctions?\b|\bregexe?s?\b|\bparsers?\b|\bparse[sd]?\b
\bcaches?\b|\bcached\b|\bservers?\b|\bendpoints?\b|\bAPIs?\b|\bJSON\b|\bHTTPS?\b|\bURLs?\b
\bpage loads?\b|\bweb\b|\bbrowser\b|\btabs?\b
api\.php|inv_[a-z]+\.php|[a-z_]+\.php|snarfblat|whichitem|whichskill|whichrow|whichchoice|whichplace
\bitem \d{2,}\b|\bitems? #\d+|\boption \d\b|\bchoice \d{2,}\b|#\d{3,}
\.gif\b|\.png\b|charsheet|charpane|character pane
\bwikis?\b|HANDOFF|CURRENT_ASCENSION|NEW_SESSION_PROMPT|mechanics/|my-adventures/
\bgit (commit|push|add)\b|\brepos?\b|\bdocumentation\b|\bthe docs\b
\bwin rates?\b|\bsubstats? per\b|\bmetrics?\b
\bprompt\b|\bagents?\b|\bautomat(e|ed|ion)\b|\bLLM\b
PAT

FAIL=0
for f in $FILES; do
  [ -f "$f" ] || continue
  HITS=""
  while IFS= read -r pat; do
    [ -z "$pat" ] && continue
    m=$(grep -nEi "$pat" "$f" || true)
    [ -n "$m" ] && HITS+="$m"$'\n'
  done <<< "$PATTERNS"
  # backticks in a diary almost always mean a raw identifier leaked in
  bt=$(grep -n '`' "$f" || true)
  [ -n "$bt" ] && HITS+="$bt"$'\n'

  if [ -n "$HITS" ]; then
    FAIL=1
    echo "✖ non-lore content in $f:"
    echo "$HITS" | sed '/^$/d' | sort -t: -k1,1n -u | sed 's/^/    /'
    echo
  fi
done

if [ "$FAIL" -ne 0 ]; then
  cat <<'MSG'
Diaries are in-character stories. Operational data belongs in HANDOFF.md,
CURRENT_ASCENSION.md or mechanics/ — see "Diary voice" in NEW_SESSION_PROMPT.md
for the translation table (how to keep the insight without breaking the fiction).

  Override for a deliberate exception:  LORE_CHECK_SKIP=1 git commit ...
MSG
  exit 1
fi
exit 0
