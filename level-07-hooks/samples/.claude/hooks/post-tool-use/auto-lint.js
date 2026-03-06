#!/usr/bin/env node

// PostToolUse hook: Auto-lint files after Write/Edit operations
// Runs the appropriate linter based on file extension

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');
const input = JSON.parse(fs.readFileSync('/dev/stdin', 'utf8'));

const filePath = input.tool_input?.file_path || input.tool_input?.path || '';
const ext = path.extname(filePath);

const LINTERS = {
  '.js': 'npx eslint --fix',
  '.ts': 'npx eslint --fix',
  '.jsx': 'npx eslint --fix',
  '.tsx': 'npx eslint --fix',
  '.py': 'python3 -m black',
  '.css': 'npx stylelint --fix',
};

const lintCommand = LINTERS[ext];

if (lintCommand && fs.existsSync(filePath)) {
  try {
    const output = execSync(`${lintCommand} "${filePath}" 2>&1`, {
      encoding: 'utf8',
      timeout: 10000,
    });
    if (output.trim()) {
      console.error(`✅ Auto-linted ${filePath}:\n${output.trim()}`);
    }
  } catch (error) {
    console.error(`⚠️ Lint issues in ${filePath}:\n${error.stdout || error.message}`);
  }
}

// PostToolUse hooks don't block -- they just observe and report
