# Demo 1.2: Explain and Debug

> **Tool:** Cursor IDE (or Claude Code)
> **Time:** 3 minutes
> **Setup:** Open `samples/buggy_server.py` in Cursor

## The Demo

Show the AI a Python HTTP server with 3 intentional bugs + a thread-safety issue. Watch it find all of them.

## Setup

Open the file `samples/buggy_server.py` in Cursor IDE.

## Prompt (select all code, then Cmd+K in Cursor)

```
Review this code. Find all bugs, explain each one, and fix them. Also identify
any thread-safety issues with the global cache and suggest improvements.
```

**Alternative for Claude Code CLI:**
```
Read samples/buggy_server.py and find all bugs. Explain each bug, why it's
a problem, and provide the fixed version.
```

## Bugs the AI Should Find

| # | Bug | Location | Why It's Subtle |
|---|-----|----------|----------------|
| 1 | `json.dumps()` returns string, not bytes | `self.wfile.write(json.dumps(users))` | Missing `.encode()` -- runtime error on Python 3 |
| 2 | String vs int key comparison | `if user_id in cache` | `user_id` from URL is always a string, but later used as int |
| 3 | Type inconsistency in response | `{"id": user_id, ...}` | `user_id` stays as string instead of being cast to int |
| 4 | Thread-safety (bonus) | `cache = {}` global | Unprotected dict access from concurrent request threads |

## What to Watch For

- The AI identifies the subtle type coercion bug (string vs int) that would take manual debugging with print statements
- It suggests `threading.Lock()` for the cache
- The fix is complete and correct, not just a partial patch

## Wow Moment

Bug #2 is the kind of subtle issue that passes code review and only surfaces in production when cache hits return stale data. The AI found it instantly by reading the code -- no runtime, no debugger.

## Talking Points

- "This is not a linter -- the AI understands the runtime behavior"
- "It found a type coercion bug that passes mypy and pylint"
- "A human reviewer might miss the string-vs-int cache key issue"
