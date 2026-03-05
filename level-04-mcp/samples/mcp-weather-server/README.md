# Demo MCP Server

A sample MCP server showing how to expose custom tools to Claude Code.

## Install
```bash
pip install mcp
```

## Run (standalone test)
```bash
python server.py
```

## Register with Claude Code
Add to your Claude Code MCP settings:
```json
{
  "mcpServers": {
    "demo-tools": {
      "command": "python",
      "args": ["/absolute/path/to/server.py"]
    }
  }
}
```

## Available Tools
| Tool | Description |
|------|------------|
| `get_jira_ticket` | Get Jira ticket details by ID |
| `list_team_members` | List team members and status |
| `get_sprint_status` | Current sprint progress |
