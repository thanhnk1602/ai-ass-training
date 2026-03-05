# Demo 4.1: GitHub MCP -- Issue to Pull Request
> **Tool:** Claude Code (CLI) with GitHub MCP
> **Time:** 3 minutes
> **Setup:** GitHub MCP server configured (see configs/)

## Setup
Add GitHub MCP to your Claude Code settings. See `configs/claude-mcp-config.json`.

## Prompt
```
Look at the open issues in my GitHub repo [your-org/your-repo]. Pick the
issue labeled "good first issue" with the highest priority. Read it,
understand the requirements, then implement the fix. Create a new branch,
commit the changes, and create a pull request with a proper description
referencing the issue.
```

## What to Watch For
1. AI calls GitHub MCP to list issues
2. AI reads the issue body and comments
3. AI creates a branch via git
4. AI implements the fix using file tools
5. AI commits, pushes, and creates a PR via GitHub MCP

## Wow Moment
Zero context switching. No browser, no copy-paste from GitHub, no manual git commands. From "read issue" to "PR ready for review" in one shot.

## Alternative Prompt (simpler, no real repo needed)
```
Use the GitHub MCP to list the top 5 trending TypeScript repositories today.
For each one, read their README and give me a one-line summary of what it does.
```

## Talking Points
- "The AI is interacting with GitHub directly -- not through a browser"
- "This workflow replaces: read issue → checkout branch → implement → push → create PR → link issue"
- "Any tool with an API can be connected this way"
