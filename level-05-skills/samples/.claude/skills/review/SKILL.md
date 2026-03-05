---
name: review
description: >
  Reviews staged git changes for bugs, security issues, and code quality.
  Use when preparing for PR review, checking changes before push, when
  someone asks to look at, check, or review their code, or says "anything wrong?"
allowed-tools: Bash(git diff *), Read, Grep, Glob
---

Review the git diff of staged changes. For each changed file:

1. **Bugs & Edge Cases**: Logic errors, off-by-one, null/undefined handling, type mismatches
2. **Security**: Injection vectors, auth bypass, data exposure, OWASP top 10
3. **Performance**: N+1 queries, unnecessary re-renders, memory leaks, inefficient loops
4. **Conventions**: Verify code follows patterns in CLAUDE.md

## Output Format

For each file, provide:

### `filename.ts` -- **PASS** | **MINOR ISSUES** | **NEEDS WORK**

| Line | Severity | Issue |
|------|----------|-------|
| 42 | HIGH | Description of issue |

## Summary

End with:
- **Must-fix** (blocking): issues that must change before merge
- **Nice-to-have** (non-blocking): improvements to consider
- **Overall confidence**: 1-10 scale
