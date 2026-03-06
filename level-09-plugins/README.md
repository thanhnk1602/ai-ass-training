# Level 9: The Architect

> "Build it once. Share it everywhere. Let the ecosystem grow."

## Concept

Plugins package AI capabilities — skills, agents, hooks, context, and MCP configs — into reusable, distributable units. Instead of copying `.claude/` directories between projects, plugins let you install, version, and share AI toolkits across your entire organization.

## Why Plugins?

| Without Plugins | With Plugins |
|-----------------|--------------|
| Copy-paste skills between projects | `claude plugins add team-tools` |
| Inconsistent AI behavior across repos | Same skills, hooks, and context everywhere |
| No versioning of AI capabilities | Semantic versioning with changelogs |
| Hard to onboard new projects | One command to get the full AI toolkit |
| No way to share with the community | Publish to npm, share via git |

## Plugin Anatomy

A plugin is a directory with a specific structure:

```
my-team-plugin/
├── PLUGIN.md                   # Plugin metadata and description
├── CLAUDE.md                   # Context loaded when plugin is active
├── skills/                     # Skills available when plugin is enabled
│   ├── review/SKILL.md
│   ├── deploy/SKILL.md
│   └── component/SKILL.md
├── agents/                     # Sub-agents provided by the plugin
│   └── security-reviewer.md
├── hooks/                      # Hooks enforced by the plugin
│   └── pre-tool-use/
│       └── team-rules.js
└── mcp-servers/                # MCP server configurations
    └── config.json
```

### PLUGIN.md

```yaml
---
name: my-team-plugin
version: 1.0.0
description: Standard AI development toolkit for Acme Corp
author: Platform Team
---

# Acme Corp AI Plugin

This plugin provides:
- Code review skill with team standards
- Deployment pipeline skill
- Security reviewer sub-agent
- Pre-commit hooks for code conventions
- Context for our tech stack and patterns
```

## Plugin Management

### Installing Plugins

```bash
# From a local directory
claude plugins add /path/to/my-team-plugin

# From a git repository
claude plugins add https://github.com/team/claude-plugin.git

# From npm (if published)
claude plugins add @team/claude-plugin
```

### Listing and Removing

```bash
claude plugins list
claude plugins remove my-team-plugin
```

### Plugin Scopes

| Method | Scope | Best For |
|--------|-------|----------|
| Project `.claude/plugins/` | This project only | Project-specific tools |
| User `~/.claude/plugins/` | All your projects | Personal toolkits |
| Team (git submodule) | All project contributors | Team-wide standards |
| Organization (npm) | Entire org | Company-wide platform |

## Plugin Namespacing

Plugin skills and agents are namespaced to avoid conflicts:

```bash
/my-team-plugin:review    # namespaced
/review                   # short name (resolves to most specific match)
```

Priority order when names conflict:
1. Project `.claude/skills/` (highest)
2. User `~/.claude/skills/`
3. Plugin skills (in installation order)

## What You'll See

| Demo | Tool | Time | Audience | What Happens |
|------|------|------|----------|-------------|
| 9.1 Using Plugins | Claude Code | 3 min | [PLATFORM] | Install and use a team plugin with skills + agents |
| 9.2 Building a Plugin | Claude Code | 5 min | [PLATFORM] | Create a plugin from scratch with AI assistance |
| 9.3 Plugin Ecosystem | Claude Code | 4 min | [PLATFORM] | Manage multiple plugins, resolve conflicts, version |

## Key Takeaway

Plugins are how individual AI skills become an organizational platform. A single `claude plugins add` command gives every developer access to your team's reviewed skills, battle-tested hooks, specialized agents, and project context. The platform team builds the plugin; every developer benefits immediately.

## Demos

- [Demo 9.1: Using Plugins](demos/01-using-plugins.md)
- [Demo 9.2: Building a Plugin](demos/02-building-plugins.md)
- [Demo 9.3: Plugin Ecosystem](demos/03-plugin-ecosystem.md)
