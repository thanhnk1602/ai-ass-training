# Level 4: The Connector
> "The AI just queried your database. From the terminal."

## Concept
Model Context Protocol (MCP) lets AI tools connect to external services -- databases, APIs, GitHub, Figma, anything. The AI is no longer limited to file system operations.

## What is MCP?
MCP is an open protocol that standardizes how AI models connect to external tools and data sources.

```
┌─────────────┐    MCP Protocol    ┌─────────────┐
│  Claude Code │ ◄───────────────► │  MCP Server  │
│  (AI Client) │   JSON-RPC 2.0   │  (Your Tool) │
└─────────────┘                    └──────┬──────┘
                                          │
                                   ┌──────▼──────┐
                                   │   External   │
                                   │   Service    │
                                   │ (DB/API/etc) │
                                   └─────────────┘
```

Key concepts:
- **MCP Server**: A process that exposes tools/resources to AI
- **MCP Client**: The AI tool (Claude Code, Cursor) that connects to servers
- **Tools**: Functions the AI can call (query DB, create PR, etc.)
- **Resources**: Data the AI can read (files, DB schemas, etc.)

## Available MCP Servers (pre-built)
| Server | What It Does |
|--------|-------------|
| @modelcontextprotocol/server-github | Read issues, create PRs, manage repos |
| @modelcontextprotocol/server-postgres | Query PostgreSQL databases |
| @modelcontextprotocol/server-filesystem | Enhanced file operations |
| @modelcontextprotocol/server-brave-search | Web search |
| @modelcontextprotocol/server-slack | Read/send Slack messages |

## Demos
- [Demo 4.1: GitHub MCP](demos/01-github-mcp.md)
- [Demo 4.2: Database MCP](demos/02-database-mcp.md)
- [Demo 4.3: Build a Custom MCP Server](demos/03-custom-mcp-server.md)

## Key Takeaway
Any internal tool, any API, any database can be connected to your AI. The extensibility is limitless.
