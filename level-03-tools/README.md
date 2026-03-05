# Level 3: The Operator

> "Watch the AI read, write, run, and fix -- all by itself."

## Concept

Claude Code is not just a chatbot. It has **tool access**: it reads your files, writes to them, runs bash commands, searches your codebase, and iterates on errors. This is the paradigm shift that separates AI chat from AI-assisted development.

**This is the level where skeptics start paying attention.**

## The Paradigm Shift

| Chat-based AI (Level 1-2) | Tool-using AI (Level 3+) |
|---------------------------|-------------------------|
| You paste code into chat | AI reads your files |
| AI suggests changes in text | AI edits files directly |
| You run commands manually | AI runs commands itself |
| You report errors back | AI sees errors and self-corrects |
| You are the executor | AI is the executor |

## What You'll See

| Demo | Tool | Time | What Happens |
|------|------|------|-------------|
| 3.1 Codebase Exploration | Claude Code | 2 min | AI explores a project and produces architecture analysis |
| 3.2 Task Execution | Claude Code | 3 min | AI installs deps, writes tests, runs them, fixes failures |
| 3.3 Cross-Codebase Refactor | Claude Code | 3 min | AI finds and refactors patterns across multiple files |

## Key Takeaway

The AI is no longer suggesting -- it is **doing**. The self-correction loop (run → fail → fix → rerun) is the single most important capability to demonstrate.

## Demos

- [Demo 3.1: Codebase Exploration](demos/01-file-operations.md)
- [Demo 3.2: AI-Driven Task Execution](demos/02-bash-execution.md)
- [Demo 3.3: Cross-Codebase Refactoring](demos/03-search-and-refactor.md)
