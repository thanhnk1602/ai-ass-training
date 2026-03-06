# Demo 6.2: Custom Sub-agents

> **Tool:** Claude Code (CLI)
> **Time:** 4 minutes
> **Audience:** [DEV]
> **Setup:** Copy `samples/.claude/agents/` to your project, or use `/agents` command

## The Demo

Create custom sub-agents that Claude automatically delegates to. Each sub-agent has its own model, tools, permissions, and system prompt. Claude decides when to use them based on their `description` field.

## Step 1: Show the /agents Command

```
/agents
```

This lists all available sub-agents: built-in (Explore, Plan, general-purpose) and any custom ones. Walk through the interface.

## Step 2: Create a Sub-agent with /agents

```
/agents
→ Create new agent
→ Project-level
→ Generate with Claude
```

When prompted, describe it:

```
A code reviewer that checks for security issues, performance problems,
and code quality. It should run git diff, analyze changes, and provide
prioritized feedback with specific fix examples.
```

Claude generates the `.claude/agents/code-reviewer.md` file with frontmatter and system prompt.

## Step 3: Trigger It Naturally

Now just ask Claude naturally:

```
I just made some changes, can you review them?
```

**Claude reads the sub-agent descriptions, matches "review" to the code-reviewer sub-agent, and delegates to it.** Watch the terminal -- you'll see it spawn a sub-agent with a different background color.

## Step 4: Show the Sub-agent File

```
cat .claude/agents/code-reviewer.md
```

Walk through the anatomy:

```yaml
---
name: code-reviewer
description: Expert code review specialist...
tools: Read, Grep, Glob, Bash         # restricted tools (no Write/Edit)
model: sonnet                          # can use a different model
---

System prompt with review instructions...
```

## Step 5: Show a Background Sub-agent

```
Research how authentication works in this project. Run it in the background.
```

The researcher sub-agent (`background: true`) runs concurrently while you keep working. Results return when done.

## What to Watch For

- Sub-agent runs in its own context window (doesn't pollute main conversation)
- Different background color in the terminal shows which sub-agent is active
- Sub-agent has restricted tools (code-reviewer can't edit files)
- Results are summarized back to the main conversation

## Wow Moment

You didn't tell Claude which sub-agent to use. You said "review my changes" and Claude chose the right specialist. The sub-agent ran with its own model, tools, and prompt -- completely isolated from your main conversation.

## Sub-agent vs Skill

```
Skill:      Instructions that run IN your conversation context
Sub-agent:  Isolated agent with own context window, model, and tools
```

Use skills for reusable workflows. Use sub-agents when you need isolation, different models, or parallel execution.

## Talking Points

- "Sub-agents are specialist workers that Claude delegates to automatically"
- "Each has its own context window -- exploration doesn't eat your main context"
- "You can use haiku for cheap/fast research, opus for hard problems"
- "They check into git just like skills -- the team shares them"
- "Built-in: Explore (haiku, read-only), Plan (research), general-purpose (all tools)"
