---
name: pr-review
description: Reviews the current pull request with full context from GitHub
context: fork
allowed-tools: Read, Grep, Glob, Bash(gh *)
disable-model-invocation: true
---

## Pull Request Context

### PR Details
!`gh pr view`

### Full Diff
!`gh pr diff`

### Changed Files
!`gh pr diff --name-only`

### Existing Comments
!`gh pr view --comments`

---

## Your Task

Review this pull request thoroughly:

1. **For each changed file:**
   - Check for bugs, logic errors, and edge cases
   - Check for security vulnerabilities
   - Verify error handling
   - Check naming and code style consistency

2. **Overall assessment:**
   - Does the PR description match the actual changes?
   - Is the scope appropriate (not too large, not mixing concerns)?
   - Are there missing tests for new behavior?
   - Has existing comment feedback been addressed?

3. **Verdict:** APPROVE / REQUEST_CHANGES / COMMENT

## Output Format

### Summary
[One paragraph: what this PR does and overall quality]

### File Reviews
For each changed file:
- **file.ts**: [PASS / ISSUES] -- [details with line refs]

### Verdict: [APPROVE / REQUEST_CHANGES]

### Action Items
- [ ] [Required changes, if any]
- [ ] [Suggested improvements]
