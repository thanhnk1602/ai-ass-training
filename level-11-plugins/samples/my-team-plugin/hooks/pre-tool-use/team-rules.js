#!/usr/bin/env node

// Pre-tool-use hook: Enforce Acme Corp team rules
// Checks file naming, prevents writes outside src/, enforces conventions

const fs = require('fs');
const path = require('path');
const input = JSON.parse(fs.readFileSync('/dev/stdin', 'utf8'));

const toolName = input.tool_name || '';
const filePath = input.tool_input?.file_path || input.tool_input?.path || '';

// Only check Write and Edit operations
if (!['Write', 'Edit'].includes(toolName) || !filePath) {
  console.log(JSON.stringify({ decision: 'allow' }));
  process.exit(0);
}

const fileName = path.basename(filePath);
const ext = path.extname(filePath);

const violations = [];

// Rule 1: React components must be PascalCase
if (ext === '.tsx' && !filePath.includes('.test.') && !filePath.includes('.spec.')) {
  const baseName = path.basename(filePath, ext);
  if (baseName.length > 0 && baseName[0] !== baseName[0].toUpperCase()) {
    violations.push(`React components must use PascalCase: ${fileName} → ${baseName[0].toUpperCase() + baseName.slice(1)}.tsx`);
  }
}

// Rule 2: Test files must end with .test.ts or .spec.ts
if (filePath.includes('__tests__') || filePath.includes('test')) {
  if (!filePath.match(/\.(test|spec)\.(ts|tsx|js|jsx)$/)) {
    violations.push(`Test files must end with .test.ts or .spec.ts: ${fileName}`);
  }
}

// Rule 3: No files outside src/ (except config files in root)
const rootConfigs = ['package.json', 'tsconfig.json', 'vite.config.ts', '.env', '.env.example', 'tailwind.config.ts'];
if (!filePath.startsWith('src/') && !rootConfigs.includes(fileName) && !filePath.startsWith('.claude/')) {
  violations.push(`Files must be created in src/ directory: ${filePath}`);
}

// Rule 4: API route files must be kebab-case
if (filePath.startsWith('src/api/') || filePath.includes('/routes/')) {
  const baseName = path.basename(filePath, ext);
  if (/[A-Z]/.test(baseName)) {
    violations.push(`API route files must use kebab-case: ${fileName}`);
  }
}

if (violations.length > 0) {
  console.log(JSON.stringify({
    decision: 'block',
    reason: `📛 Team Rule Violations:\n${violations.map(v => `  • ${v}`).join('\n')}`
  }));
} else {
  console.log(JSON.stringify({ decision: 'allow' }));
}
