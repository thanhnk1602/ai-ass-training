# Level 5: The Creature of Habit

> "Do it once. Automate it forever."

## Concept

Claude Code **Skills** are reusable instruction sets that extend what Claude can do. A skill is a `SKILL.md` file with YAML frontmatter and markdown instructions. Claude uses skills when relevant, or you invoke one directly with `/skill-name`.

Skills follow the open [Agent Skills](https://agentskills.io) standard, which works across multiple AI tools.

## The Key Insight: Auto-Trigger via Description

Skills don't just respond to `/slash-commands`. Claude reads **all skill descriptions** and automatically invokes the right skill based on your natural language:

```
You say: "can you check my changes before I push?"

Claude reads skill descriptions:
  review:    "Reviews staged git changes for bugs..."  ← MATCH
  test:      "Generates comprehensive tests..."
  component: "Generates a React component..."

→ Claude auto-invokes /review
```

The `description` field is the **trigger mapping**. Write it to cover how your team naturally asks for things:

```yaml
# BAD
description: Reviews code

# GOOD
description: >
  Reviews staged git changes for bugs, security, and code quality.
  Use when preparing for PR review, checking changes before push,
  or when someone asks to look at their code.
```

## Auto-Trigger Mapping Reference

| You say... | Skill triggered | Why (description match) |
|-----------|----------------|------------------------|
| "check my changes" | `/review` | "reviews staged git changes" |
| "write tests for this" | `/test` | "generates comprehensive tests" |
| "how does auth work?" | `/research` | "how a feature or system works" |
| "deploy to staging" | `/deploy` | "deploy application to staging" |
| "is this code secure?" | `/security-audit` | "security audit on the codebase" |

You can always use `/name` explicitly too. But auto-trigger means **you don't need to remember command names**.

## Anatomy of a Skill

```
my-skill/
├── SKILL.md           # Main instructions (required)
├── template.md        # Template for Claude to fill in
├── examples/
│   └── sample.md      # Example output
└── scripts/
    └── validate.sh    # Script Claude can execute
```

The `SKILL.md` has two parts -- frontmatter config and markdown instructions:

```yaml
---
name: review                           # becomes /review
description: >                         # THE TRIGGER MAP
  Reviews staged git changes for bugs, security, and code quality.
  Use when preparing for PR review or checking changes before push.
disable-model-invocation: false        # Claude CAN auto-trigger (default)
allowed-tools: Read, Grep, Bash        # tools allowed without asking
---

## Instructions (markdown content)

When reviewing code, check for:
1. Bugs and edge cases
2. Security issues
3. ...
```

## Skills vs Old Commands

| Feature | Old `.claude/commands/` | New `.claude/skills/` |
|---------|------------------------|----------------------|
| Slash command | Yes | Yes |
| Frontmatter config | Optional | Full support |
| Supporting files | No | Yes (templates, scripts, examples) |
| Auto-invocation by Claude | No | Yes (based on description) |
| Subagent execution | No | Yes (`context: fork`) |
| Tool restrictions | No | Yes (`allowed-tools`) |
| Directory structure | Single .md file | Directory with SKILL.md + files |

**Old commands still work.** `.claude/commands/review.md` and `.claude/skills/review/SKILL.md` both create `/review`.

## Where Skills Live

| Location | Path | Applies To |
|----------|------|-----------|
| Personal | `~/.claude/skills/<name>/SKILL.md` | All your projects |
| Project | `.claude/skills/<name>/SKILL.md` | This project only |
| Plugin | `<plugin>/skills/<name>/SKILL.md` | Where plugin is enabled |
| Enterprise | Managed settings | All users in org |

## Bundled Skills (ship with Claude Code)

| Skill | What It Does |
|-------|-------------|
| `/simplify` | Reviews changed files for code reuse, quality, efficiency -- spawns 3 parallel agents |
| `/batch <instruction>` | Orchestrates large-scale changes across codebase using parallel git worktrees |
| `/debug [description]` | Troubleshoots your current Claude Code session |

## When to Auto-Trigger vs. Manual-Only

| Skill Type | `disable-model-invocation` | Example | Why |
|-----------|--------------------------|---------|-----|
| **Knowledge/Review** | `false` (default) | review, test, research | Safe to auto-trigger -- read-only or always helpful |
| **Actions with side effects** | `true` | deploy, migrate-db | Should not auto-trigger -- you want manual control |
| **Background knowledge** | `user-invocable: false` | api-conventions | Claude uses it automatically, no `/command` needed |

## What You'll See

| Demo | Tool | Time | What Happens |
|------|------|------|-------------|
| 5.1 Bundled Skills | Claude Code | 2 min | `/simplify` spawns 3 agents to review your code |
| 5.2 Create Your First Skill | Claude Code | 3 min | Build a `/review` skill with frontmatter |
| 5.3 Skills with Arguments | Claude Code | 2 min | `/component InvestmentCard` generates 4 files |

## Key Takeaway

Skills are **codified team knowledge** that check into git and travel with the project. Claude auto-invokes them when relevant, or you trigger them with `/name`. They're the highest-leverage way to make AI follow your team's patterns.

## Demos

- [Demo 5.1: Bundled Skills](demos/01-builtin-skills.md)
- [Demo 5.2: Create Your First Skill](demos/02-create-skill.md)
- [Demo 5.3: Skills with Arguments & Patterns](demos/03-repeatable-patterns.md)
