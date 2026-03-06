# Demo 9.1: Using Plugins

> **Tool:** Claude Code (CLI)
> **Time:** 3 minutes
> **Audience:** [PLATFORM]
> **Setup:** Sample plugin from `samples/my-team-plugin/` available

## The Demo

Install a team plugin and immediately use its skills, agents, and hooks. Show how a single plugin installation transforms Claude's capabilities for a specific team or organization.

## Step 1: Install the Plugin

```bash
claude plugins add ./samples/my-team-plugin
```

Claude installs the plugin and reports what it includes:
- 2 skills (review, deploy)
- 1 agent (security-reviewer)
- 1 hook (team-rules)
- CLAUDE.md context loaded

## Step 2: Explore Plugin Contents

```
What plugins are installed? What skills and agents do they provide?
```

Claude lists the installed plugin with all its capabilities, namespaced appropriately.

## Step 3: Use a Plugin Skill

```
/my-team-plugin:review
```

Or simply:

```
Can you review my recent changes for code quality?
```

The plugin's review skill auto-triggers based on its description. It follows the TEAM's review checklist, not a generic one.

## Step 4: Use a Plugin Agent

```
Run a security review of the authentication module.
```

Claude delegates to the plugin's `security-reviewer` agent, which has its own model, tools, and specialized security checklist.

## Step 5: See the Hook in Action

```
Create a new utility function in src/utils/format-date.ts
```

The plugin's pre-tool-use hook enforces team naming conventions automatically.

## What to Watch For

1. One `plugins add` command installs skills + agents + hooks + context
2. Plugin skills appear alongside project skills
3. Auto-trigger works with plugin skills (description matching)
4. Plugin hooks run automatically (no extra configuration)
5. Plugin CLAUDE.md context is loaded into every session

## Wow Moment

One command. The AI now knows your team's review standards, deployment procedures, security requirements, and coding conventions. A new developer on the team runs `claude plugins add` on day one and gets the full AI toolkit immediately.

## Talking Points

- "Plugins are the 'npm install' of AI capabilities"
- "Skills, agents, hooks, context -- all in one installable package"
- "New team member? `claude plugins add` on day one"
- "The platform team maintains the plugin, developers just use it"
- "Think of it as infrastructure-as-code, but for AI behavior"
