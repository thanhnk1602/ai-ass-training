# Demo 2.3: .cursorrules for Cursor IDE

> **Tool:** Cursor IDE
> **Time:** 2 minutes
> **Audience:** [DEV]
> **Setup:** Create `.cursorrules` in project root, open Cursor

## The Demo

Show that Cursor follows project-specific rules automatically without you mentioning them in every prompt.

## Setup

Place the `.cursorrules` file from `samples/.cursorrules` in your project root. Open Cursor in that directory.

## Prompt (Cmd+K in any TypeScript file)

```
Create a hook called usePoolInvestment that handles depositing into a
Centrifuge pool. It should manage the full lifecycle: approval, deposit
request, and claim.
```

## What to Watch For

The generated code should automatically include (without you asking):

- **Discriminated union state:** `{ status: 'idle' } | { status: 'loading' } | ...`
- **Branded types:** `type PoolId = string & { readonly __brand: 'PoolId' }`
- **No `any` types** -- uses `unknown` with type guards
- **Explicit error handling** with typed errors
- **Zod validation** on inputs
- **Accessibility-ready** loading states

## Wow Moment

You never said "use branded types" or "use discriminated unions" in the prompt. The AI just knew, because `.cursorrules` defined these patterns. Every developer on the team gets the same enforcement.

## Cursor vs Claude Code Comparison

| Aspect | Cursor (.cursorrules) | Claude Code (CLAUDE.md) |
|--------|----------------------|------------------------|
| Scope | IDE-wide, always active | Per-conversation context |
| Format | Markdown instructions | Markdown instructions |
| Best for | Inline edits, completions | Multi-file operations |
| Lives in | Project root | Project root or ~/.claude/ |

## Talking Points

- "This is like ESLint but for AI output -- it enforces patterns, not just syntax"
- "New team members don't need to memorize conventions"
- "The file checks into git -- the whole team benefits"
