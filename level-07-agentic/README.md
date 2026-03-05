# Level 7: The Autonomous Dev

> "Give it a task. Walk away. Come back to a pull request."

## Concept

The AI doesn't just respond to commands -- it plans, executes, tests, debugs, and iterates autonomously. It breaks down complex tasks into steps, handles errors, and produces complete implementations.

This level also introduces **sub-agents** -- specialized AI workers that Claude delegates to automatically. Each sub-agent has its own context window, model, tools, and system prompt.

## The Autonomy Scale

| Level | Behavior |
|-------|----------|
| 1-2 | You prompt, AI responds with text |
| 3-4 | You prompt, AI executes tools |
| 5-6 | You trigger skill, AI follows procedure |
| **7** | **You describe a goal, AI figures out everything** |

## Sub-agents

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
| `hooks` | Lifecycle hooks (e.g., validate Bash commands before execution) |

### Where Sub-agents Live

| Location | Scope | Priority |
|----------|-------|----------|
| `--agents` CLI flag | Current session only | Highest |
| `.claude/agents/` | Current project | High |
| `~/.claude/agents/` | All your projects | Medium |
| Plugin's `agents/` | Where plugin is enabled | Lowest |

## What You'll See

| Demo | Tool | Time | What Happens |
|------|------|------|-------------|
| 7.1 Feature from Spec | Claude Code | 5 min | AI implements complete feature from a written spec |
| 7.2 Custom Sub-agents | Claude Code | 4 min | Create and use `.claude/agents/` with `/agents` command |
| 7.3 Test-Driven Dev | Claude Code | 4 min | AI writes tests first, then implements to pass |

## Key Takeaway

The AI can take a feature spec or bug report and autonomously produce a working, tested implementation. Sub-agents let you create specialized workers with focused capabilities, different models, and isolated contexts. The human role shifts from "write code" to "review code."

## Demos

- [Demo 7.1: Feature Implementation from Spec](demos/01-feature-implementation.md)
- [Demo 7.2: Custom Sub-agents](demos/02-sub-agents.md)
- [Demo 7.3: Test-Driven Implementation](demos/03-test-driven.md)
