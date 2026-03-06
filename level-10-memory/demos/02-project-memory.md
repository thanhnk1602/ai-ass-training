# Demo 10.2: Project Memory

> **Tool:** Claude Code (CLI)
> **Time:** 4 minutes
> **Setup:** A project with `.claude/` directory initialized

## The Demo

Project-level memory that the entire team shares via git. When one developer teaches Claude something, every developer benefits. Show how memories are stored in `.claude/memory.json` and checked into version control.

## Step 1: Create Project Memories

```
I need you to remember these things about our project:
1. We use PostgreSQL 15 with the pgvector extension for embeddings
2. All database migrations must be reversible (include down migration)
3. The notification service is at internal-api.company.com:8080
4. We never use ORM eager loading -- always explicit joins
5. Error responses follow RFC 7807 Problem Details format
```

## Step 2: Show the Memory File

```bash
cat .claude/memory.json
```

Walk through the JSON structure. Each memory has an ID, content, scope, timestamp, and source.

## Step 3: Demonstrate Team Sharing

```bash
git add .claude/memory.json
git commit -m "Add project memory for AI context"
git push
```

"When a teammate pulls this commit, their Claude Code sessions automatically load these memories."

## Step 4: Test with a Real Task

```
Create a new API endpoint for semantic search over our document collection.
```

## What to Watch For

1. Memories are stored as a JSON file in `.claude/`
2. The file is human-readable and editable
3. After git push, the team shares this knowledge
4. When building the search endpoint, Claude:
   - Uses PostgreSQL with pgvector (memory #1)
   - Creates reversible migration (memory #2)
   - References the correct notification service URL (memory #3)
   - Uses explicit joins, not eager loading (memory #4)
   - Returns errors in RFC 7807 format (memory #5)

## Wow Moment

Five memories. Every single one influenced the generated code. Claude didn't use a generic ORM pattern or random error format -- it followed YOUR project's specific conventions from memory. And the next developer who clones the repo gets this knowledge for free.

## Talking Points

- "Project memory is a JSON file that checks into git"
- "When one developer teaches Claude, the whole team benefits"
- "Unlike CLAUDE.md (which you write), memories accumulate naturally over time"
- "The AI gets smarter about your project with every session"
- "Review memories in PRs just like code -- they're version-controlled knowledge"
