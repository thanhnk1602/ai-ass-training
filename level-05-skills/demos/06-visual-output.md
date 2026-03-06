# Demo 6.3: Visual Output & Plugin Distribution

> **Tool:** Claude Code (CLI)
> **Time:** 4 minutes
> **Setup:** Copy `samples/.claude/skills/visualize/` to your project

## The Demo

Two advanced patterns: **skills that generate visual HTML output** (interactive browser-based reports) and **distributing skills as plugins** across projects.

---

## Demo A: Visual Output Skill -- /visualize

A skill that bundles a Python script to generate an interactive codebase explorer in your browser.

### The Skill Structure

```
.claude/skills/visualize/
├── SKILL.md                    # Instructions
└── scripts/
    └── codebase-map.py         # Python script that generates HTML
```

### SKILL.md

```yaml
---
name: visualize
description: Generate an interactive codebase visualization in the browser
allowed-tools: Bash(python *)
disable-model-invocation: true
---

Generate an interactive HTML tree view of this codebase.

Run the visualization script:
```bash
python .claude/skills/visualize/scripts/codebase-map.py .
```

This creates `codebase-map.html` and opens it in the browser.

After generating, tell the user what was created and how to re-open it.
```

### Prompt

```
/visualize
```

### What to Watch For

- Claude runs the bundled Python script
- An HTML file is generated with interactive tree view
- The browser opens automatically
- The visualization shows: file sizes, directory totals, file type distribution

### Wow Moment

The skill produced **interactive visual output** in the browser. Not text in the terminal -- a full interactive HTML page with collapsible directories, charts, and color-coded file types.

### The Pattern Works for Any Visual Output

- Dependency graphs
- Test coverage reports
- API documentation
- Database schema diagrams
- Performance profiling results
- Architecture visualizations

---

## Demo B: Sharing Skills as Plugins

### What Are Plugins?

Plugins are directories that contain skills, CLAUDE.md files, and MCP server configs. They let you package and distribute AI capabilities across projects.

### Plugin Structure

```
my-team-plugin/
├── PLUGIN.md                       # Plugin description
├── CLAUDE.md                       # Context loaded when plugin is active
├── skills/
│   ├── review/SKILL.md             # Code review skill
│   ├── component/SKILL.md          # Component generator
│   ├── deploy/SKILL.md             # Deployment pipeline
│   └── security-audit/SKILL.md     # Security audit
└── mcp-servers/
    └── config.json                 # MCP server configurations
```

### Distribution Methods

| Method | How | Best For |
|--------|-----|----------|
| **Git submodule** | `git submodule add <repo> .claude/plugins/team-tools` | Team-wide, version-controlled |
| **npm package** | `npm install @team/claude-skills` | Ecosystem distribution |
| **Direct copy** | Copy directory into `.claude/plugins/` | Quick sharing |

### Enabling a Plugin

```bash
# In Claude Code
claude plugins add /path/to/my-team-plugin
```

Or add to project settings manually.

### Prompt (demonstrate plugin skills)

```
# After installing the plugin, skills are namespaced:
/my-team-plugin:review
/my-team-plugin:deploy staging
/my-team-plugin:security-audit full
```

### Wow Moment

A single plugin installation gives the AI an entire team toolkit. Skills, context, MCP integrations -- all packaged and versioned.

## Talking Points

- "Visual output transforms AI from text terminal to interactive reports"
- "Bundled scripts can be Python, Node, bash -- any language"
- "Plugins package skills for distribution across projects and teams"
- "Plugin skills are namespaced: no conflicts with project skills"
- "This is how you build an AI-powered developer platform for your org"
