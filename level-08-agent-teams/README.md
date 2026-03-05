# Level 8: The Hive Mind

> "One AI is impressive. A team of AIs is transformative."

## Concept

Multiple AI instances working in parallel on the same project. This level covers two approaches:

1. **Manual parallel sessions** -- multiple terminals or git worktrees, each running Claude Code independently. No special feature needed. Practical today.
2. **Agent Teams** -- Claude Code's built-in multi-agent coordination with shared task lists, inter-agent messaging, and a team lead that manages everything.

## The Progression

```
Level 1:  You ──prompt──> AI ──text──> You
Level 3:  You ──prompt──> AI ──tools──> Codebase
Level 7:  You ──spec──> AI ──[plan→build→test→fix]──> Feature
Level 7:  You ──task──> AI ──[spawn sub-agent]──> Isolated result
Level 8a: You ──prompts──> 3 Terminals ──[independent]──> Merged result
Level 8b: You ──brief──> Team Lead ──[spawn teammates]──> Coordinated delivery
                            ├── Teammate A ──> security review
                            ├── Teammate B ◄──► Teammate C  (direct messaging)
                            └── Shared task list with dependencies
```

---

## Part A: Manual Parallel Sessions

No experimental features. Just multiple Claude Code sessions, each scoped to its own part of the codebase. Use git worktrees for clean isolation.

### Two Patterns

**1. Same project, different directories:**
```bash
# Terminal 1: Backend
cd my-project && claude "Implement the backend API in backend/"
# Terminal 2: Frontend
cd my-project && claude "Implement the React frontend in frontend/"
# Terminal 3: DevOps
cd my-project && claude "Create Docker + CI/CD config at project root"
```

**2. Architect + Builder (sequential phases):**
```
Phase 1: Architect agent produces ARCHITECTURE.md
Phase 2: Builder agent reads ARCHITECTURE.md and implements it faithfully
```

### When This Works

- Each agent works in **different files/directories** (no merge conflicts)
- Agents don't need to communicate with each other
- You coordinate manually (copy outputs, merge branches)

### Agent Spec Prompts

See `samples/agent-specs/` for reusable prompt templates:
- `architect.md` -- produces ARCHITECTURE.md with schemas, API contracts, component trees
- `backend-dev.md` -- implements backend from architecture doc
- `frontend-dev.md` -- implements frontend from architecture doc
- `qa-tester.md` -- tests everything and produces QA-REPORT.md

---

## Part B: Agent Teams (Experimental)

Claude Code's built-in multi-agent feature. One session acts as the **team lead**, spawning **teammates** that communicate directly with each other.

> **Experimental**: requires `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` enabled.

### Enable

```json
// settings.json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

### Architecture

| Component | Role |
|-----------|------|
| **Team lead** | Main session that creates the team, spawns teammates, coordinates work |
| **Teammates** | Separate Claude Code instances, each with own context window |
| **Task list** | Shared work items with dependencies that teammates claim and complete |
| **Mailbox** | Messaging system for direct communication between agents |

### Agent Teams vs Sub-agents vs Manual Parallel

| | Sub-agents (Level 7) | Manual Parallel (8a) | Agent Teams (8b) |
|---|---|---|---|
| **Communication** | Report back to main only | None (you coordinate) | Teammates message each other |
| **Task coordination** | Main agent manages | You manage | Shared task list, self-claiming |
| **Setup** | `.claude/agents/` | Multiple terminals | Enable experimental flag |
| **Best for** | Focused isolated tasks | Independent workstreams | Work requiring discussion |
| **Token cost** | Lower | Medium (N sessions) | Higher (coordination overhead) |

### Display Modes

| Mode | How it works | Requirement |
|------|-------------|-------------|
| **In-process** (default) | All teammates in one terminal. `Shift+Down` to cycle, `Ctrl+T` for task list | Any terminal |
| **Split panes** | Each teammate gets its own pane. Click to interact | tmux or iTerm2 |

```bash
# Force display mode
claude --teammate-mode in-process
# Or in settings.json: { "teammateMode": "in-process" }
```

### Key Interactions

- **Shift+Down**: Cycle through teammates (in-process mode)
- **Ctrl+T**: Toggle shared task list
- **Enter**: View a teammate's session
- **Escape**: Interrupt a teammate's current turn
- **Direct messaging**: Talk to any teammate, not just through the lead

### Plan Approval for Teammates

For risky tasks, require teammates to plan before implementing:
```
Spawn an architect teammate to refactor the auth module.
Require plan approval before they make any changes.
```
The lead reviews and approves/rejects plans before teammates execute.

### Hooks for Quality Gates

- `TeammateIdle`: runs when a teammate finishes -- send feedback to keep them working
- `TaskCompleted`: runs when a task is marked done -- reject to prevent premature completion

---

## Best Practices (Both Approaches)

- **3-5 agents/teammates** for most tasks. More adds coordination overhead.
- **Avoid file conflicts**: break work so each agent owns different files.
- **Start with research/review**: low-risk way to see parallel value.
- **Give enough context**: teammates don't inherit conversation history. Be specific in spawn prompts.
- **Clean up**: for agent teams, always use the lead to shut down teammates and clean up.

## What You'll See

| Demo | Tool | Time | What Happens |
|------|------|------|-------------|
| 8.1 Manual Parallel Sessions | Claude Code x3 | 5 min | 3 terminals build backend, frontend, infra |
| 8.2 Agent Teams | Claude Code | 5 min | Built-in team: shared tasks, messaging, coordination |
| 8.3 Capstone | Claude Code | 10 min | Full app from brief using agent team with plan approval |

## Key Takeaway

AI development scales horizontally. Manual parallel sessions work today for independent workstreams. Agent teams add coordination: shared task lists, direct messaging, and a team lead that manages the workflow. Choose the right approach for the task.

## Demos

- [Demo 8.1: Manual Parallel Sessions](demos/01-parallel-agents.md)
- [Demo 8.2: Agent Teams](demos/02-agent-teams.md)
- [Demo 8.3: Capstone - Full App from Brief](demos/03-capstone.md)
