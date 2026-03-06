# Demo 9.3: CI/CD Integration Hooks

> **Tool:** Claude Code (CLI)
> **Time:** 5 minutes
> **Setup:** Node.js project with test suite, hooks configured

## The Demo

Connect AI development to your CI/CD pipeline with hooks. PostToolUse hooks automatically run tests after code changes. Notification hooks send Slack messages when the AI completes work. Stop hooks generate change summaries.

## Setup

Add notification and stop hooks to your configuration:

```json
{
  "hooks": {
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
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "node .claude/hooks/notification/slack-notify.js"
          }
        ]
      }
    ]
  }
}
```

## Prompt

```
Implement a user authentication module with login, logout, and session management.
Include comprehensive tests. When you're done, summarize all changes.
```

## What to Watch For

1. AI creates auth module files
2. After each file write, PostToolUse hook runs the linter automatically
3. AI writes tests and runs them
4. When the AI finishes (Stop hook fires):
   - Change summary is generated
   - Notification is sent (Slack webhook or console log)
5. The notification includes: files changed, tests passed/failed, summary

## The CI/CD Pattern

```
Developer prompt
  → AI writes code
    → PostToolUse: auto-lint ✓
    → PostToolUse: run related tests ✓
  → AI writes tests
    → PostToolUse: auto-lint ✓
  → AI runs tests
    → PreToolUse: log command ✓
  → AI finishes
    → Stop: generate summary ✓
    → Stop: notify Slack ✓
    → Stop: create PR description ✓
```

## Wow Moment

Every single step of the AI's work was automatically validated, logged, and reported. When it finished, a Slack notification appeared with a complete summary. This is AI development with full observability.

## Talking Points

- "Stop hooks run when the agent completes -- perfect for summaries and notifications"
- "PostToolUse hooks create a continuous integration loop inside the AI session"
- "Notification hooks connect AI work to your team's communication channels"
- "The same patterns work with GitHub Actions, Jenkins, or any CI system"
- "Full audit trail: every command logged, every file change validated"
