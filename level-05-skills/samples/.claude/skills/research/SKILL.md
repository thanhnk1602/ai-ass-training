---
name: research
description: >
  Deep research into how a feature or system works in this codebase. Use when
  someone asks "how does X work?", "explain the auth flow", "what happens when
  a user does Y?", wants to understand a system, or needs to investigate
  before making changes.
argument-hint: [topic]
context: fork
agent: Explore
allowed-tools: Read, Grep, Glob
---

Research "$ARGUMENTS" thoroughly in this codebase:

1. **Find relevant files** using Glob and Grep
2. **Read and analyze** the implementation end-to-end
3. **Trace data flow**: from user action → frontend → API → database → response
4. **Map dependencies**: what does this feature depend on? what depends on it?
5. **Check edge cases**: how are errors handled? what about empty/null states?
6. **Review tests**: what's tested? what's missing?

## Output

Provide a structured research report:

### Overview
One paragraph explaining what this feature/system does.

### Architecture
ASCII diagram showing the components and data flow.

### Key Files
List all relevant files with `file:line` references and what each does.

### How It Works
Step-by-step flow from trigger to completion.

### Risks & Concerns
- Edge cases not handled
- Missing error handling
- Test coverage gaps
- Potential performance issues

### Recommendations
What should change? What's working well?
