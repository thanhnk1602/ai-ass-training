# Demo 5.1: Bundled Skills -- /simplify and /batch

> **Tool:** Claude Code (CLI)
> **Time:** 2 minutes
> **Setup:** Any project with recent code changes

## The Demo

Claude Code ships with powerful built-in skills. `/simplify` spawns **3 parallel agents** to review your code simultaneously. `/batch` orchestrates changes across an entire codebase.

## Demo A: /simplify

Make some code changes in any project (or use changes from a previous demo), then:

```
/simplify
```

### What Happens Behind the Scenes

```
┌─────────────────────────────────────────────────┐
│  /simplify                                       │
│                                                   │
│  Spawns 3 parallel review agents:                │
│  ├── Agent 1: Code Reuse Analysis                │
│  ├── Agent 2: Code Quality Review                │
│  └── Agent 3: Efficiency Check                   │
│                                                   │
│  Aggregates findings → Applies fixes              │
└─────────────────────────────────────────────────┘
```

### What to Watch For

- Three agents spin up in parallel (you'll see the parallel execution)
- Each agent reviews from a different angle
- Findings are aggregated and prioritized
- Fixes are applied automatically

### You Can Focus It

```
/simplify focus on memory efficiency
```

### Wow Moment

One word triggered 3 AI agents working in parallel. This is not a prompt -- it's an orchestrated multi-agent workflow built into Claude Code.

---

## Demo B: /batch (larger codebase)

```
/batch migrate all console.log statements to use a proper logger utility
```

### What Happens

1. AI researches the codebase to find all instances
2. Decomposes work into 5-30 independent units
3. Shows you a plan for approval
4. Spawns one agent per unit in **isolated git worktrees**
5. Each agent implements, tests, and opens a PR

### Wow Moment

One command triggers a fleet of agents doing parallel work, each in its own git worktree so they can't conflict. Enterprise-scale refactoring from a single prompt.

## Talking Points

- "These are bundled skills -- they ship with every Claude Code install"
- "/simplify spawns 3 parallel agents. Multi-agent orchestration out of the box"
- "/batch can split work across 30 parallel agents in isolated worktrees"
- "This is the difference between 'AI chat' and 'AI platform'"
