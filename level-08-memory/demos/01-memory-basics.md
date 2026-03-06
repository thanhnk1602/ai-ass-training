# Demo 8.1: Memory Basics

> **Tool:** Claude Code (CLI)
> **Time:** 3 minutes
> **Audience:** [ALL]
> **Setup:** A project directory with some existing code

## The Demo

Show how Claude Code stores, recalls, and manages memories across sessions. Demonstrate the three memory scopes and how memories persist between conversations.

## Step 1: Store a Memory

Start a Claude Code session and establish a fact:

```
Remember that our API uses snake_case for all JSON response fields, 
never camelCase. This is a team convention.
```

Claude confirms it stored this as a project-level memory.

## Step 2: Verify with /memory

```
/memory
```

Show the stored memory. Point out:
- The scope (project)
- The timestamp
- The source (user-requested)

## Step 3: Exit and Restart

```
/exit
```

Start a new session in the same project:

```
claude
```

## Step 4: Test Recall

```
Create a new API endpoint that returns user profile data with 
name, email, and created date.
```

## What to Watch For

1. Claude stores the memory without you needing to edit any config file
2. The `/memory` command shows all memories organized by scope
3. After restarting, Claude loads memories automatically
4. The new API endpoint uses `snake_case` for response fields WITHOUT being reminded
5. Claude may reference the memory: "Using snake_case per project conventions"

## Wow Moment

You told Claude a convention ONCE. You exited the session entirely. In a brand new session, Claude remembered and applied the convention automatically. No CLAUDE.md edit needed.

## Talking Points

- "Memory is automatic -- Claude stores important facts from your conversations"
- "You can also explicitly tell it to remember things"
- "Three scopes: user (personal), project (team), local (personal per-project)"
- "/memory lets you view, edit, and prune your memories"
- "Think of CLAUDE.md as the constitution, memory as the journal"
