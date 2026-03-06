# Demo 5.6: Visual Output Skill

> **Tool:** Claude Code (CLI)
> **Time:** 4 minutes
> **Audience:** [PLATFORM]
> **Setup:** Copy `samples/.claude/skills/visualize/` to your project

## The Demo

An advanced skill pattern: **skills that generate visual HTML output** — interactive browser-based reports built from bundled scripts.

---

## Visual Output Skill -- /visualize

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

## Talking Points

- "Visual output transforms AI from text terminal to interactive reports"
- "Bundled scripts can be Python, Node, bash -- any language"
- "This same pattern works for dependency graphs, test coverage, API docs, architecture diagrams"
- "Next level: packaging skills like this into plugins for org-wide distribution (see Level 9)"
