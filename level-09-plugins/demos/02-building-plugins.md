# Demo 9.2: Building a Plugin

> **Tool:** Claude Code (CLI)
> **Time:** 5 minutes
> **Audience:** [PLATFORM]
> **Setup:** Empty directory for the new plugin

## The Demo

Build a team plugin from scratch with AI assistance. Package existing skills and agents into a distributable plugin, add metadata, and publish it for the team.

## Step 1: Scaffold the Plugin

```
Create a new Claude Code plugin called "fullstack-toolkit" for our team.
It should include:
1. A code review skill that checks for our React + TypeScript patterns
2. A deployment skill for our Vercel + Supabase stack  
3. A security reviewer agent
4. A pre-commit hook that enforces TypeScript strict mode
5. A CLAUDE.md with our tech stack context

Create the full plugin directory structure.
```

## What to Watch For

1. Claude creates the complete plugin structure:
   ```
   fullstack-toolkit/
   ├── PLUGIN.md
   ├── CLAUDE.md
   ├── skills/
   │   ├── review/SKILL.md
   │   └── deploy/SKILL.md
   ├── agents/
   │   └── security-reviewer.md
   └── hooks/
       └── pre-tool-use/
           └── enforce-strict-ts.js
   ```
2. PLUGIN.md has proper metadata (name, version, description)
3. Each skill has appropriate frontmatter
4. The agent has model, tools, and permission configuration
5. The hook script is functional

## Step 2: Test the Plugin Locally

```bash
claude plugins add ./fullstack-toolkit
```

Then test each component:

```
/fullstack-toolkit:review
```

```
Run a security review of this project.
```

## Step 3: Distribute the Plugin

### Option A: Git Repository

```bash
cd fullstack-toolkit
git init
git add .
git commit -m "Initial plugin release v1.0.0"
git remote add origin https://github.com/team/fullstack-toolkit.git
git push -u origin main
```

Team members install with:
```bash
claude plugins add https://github.com/team/fullstack-toolkit.git
```

### Option B: npm Package

```bash
cd fullstack-toolkit
npm init -y
# Edit package.json with proper metadata
npm publish --access=restricted
```

Team members install with:
```bash
claude plugins add @team/fullstack-toolkit
```

### Option C: Git Submodule (Version Locked)

```bash
# In any project
git submodule add https://github.com/team/fullstack-toolkit.git .claude/plugins/fullstack-toolkit
```

This locks the plugin version per-project and auto-installs on clone.

## Wow Moment

In 5 minutes, we went from zero to a distributable AI toolkit. The plugin packages our team's entire AI workflow -- review standards, deployment procedures, security checks, coding conventions -- into one installable package.

## Talking Points

- "AI built the plugin. Meta, right? AI building tools for AI."
- "PLUGIN.md is the package.json of AI capabilities"
- "Git submodules lock the version per-project -- predictable AI behavior"
- "npm publishing puts your plugin in the same ecosystem as your code"
- "Start with one skill, grow the plugin over time"
