# Presenter Notes

A guide for the person running the live training demos.

## Before You Start

### Mindset
Your audience has a mix of skeptics and curious developers. The goal is not to "sell" AI coding. The goal is to **show** it and let the audience form their own conclusions. The demos speak for themselves.

### Key Principles
1. **Let the AI work.** Don't talk over the terminal output. Silence while the AI autonomously debugs is powerful.
2. **Show the failures.** When the AI makes a mistake
 and self-corrects, that's MORE impressive, not less. Don't hide it.
3. **Use real code.** The demos use real projects from this repo. Skeptics dismiss toy examples.
4. **Address objections directly.** Don't wait for Q&A. When a demo addresses a known objection, call it out.

### What NOT to Do
- Don't over-promise ("AI will replace developers")
- Don't hide when the AI gets something wrong
- Don't rush through demos -- the process IS the demo
- Don't use pre-recorded output as primary demo (live is critical for credibility)

---

## Session Guides

### Session 1: "AI as a Coding Partner" (Levels 1-2, ~15 min)

**Opening (1 min):**
"Most of you have tried ChatGPT for coding. You paste code in, get suggestions back. That's Level 1. Today I'm going to show you Levels 1 through 8. By Level 8, you'll see something that fundamentally changes how you think about software development."

**Demo 1.1 - Code Generation (2 min):**
Run the log analyzer prompt. While it generates, point out:
- "No copy-paste, no browser, it's writing directly to disk"
- "Watch the quality -- argparse, type hints, docstrings"
Run the generated script. "Works first try."

**Demo 1.2 - Debug (3 min):**
Open buggy_server.py in Cursor. Run the review prompt.
Key moment: "It found the string-vs-int bug on line 17. That bug passes pylint, passes mypy, and only shows up in production when cache hits return the wrong type."

**SKIP Demo 1.3 if short on time.**

**Demo 2.1 - The A/B Test (3 min) -- THIS IS ESSENTIAL:**
This is the most important demo in Session 1. Run Part A (no context), then Part B (with CLAUDE.md). Show both outputs side by side.
"Same prompt. Radically different output. This 30-line CLAUDE.md file is the difference between generic AI and YOUR team's AI."

**Demo 2.2 or 2.3 (3 min):**
Pick one based on audience tool preference.

**Transition:**
"So far, the AI has been a smart text generator. It suggests code, you copy it. In Session 2, the AI gets hands."

---

### Session 2: "AI with Hands and Connections" (Levels 3-4, ~18 min)

**Demo 3.1 - Codebase Exploration (2 min):**
Run from account-system/. While it explores, narrate:
"It's reading package.json... now the Prisma schema... now the route files... I didn't paste anything."

**Demo 3.2 - The Self-Correction Loop (3 min) -- CRITICAL DEMO:**
This is the single most important demo in the entire training.
Run the test generation prompt on the mini-project. LET IT RUN.
When tests fail: "Watch this. It reads the error... fixes the test... reruns."
DO NOT interrupt. The autonomous debugging loop is what converts skeptics.

**Demo 3.3 - Cross-Codebase Refactoring (3 min):**
"It searched, analyzed, created a utility, and applied it to 6 files. That's 20 minutes of careful human work in 30 seconds."

**Transition to MCP (1 min):**
"Until now, the AI could only touch files and run commands. What if it could talk to GitHub? Or your database? That's MCP."

**Demo 4.1 or 4.2 - MCP (3 min):**
Choose based on what's set up. GitHub MCP is more visual; database MCP is more technical.

**Demo 4.3 - Build Custom MCP (5 min):**
"We're going to build a custom integration, live, in 5 minutes."
This demo lands best when you say: "Replace the mock data with your Jira API, your Slack API, your internal tools. The pattern is the same."

---

### Session 3: "AI with Your Team's Knowledge" (Levels 5-6, ~16 min)

**Demo 5.1 - Bundled Skills (2 min):**
Show `/simplify` (spawns 3 parallel agents) or `/batch` (parallel worktrees). "These are built-in skills that ship with Claude Code."

**Demo 5.2 - Auto-Trigger + Create Skill (4 min) -- KEY CONCEPT:**
Create a review skill with a rich `description` field. Then just say "can you review my staged changes?" -- DON'T use the slash command.
"I didn't type /review. I spoke naturally. Claude read all skill descriptions and matched my intent to the right skill. This is auto-trigger."
Then show the explicit `/review` invocation for comparison. "Same skill, two ways to invoke it."

**Demo 5.3 - Skills with Arguments (2 min):**
Type `/component InvestmentCard`. "4 files. Component, tests, stories, barrel export. Every developer on the team produces this same structure."

