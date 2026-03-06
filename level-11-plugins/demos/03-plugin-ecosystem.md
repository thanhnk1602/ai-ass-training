# Demo 11.3: Plugin Ecosystem

> **Tool:** Claude Code (CLI)
> **Time:** 4 minutes
> **Setup:** Multiple plugins installed (team plugin + community plugins)

## The Demo

Manage multiple plugins, handle naming conflicts, update versions, and demonstrate how plugins compose into a comprehensive AI development platform.

## Step 1: Multiple Plugins

Imagine an organization with specialized plugins:

```bash
# Team-wide standards
claude plugins add @acme/core-standards

# Frontend-specific toolkit
claude plugins add @acme/react-toolkit

# Backend-specific toolkit
claude plugins add @acme/api-toolkit

# Security team's requirements
claude plugins add @acme/security-gates
```

## Step 2: List and Inspect

```
What plugins are installed? List all available skills and agents from all plugins.
```

Expected output:
```
Installed Plugins:
  @acme/core-standards v2.1.0 (4 skills, 1 agent, 3 hooks)
  @acme/react-toolkit v1.5.0 (6 skills, 2 agents)
  @acme/api-toolkit v1.3.0 (5 skills, 1 agent, 2 hooks)
  @acme/security-gates v3.0.0 (2 skills, 3 agents, 5 hooks)

Available Skills: 17 total
  /review (core-standards)
  /component (react-toolkit)
  /api-endpoint (api-toolkit)
  /security-audit (security-gates)
  ...
```

## Step 3: Handle Conflicts

```
Both core-standards and react-toolkit have a /review skill.
Which one runs when I say "review my code"?
```

Claude explains the resolution:
- Project skills take priority
- Then plugins in installation order
- Use namespace to be explicit: `/react-toolkit:review`

## Step 4: The Compound Effect

```
I need to add a new feature: a user dashboard with real-time data.
Design and implement it following all our team standards.
```

## What to Watch For

All plugins contribute to the output:
- **core-standards**: Code follows team conventions
- **react-toolkit**: Component structure follows React patterns
- **api-toolkit**: API endpoints follow REST conventions
- **security-gates**: Pre-commit hooks validate security requirements
- All hooks from all plugins fire on every operation

## Wow Moment

Four plugins, working together seamlessly. The AI followed frontend conventions from one plugin, API patterns from another, and security requirements from a third. No conflicts, no configuration needed. This is an AI development platform.

## Talking Points

- "Plugins compose -- frontend + backend + security all contribute"
- "Namespace resolution prevents conflicts"
- "The platform team manages plugins, developers just code"
- "Version pinning ensures reproducible AI behavior"
- "This scales: 10 developers or 1000, same plugin install"
