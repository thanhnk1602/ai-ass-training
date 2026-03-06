# Curriculum Reorganization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reorganize the 11-level AI training curriculum into 8 levels with audience learning paths, eliminating fuzzy level boundaries and reducing overwhelm for mixed audiences.

**Architecture:** Consolidate overlapping level pairs (5+6, 7+8, 10+11) by merging content into expanded single levels. Add audience paths (Explorer, Practitioner, Platform Builder) to the main README as a presentation guide. All content preserved — only reorganized.

**Tech Stack:** Markdown files, shell commands (mv, cp), git

---

## Folder Mapping Reference

| Old Folder | New Folder | Action |
|-----------|-----------|--------|
| level-01-assistant | level-01-assistant | No change |
| level-02-context | level-02-context | No change |
| level-03-tools | level-03-tools | No change |
| level-04-mcp | level-04-mcp | No change |
| level-05-skills | level-05-skills | Expand (absorb level-06) |
| level-06-custom-skills | (deleted after merge) | Merge into level-05 |
| level-07-agentic | level-06-agentic | Rename + expand (absorb level-08) |
| level-08-agent-teams | (deleted after merge) | Merge into level-06 |
| level-09-hooks | level-07-hooks | Rename |
| level-10-memory | level-08-memory-platform | Rename + expand (absorb level-11) |
| level-11-plugins | (deleted after merge) | Merge into level-08 |

---

## Task 1: Merge level-06-custom-skills into level-05-skills

**Files:**
- Modify: `level-05-skills/` (add demos and samples from level-06)
- Delete: `level-06-custom-skills/` (after merge)

**Step 1: Copy level-06 demos into level-05 as Part B**

Run:
```bash
cp level-06-custom-skills/demos/01-supporting-files.md level-05-skills/demos/04-supporting-files.md
cp level-06-custom-skills/demos/02-subagent-skills.md level-05-skills/demos/05-subagent-skills.md
cp level-06-custom-skills/demos/03-visual-and-plugins.md level-05-skills/demos/06-visual-output.md
```

Note: demo 06 is renamed to `06-visual-output.md` — the plugin content inside it will be edited in Task 6.

**Step 2: Copy level-06 samples into level-05**

Run:
```bash
cp -r level-06-custom-skills/samples/.claude/skills/deploy level-05-skills/samples/.claude/skills/
cp -r level-06-custom-skills/samples/.claude/skills/pr-review level-05-skills/samples/.claude/skills/
cp -r level-06-custom-skills/samples/.claude/skills/research level-05-skills/samples/.claude/skills/
cp -r level-06-custom-skills/samples/.claude/skills/security-audit level-05-skills/samples/.claude/skills/
cp -r level-06-custom-skills/samples/.claude/skills/visualize level-05-skills/samples/.claude/skills/
```

**Step 3: Verify all files copied**

Run:
```bash
ls level-05-skills/demos/
ls level-05-skills/samples/.claude/skills/
```
Expected: 6 demo files, 8 skill folders

**Step 4: Remove old level-06 folder**

Run:
```bash
rm -rf level-06-custom-skills/
```

**Step 5: Commit**

```bash
git add -A
git commit -m "refactor: merge level-06-custom-skills into level-05-skills"
```

---

## Task 2: Create level-06-agentic from level-07 + level-08

**Files:**
- Create: `level-06-agentic/` (new folder)
- Source: `level-07-agentic/` and `level-08-agent-teams/`

**Step 1: Create new level-06-agentic folder structure**

Run:
```bash
mkdir -p level-06-agentic/demos
mkdir -p level-06-agentic/samples
```

**Step 2: Copy level-07 demos as Part A + B (demos 01-03)**

Run:
```bash
cp level-07-agentic/demos/01-feature-implementation.md level-06-agentic/demos/01-feature-implementation.md
cp level-07-agentic/demos/02-sub-agents.md level-06-agentic/demos/02-sub-agents.md
cp level-07-agentic/demos/03-test-driven.md level-06-agentic/demos/03-test-driven.md
```

**Step 3: Copy level-08 demos as Part C (demos 04-06)**

Run:
```bash
cp level-08-agent-teams/demos/01-parallel-agents.md level-06-agentic/demos/04-parallel-agents.md
cp level-08-agent-teams/demos/02-agent-teams.md level-06-agentic/demos/05-agent-teams.md
cp level-08-agent-teams/demos/03-capstone.md level-06-agentic/demos/06-capstone.md
```

**Step 4: Copy all samples**

Run:
```bash
cp -r level-07-agentic/samples/. level-06-agentic/samples/
cp -r level-08-agent-teams/samples/. level-06-agentic/samples/
```

**Step 5: Remove old folders**

