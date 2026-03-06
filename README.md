# AI-Assisted Coding Training: From Intern to Hive Mind

A hands-on training curriculum for demonstrating AI agentic coding capabilities.
From basic chat-based code generation to autonomous multi-agent teams.

## The Control Dial Metaphor

| Level | Name | AI Role | You Are... |
|-------|------|---------|------------|
| 1 | **The Smart Intern** | Answers questions, generates code | Typing every prompt, reviewing every line |
| 2 | **The Context Whisperer** | Follows your project's rules | Teaching the AI your team's standards |
| 3 | **The Operator** | Reads, writes, runs, searches | Watching the AI touch your codebase |
| 4 | **The Connector** | Talks to GitHub, databases, APIs | Plugging the AI into your ecosystem |
| 5 | **The Creature of Habit** | Executes repeatable workflows, basic to advanced | Building reusable AI-powered skills for your team |
| 6 | **The Autonomous Dev** | Plans, implements, tests + coordinates agent teams | Handing over a feature spec or project brief |
| 7 | **The Watchdog** | Hooks intercept, validate, and automate around every action | Setting automated guardrails |
| 8 | **The Elephant** | Remembers across sessions, projects, and time | Curating persistent AI knowledge |
| 9 | **The Architect** | Packages skills, agents, hooks into distributable plugins | Building an AI platform for your org |

## Choose Your Path

Different audiences need different levels. Presenters: pick the path for your audience and focus on those levels.

| Path | Audience | Levels to Cover | Skip |
|------|----------|-----------------|------|
| **Explorer** | Product managers, executives, non-technical stakeholders | 1 → 2 → 3 → 4 → 6 | 5, 7, 8, 9 |
| **Practitioner** | Developers, day-to-day Claude Code users | 3 → 4 → 5 → 6 → 7 | 1, 2, 8, 9 |
| **Platform Builder** | Tech leads, platform/infra teams | 5 → 6 → 7 → 8 → 9 | 1, 2, 3, 4 |

Within each level, demos tagged `[ALL]` apply to every path. `[DEV]` = Practitioner and Platform Builder. `[PLATFORM]` = Platform Builder only.

## Tools Covered

- **Claude Code** (CLI) - Primary tool for Levels 1-9
- **Cursor IDE** - Complementary tool for Levels 1-2, 5

## Prerequisites

See [SETUP.md](./SETUP.md) for installation and configuration.

## How to Use This Training

### For Live Demos
Each level has a `demos/` folder with numbered demo scripts. Each script contains:
- Exact prompts to copy-paste
- Expected output descriptions
- Presenter talking points
- The "wow moment" to emphasize

### For Self-Study
Each level has a `README.md` with concepts, then `demos/` for hands-on practice.

### For Skeptics
If time is limited, run these 5 demos in order:
1. **Demo 2.1** - Without vs. With context (kills "generic code" objection)
2. **Demo 3.2** - AI installs deps, writes tests, fixes failures autonomously
3. **Demo 5.2** - Say "review my code" and watch the skill auto-trigger
4. **Demo 6.2** - Custom sub-agents: specialized AI workers in 20 lines of markdown
5. **Demo 6.5** - Agent teams: shared task list, inter-agent messaging, team lead

### For Production Readiness
After the core demos, add these to address enterprise concerns:
6. **Demo 7.2** - Guardrail hooks: block dangerous commands automatically
7. **Demo 8.2** - Project memory: team-shared knowledge that checks into git
8. **Demo 9.1** - Plugins: one command installs your entire AI toolkit

## Recommended Session Structure

| Session | Levels | Duration | Theme |
|---------|--------|----------|-------|
| 1 | 1-2 | 15 min | "AI as a coding partner" |
| 2 | 3-4 | 18 min | "AI with hands and connections" |
| 3 | 5 | 20 min | "AI with your team's knowledge" |
| 4 | 6 | 30 min | "AI as an autonomous colleague" |
| 5 | 7-9 | 25 min | "AI in production: guardrails, memory & platform" |

## Answering Skeptic Objections

| Objection | Demo That Answers It |
|-----------|---------------------|
| "It just generates generic code" | Demo 2.1 (A/B context test) |
| "You still have to check everything" | Demo 6.1 (autonomous feature from spec) |
| "It can't understand our codebase" | Demo 3.1 (codebase exploration) |
| "It's just fancy autocomplete" | Demo 3.2 (autonomous test+fix loop) |
| "It doesn't follow our patterns" | Demo 5.2 (skills with auto-trigger) |
| "Works for toys, not real projects" | Demo 6.6 (capstone with agent team) |
| "I'm faster doing it myself" | Demo 6.4 (3 parallel agents) + 6.5 (agent teams) |
| "How do we prevent AI from breaking things?" | Demo 7.2 (guardrail hooks block dangerous actions) |
| "It forgets everything between sessions" | Demo 8.1 (persistent memory across sessions) |
| "We can't standardize AI across the team" | Demo 9.1 (plugins for org-wide AI platform) |

## Project Structure

```
training/
├── README.md                    # You are here
├── SETUP.md                     # Prerequisites and installation
├── PRESENTER_NOTES.md           # Tips for running live demos
├── level-01-assistant/          # Basic AI Assistant
├── level-02-context/            # Context Engineering
├── level-03-tools/              # Tool Calls
├── level-04-mcp/                # Model Context Protocol
├── level-05-skills/             # Skills: Basic to Advanced (.claude/skills/)
├── level-06-agentic/            # Agentic AI, Sub-agents & Multi-Agent Teams
├── level-07-hooks/              # Hooks & Guardrails
├── level-08-memory/             # Memory & Persistence (cross-session knowledge)
├── level-09-plugins/            # Plugins (distributable AI platform)
└── capstone/                    # Final capstone project brief
```
