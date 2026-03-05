# Demo 3.2: AI-Driven Task Execution (The Self-Correction Loop)

> **Tool:** Claude Code (CLI)
> **Time:** 3 minutes
> **Setup:** Use `samples/mini-project/` -- a small Node.js project without tests

## The Demo

Give the AI a multi-step task that requires installing packages, writing code, running it, and handling failures. Watch the autonomous execution loop.

**This is the single most important demo in the entire training.**

## Prompt (run from `training/level-03-tools/samples/mini-project/`)

```
This project needs a complete test suite. Do the following:
1. Read the existing source code to understand what it does
2. Install vitest as a dev dependency
3. Create a test file for each source file
4. Write comprehensive tests with edge cases
5. Run the tests and fix any failures
6. Show me the final test results
```

## What to Watch For (the magic loop)

```
Step 1: AI reads src/index.ts, src/utils.ts, src/types.ts
        → Understands the code

Step 2: AI runs `npm install -D vitest`
        → Installs dependency

Step 3: AI creates test files
        → Writes meaningful tests (not trivial ones)

Step 4: AI runs `npx vitest run`
        → TESTS FAIL (import path wrong, or edge case)

Step 5: AI READS THE ERROR OUTPUT
        → Understands what went wrong

Step 6: AI FIXES THE TEST
        → Edits the file

Step 7: AI RERUNS `npx vitest run`
        → TESTS PASS ✓
```

## Wow Moment

**The self-correction loop.** When the first test run fails (and it will), the AI reads the error, understands it, fixes the code, and re-runs. This autonomous debugging cycle is what separates tool-using AI from chat-based AI.

Let the terminal run. Don't interrupt. The audience needs to see the fail → fix → pass cycle happen live.

## Talking Points

- "Notice it didn't ask me what to do when the test failed. It read the error and fixed it."
- "This is the same debug cycle a developer does -- but in seconds, not minutes"
- "It installed a package, wrote code, ran it, and iterated. All from one prompt."
- "This is why they call it 'agentic' -- it acts autonomously within the task"
