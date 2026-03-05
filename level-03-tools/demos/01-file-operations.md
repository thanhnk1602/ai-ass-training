# Demo 3.1: Codebase Exploration and Understanding

> **Tool:** Claude Code (CLI)
> **Time:** 2 minutes
> **Setup:** Run from `account-system/` directory (or any existing project)

## The Demo

The AI explores your entire project autonomously -- reads files, inspects configs, traces dependencies -- then produces a comprehensive analysis. No copy-paste required.

## Prompt (run from `/Users/narx/Source/ai-proj/account-system/`)

```
Explore this entire project. Tell me:
1. What is the tech stack?
2. Draw the architecture as ASCII art
3. List all API endpoints and what they do
4. Identify any security concerns
5. What would you improve?
```

## What to Watch For

Watch the tool calls in real-time:
1. **Reads `package.json`** -- discovers Express, Prisma, React
2. **Lists directories** -- maps the folder structure
3. **Reads `prisma/schema.prisma`** -- understands the data model
4. **Reads route files** -- finds all API endpoints
5. **Reads Docker configs** -- understands the deployment
6. **Reads auth middleware** -- checks security patterns

Then produces:
- ASCII architecture diagram
- Complete endpoint list with HTTP methods
- Real security findings (not generic advice)
- Concrete improvement suggestions

## Wow Moment

**The AI didn't ask you to paste any code.** It read your project itself. It explored dozens of files autonomously and synthesized a coherent analysis. Skeptics who thought AI means "copy-paste into ChatGPT" realize this is fundamentally different.

## Talking Points

- "I didn't paste a single line of code. The AI read my entire project."
- "It found security issues I might not have caught in a manual review"
- "This is an on-demand architecture review for any codebase, anytime"
- "New developers can use this to understand an unfamiliar project in minutes"
