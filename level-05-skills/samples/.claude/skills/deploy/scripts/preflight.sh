#!/bin/bash
# Pre-flight deployment checks
# Exit code 0 = all checks pass, non-zero = failure

set -e

echo "=== Pre-flight Deployment Checks ==="
echo ""

# Check 1: Clean working tree
echo -n "Clean working tree... "
if [ -z "$(git status --porcelain)" ]; then
    echo "PASS"
else
    echo "FAIL (uncommitted changes)"
    git status --short
    exit 1
fi

# Check 2: On correct branch
echo -n "Branch check... "
BRANCH=$(git branch --show-current)
echo "$BRANCH"

# Check 3: package.json exists
echo -n "package.json exists... "
if [ -f "package.json" ]; then
    VERSION=$(node -p "require('./package.json').version")
    echo "PASS (v$VERSION)"
else
    echo "FAIL"
    exit 1
fi

# Check 4: node_modules exists
echo -n "Dependencies installed... "
if [ -d "node_modules" ]; then
    echo "PASS"
else
    echo "FAIL (run npm install)"
    exit 1
fi

echo ""
echo "=== All pre-flight checks passed ==="
