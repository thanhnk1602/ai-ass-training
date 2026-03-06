# Level 9: The Watchdog

> "Trust, but verify. Automatically."

## Concept

Hooks let you intercept and automate around every AI action. They run BEFORE a tool is used (to block or modify), AFTER a tool completes (to validate or format), and on NOTIFICATIONS (to alert external systems). Hooks transform AI from "try and see" to "automated guardrails."

This level covers the Claude Code hooks system: lifecycle events, hook types, rule-based automation, and integrating AI into CI/CD pipelines.

## The Automation Scale

| Without Hooks | With Hooks |
|---------------|------------|
| Manually review every AI edit | Auto-lint after every file write |
| Hope the AI doesn't run dangerous commands | Block `rm -rf`, `DROP TABLE` before execution |
| Manually check coding standards | Auto-reject code that violates conventions |
| No visibility into what AI did | Slack notification on every commit |
| Manual CI/CD pipeline integration | Hooks trigger tests, deploys automatically |

## Hook Types

Claude Code supports hooks at key lifecycle points:

| Hook | When It Runs | Use Cases |
|------|-------------|-----------|
| `PreToolUse` | Before a tool executes | Block dangerous commands, enforce naming conventions, require confirmation |
| `PostToolUse` | After a tool completes | Auto-lint, validate output, log changes, run tests |
| `Notification` | On important events | Slack alerts, email notifications, audit logging |
| `Stop` | When the agent finishes its turn | Final validation, summary generation, cleanup |

## Hook Configuration

Hooks are defined in Claude Code settings (project or user level):

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "node .claude/hooks/pre-tool-use/block-dangerous-commands.js"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "node .claude/hooks/post-tool-use/auto-lint.js"
          }
        ]
      }
    ]
  }
}
```

### Hook Input/Output

Hooks receive JSON on stdin and respond with JSON on stdout:

**Input (PreToolUse):**
```json
{
  "hook_type": "PreToolUse",
  "tool_name": "Bash",
  "tool_input": {
    "command": "rm -rf /important-directory"
  },
  "session_id": "abc123"
}
```

**Output (Block):**
```json
{
  "decision": "block",
  "reason": "Destructive command blocked: rm -rf on non-temp directory"
}
```

**Output (Allow):**
```json
{
  "decision": "allow"
}
```

### Matchers

| Matcher | What It Matches |
|---------|----------------|
| `Bash` | Any Bash/shell command |
| `Write` | File write operations |
| `Edit` | File edit operations |
| `Write\|Edit` | Either writes or edits |
| `Bash(npm *)` | Bash commands starting with `npm` |
| `*` | All tools |

## What You'll See

| Demo | Tool | Time | What Happens |
|------|------|------|-------------|
| 9.1 Hook Basics | Claude Code | 3 min | Create and test PreToolUse + PostToolUse hooks |
| 9.2 Guardrail Hooks | Claude Code | 4 min | Block dangerous commands, enforce conventions automatically |
| 9.3 CI/CD Integration | Claude Code | 5 min | Hooks that trigger tests, linting, and notifications |

## Key Takeaway

Hooks are the missing piece between "AI that writes code" and "AI that writes code safely." They enforce your team's rules automatically, provide audit trails, and integrate AI into your existing CI/CD workflows. A 10-line hook script can prevent entire categories of mistakes.

## Demos

- [Demo 9.1: Hook Basics](demos/01-hook-basics.md)
- [Demo 9.2: Guardrail Hooks](demos/02-guardrails-hooks.md)
- [Demo 9.3: CI/CD Integration Hooks](demos/03-ci-cd-hooks.md)
