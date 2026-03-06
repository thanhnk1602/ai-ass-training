# Demo 8.3: Knowledge Accumulation

> **Tool:** Claude Code (CLI)
> **Time:** 5 minutes
> **Audience:** [PLATFORM]
> **Setup:** A project with several sessions worth of accumulated memories

## The Demo

Show how memory transforms AI over time. Use a memory curator sub-agent to organize, deduplicate, and enrich project knowledge. Demonstrate the compound effect of accumulated memory.

## Setup

Ensure the project has the memory curator sub-agent:

```bash
cp samples/.claude/agents/memory-curator.md .claude/agents/
```

## Step 1: Show Accumulated Memories

```
/memory
```

If the project has been used across multiple sessions, there should be several memories. If not, rapidly add context:

```
Remember these architectural decisions:
- Frontend: React 18 with TypeScript strict mode
- State management: Zustand (not Redux)
- API layer: tRPC for type-safe API calls
- Testing: Vitest + React Testing Library
- CSS: Tailwind CSS with custom design tokens in tailwind.config.ts
- Deployment: Vercel with preview deployments per PR
- Database: Supabase (PostgreSQL) with Row Level Security
- Auth: Supabase Auth with social providers (Google, GitHub)
```

## Step 2: Use the Memory Curator

```
@memory-curator Review and organize our project memories. 
Identify any gaps, contradictions, or stale information. 
Suggest new memories we should add based on our codebase.
```

## What to Watch For

1. The curator sub-agent reads all existing memories
2. It analyzes the codebase to find undocumented conventions
3. It identifies:
   - **Gaps:** Important patterns used in code but not in memory
   - **Contradictions:** Memories that conflict with actual code
   - **Stale entries:** Memories about deprecated patterns
4. It suggests new memories with reasoning
5. It may reorganize or merge duplicate memories

## Step 3: Test Deep Knowledge

```
I need to add real-time collaboration features to our app. 
Multiple users should be able to edit the same document simultaneously.
Give me a complete technical design.
```

## What to Watch For

The AI's design should reflect ALL accumulated knowledge:
- Uses Supabase Realtime (knows our database)
- TypeScript strict mode throughout (knows our frontend)
- Zustand for local state (not Redux)
- tRPC for API layer (not REST)
- Vitest tests included (knows our testing framework)
- Tailwind styling (knows our CSS approach)
- Vercel deployment considerations (knows our infra)
- Row Level Security for access control (knows our auth)

## Wow Moment

The AI produced a technical design that is perfectly aligned with your ENTIRE tech stack. Not because you listed requirements -- because it REMEMBERED. The accumulated memory made this design contextually perfect. A generic AI would have suggested Redux, REST APIs, and CSS modules.

## Talking Points

- "Memory accumulates naturally over time -- each session adds knowledge"
- "The memory curator sub-agent keeps memories organized and fresh"
- "After a few weeks, the AI knows your project as well as a team member"
- "This is the compound interest of AI-assisted development"
- "Generic AI suggests generic patterns. Memory-rich AI suggests YOUR patterns."
- "Consider adding memory curation to your weekly workflow"
