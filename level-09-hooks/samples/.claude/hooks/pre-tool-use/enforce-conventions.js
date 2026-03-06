#!/usr/bin/env node

// PreToolUse hook: Enforce file naming conventions on Write operations
// Blocks file creation that doesn't follow team naming rules

const fs = require('fs');
const path = require('path');
const input = JSON.parse(fs.readFileSync('/dev/stdin', 'utf8'));

const filePath = input.tool_input?.file_path || '';
const fileName = path.basename(filePath);
const dirName = path.dirname(filePath);

const RULES = [
  {
    test: (f) => f.endsWith('.tsx') && /^[a-z]/.test(path.basename(f, '.tsx')),
    reason: 'React component files must use PascalCase (e.g., UserProfile.tsx)',
    applies: (f) => f.endsWith('.tsx') && !f.includes('.test.') && !f.includes('.spec.'),
  },
  {
    test: (f) => f.includes('.test.') && !f.match(/\.(test|spec)\.(ts|tsx|js|jsx)$/),
    reason: 'Test files must end with .test.ts, .test.tsx, .spec.ts, or .spec.tsx',
    applies: (f) => f.includes('test') || f.includes('spec'),
  },
  {
    test: (f) => f.startsWith('src/api/') && /[A-Z]/.test(path.basename(f).replace(/\.[^.]+$/, '')),
    reason: 'API route files must use kebab-case (e.g., user-profile.ts)',
    applies: (f) => f.startsWith('src/api/'),
  },
];

for (const rule of RULES) {
  if (rule.applies(filePath) && rule.test(filePath)) {
    console.log(JSON.stringify({
      decision: 'block',
      reason: `📛 Convention violation: ${rule.reason}\nFile: ${filePath}`
    }));
    process.exit(0);
  }
}

console.log(JSON.stringify({ decision: 'allow' }));