Run:
```bash
rm -rf level-07-agentic/
rm -rf level-08-agent-teams/
```

**Step 6: Commit**

```bash
git add -A
git commit -m "refactor: merge level-07-agentic and level-08-agent-teams into level-06-agentic"
```

---

## Task 3: Rename level-09-hooks → level-07-hooks

**Step 1: Rename the folder**

Run:
```bash
mv level-09-hooks level-07-hooks
```

**Step 2: Verify**

Run:
```bash
ls level-07-hooks/
```
Expected: demos/ samples/ README.md

**Step 3: Commit**

```bash
git add -A
git commit -m "refactor: rename level-09-hooks to level-07-hooks"
```

---

## Task 4: Create level-08-memory-platform from level-10 + level-11

**Step 1: Rename level-10-memory to level-08-memory-platform**

Run:
```bash
mv level-10-memory level-08-memory-platform
```

**Step 2: Copy level-11 demos as Part B (demos 04-06)**

Run:
```bash
cp level-11-plugins/demos/01-using-plugins.md level-08-memory-platform/demos/04-using-plugins.md
cp level-11-plugins/demos/02-building-plugins.md level-08-memory-platform/demos/05-building-plugins.md
cp level-11-plugins/demos/03-plugin-ecosystem.md level-08-memory-platform/demos/06-plugin-ecosystem.md
```

**Step 3: Copy level-11 samples**

Run:
```bash
cp -r level-11-plugins/samples/. level-08-memory-platform/samples/
```

**Step 4: Remove old level-11 folder**

Run:
```bash
rm -rf level-11-plugins/
```

**Step 5: Commit**

```bash
git add -A
git commit -m "refactor: merge level-10-memory and level-11-plugins into level-08-memory-platform"
```

---

## Task 5: Update level-05-skills README

**Files:**
- Modify: `level-05-skills/README.md`

**Step 1: Read the current README**

Read `level-05-skills/README.md` to get current content.

**Step 2: Update the README**

Replace the "What You'll See" demos table and Demos section. The updated README should:
- Keep the concept, key insight, and all reference tables unchanged
- Update "What You'll See" to show 6 demos across two parts
- Update "Demos" links section

New "What You'll See" table:
```markdown
## What You'll See

### Part A: Basic Skills
| Demo | Tool | Time | What Happens |
|------|------|------|-------------|
| 5.1 Bundled Skills [ALL] | Claude Code | 2 min | `/simplify` spawns 3 agents to review your code |
| 5.2 Create Your First Skill [ALL] | Claude Code | 3 min | Build a `/review` skill with frontmatter |
| 5.3 Skills with Arguments [DEV] | Claude Code | 2 min | `/component InvestmentCard` generates 4 files |

### Part B: Advanced Skills
| Demo | Tool | Time | What Happens |
|------|------|------|-------------|
| 5.4 Skill with Supporting Files [DEV] | Claude Code | 3 min | /deploy with pre-flight scripts + template |
| 5.5 Subagent Skills [DEV] | Claude Code | 3 min | /research runs in isolated Explore agent |
| 5.6 Visual Output Skill [PLATFORM] | Claude Code | 4 min | /visualize generates interactive HTML |
```

New Demos section:
```markdown
## Demos

### Part A: Basic Skills
- [Demo 5.1: Bundled Skills](demos/01-builtin-skills.md)
- [Demo 5.2: Create Your First Skill](demos/02-create-skill.md)
- [Demo 5.3: Skills with Arguments & Patterns](demos/03-repeatable-patterns.md)

### Part B: Advanced Skills
- [Demo 5.4: Skill with Supporting Files](demos/04-supporting-files.md)
- [Demo 5.5: Subagent & Dynamic Context Skills](demos/05-subagent-skills.md)
- [Demo 5.6: Visual Output Skill](demos/06-visual-output.md)
```

**Step 3: Commit**

```bash
git add level-05-skills/README.md
git commit -m "docs: update level-05-skills README for merged content"
```

---

## Task 6: Strip plugin preview from level-05 demo 06-visual-output.md

**Files:**
- Modify: `level-05-skills/demos/06-visual-output.md`

**Step 1: Read the file**

Read `level-05-skills/demos/06-visual-output.md` (originally level-06 demo 03).

**Step 2: Edit to remove plugin content**

Remove any section that introduces or previews plugins (that content now lives in Level 8). Keep only the visual output / HTML generation demo content. If the file title mentions plugins, rename the heading to focus on visual output.

**Step 3: Commit**

```bash
git add level-05-skills/demos/06-visual-output.md
git commit -m "docs: remove plugin preview from level-05 visual output demo"
```

---

## Task 7: Write level-06-agentic README

**Files:**
- Create: `level-06-agentic/README.md`

