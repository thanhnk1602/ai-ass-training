# Demo 4.3: Build a Custom MCP Server (Live)
> **Tool:** Claude Code (CLI)
> **Time:** 5 minutes
> **Setup:** Python 3.10+ installed

## The Demo
Build a custom MCP server from scratch, live. This shows the audience that MCP is not limited to pre-built servers -- you can connect anything.

## Prompt
```
Build me a custom MCP server in Python that provides these tools:
1. `get_jira_ticket` - Takes a ticket ID, returns title, description, status, and assignee (use mock data)
2. `list_team_members` - Returns a list of team members with names and roles
3. `get_sprint_status` - Returns current sprint progress (total stories, completed, in progress)

Use the official MCP Python SDK (`mcp`). Make it a proper MCP server that I can
register with Claude Code. Include the configuration JSON I need to add to my
Claude settings.
```

## What to Watch For
1. AI installs the `mcp` Python package
2. AI creates a proper MCP server with typed tool definitions
3. AI creates mock data that looks realistic
4. AI provides the exact JSON config to register the server

## Follow-up Prompt (test it)
```
Now register this MCP server and use it. Show me ticket PROJ-123 and the
current sprint status.
```

## Wow Moment
In 5 minutes, you built a custom integration. The AI can now "talk to Jira" (mocked). The audience realizes any internal tool can be connected: CI/CD, monitoring, ticketing, documentation.

## Talking Points
- "We just built a custom AI integration in 5 minutes"
- "Replace the mock data with real API calls and you have a production integration"
- "Your internal tools, your proprietary APIs -- all connectable"
- "MCP is an open standard -- it works with Claude Code, Cursor, and others"
