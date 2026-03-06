# Curriculum Reorganization Design
Date: 2026-03-06

## Problem

The current 11-level structure has two issues:
1. **Too many levels** — overwhelming for a mixed audience
2. **Fuzzy boundaries** — content bleeds between adjacent levels (5 vs 6, 7 vs 8, 10 vs 11)

## Decision

**Consolidate to 8 levels** with **audience learning paths** surfaced in the README.

No branching or separate track folders — the audience differentiation is a presentation concern, not a content concern. One repo, one source of truth.

---

## New Level Structure

| New Level | Old Levels | Theme | Metaphor |
|-----------|-----------|-------|----------|
| 1 | 1 | Basic AI Assistant | The Smart Intern |
| 2 | 2 | Context Engineering | The Context Whisperer |
| 3 | 3 | Tool Use | The Operator |
| 4 | 4 | MCP & Connections | The Connector |
| 5 | 5 + 6 | Skills: Basic to Advanced | The Creature of Habit |
| 6 | 7 + 8 | Agentic & Multi-Agent | The Autonomous Dev |
| 7 | 9 | Hooks & Guardrails | The Watchdog |
| 8 | 10 + 11 | Memory & Platform | The Architect |

### Consolidation Details

**Level 5 (Skills)** — merge old 5 + 6:
- Part A: Basic skills (SKILL.md, auto-trigger, bundled skills)
- Part B: Advanced skills (supporting files, subagent execution, dynamic context, visual output)
- Remove Demo 6.3's plugin preview — plugins live in Level 8 only

**Level 6 (Agentic)** — merge old 7 + 8:
- Part A: Single autonomous agent (feature from spec, TDD)
- Part B: Sub-agents (custom .claude/agents/)
- Part C: Multi-agent (manual parallel sessions + agent teams)

**Level 8 (Memory & Platform)** — merge old 10 + 11:
- Part A: Memory scopes and cross-session persistence
- Part B: Plugins — packaging skills/agents/hooks for org distribution

---

## Audience Learning Paths

Added to README as a "Choose your path" table. Presenters select the path for their audience; all content stays in the same level folders.

| Path | Audience | Levels | Skip |
|------|----------|--------|------|
| **Explorer** | Product managers, executives, non-technical stakeholders | 1 → 2 → 3 → 4 → 6 | Levels 5, 7, 8 |
| **Practitioner** | Developers, day-to-day Claude Code users | 3 → 4 → 5 → 6 → 7 | Levels 1, 2, 8 |
| **Platform Builder** | Tech leads, platform/infra teams | 5 → 6 → 7 → 8 | Levels 1, 2, 3, 4 |

Individual demos within a level can also be tagged `[ALL]`, `[DEV]`, or `[PLATFORM]` to allow finer-grained skipping within a level.

---

## What Changes

### Folder renames
- `level-05-skills/` + `level-06-custom-skills/` → `level-05-skills/` (expanded)
- `level-07-agentic/` + `level-08-agent-teams/` → `level-06-agentic/`
- `level-09-hooks/` → `level-07-hooks/`
- `level-10-memory/` + `level-11-plugins/` → `level-08-memory-platform/`

### Content moves
- Old level-06 demos 01, 02 → level-05/demos/ (Part B)
- Old level-06 demo 03 (visual+plugin preview) → level-05/demos/ minus plugin section; plugin content moves to level-08
- Old level-08 demos → level-06/demos/ (Part C)
- Old level-07 demos → level-06/demos/ (Parts A + B)

### README updates
- Main README: update level table, add "Choose your path" section, update session timing
- Each level README: update level number, add part structure where merged

### No content deleted
All existing demos, samples, and READMEs are preserved — just reorganized.

---

## What Does NOT Change

- The "control dial" metaphor
- Individual demo content (prompts, expected output, talking points)
- Sample code and files
- Capstone folder (standalone, referenced from Level 6)
- PRESENTER_NOTES.md and SETUP.md

---

## Success Criteria

- [ ] 8 level folders, numbered sequentially
- [ ] Each level README has a clear single theme (or explicit Part A/B)
- [ ] Main README has audience path table
- [ ] No broken internal links
- [ ] Session timing table updated to reflect 8 levels
