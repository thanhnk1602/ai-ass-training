# Demo 4.2: Database MCP -- Talk to Your Data
> **Tool:** Claude Code (CLI) with PostgreSQL MCP
> **Time:** 2 minutes
> **Audience:** [DEV]
> **Setup:** Running PostgreSQL instance + MCP configured

## Setup
Start the account-system database:
```bash
cd /Users/narx/Source/ai-proj/account-system && docker compose up -d postgres
```

Configure the PostgreSQL MCP server (see `configs/claude-mcp-config.json`).

## Prompt
```
Explore the database schema. Then:
1. Show me the table structure with relationships
2. How many users are registered?
3. What's the distribution of wallet types connected?
4. Write a migration to add a `last_login_at` timestamp column to the users
   table, with a default of NOW()
5. Generate the Prisma schema update to match
```

## What to Watch For
- AI queries `information_schema` to discover tables
- AI runs real SELECT queries and shows actual data
- AI generates both raw SQL migration and Prisma schema update

## Wow Moment
The AI is having a real conversation with a live database. It's running actual queries and adapting based on real data -- not generating hypothetical SQL.

## Alternative Prompt (if no DB available)
```
Connect to the PostgreSQL database and:
1. List all tables and their row counts
2. Find the 5 most recently created users
3. Show me the schema of the most complex table
4. Suggest an index to improve the slowest likely query
```

## Talking Points
- "The AI queried a live database without you writing a single SQL statement"
- "It understood the relationships between tables"
- "It generated both SQL and Prisma updates -- keeping them in sync"
