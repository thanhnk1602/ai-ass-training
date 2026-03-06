# Demo 9.1: Hook Basics

> **Tool:** Claude Code (CLI)
> **Time:** 3 minutes
> **Setup:** Create `.claude/hooks/` directory in your project

## The Demo

Set up a PreToolUse hook that logs every Bash command the AI runs, and a PostToolUse hook that automatically lints files after edits. See hooks in action as guardrails and automation.

## Setup

Create the hooks configuration in your project's `.claude/settings.json`:

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

Copy the sample hooks from `samples/.claude/hooks/` to your project.

## Prompt

```
Create a new file called utils.js with a function that formats dates.
Then run the tests with npm test.
```

## What to Watch For

1. When the AI writes `utils.js`, the PostToolUse hook fires automatically
2. The auto-lint hook runs the linter on the new file
3. When the AI tries `npm test`, the PreToolUse hook logs the command
4. The hook output appears in the terminal alongside Claude's output
5. If the linter finds issues, Claude sees the hook feedback and fixes them

## Wow Moment

The AI didn't just write code -- the hooks automatically validated it. The linter ran without anyone asking. If you set up a "block dangerous commands" hook, try asking Claude to run `rm -rf /` and watch the hook intercept it.

## Talking Points

- "Hooks are your automated code reviewer that never sleeps"
- "PreToolUse hooks can BLOCK actions before they happen"
- "PostToolUse hooks can VALIDATE and TRANSFORM results"
- "The AI sees hook output and can react to it -- self-correcting loop with guardrails"
- "Hooks are just scripts -- Node.js, Python, bash, whatever your team uses"
