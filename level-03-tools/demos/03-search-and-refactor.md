# Demo 3.3: Cross-Codebase Refactoring

> **Tool:** Claude Code (CLI)
> **Time:** 3 minutes
> **Setup:** Run from `account-system/` directory

## The Demo

The AI searches across your entire codebase, finds a pattern that needs refactoring, and applies the change consistently to every instance.

## Prompt (run from `/Users/narx/Source/ai-proj/account-system/`)

```
The backend uses callback-style error handling in some routes. Find all
Express route handlers in the backend that don't use try/catch for async
operations, and refactor them to use a proper asyncHandler wrapper.

Steps:
1. Search for all route files
2. Find handlers that are async but missing try/catch
3. Create a reusable asyncHandler utility if one doesn't exist
4. Refactor all affected routes to use it
5. Show me a summary of all changes made
```

## What to Watch For

1. **Search phase:** AI uses grep/glob to find all route files
2. **Analysis phase:** AI reads each file, identifies unprotected async handlers
3. **Create utility:** AI creates `middleware/asyncHandler.js`
4. **Refactor phase:** AI edits each route file consistently
5. **Summary:** AI reports what changed and why

## Wow Moment

The AI modified 5-8 files in a coordinated refactoring. Every change is consistent. No file was missed. This would take a developer 20-30 minutes of careful, repetitive work.

## Alternative Prompt (simpler, for faster demo)

```
Find every file in this project that uses console.log for error logging.
Replace all of them with a proper logger. Create a logger utility if one
doesn't exist. Show me every change.
```

## Talking Points

- "It searched, analyzed, created a utility, and applied it everywhere"
- "Every change is consistent -- no human error from repetitive editing"
- "It read the existing code style before writing the utility"
- "This is the kind of task developers dread -- now it's one prompt"
