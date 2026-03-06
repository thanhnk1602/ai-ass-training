# Setup Guide

## Prerequisites

Install these before the training session.

### Required

| Tool | Install Command | Verify |
|------|----------------|--------|
| Node.js 22+ | `brew install node` or [nodejs.org](https://nodejs.org) | `node --version` |
| Python 3.10+ | `brew install python3` | `python3 --version` |
| Git | `brew install git` | `git --version` |
| Claude Code CLI | `npm install -g @anthropic-ai/claude-code` | `claude --version` |

### Recommended

| Tool | Install | Used In |
|------|---------|---------|
| Cursor IDE | [cursor.com](https://cursor.com) | Levels 2, 5 |
| Docker Desktop | [docker.com](https://www.docker.com/products/docker-desktop) | Levels 4, 8 |
| GitHub CLI | `brew install gh` | Level 4 |
| tmux | `brew install tmux` | Level 8 (agent teams split panes, optional) |

### API Keys

| Key | Where to Get | Used In |
|-----|-------------|---------|
| Anthropic API key | [console.anthropic.com](https://console.anthropic.com) | All levels (via Claude Code) |
| GitHub PAT | GitHub Settings > Developer Settings > Tokens | Level 4 (MCP) |
| Etherscan API key | [etherscan.io/apis](https://etherscan.io/apis) | Level 8 capstone (optional) |

## Claude Code Setup

### 1. Install and Authenticate

```bash
npm install -g @anthropic-ai/claude-code
claude
# Follow the authentication prompts
```

### 2. Verify It Works

```bash
mkdir /tmp/test-claude && cd /tmp/test-claude
claude "Create a hello.py that prints Hello World"
python3 hello.py
```

### 3. Configure Permissions (optional, for smoother demos)

To avoid permission prompts during live demos, you can pre-approve tools:

```bash
# In your project directory
claude settings
# Set: allow file edits, allow bash commands, allow MCP
```

## Cursor Setup

### 1. Install Cursor

Download from [cursor.com](https://cursor.com). Open and sign in.

### 2. Enable Composer

Cmd+Shift+P > "Cursor: Open Composer" (or Cmd+I)

### 3. Configure .cursorrules

Place the `.cursorrules` file from `level-02-context/samples/` in your project root.

## MCP Setup (Level 4)

### GitHub MCP Server

```bash
# Test that it works
GITHUB_PERSONAL_ACCESS_TOKEN=your_token npx -y @modelcontextprotocol/server-github
```

Add to Claude Code settings (see `level-04-mcp/configs/claude-mcp-config.json`).

### PostgreSQL MCP Server (requires running database)

```bash
# Start the database
cd /Users/narx/Source/ai-proj/account-system && docker compose up -d postgres

# Test MCP server
npx -y @modelcontextprotocol/server-postgres "postgresql://postgres:postgres@localhost:5432/account_system"
```

## Pre-Demo Checklist

Before each training session, verify:

- [ ] Claude Code CLI authenticated and working
- [ ] Cursor IDE installed with active subscription
- [ ] Python 3.10+ installed
- [ ] Node.js 22+ installed
- [ ] All sample files in the correct directories
- [ ] Terminal font size increased (minimum 16pt for readability)
- [ ] Screen sharing configured (if remote)
- [ ] Network connection stable (for API calls in Levels 4, 8)

### For Level 4 (MCP) specifically:

- [ ] Docker Desktop running
- [ ] GitHub PAT token ready
- [ ] PostgreSQL database accessible

### For Level 8 (Agent Teams) specifically:

- [ ] Have a pre-built backup version in case of network issues
- [ ] CoinGecko API accessible (test: `curl https://api.coingecko.com/api/v3/ping`)
- [ ] For manual parallel (Demo 8.1): 3 terminal windows ready
- [ ] For agent teams (Demo 8.2-8.3): enable experimental feature:
  ```json
  // ~/.claude/settings.json
  { "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" } }
  ```
- [ ] tmux installed if using split-pane mode (optional, in-process mode works without it)

### For Level 9 (Hooks) specifically:

- [ ] Sample hook scripts copied from `level-09-hooks/samples/`
- [ ] Node.js available for running hook scripts
- [ ] ESLint installed in project (for auto-lint hook demo): `npm install -D eslint`

### For Level 10 (Memory) specifically:

- [ ] `.claude/` directory initialized in project
- [ ] Familiarity with `/memory` command in Claude Code

### For Level 11 (Plugins) specifically:

- [ ] Sample plugin available from `level-11-plugins/samples/my-team-plugin/`
- [ ] Git initialized in project (for plugin distribution demos)

## Troubleshooting

### Claude Code won't authenticate
```bash
claude logout && claude
```

### MCP server won't connect
Check that the MCP config JSON is valid:
```bash
cat ~/.claude/settings.json | python3 -m json.tool
```

### Docker containers won't start
```bash
docker compose down -v  # Clean slate
docker compose up --build
```

### Permission errors in Claude Code
```bash
claude settings  # Review and adjust permissions
```
