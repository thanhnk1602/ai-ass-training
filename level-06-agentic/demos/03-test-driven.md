# Demo 6.3: Test-Driven Implementation

> **Tool:** Claude Code (CLI)
> **Time:** 4 minutes
> **Audience:** [DEV]
> **Setup:** Any Node.js project directory

## The Demo

True TDD executed by AI: write tests first (RED), then implement to pass them (GREEN). The audience sees both test runs.

## Prompt

```
I need a rate limiter middleware for Express. Here are my test requirements:

Create the tests FIRST, then implement to make them pass:

Tests should verify:
1. Allows requests under the limit (100 req/15 min)
2. Blocks requests over the limit with 429 status
3. Resets after the time window
4. Tracks limits per IP address independently
5. Returns correct Retry-After header
6. Works with X-Forwarded-For behind a proxy
7. Has a configurable whitelist of IPs that bypass limiting
8. Provides a /rate-limit-status endpoint for monitoring

Write tests first. Run them (they should all fail). Then implement the
middleware. Run tests again (they should all pass). Show both test runs.
```

## What to Watch For

**Run 1 (RED):**
```
✗ allows requests under limit
✗ blocks over limit with 429
✗ resets after window
... 8 tests, 0 passing, 8 failing
```

**Run 2 (GREEN):**
```
✓ allows requests under limit
✓ blocks over limit with 429
✓ resets after window
... 8 tests, 8 passing, 0 failing
```

## Wow Moment

The "red-green" TDD cycle, visible in the terminal. The AI wrote tests independently from the implementation -- proving it didn't cheat by writing tests that trivially match.

## Talking Points

- "This is real TDD: tests first, then implementation"
- "The AI didn't cheat -- the tests were written without any implementation"
- "Both test runs are visible: 8 failures then 8 passes"
- "The implementation handles edge cases the tests demand"