**Step 1: Read old level-07 and level-08 READMEs for content**

Read `level-06-agentic/samples/` to confirm what's there (the old level-07 README no longer exists).

Actually, note: the old READMEs were NOT copied in Task 2 — we only copied demos and samples. Write a new merged README using the content we already know.

**Step 2: Write the README**

The new README should:
- Title: `# Level 6: The Autonomous Dev`
- Quote: "Give it a task. Walk away. Come back to a pull request."
- Concept covering both single-agent autonomy AND multi-agent teams
- The autonomy scale table from old level-07
- Sub-agents section from old level-07
- Part A: Single Agent section
- Part B: Sub-agents section
- Part C: Multi-Agent (manual parallel + agent teams) section from old level-08
- Combined "What You'll See" table with 6 demos tagged [ALL]/[DEV]/[PLATFORM]
- Demos links section pointing to all 6 demos

**Step 3: Commit**

```bash
git add level-06-agentic/README.md
git commit -m "docs: write level-06-agentic README merging levels 7 and 8"
```

---

## Task 8: Write level-07-hooks README

**Files:**
- Modify: `level-07-hooks/README.md`

**Step 1: Read the current README**

Read `level-07-hooks/README.md`.

**Step 2: Update level number references**

Change any reference to "Level 9" → "Level 7". The content is otherwise unchanged.

**Step 3: Commit**

```bash
git add level-07-hooks/README.md
git commit -m "docs: update level-07-hooks README level number references"
```

---

## Task 9: Write level-08-memory-platform README

**Files:**
- Modify: `level-08-memory-platform/README.md`

**Step 1: Read the current README**

Read `level-08-memory-platform/README.md` (originally level-10-memory README).

**Step 2: Update the README**

- Change title to `# Level 8: The Architect`
- Change quote to something that covers both memory and platform: `"It remembers everything. And you can ship it to the whole team."`
- Update concept paragraph to cover memory AND plugins
- Add a Part A: Memory section (existing content)
- Add a Part B: Platform (Plugins) section — pull key content from old level-11 README: plugin anatomy, plugin management commands, plugin scopes table
- Update "What You'll See" to show 6 demos:
  - 8.1 Memory Basics [ALL]
  - 8.2 Project Memory [ALL]
  - 8.3 Knowledge Accumulation [PLATFORM]
  - 8.4 Using Plugins [PLATFORM]
  - 8.5 Building a Plugin [PLATFORM]
  - 8.6 Plugin Ecosystem [PLATFORM]
- Update Demos links section

**Step 3: Commit**

```bash
git add level-08-memory-platform/README.md
git commit -m "docs: write level-08-memory-platform README merging levels 10 and 11"
```

---

## Task 10: Update main README.md

**Files:**
- Modify: `README.md`

**Step 1: Read the current README**

Read `README.md`.

**Step 2: Update the "Control Dial" table**

Replace the 11-row table with the 8-level version:

```markdown
| Level | Name | AI Role | You Are... |
|-------|------|---------|------------|
| 1 | **The Smart Intern** | Answers questions, generates code | Typing every prompt, reviewing every line |
| 2 | **The Context Whisperer** | Follows your project's rules | Teaching the AI your team's standards |
| 3 | **The Operator** | Reads, writes, runs, searches | Watching the AI touch your codebase |
| 4 | **The Connector** | Talks to GitHub, databases, APIs | Plugging the AI into your ecosystem |
| 5 | **The Creature of Habit** | Executes repeatable workflows, basic to advanced | Building and distributing reusable AI-powered skills |
| 6 | **The Autonomous Dev** | Plans, implements, tests + coordinates agent teams | Handing over a feature spec or a project brief |
| 7 | **The Watchdog** | Hooks intercept, validate, and automate around every action | Setting automated guardrails |
| 8 | **The Architect** | Remembers across sessions; packages skills into distributable plugins | Curating persistent AI knowledge and building an org platform |
```

**Step 3: Add "Choose Your Path" section**

Add after the Control Dial table:

```markdown
## Choose Your Path

Different audiences need different levels. Presenters: pick the path for your audience and focus on those levels.

| Path | Audience | Levels to Cover | Skip |
|------|----------|-----------------|------|
| **Explorer** | Product managers, executives, non-technical stakeholders | 1 → 2 → 3 → 4 → 6 | 5, 7, 8 |
| **Practitioner** | Developers, day-to-day Claude Code users | 3 → 4 → 5 → 6 → 7 | 1, 2, 8 |
| **Platform Builder** | Tech leads, platform/infra teams | 5 → 6 → 7 → 8 | 1, 2, 3, 4 |

Within each level, demos tagged `[ALL]` apply to every path. `[DEV]` = Practitioner and Platform Builder. `[PLATFORM]` = Platform Builder only.
```

