# Demo 1.1: Code Generation from Natural Language

> **Tool:** Claude Code (CLI)
> **Time:** 2 minutes
> **Audience:** [ALL]
> **Setup:** Empty directory, Python installed

## The Demo

Generate a complete, working Python script from a natural language description -- no Stack Overflow, no copy-paste fragments.

## Prompt (copy-paste into Claude Code)

```
Create a Python script called `log_analyzer.py` that:
1. Reads a nginx access log file (path passed as CLI argument)
2. Parses each line to extract: IP, timestamp, HTTP method, URL, status code, response size
3. Generates a summary report showing:
   - Total requests
   - Top 10 IPs by request count
   - HTTP status code distribution (as percentages)
   - Top 10 most requested URLs
   - Total bandwidth (sum of response sizes, formatted as MB/GB)
4. Output the report in a clean formatted table using only the standard library
5. Handle malformed lines gracefully (skip and count them)

Use type hints, docstrings, and make it production-quality.
```

## What to Watch For

- Claude Code creates the file directly on disk (no copy-paste needed)
- The script uses `argparse`, regex parsing, `collections.Counter`
- Clean formatted output with aligned tables
- Error handling for malformed lines
- 80-120 lines of working code generated in ~30 seconds

## Follow-up Prompt (test it immediately)

```
Now generate a sample nginx log file with 500 lines of realistic data so we can test it.
```

Then run:
```bash
python log_analyzer.py sample_access.log
```

## Wow Moment

The script works on the first run. 80+ lines of production code, zero debugging. Time from "I need a log analyzer" to "here are the results": under 60 seconds.

## Talking Points

- "This would take a developer 15-20 minutes to write from scratch"
- "The AI chose `argparse` for CLI args, `re` for parsing, `Counter` for aggregation -- all the right stdlib tools"
- "Notice it handled edge cases (malformed lines) without being reminded"
