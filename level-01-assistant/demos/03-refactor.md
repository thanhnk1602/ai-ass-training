# Demo 1.3: Refactor Legacy Code

> **Tool:** Claude Code (CLI)
> **Time:** 2 minutes
> **Setup:** `samples/messy_utils.py` in the project

## The Demo

Hand the AI an unmaintainable Python file with cryptic names, security vulnerabilities, and resource leaks. Watch it transform it into clean, modern Python.

## Prompt (copy-paste into Claude Code)

```
Refactor samples/messy_utils.py completely. The code works but is unmaintainable.
- Give all functions and parameters meaningful names
- Add type hints and docstrings
- Fix the resource leak in save()
- Fix the security vulnerability in load()
- Split the god-function proc() into separate, single-responsibility functions
- Use modern Python patterns (dataclasses, context managers, etc.)
- Keep the same external behavior
```

## What to Watch For

- `proc(d, t)` becomes separate functions: `filter_active_adults()`, `sort_by_name()`, `format_users()`
- A `User` dataclass replaces raw dicts
- `open()` gets wrapped in `with` statements (context managers)
- `eval()` is replaced with `json.loads()` (security fix)
- Single-letter variables become descriptive names
- Type hints on every function

## Wow Moment

The AI doesn't just rename variables -- it **restructures the architecture**. One god-function becomes four focused functions. Raw dicts become dataclasses. The before/after diff is dramatic.

Show the diff side by side:
```bash
# Before: 30 lines of unreadable spaghetti
# After: 80 lines of clean, documented, type-safe Python
```

## Follow-up Prompt (optional)

```
Now write tests for the refactored code to prove the behavior is identical.
```

## Talking Points

- "The AI turned a maintenance nightmare into code any developer can read"
- "It identified a real security vulnerability (eval) without being told"
- "It fixed the resource leak (unclosed file) without being told"
- "The refactored code uses modern Python patterns -- dataclasses, context managers, type hints"
