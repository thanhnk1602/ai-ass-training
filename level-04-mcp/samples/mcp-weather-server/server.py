"""
Example MCP Server: Weather & Team Tools
A simple MCP server demonstrating how to expose custom tools to AI assistants.
"""
import asyncio
import json
import sys
from io import TextIOWrapper

import anyio
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent

app = Server("demo-tools")

# Mock data
TEAM_MEMBERS = [
    {"name": "Alice Chen", "role": "Tech Lead", "status": "available"},
    {"name": "Bob Kumar", "role": "Senior Backend", "status": "in meeting"},
    {"name": "Carol Wu", "role": "Frontend Dev", "status": "available"},
    {"name": "David Park", "role": "DevOps", "status": "on PTO"},
    {"name": "Eve Santos", "role": "QA Engineer", "status": "available"},
]

JIRA_TICKETS = {
    "PROJ-123": {"title": "Fix login timeout on mobile", "status": "In Progress", "assignee": "Alice Chen", "priority": "High", "description": "Users on mobile Safari experience a 30-second timeout during OAuth flow. Need to investigate the redirect handling."},
    "PROJ-124": {"title": "Add dark mode to dashboard", "status": "To Do", "assignee": "Carol Wu", "priority": "Medium", "description": "Implement dark mode toggle in user settings. Should persist preference in localStorage."},
    "PROJ-125": {"title": "Database migration for audit logs", "status": "Done", "assignee": "Bob Kumar", "priority": "High", "description": "Create new audit_logs table with proper indexes for compliance reporting."},
}

SPRINT = {
    "name": "Sprint 24",
    "start": "2025-01-13",
    "end": "2025-01-24",
    "total_stories": 12,
    "completed": 5,
    "in_progress": 4,
    "todo": 3,
    "blockers": ["Waiting on API key from third-party vendor"],
}


@app.list_tools()
async def list_tools():
    return [
        Tool(
            name="get_jira_ticket",
            description="Get details of a Jira ticket by ID",
            inputSchema={
                "type": "object",
                "properties": {
                    "ticket_id": {"type": "string", "description": "Jira ticket ID (e.g., PROJ-123)"}
                },
                "required": ["ticket_id"],
            },
        ),
        Tool(
            name="list_team_members",
            description="List all team members with their roles and current status",
            inputSchema={"type": "object", "properties": {}},
        ),
        Tool(
            name="get_sprint_status",
            description="Get the current sprint progress and any blockers",
            inputSchema={"type": "object", "properties": {}},
        ),
    ]


@app.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "get_jira_ticket":
        ticket_id = arguments.get("ticket_id", "").upper()
        ticket = JIRA_TICKETS.get(ticket_id)
        if ticket:
            return [TextContent(type="text", text=json.dumps(ticket, indent=2))]
        return [TextContent(type="text", text=f"Ticket {ticket_id} not found")]

    elif name == "list_team_members":
        return [TextContent(type="text", text=json.dumps(TEAM_MEMBERS, indent=2))]

    elif name == "get_sprint_status":
        return [TextContent(type="text", text=json.dumps(SPRINT, indent=2))]

    return [TextContent(type="text", text=f"Unknown tool: {name}")]


class SkipEmptyLines:
    """Wraps an async line iterator to skip blank lines (MCP SDK workaround)."""

    def __init__(self, stream):
        self._stream = stream

    def __aiter__(self):
        return self

    async def __anext__(self):
        async for line in self._stream:
            if line.strip():
                return line
        raise StopAsyncIteration


async def main():
    stdin = SkipEmptyLines(
        anyio.wrap_file(TextIOWrapper(sys.stdin.buffer, encoding="utf-8"))
    )
    async with stdio_server(stdin=stdin) as (read_stream, write_stream):
        await app.run(read_stream, write_stream, app.create_initialization_options())


if __name__ == "__main__":
    asyncio.run(main())
