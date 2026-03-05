# Level 6: The Toolsmith

> "You're not just using AI tools. You're building them."

## Concept

Move from consumer to creator. Build advanced skills that use **supporting files** (templates, scripts, examples), run in **subagents** for isolation, bundle **visual output** generators, and are distributed as **plugins**.

## Level 5 vs Level 6

| Level 5 (Basic Skills) | Level 6 (Advanced Skills) |
|------------------------|--------------------------|
| Single SKILL.md file | SKILL.md + templates + scripts + examples |
| Runs inline in conversation | `context: fork` for subagent isolation |
| Manual instructions only | `!`command`` for dynamic context injection |
| Project-local skills | Plugins for cross-project distribution |
| Text output only | Visual HTML output with bundled scripts |

## Advanced Skill Features

### Supporting Files

```
security-audit/
├── SKILL.md                    # Main instructions
├── checklists/
│   ├── owasp-top-10.md         # Reference: OWASP checklist
│   └── auth-patterns.md        # Reference: auth best practices
├── templates/
│   └── audit-report.md         # Template Claude fills in
└── scripts/
    └── dep-check.sh            # Script Claude can execute
```

### Subagent Execution (`context: fork`)

```yaml
---
name: deep-research
context: fork            # Runs in isolated subagent
agent: Explore           # Uses Explore agent (read-only)
---
```

The skill runs in a forked context -- it can't see your conversation history but gets fresh isolated execution.

### Dynamic Context Injection (`!`command``)

```yaml
---
name: pr-summary
---
## PR Context
- PR diff: !`gh pr diff`
- PR comments: !`gh pr view --comments`

Summarize this pull request...
```

Shell commands run BEFORE the skill content is sent to Claude. The output replaces the placeholder.

### Invocation Control

| Setting | Effect |
|---------|--------|
| `disable-model-invocation: true` | Only you can trigger (e.g., /deploy) |
| `user-invocable: false` | Only Claude can trigger (background knowledge) |
| Default (both false) | Both you and Claude can trigger |

## What You'll See

| Demo | Tool | Time | What Happens |
|------|------|------|-------------|
| 6.1 Skill with Supporting Files | Claude Code | 3 min | /deploy with pre-flight scripts + template |
| 6.2 Subagent Skills | Claude Code | 3 min | /research runs in isolated Explore agent |
| 6.3 Visual Output Skill | Claude Code | 4 min | /visualize generates interactive HTML |

## Skills vs Commands vs Sub-agents

At this point in the training, attendees have seen three concepts. Here's how they differ:

| | **Commands** | **Skills** | **Sub-agents** |
|---|---|---|---|
| **Location** | `.claude/commands/name.md` | `.claude/skills/name/SKILL.md` | `.claude/agents/name.md` |
| **Structure** | Single markdown file | Directory with SKILL.md + supporting files | Single markdown file |
| **Invocation** | `/command-name` only | `/skill-name` OR auto-trigger via description | Claude spawns them via `Task` tool |
| **Auto-trigger** | No | Yes (Claude matches your intent to `description`) | No (Claude decides when to spawn) |
| **Frontmatter** | Optional (basic) | Full YAML (`allowed-tools`, `context`, `agent`, etc.) | Full YAML (`tools`, `model`, `permissionMode`, etc.) |
| **Supporting files** | No | Yes (templates, scripts, checklists) | No |
| **Execution context** | Main conversation | Main OR forked subagent (`context: fork`) | Always isolated context window |
| **Own system prompt** | No | No | Yes |
| **Custom model** | No | No | Yes (`model: haiku`, `model: sonnet`) |
| **Can load skills** | No | No | Yes (`skills` field) |

### When to use each

- **Commands** -- Legacy. Still work, but skills are strictly better.
- **Skills** -- Default choice. Reusable workflows, auto-triggered from natural language, team-shared patterns that check into git.
- **Sub-agents** -- Isolated complex tasks, parallel execution, specialized roles with different models/permissions.

### How they compose

```
Skill (context: fork, agent: Explore)
  └── Runs AS a subagent with Explore's capabilities

Sub-agent (skills: [review, test])
  └── Can USE skills within its isolated context

Main conversation
  ├── Auto-triggers skills based on description
  ├── Invokes skills via /name
  └── Spawns sub-agents via Task tool
```

A skill with `context: fork` becomes a subagent at runtime. A subagent can load skills via its `skills` field. They're designed to work together.

## Key Takeaway

Skills are not just saved prompts. They're **directories** with supporting files, configurable execution contexts, dynamic data injection, and visual output. They're the building blocks of an AI-powered developer platform for your team.

## Demos

- [Demo 6.1: Skill with Supporting Files](demos/01-supporting-files.md)
- [Demo 6.2: Subagent & Dynamic Context Skills](demos/02-subagent-skills.md)
- [Demo 6.3: Visual Output & Plugin Skills](demos/03-visual-and-plugins.md)
