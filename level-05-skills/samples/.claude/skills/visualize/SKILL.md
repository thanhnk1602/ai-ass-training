---
name: visualize
description: Generate an interactive codebase visualization in the browser showing file structure, sizes, and distribution
allowed-tools: Bash(python *)
disable-model-invocation: true
---

# Codebase Visualizer

Generate an interactive HTML tree view of this codebase.

Run the visualization script from the project root:

```bash
python .claude/skills/visualize/scripts/codebase-map.py .
```

This creates `codebase-map.html` in the current directory and opens it in your default browser.

## What the visualization shows

- **Collapsible directories**: Click folders to expand/collapse
- **File sizes**: Displayed next to each file
- **Colors**: Different colors for different file types
- **Directory totals**: Shows aggregate size of each folder
- **Summary sidebar**: File count, directory count, total size
- **Bar chart**: Breakdown by file type

After generating, tell the user:
1. The file was created at `./codebase-map.html`
2. It should have opened in their browser
3. They can re-open it anytime with `open codebase-map.html`
