# Demo 5.2: Create Your First Skill (with Auto-Trigger)

> **Tool:** Claude Code (CLI)
> **Time:** 3 minutes
> **Audience:** [ALL]
> **Setup:** Any project directory with staged git changes

## The Demo

Build a skill and show that Claude **auto-invokes it** when you speak naturally. No `/slash-command` needed. The `description` field acts as a trigger mapping -- Claude reads all skill descriptions and decides which to use based on your message.

## Step 1: Create the Skill

```bash
mkdir -p .claude/skills/review
```

Create `.claude/skills/review/SKILL.md`:

```yaml
---
name: review
description: Reviews staged git changes for bugs, security issues, and code quality. Use when preparing code for PR review or when someone asks to check, review, or look at their changes.
allowed-tools: Bash(git diff *), Read, Grep, Glob
---

Review the git diff of staged changes. For each changed file:

1. **Bugs & Edge Cases**: Look for logic errors, off-by-one, null/undefined risks
2. **Security**: Check for injection, auth bypass, data exposure, OWASP top 10
3. **Performance**: N+1 queries, unnecessary re-renders, memory leaks
4. **Conventions**: Verify code follows patterns in CLAUDE.md

## Output Format

For each file, rate: **PASS** | **MINOR ISSUES** | **NEEDS WORK**

Include specific line references for each finding.

End with:
- **Must-fix** (blocking): items that must change before merge
- **Nice-to-have** (non-blocking): improvements for later
- **Overall confidence**: 1-10
```

## Step 2: Stage Some Changes

```bash
git add -A
```

## Step 3: Trigger It -- Three Ways

### Way A: Natural language (auto-trigger) -- DEMO THIS FIRST

Don't type any slash command. Just say naturally:

```
Can you check my changes before I push?
```

**Claude reads the `description` field, matches your intent, and auto-invokes the skill.** Watch the terminal -- you'll see it activate the review skill.

### Way B: Different phrasing (same auto-trigger)

Try a completely different wording:

```
I'm about to open a PR, anything look wrong?
```

Same skill fires. Claude matched the intent, not keywords.

### Way C: Explicit slash command (always works too)

```
/review
```

## How Auto-Trigger Works

```
┌─────────────────────────────────────────────────────┐
│  Your message: "check my changes before I push"     │
│                                                       │
│  Claude reads ALL skill descriptions:                │
│                                                       │
│  review:    "Reviews staged git changes for bugs..." │ ← MATCH
│  test:      "Generates comprehensive tests..."       │
│  component: "Generates a React component..."         │
│  deploy:    "Deploy application to staging..."       │
│                                                       │
│  → Claude auto-invokes /review                       │
└─────────────────────────────────────────────────────┘
```

The description is always in context (lightweight). The full skill content only loads when triggered.

## The Trigger Mapping Pattern

Write descriptions that cover how people **actually ask** for things:

```yaml
# BAD: vague description
description: Reviews code

# GOOD: covers multiple phrasings
description: >
  Reviews staged git changes for bugs, security issues, and code
  quality. Use when preparing code for PR review, when someone asks
  to check or review their changes, or before pushing to remote.
```

## Wow Moment

You never typed `/review`. You said "check my changes" in plain English and the skill fired automatically. The AI chose the right tool for the job based on understanding your intent.

**Do it again** with a different phrasing: "anything look off in my code?" Same skill, triggered by completely different words.

## Talking Points

- "The description is the trigger map -- it tells Claude WHEN to auto-invoke"
- "You don't need to remember slash command names"
- "Write descriptions that cover how your team naturally asks for things"
- "This is the difference between a command-line tool and an intelligent assistant"
