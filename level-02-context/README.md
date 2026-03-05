# Level 2: The Context Whisperer

> "The secret is not the AI. It's what you tell the AI about yourself."

## Concept

The quality of AI output is directly proportional to the quality of context you provide. `CLAUDE.md`, `.cursorrules`, and prompt engineering transform generic AI autocomplete into a team member that knows your codebase.

This level directly addresses the #1 skeptic complaint: **"It generates generic code that doesn't fit our project."**

## What is Context Engineering?

Context engineering is the practice of structuring project knowledge so AI tools can produce output that matches your team's standards. Key files:

| File | Tool | Purpose |
|------|------|---------|
| `CLAUDE.md` | Claude Code | Project rules, conventions, tech stack, patterns |
| `.cursorrules` | Cursor | Response style, code standards, framework preferences |
| `.clinerules` | Cline | Similar to cursorrules for Cline users |
| `README.md` | Any AI | General project context |

## What You'll See

| Demo | Tool | Time | What Happens |
|------|------|------|-------------|
| 2.1 The A/B Test | Claude Code | 3 min | Same prompt without vs. with CLAUDE.md -- dramatic difference |
| 2.2 CLAUDE.md Deep Dive | Claude Code | 3 min | AI generates feature matching existing codebase patterns |
| 2.3 Cursorrules | Cursor | 2 min | Cursor follows team conventions automatically |

## Key Takeaway

A 30-line `CLAUDE.md` file is the highest-ROI investment you can make in AI-assisted development. It turns "generic AI" into "your team's AI."

## Demos

- [Demo 2.1: Without vs. With Context](demos/01-without-context.md)
- [Demo 2.2: CLAUDE.md Deep Dive](demos/02-with-claude-md.md)
- [Demo 2.3: Cursorrules for Cursor](demos/03-cursorrules.md)

## Templates

- [CLAUDE.md Template](templates/CLAUDE-template.md) -- blank template for attendees
- [.cursorrules Template](templates/cursorrules-template.md)
