#!/usr/bin/env node

// PreToolUse hook: Block dangerous Bash commands
// Receives hook input on stdin, outputs decision on stdout

const fs = require('fs');
const input = JSON.parse(fs.readFileSync('/dev/stdin', 'utf8'));

const DANGEROUS_PATTERNS = [
  { pattern: /rm\s+(-[a-zA-Z]*f[a-zA-Z]*\s+|.*--force\s+)(?!\/tmp|.*node_modules)/, reason: 'Destructive rm command on non-temp directory' },
  { pattern: /DROP\s+TABLE(?!\s+IF\s+EXISTS)/i, reason: 'DROP TABLE without IF EXISTS' },
  { pattern: /DELETE\s+FROM\s+\w+\s*(?!WHERE)/i, reason: 'DELETE without WHERE clause' },
  { pattern: /git\s+push\s+.*--force\s+.*(?:main|master|production)/i, reason: 'Force push to protected branch' },
  { pattern: /chmod\s+777/, reason: 'Overly permissive file permissions' },
  { pattern: />\s*\/etc\//, reason: 'Writing to system directory' },
];

const command = input.tool_input?.command || '';

for (const { pattern, reason } of DANGEROUS_PATTERNS) {
  if (pattern.test(command)) {
    console.log(JSON.stringify({
      decision: 'block',
      reason: `🚫 Blocked: ${reason}\nCommand: ${command}`
    }));
    process.exit(0);
  }
}

console.log(JSON.stringify({ decision: 'allow' }));