**Step 4: Update "For Skeptics" and "For Production Readiness" sections**

Update demo references from old numbering to new:
- Demo 2.1 → stays 2.1
- Demo 3.2 → stays 3.2
- Demo 5.2 → stays 5.2 (was 5.2 in old, still 5.2 in new)
- Demo 7.2 (old) → Demo 6.2
- Demo 8.2 (old) → Demo 6.5
- Demo 9.2 (old) → Demo 7.2
- Demo 10.2 (old) → Demo 8.2
- Demo 11.1 (old) → Demo 8.4

**Step 5: Update "Answering Skeptic Objections" table**

Update demo references to new numbering per Step 4 mapping.

**Step 6: Update "Project Structure" tree**

Replace the 11-level tree:
```
training/
├── README.md
├── SETUP.md
├── PRESENTER_NOTES.md
├── level-01-assistant/
├── level-02-context/
├── level-03-tools/
├── level-04-mcp/
├── level-05-skills/           # Basic + Advanced Skills
├── level-06-agentic/          # Agentic AI + Multi-Agent Teams
├── level-07-hooks/            # Hooks & Guardrails
├── level-08-memory-platform/  # Memory & Plugins Platform
└── capstone/
```

**Step 7: Update "Recommended Session Structure" table**

```markdown
| Session | Levels | Duration | Theme |
|---------|--------|----------|-------|
| 1 | 1-2 | 15 min | "AI as a coding partner" |
| 2 | 3-4 | 18 min | "AI with hands and connections" |
| 3 | 5 | 20 min | "AI with your team's knowledge" |
| 4 | 6 | 30 min | "AI as an autonomous colleague" |
| 5 | 7-8 | 25 min | "AI in production: guardrails, memory & platform" |
```

**Step 8: Commit**

```bash
git add README.md
git commit -m "docs: update main README for 8-level structure with audience paths"
```

---

## Task 11: Fix internal links in all demo files

**Files:**
- Scan: all `*.md` files in level-05 through level-08 demos

**Step 1: Search for broken references to old level numbers**

Run:
```bash
grep -r "level-06-custom-skills\|level-07-agentic\|level-08-agent-teams\|level-09-hooks\|level-10-memory\|level-11-plugins" --include="*.md" .
```

**Step 2: Fix any broken links found**

For each file with broken references, edit to use the new paths:
- `level-06-custom-skills/` → `level-05-skills/`
- `level-07-agentic/` → `level-06-agentic/`
- `level-08-agent-teams/` → `level-06-agentic/`
- `level-09-hooks/` → `level-07-hooks/`
- `level-10-memory/` → `level-08-memory-platform/`
- `level-11-plugins/` → `level-08-memory-platform/`

**Step 3: Search for old "Level N" text references**

Run:
```bash
grep -r "Level 6\|Level 7\|Level 8\|Level 9\|Level 10\|Level 11" --include="*.md" level-05-skills/ level-06-agentic/ level-07-hooks/ level-08-memory-platform/
```

Fix any references that used old level numbers to point to new ones.

**Step 4: Commit**

```bash
git add -A
git commit -m "docs: fix internal links for new level numbering"
```

---

## Task 12: Update PRESENTER_NOTES.md

**Files:**
- Modify: `PRESENTER_NOTES.md`

**Step 1: Read the file**

Read `PRESENTER_NOTES.md`.

**Step 2: Update any level number references**

Scan for references to levels 6-11 and update to new numbering. Add a note about the audience path system near the top.

**Step 3: Commit**

```bash
git add PRESENTER_NOTES.md
git commit -m "docs: update PRESENTER_NOTES for 8-level structure"
```

---

## Task 13: Final verification

**Step 1: Verify folder structure**

Run:
```bash
ls -d level-*/
```
Expected: exactly 8 level folders (01 through 08).

**Step 2: Verify no old folder names remain**

Run:
```bash
ls -d level-06-custom-skills level-07-agentic level-08-agent-teams level-09-hooks level-10-memory level-11-plugins 2>&1
```
Expected: all "No such file or directory"

**Step 3: Verify no broken internal links to old paths**

Run:
```bash
grep -r "level-06-custom-skills\|level-07-agentic\|level-08-agent-teams\|level-09-hooks\|level-10-memory\|level-11-plugins" --include="*.md" .
```
Expected: no results

**Step 4: Verify each new level has a README**

Run:
```bash
for d in level-0{1..8}-*/ level-08-memory-platform/; do echo "$d: $(ls $d/README.md 2>/dev/null || echo MISSING)"; done
```
Expected: README.md present in all 8 levels

**Step 5: Final commit if any cleanup needed, then done**
