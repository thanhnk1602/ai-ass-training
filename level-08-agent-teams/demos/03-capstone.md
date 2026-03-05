# Demo 8.3: THE CAPSTONE -- Full Application with Agent Team

> **Tool:** Claude Code (CLI) with Agent Teams
> **Time:** 10-15 minutes
> **Setup:** Enable agent teams. Read the brief at `../../capstone/brief.md`

## The Demo

The grand finale. One agent team, one client brief, one complete application. The team lead reads the brief, plans the architecture, spawns specialized teammates, and coordinates the build.

## Prompt

```
I have a client brief for a complete application at ../../capstone/brief.md.

Create an agent team to build this. Here's how I want it structured:

1. First, YOU (the lead) read the brief and create ARCHITECTURE.md
   with the full system design, API contracts, and component tree.
   Require plan approval from me before proceeding.

2. Then spawn 3 teammates:
   - A backend developer: implement API + database in backend/
   - A frontend developer: implement React UI in frontend/
   - A DevOps engineer: Docker, CI/CD, and project config at root

3. Each teammate must read ARCHITECTURE.md before starting.
   Have them claim tasks from the shared task list.
   They should message each other when they need to agree on
   API contracts or shared types.

4. After teammates finish, YOU review everything and run the build.

Use Sonnet for the teammates to save tokens.
```

## What to Watch For

### Phase 1: Architecture (Lead)
- Lead reads the client brief
- Creates a detailed ARCHITECTURE.md
- **Pauses for your approval** (plan approval feature)
- You review and approve or request changes

### Phase 2: Parallel Build (3 Teammates)
- **Shift+Down** to cycle through teammates
- **Ctrl+T** to watch the shared task list progress
- Backend teammate claims database + API tasks
- Frontend teammate claims component + page tasks
- DevOps teammate claims Docker + CI tasks
- Teammates **message each other** about shared types:
  ```
  [Frontend → Backend]: What's the exact shape of the /api/portfolio response?
  [Backend → Frontend]: See the PortfolioResponse type in ARCHITECTURE.md line 47
  ```

### Phase 3: Integration (Lead)
- Lead reviews all code
- Runs `npm run build` to verify
- Reports any issues back to the responsible teammate
- Final build succeeds

## Wow Moment

One prompt. A team lead that plans and coordinates. Three specialists that build in parallel and communicate directly. A client brief becomes a working application. The audience sees the task list update in real time.

## Backup Plan

If agent teams are flaky (experimental feature), fall back to the manual approach:

```bash
# Terminal 1: Backend
claude "Read ARCHITECTURE.md and ../../capstone/brief.md. Implement the backend."
# Terminal 2: Frontend
claude "Read ARCHITECTURE.md and ../../capstone/brief.md. Implement the frontend."
# Terminal 3: DevOps
claude "Read ARCHITECTURE.md. Create Docker + CI/CD config."
```

## Post-Demo Verification

```bash
cd /tmp/capstone-app
docker compose up --build
# Open http://localhost:5173
```

Or without Docker:
```bash
cd backend && npm run dev &
cd frontend && npm run dev
```

## Talking Points

- "One brief. One prompt. A coordinated team of AI developers."
- "The lead planned, I approved, then teammates built in parallel."
- "Teammates talked directly to each other about shared contracts."
- "The task list managed dependencies automatically -- frontend waited for API types."
- "This is the future: AI teams you spin up for a project and tear down when done."
- "And it all started at Level 1 with 'explain this code to me.'"
