# Multi-Agent Orchestration Prompts

Two approaches for orchestrating multiple AI agents on the same project.

---

## Approach A: Manual Parallel (No Experimental Features)

### Step 1: Architecture Phase
Open Terminal 1 and paste the architect agent prompt (see agent-specs/architect.md).
Give it your project requirements. Wait for ARCHITECTURE.md.

### Step 2: Build Phase (parallel)
Open 3 terminals simultaneously:

**Terminal 2 - Backend:**
"Read ARCHITECTURE.md. You are the backend developer (see agent-specs/backend-dev.md). Implement everything in backend/."

**Terminal 3 - Frontend:**
"Read ARCHITECTURE.md. You are the frontend developer (see agent-specs/frontend-dev.md). Implement everything in frontend/."

**Terminal 4 - DevOps/Config:**
"Create Docker, CI/CD, and project-level configuration for this project. Read ARCHITECTURE.md for the tech stack."

### Step 3: QA Phase
After all builders finish, open Terminal 5:
"Read ARCHITECTURE.md and all source code. You are the QA engineer (see agent-specs/qa-tester.md). Test everything and produce QA-REPORT.md."

### Step 4: Fix Phase
If QA finds issues, paste the QA-REPORT.md back to the relevant builder agent:
"Read QA-REPORT.md and fix all bugs marked HIGH or CRITICAL."

---

## Approach B: Agent Teams (Experimental)

### Prerequisite
Enable agent teams:
```json
// settings.json
{ "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" } }
```

### Single Prompt to Start a Team

```
Create an agent team to build [project description].

Structure:
1. First, YOU (the lead) create ARCHITECTURE.md with system design,
   API contracts, component tree, and file manifest. Require my approval
   before proceeding.

2. Then spawn teammates:
   - Backend dev: implement API + database in backend/
   - Frontend dev: implement React UI in frontend/
   - DevOps: Docker, CI/CD, project config at root

3. Rules for teammates:
   - Read ARCHITECTURE.md before starting
   - Claim tasks from the shared task list
   - Message each other when you need to agree on shared types or contracts
   - Stay in your assigned directory

4. After teammates finish, YOU review everything, run the build, and
   report any issues back to the responsible teammate.

Use Sonnet for the teammates to save tokens.
```

### Parallel Code Review Prompt

```
Create an agent team to review this codebase. Spawn three reviewers:
- One focused on security implications
- One checking performance bottlenecks
- One validating test coverage and edge cases

Have them investigate independently, then share and challenge each
other's findings. Synthesize into a final report.
```

### Debugging with Competing Hypotheses

```
[Describe the bug].
Spawn 5 agent teammates to investigate different hypotheses.
Have them talk to each other to try to disprove each other's theories,
like a scientific debate. Update a findings doc with whatever consensus
emerges.
```

### Controlling the Team

```
# Assign specific work
Have the security reviewer also check the WebSocket handshake

# Redirect a teammate
Tell the performance reviewer to focus on the API layer, not the frontend

# Require approval before changes
Spawn an architect teammate to redesign the auth module.
Require plan approval before they make any changes.

# Graceful shutdown
Ask the test reviewer to shut down.
Then clean up the team.
```
