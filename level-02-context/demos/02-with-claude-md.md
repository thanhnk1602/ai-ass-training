# Demo 2.2: CLAUDE.md Deep Dive -- Real Project Context

> **Tool:** Claude Code (CLI)
> **Time:** 3 minutes
> **Audience:** [ALL]
> **Setup:** Run from an existing project with CLAUDE.md (e.g., `luminnet-example/`)

## The Demo

Show that with a comprehensive CLAUDE.md, the AI generates code that follows your exact project patterns -- not generic templates.

## Option A: Use Your Existing Project

Run from `/Users/narx/Source/ai-proj/luminnet-example/`:

**Prompt:**
```
I need to add a new asset type for "Solar Farm" tokenization. Based on the
existing GPU node registration pattern, create the complete implementation:
- Database schema additions
- API route for registration
- Admin frontend page with the multi-step form
- Integration with the existing AssetToken contract

Follow the exact same patterns used for GPU nodes.
```

## Option B: Use the Training Sample

If you prefer a self-contained demo, place `samples/CLAUDE.md` in a directory and run:

**Prompt:**
```
Create a new API endpoint for /api/investments that handles:
- GET / - list all investments for the authenticated user (paginated)
- POST / - create a new investment (validate with Zod)
- GET /:id - get investment details
- DELETE /:id - soft delete (set status to 'cancelled')

Follow the conventions in CLAUDE.md exactly.
```

## What to Watch For

- AI reads the CLAUDE.md before generating any code
- File naming matches project conventions (kebab-case)
- Import patterns match existing code
- Error handling follows project standards
- Database queries use the project's ORM patterns
- The code is indistinguishable from what the team wrote

## Wow Moment

The AI didn't just generate "an API endpoint." It generated one that follows the multi-step form pattern, uses the project's specific Ethers.js v6 patterns, and integrates with the exact smart contract interface. It reads like a team member wrote it.

## Talking Points

- "The AI read CLAUDE.md and matched our exact patterns"
- "A new developer could use this to produce consistent code on day one"
- "The CLAUDE.md is a living document -- update it as your patterns evolve"
