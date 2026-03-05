# Demo 6.2: Subagent & Dynamic Context Skills

> **Tool:** Claude Code (CLI)
> **Time:** 3 minutes
> **Setup:** Copy `samples/.claude/skills/` to your project

## The Demo

Two advanced skill patterns: **subagent execution** (`context: fork`) and **dynamic context injection** (`!`command``).

---

## Demo A: Subagent Skill -- /research

A skill that runs in an isolated Explore agent for deep codebase research.

### The Skill

```yaml
---
name: research
description: Deep research into how a feature or system works in this codebase
argument-hint: [topic]
context: fork
agent: Explore
allowed-tools: Read, Grep, Glob
---

Research "$ARGUMENTS" thoroughly in this codebase:

1. Find all relevant files using Glob and Grep
2. Read and analyze the implementation
3. Trace the data flow end-to-end
4. Identify all edge cases and error handling
5. Summarize findings with specific file:line references

Be thorough. Check tests, configs, and documentation too.
```

### Key Concepts

- **`context: fork`**: Runs in a new isolated context (no conversation history)
- **`agent: Explore`**: Uses the Explore agent -- optimized for reading, not writing
- **`allowed-tools: Read, Grep, Glob`**: Read-only, can't modify anything

### Prompt

```
/research authentication flow
```

### What to Watch For

- A subagent spawns in isolation
- It explores the codebase without access to your conversation
- Results are summarized and returned to your main session
- The Explore agent uses read-only tools -- safe by design

### Wow Moment

The skill ran in a **separate agent** with restricted tools. It can't accidentally modify files. This is safe delegation -- like handing a junior dev read-only access to investigate something.

---

## Demo B: Dynamic Context -- /pr-review

A skill that injects live data from shell commands before Claude sees the prompt.

### The Skill

```yaml
---
name: pr-review
description: Reviews the current pull request with full context
context: fork
allowed-tools: Read, Grep, Glob, Bash(gh *)
---

## Pull Request Context

### Diff
!`gh pr diff`

### PR Description
!`gh pr view`

### Comments
!`gh pr view --comments`

### Changed Files
!`gh pr diff --name-only`

## Your Task

Review this pull request thoroughly:
1. Check each changed file for bugs, security issues, and quality
2. Verify the PR description matches the actual changes
3. Check if existing comments/feedback has been addressed
4. Provide a structured review with APPROVE / REQUEST_CHANGES recommendation
```

### Key Concepts

- **`!`command``**: Shell commands that run BEFORE the skill prompt is sent
- The output **replaces the placeholder** -- Claude sees actual data, not commands
- This is **preprocessing**, not something Claude executes

### Prompt

```
/pr-review
```

### What to Watch For

- The `gh pr diff`, `gh pr view`, etc. run immediately
- Claude receives the actual PR diff, description, and comments
- The review references real line numbers from the diff
- Claude never ran the `gh` commands -- they were pre-processed

### Wow Moment

The AI reviewed a PR with **live data** injected before it even started thinking. Dynamic context injection means skills can incorporate real-time data from any CLI tool.

## Talking Points

- "`context: fork` gives you safe, isolated execution"
- "`agent: Explore` means read-only -- the skill can't break anything"
- "Dynamic context with !`command` injects live data before the AI sees it"
- "Combine both patterns: isolated agent with pre-fetched real data"
