# Level 8: The Elephant

> "It remembers everything. Across sessions, across projects, across time."

## Concept

Memory transforms AI from a stateless tool into a persistent collaborator. Instead of re-explaining your codebase every session, the AI remembers architectural decisions, debugging history, team preferences, and project context. Memory is the bridge between "useful in a single session" and "useful over time."

This level covers Claude Code's memory system: memory scopes, cross-session persistence, memory management, and building knowledge that accumulates over time.

## The Memory Problem

| Without Memory | With Memory |
|----------------|-------------|
| Re-explain the architecture every session | AI recalls the architecture from previous sessions |
| Re-describe coding preferences each time | AI follows your preferences automatically |
| Forget debugging context between sessions | AI remembers what was tried and what worked |
| No learning from past mistakes | AI avoids repeating previous errors |
| Every session starts from zero | Each session builds on previous knowledge |

## Memory Scopes

Claude Code supports three memory scopes with different persistence and visibility:

| Scope | Location | Shared With | Persists Across | Best For |
|-------|----------|-------------|-----------------|----------|
| **User** | `~/.claude/memory.json` | Only you | All projects | Personal preferences, global patterns |
| **Project** | `.claude/memory.json` | Team (via git) | All sessions in project | Architecture decisions, project conventions |
| **Local** | `.claude/local-memory.json` | Only you | Sessions in this project | Personal notes about this project |

## How Memory Works

### Storing Memories

Claude automatically stores important facts during your session. You can also explicitly ask:

```
Remember that we use PostgreSQL 15 with pgvector for embeddings in this project.
```

Claude saves this to the appropriate memory scope. Next session, it loads all memories before starting.

### Memory File Format

```json
{
  "memories": [
    {
      "id": "mem_001",
      "content": "This project uses PostgreSQL 15 with pgvector for embedding storage",
      "scope": "project",
      "created": "2025-01-15T10:30:00Z",
      "source": "user"
    },
    {
      "id": "mem_002",
      "content": "The auth module uses JWT with RS256 signing, not HS256",
      "scope": "project",
      "created": "2025-01-15T11:00:00Z",
      "source": "conversation"
    }
  ]
}
```

### Memory in Sub-agents

Sub-agents can have their own memory scope via the `memory` frontmatter field:

```yaml
---
name: code-reviewer
memory: project     # Remembers review patterns across sessions
---
```

| Memory Setting | Behavior |
|---------------|----------|
| `memory: user` | Sub-agent remembers across all projects (personal) |
| `memory: project` | Sub-agent remembers within this project (team-shared) |
| `memory: local` | Sub-agent remembers within this project (personal) |
| (not set) | No persistent memory |

## Memory Management

### View Current Memories

```
/memory
```

Lists all memories across all scopes. Shows which are user, project, and local.

### Edit or Remove Memories

```
/memory
→ Select memory to edit or delete
```

Or manually edit the JSON files directly.

### Memory Best Practices

| Do | Don't |
|----|-------|
| Store architectural decisions | Store temporary debugging notes |
| Store team conventions and patterns | Store secrets or credentials |
| Store "why" behind non-obvious choices | Store obvious things the AI can infer |
| Prune outdated memories regularly | Let memory grow unbounded |
| Use project memory for team knowledge | Put personal preferences in project memory |

## CLAUDE.md vs Memory

Both provide context, but they serve different purposes:

| | CLAUDE.md | Memory |
|---|-----------|--------|
| **Format** | Markdown document | Structured JSON entries |
| **Authored by** | Developers (manual) | AI + developers (automatic + manual) |
| **When loaded** | Start of session | Start of session |
| **Granularity** | Document-level (full file) | Entry-level (individual facts) |
| **Best for** | Stable project context, conventions | Dynamic knowledge, evolving decisions |
| **Versioning** | Git (full document diffs) | Git (entry-level diffs) |

**They complement each other:** CLAUDE.md is your project's "constitution" (stable rules). Memory is your project's "journal" (learned facts that evolve).

## What You'll See

| Demo | Tool | Time | Audience | What Happens |
|------|------|------|----------|-------------|
| 8.1 Memory Basics | Claude Code | 3 min | [ALL] | Store and recall memories across sessions |
| 8.2 Project Memory | Claude Code | 4 min | [ALL] | Team-shared memory that checks into git |
| 8.3 Knowledge Accumulation | Claude Code | 5 min | [PLATFORM] | AI builds deep project knowledge over time |

## Key Takeaway

Memory is what transforms AI from a smart tool into a knowledgeable teammate. Project memory is checked into git and shared with the team. User memory personalizes the experience. Together, they create an AI that gets smarter about YOUR codebase over time. The 10-minute investment of curating memories pays dividends across hundreds of future sessions.

## Demos

- [Demo 8.1: Memory Basics](demos/01-memory-basics.md)
- [Demo 8.2: Project Memory](demos/02-project-memory.md)
- [Demo 8.3: Knowledge Accumulation](demos/03-knowledge-graphs.md)
