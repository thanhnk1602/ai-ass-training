# Demo 6.4: Manual Parallel Sessions

> **Tool:** Claude Code (CLI) x3 terminals
> **Time:** 5 minutes
> **Audience:** [DEV]
> **Setup:** Create an empty project directory `bookmark-app/`

## The Concept

No experimental features needed. Just open multiple terminals, each running Claude Code scoped to a different part of the codebase. They work independently and don't step on each other's toes.

## Option A: Parallel Build (3 terminals)

### Setup

```bash
mkdir -p /tmp/bookmark-app && cd /tmp/bookmark-app
git init
mkdir backend frontend
```

### Terminal 1: Backend Agent

```
You are the backend developer. Create a REST API for a "bookmark manager"
application using Express + TypeScript + Prisma + SQLite.

Models: User, Bookmark (url, title, description, tags[], favicon),
Collection (name, description, bookmarks[])

Create: prisma schema, CRUD routes for all models, authentication
middleware (JWT), input validation with Zod, error handling middleware.

Work in the `backend/` directory only. Do not touch `frontend/`.
Initialize with `npm init` and install all needed dependencies.
```

### Terminal 2: Frontend Agent

```
You are the frontend developer. Create a React + TypeScript frontend for
a "bookmark manager" application using Vite + Tailwind + React Query.

Pages: Login, Dashboard (grid of bookmarks with favicons),
Collections (sidebar + grid), Add Bookmark (with URL auto-fetch for
title/description), Search with filters.

Create the frontend in `frontend/` directory. Assume the API is at
http://localhost:3000/api with standard REST endpoints for bookmarks,
collections, and auth.

Initialize with `npm create vite@latest` and install all dependencies.
Do not touch `backend/`.
```

### Terminal 3: DevOps Agent

```
You are the DevOps engineer. Create the infrastructure for a full-stack
"bookmark manager" app with backend/ and frontend/ directories:

1. Root package.json with workspace scripts (dev, build, test)
2. Docker Compose: PostgreSQL, backend, frontend services
3. Dockerfiles for backend (Node.js) and frontend (Vite + nginx)
4. .env.example with all needed variables
5. GitHub Actions CI pipeline (.github/workflows/ci.yml):
   lint, test, build for both frontend and backend
6. .gitignore covering both workspaces

Work only on root-level files, docker/, and .github/.
Do not modify backend/ or frontend/ source code.
```

## Option B: Architect + Builder (2 phases)

### Phase 1: The Architect

```
You are a senior software architect. Design a "Team Dashboard" feature
for a project management tool.

Create a detailed implementation plan as ARCHITECTURE.md that includes:

1. System design (components, data flow, state management)
2. Database schema (exact table definitions with types)
3. API contract (every endpoint with request/response types in TypeScript)
4. Component tree (every React component with its props interface)
5. File list (every file to create, with a 1-line description)
6. Implementation order (which files to create first, dependencies)
7. Test plan (what to test at each layer)

Be extremely specific. Another developer (AI or human) should be able to
implement this without asking any questions.

Output as a single ARCHITECTURE.md file.
```

### Phase 2: The Builder (new session)

```
Read ARCHITECTURE.md. You are a developer implementing this design.

Implement everything specified in the architecture document, following
the exact file structure, API contracts, and component interfaces.

Start with the implementation order specified in the document.
Do not deviate from the architecture. If something seems wrong, add a
TODO comment but implement it as specified.

After implementing, run the build to verify everything compiles.
```

## Git Worktrees (Clean Isolation)

For more isolation, use git worktrees so each agent has its own working directory:

```bash
# Create worktrees for each agent
git worktree add ../bookmark-backend -b feature/backend
git worktree add ../bookmark-frontend -b feature/frontend

# Terminal 1
cd ../bookmark-backend && claude "Build the backend API..."
# Terminal 2
cd ../bookmark-frontend && claude "Build the frontend..."

# Merge when done
git merge feature/backend
git merge feature/frontend
```

## What to Watch For

- Three terminals, three agents, all typing simultaneously
- Each stays in its lane (backend/, frontend/, root config)
- They complete roughly the same time (3-5 minutes each)
- The result assembles into a working application
- **No communication between agents** -- they work independently

## Wow Moment

Three AI developers working at the same time, in different parts of the codebase, not stepping on each other's toes. What would take a team a full day was done in 5 minutes.

## Post-Demo Verification

```bash
cd /tmp/bookmark-app
docker compose up --build
# Open http://localhost:5173
```

## Talking Points

- "Three developers in parallel. Zero coordination overhead."
- "Each agent stayed in its designated directory."
- "Combined: hundreds of files, working app, with CI/CD."
- "No experimental features -- this works today with any terminal."
- "Limitation: agents can't talk to each other. That's what Demo 8.2 solves."