**Demo 6.1 - Supporting Files (3 min):**
"This /deploy skill has a whole directory: SKILL.md, templates, scripts. Not just instructions -- an entire toolkit."

**Demo 6.2 - Subagent Skills (3 min):**
Show `context: fork` and `agent: Explore`. "This skill runs in an isolated context window. It can't pollute your main conversation."

**Skills vs Commands vs Sub-agents comparison (2 min):**
Open the Level 6 README and walk through the comparison table. "Commands are legacy. Skills are the default. Sub-agents are for isolation and different models. They compose together."

**Key insight to share:**
"These skill files live in `.claude/skills/`. They check into git. When a new developer clones the repo, they get the entire AI toolkit. The team's knowledge is codified and shared."

---

### Session 4: "AI as an Autonomous Colleague" (Levels 7-8, ~33 min)

**Demo 7.1 - Feature from Spec (5 min):**
"I'm going to give it a feature spec and walk away."
Let it run. Narrate lightly. "It's reading the existing code... now planning... now creating the database model... API route... frontend component..."

**Demo 7.2 - Custom Sub-agents (4 min) -- NEW CONCEPT:**
"Sub-agents are specialized AI workers defined in `.claude/agents/`. Each has its own model, tools, and context window."
Show the `/agents` command to list built-in agents (Explore, Plan, general-purpose).
Create a reviewer sub-agent live -- show it's just 20 lines of markdown.
Then say "review my changes" and watch Claude auto-delegate to the new sub-agent.
"I used haiku for the search agent -- pennies per query. Sonnet for the reviewer. Opus for the main conversation. You control the cost."

**Demo 7.3 - TDD (4 min):**
The red-green cycle. "8 tests, all failing. Now watch... 8 tests, all passing."

**Transition to Level 8 (1 min):**
"Sub-agents report back to the main conversation. They can't talk to each other. What if they could? That's agent teams."

**Demo 8.1 - Manual Parallel (5 min):**
Open 3 terminals. "Three AI developers, working simultaneously. One backend, one frontend, one DevOps."
Also briefly show the Architect + Builder pattern: "Phase 1 designs, Phase 2 implements from the design."
"This works today. No experimental features. Just multiple terminals."

**Demo 8.2 - Agent Teams (5 min) -- THE UPGRADE:**
Enable the experimental feature. One prompt creates a coordinated review team.
Show `Shift+Down` to cycle through teammates. Show `Ctrl+T` for the shared task list.
"Unlike Demo 8.1, these teammates communicate directly. The security reviewer can ask the test reviewer about coverage gaps."
Show the competing hypotheses pattern if time allows.

**Demo 8.3 - Capstone (10-15 min):**
"The grand finale. One client brief. One agent team. One complete application."
The lead creates ARCHITECTURE.md and pauses for your approval (plan approval feature).
Then 3 teammates build in parallel -- backend, frontend, DevOps.
Watch the shared task list update in real time.
When it's done, `npm run dev` and open the browser.
"A working application. Planned by a lead, built by a team, coordinated through shared tasks."

**Backup:** If agent teams is unstable, fall back to the manual 3-terminal approach from Demo 8.1 for the capstone.

---

## Handling Q&A

### "Doesn't this make developers obsolete?"
"No. It makes developers more productive. You still need to write specs, review code, make architectural decisions, and handle the parts AI gets wrong. The AI handles the implementation grind."

### "What about code quality?"
"Show them the CLAUDE.md and skills demos again. The AI follows whatever standards you define. The quality ceiling is determined by your context engineering."

### "What about hallucinations / wrong code?"
"The AI makes mistakes. So do developers. The difference is: AI mistakes are caught by the same review process you already have. And the AI can write tests for its own code, which many developers skip."

### "How much does this cost?"
"Claude Code uses API tokens. A typical development session costs $1-5. Compare that to developer hourly rates."

### "Can it handle our legacy codebase?"
"Demo 3.1 showed it exploring a real codebase. It doesn't need a clean, modern project. It reads whatever you have."

---

## Emergency Fallbacks

| Problem | Solution |
|---------|----------|
| Claude Code rate limited | Switch to Cursor for remaining demos |
| Network down | Use pre-built capstone backup, focus on file-based demos |
| MCP server fails | Skip Level 4, mention the concept, move to Level 5 |
| Agent teams unstable | Fall back to manual parallel (Demo 8.1) for remaining Level 8 |
| Demo produces bad output | "This is real. Sometimes the AI gets it wrong. Watch what happens when I tell it to fix it..." (this is actually a GREAT demo moment) |
