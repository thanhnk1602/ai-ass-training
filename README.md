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
| 5 | **The Creature of Habit** | Executes repeatable workflows | Building reusable AI-powered skills |
| 6 | **The Toolsmith** | Uses your custom domain skills | Creating AI tools for your team |
| 7 | **The Autonomous Dev** | Plans, implements, tests + delegates to sub-agents | Handing over a feature spec |
| 8 | **The Hive Mind** | Agent teams coordinate via shared tasks & messaging | Managing an AI development team |
| 9 | **The Watchdog** | Hooks intercept, validate, and automate around every action | Setting automated guardrails |
| 10 | **The Elephant** | Remembers across sessions, projects, and time | Curating persistent AI knowledge |
| 11 | **The Architect** | Packages skills, agents, hooks into distributable plugins | Building an AI platform for your org |

## Tools Covered

- **Claude Code** (CLI) - Primary tool for Levels 1-11
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
4. **Demo 7.2** - Custom sub-agents: specialized AI workers in 20 lines of markdown
5. **Demo 8.2** - Agent teams: shared task list, inter-agent messaging, team lead

### For Production Readiness
After the core demos, add these to address enterprise concerns:
6. **Demo 9.2** - Guardrail hooks: block dangerous commands automatically
7. **Demo 10.2** - Project memory: team-shared knowledge that checks into git
8. **Demo 11.1** - Plugins: one command installs your entire AI toolkit

## Recommended Session Structure

| Session | Levels | Duration | Theme |
|---------|--------|----------|-------|
| 1 | 1-2 | 15 min | "AI as a coding partner" |
| 2 | 3-4 | 18 min | "AI with hands and connections" |
| 3 | 5-6 | 16 min | "AI with your team's knowledge" |
| 4 | 7-8 | 33 min | "AI as an autonomous colleague" |
| 5 | 9-11 | 25 min | "AI in production: guardrails, memory & platform" |

## Answering Skeptic Objections

| Objection | Demo That Answers It |
|-----------|---------------------|
| "It just generates generic code" | Demo 2.1 (A/B context test) |
| "You still have to check everything" | Demo 7.1 (autonomous feature from spec) |
| "It can't understand our codebase" | Demo 3.1 (codebase exploration) |
| "It's just fancy autocomplete" | Demo 3.2 (autonomous test+fix loop) |
| "It doesn't follow our patterns" | Demo 5.2, 6.1 (skills with auto-trigger) |
| "Works for toys, not real projects" | Demo 8.3 (capstone with agent team) |
| "I'm faster doing it myself" | Demo 8.1 (3 parallel agents) + 8.2 (agent teams) |
| "How do we prevent AI from breaking things?" | Demo 9.2 (guardrail hooks block dangerous actions) |
| "It forgets everything between sessions" | Demo 10.1 (persistent memory across sessions) |
| "We can't standardize AI across the team" | Demo 11.1 (plugins for org-wide AI platform) |

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
├── level-05-skills/             # Skills & Workflows (.claude/skills/)
├── level-06-custom-skills/      # Custom Skills, Plugins & Comparison
├── level-07-agentic/            # Agentic AI & Sub-agents (.claude/agents/)
├── level-08-agent-teams/        # Manual Parallel + Agent Teams
├── level-09-hooks/              # Hooks & Automation (guardrails, CI/CD)
├── level-10-memory/             # Memory & Persistence (cross-session knowledge)
├── level-11-plugins/            # Plugins & Extensions (distributable AI platform)
└── capstone/                    # Final capstone project brief
```
