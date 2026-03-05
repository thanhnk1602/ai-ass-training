# Demo 7.1: Feature Implementation from Spec

> **Tool:** Claude Code (CLI)
> **Time:** 5 minutes (let it run)
> **Setup:** Run from `account-system/` with `feature-spec.md` in the directory

## The Demo

Hand the AI a feature specification. Watch it explore the codebase, plan the implementation, and build the entire feature -- backend to frontend -- without intervention.

## Setup

Copy `samples/feature-spec.md` to the project directory, then run:

## Prompt

```
Read the feature spec in feature-spec.md. Then implement it completely:

1. First, explore the existing codebase to understand patterns
2. Plan your implementation (list the files you'll create/modify)
3. Implement the backend (database, API, tests)
4. Implement the frontend (component, integration)
5. Run the tests to verify
6. Summarize everything you did

Do not ask me questions. Make reasonable decisions and document any
assumptions.
```

## What to Watch For

The AI autonomously:
1. Reads existing routes, components, Prisma schema
2. Plans its approach (lists files to create/modify)
3. Creates database model in Prisma
4. Creates API route with pagination and filtering
5. Creates React component for the activity feed
6. Adds it to the dashboard page
7. Writes tests
8. Runs tests, fixes any failures
9. Produces a summary with documented assumptions

## Wow Moment

The AI implemented an entire feature -- backend to frontend -- without human intervention. It made architectural decisions, documented its reasoning, and the changeset is a coherent, reviewable PR.

## Talking Points

- "I gave it a spec. It gave me a feature."
- "It explored the codebase first to understand patterns before writing code"
- "The assumptions are documented -- you can review them like a PR"
- "This is the AI equivalent of delegating a task to a junior developer"
