Review the git diff of staged changes. For each file:

1. Check for bugs, edge cases, and security issues
2. Verify error handling is comprehensive
3. Check for performance concerns
4. Ensure code follows project conventions from CLAUDE.md
5. Rate each file: PASS / MINOR ISSUES / NEEDS WORK

Output a structured review with specific line references.
Format as a PR review comment in markdown.

At the end, provide:
- Overall assessment
- Must-fix items (blocking)
- Nice-to-have improvements (non-blocking)
- A confidence score (1-10) for the changes
