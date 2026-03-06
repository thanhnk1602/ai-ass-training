---
name: review
description: Review code changes for quality, patterns, and Acme standards compliance
allowed-tools: Bash(git *), Read, Grep, Glob
---

## Acme Code Review

Review the current changes against Acme engineering standards.

### Steps
1. Run `git diff --staged` (or `git diff` if nothing staged) to see changes
2. For each changed file, check:
   - TypeScript strict mode compliance
   - Named exports (not default)
   - Zod validation on inputs
   - Error handling with AppError
   - File naming conventions
3. Check test coverage for changed code
4. Check for security issues (SQL injection, XSS, auth bypass)

### Output Format

## Code Review Summary

**Files Reviewed:** [count]
**Issues Found:** [count]

### 🔴 Critical
[List critical issues]

### 🟡 Warnings  
[List warnings]

### 🟢 Good Practices
[List things done well]

### Recommendations
[Prioritized list of improvements]
