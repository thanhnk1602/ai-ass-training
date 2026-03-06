# Level 6: The Autonomous Dev

> "Give it a task. Walk away. Come back to a pull request."

## Concept

The AI doesn't just respond to commands -- it plans, executes, tests, debugs, and iterates autonomously. It breaks down complex tasks, handles errors, and produces complete implementations.

This level also covers **scaling up**: from a single autonomous agent, to specialized sub-agents, to full multi-agent teams working in parallel.

## The Autonomy Scale

| Level | Behavior |
|-------|----------|
| 1-2 | You prompt, AI responds with text |
| 3-4 | You prompt, AI executes tools |
| 5 | You trigger skill, AI follows procedure |
| **6** | **You describe a goal, AI figures out everything** |
| **6+** | **You hand over a brief, an AI team delivers** |

---

## Part A: Single Autonomous Agent

The AI takes a feature spec or bug report and autonomously produces a working, tested implementation. It plans steps, writes code, runs tests, fixes failures, and iterates -- all without prompting.

### What You'll See

| Demo | Tool | Time | Audience | What Happens |
|------|------|------|----------|-------------|
| 6.1 Feature from Spec | Claude Code | 5 min | [ALL] | AI implements complete feature from a written spec |
| 6.2 Custom Sub-agents | Claude Code | 4 min | [DEV] | Create and use `.claude/agents/` specialized workers |
| 6.3 Test-Driven Dev | Claude Code | 4 min | [DEV] | AI writes tests first, then implements to pass |

---

## Part B: Sub-agents

Sub-agents are specialized AI assistants defined in `.claude/agents/`. Unlike skills (which run in your conversation), sub-agents run in **isolated context windows** with their own system prompts and tool access.

### Built-in Sub-agents

| Sub-agent | Model | Purpose |
|-----------|-------|---------|
| **Explore** | Haiku (fast) | Read-only codebase search and analysis |
| **Plan** | Inherited | Research during plan mode |
| **general-purpose** | Inherited | Complex multi-step tasks requiring all tools |

### Custom Sub-agents

Define in `.claude/agents/name.md` with YAML frontmatter:

```yaml
---
name: code-reviewer
description: Reviews code for quality and security
tools: Read, Grep, Glob, Bash       # restricted tools
model: sonnet                        # different model
background: true                     # can run concurrently
memory: user                         # learns across sessions
---

System prompt goes here...
```

### Key Frontmatter Fields

| Field | What It Does |
|-------|-------------|
| `tools` / `disallowedTools` | Control what the sub-agent can access |
| `model` | `haiku` (cheap/fast), `sonnet` (balanced), `opus` (powerful), `inherit` |
| `permissionMode` | `default`, `acceptEdits`, `plan` (read-only), `bypassPermissions` |
| `background` | `true` to run concurrently while you keep working |
| `memory` | `user` / `project` / `local` for persistent cross-session learning |
| `skills` | Preload skill content into the sub-agent's context |
| `isolation` | `worktree` for git worktree isolation |

### Where Sub-agents Live

| Location | Scope |
|----------|-------|
| `.claude/agents/` | Current project |
| `~/.claude/agents/` | All your projects |
| Plugin's `agents/` | Where plugin is enabled |

---

## Part C: Multi-Agent Teams

Multiple AI instances working in parallel on the same project.

### Manual Parallel Sessions

No special features needed. Multiple Claude Code terminals, each scoped to its own part of the codebase.

```bash
# Terminal 1: Backend
claude "Implement the backend API in backend/"
# Terminal 2: Frontend
claude "Implement the React frontend in frontend/"
# Terminal 3: DevOps
claude "Create Docker + CI/CD config"
```

Use git worktrees for clean isolation. See `samples/agent-specs/` for reusable prompt templates.

### Agent Teams (Experimental)

Claude Code's built-in multi-agent coordination. One session acts as **team lead**, spawning **teammates** that communicate directly with each other via a shared task list and mailbox.

Enable with:
```json
{ "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" } }
```

| Component | Role |
|-----------|------|
| **Team lead** | Creates the team, spawns teammates, coordinates work |
| **Teammates** | Separate Claude instances with own context windows |
| **Task list** | Shared work items with dependencies (`Ctrl+T` to view) |
| **Mailbox** | Direct messaging between agents |

### Comparison

| | Sub-agents | Manual Parallel | Agent Teams |
|---|---|---|---|
| **Communication** | Report back to main only | None (you coordinate) | Teammates message each other |
| **Task coordination** | Main agent manages | You manage | Shared task list, self-claiming |
| **Best for** | Focused isolated tasks | Independent workstreams | Work requiring discussion |

### What You'll See

| Demo | Tool | Time | Audience | What Happens |
|------|------|------|----------|-------------|
| 6.4 Manual Parallel Sessions | Claude Code x3 | 5 min | [DEV] | 3 terminals build backend, frontend, infra simultaneously |
| 6.5 Agent Teams | Claude Code | 5 min | [ALL] | Built-in team: shared tasks, messaging, coordination |
| 6.6 Capstone | Claude Code | 10 min | [ALL] | Full app from brief using agent team with plan approval |

---

## Key Takeaway

The human role shifts from "write code" to "review code." Single autonomous agents handle features end-to-end. Sub-agents provide specialization and parallelism. Agent teams coordinate entire projects. The right tool depends on task complexity and interdependence.

## Demos

### Part A: Single Autonomous Agent
- [Demo 6.1: Feature Implementation from Spec](demos/01-feature-implementation.md)
- [Demo 6.2: Custom Sub-agents](demos/02-sub-agents.md)
- [Demo 6.3: Test-Driven Implementation](demos/03-test-driven.md)

### Part C: Multi-Agent Teams
- [Demo 6.4: Manual Parallel Sessions](demos/04-parallel-agents.md)
- [Demo 6.5: Agent Teams](demos/05-agent-teams.md)
- [Demo 6.6: Capstone - Full App from Brief](demos/06-capstone.md)
