# Demo 7.2: Guardrail Hooks

> **Tool:** Claude Code (CLI)
> **Time:** 4 minutes
> **Audience:** [ALL]
> **Setup:** Hooks from Demo 7.1 configured

## The Demo

Production-grade hooks that enforce real safety rules: block destructive commands, enforce file naming conventions, prevent secrets from being committed, and auto-reject code that violates your team's patterns.

## The Guardrails

### 1. Block Dangerous Commands

The `block-dangerous-commands.js` hook intercepts Bash commands and blocks:
- `rm -rf` on non-temp directories
- `DROP TABLE`, `DELETE FROM` without WHERE clauses
- `git push --force` to protected branches
- `chmod 777` on any file

### 2. Enforce Naming Conventions

The `enforce-conventions.js` hook intercepts Write operations and checks:
- React components use PascalCase filenames
- Test files end with `.test.ts` or `.spec.ts`
- API routes follow `kebab-case` naming
- No files created outside the `src/` directory

## Prompt

```
I need you to:
1. Create a React component for user profiles
2. Delete the old temp directory with rm -rf
3. Add a database migration that drops the legacy users table
4. Create a test file for the new component
```

## What to Watch For

1. Component creation succeeds (PascalCase: `UserProfile.tsx` ✅)
2. `rm -rf` is BLOCKED by the hook ("Destructive command blocked" ❌)
3. `DROP TABLE` is BLOCKED ("Dangerous SQL blocked" ❌)
4. Claude adapts -- creates the component without the blocked operations
5. Test file naming is validated (`UserProfile.test.tsx` ✅)
6. Claude acknowledges the blocks and suggests safer alternatives

## Wow Moment

The AI tried to run dangerous commands, and the hooks stopped it cold. Claude didn't crash or error -- it acknowledged the guardrail and adapted. The dangerous operations never executed.

## Talking Points

- "Your AI developer now has the same rules as your CI pipeline"
- "Hooks don't just log -- they BLOCK. The command never executes."
- "Claude sees the block reason and adapts its approach"
- "These rules are in version control -- the team shares guardrails like they share code"
- "Add rules incrementally: start with the scariest commands, expand from there"
