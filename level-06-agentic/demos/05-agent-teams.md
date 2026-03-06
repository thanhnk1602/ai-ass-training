# Demo 6.5: Agent Teams

> **Tool:** Claude Code (CLI)
> **Time:** 5 minutes
> **Audience:** [ALL]
> **Setup:** Enable agent teams, have a project to review or build
> **Prerequisite:** `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` enabled in settings

## The Concept

Agent teams are Claude Code's built-in multi-agent feature. Instead of manually opening terminals, you tell Claude to create a team. It spawns teammates, assigns tasks, and they coordinate through a shared task list and direct messaging.

## Setup: Enable Agent Teams

```json
// ~/.claude/settings.json  (or project settings)
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

## The Demo: Parallel Code Review

### Prompt

```
Create an agent team to review this codebase from three angles.
Spawn three reviewers:
- One focused on security implications
- One checking performance bottlenecks
- One validating test coverage and edge cases

Have them each investigate independently, then share and challenge
each other's findings before producing a final report.
```

### What Happens

1. Claude becomes the **team lead**
2. Spawns 3 teammates, each with a focused mandate
3. Creates a **shared task list** visible to all agents
4. Each teammate works independently in its own context window
5. Teammates **message each other** to cross-reference findings
6. Lead synthesizes everything into a final report

### What to Show the Audience

**Shift+Down** to cycle through teammates:
```
[Lead] Creating team and assigning tasks...
  ↓ Shift+Down
[Security Reviewer] Scanning auth middleware for bypass vectors...
  ↓ Shift+Down
[Performance Reviewer] Profiling database queries in routes/...
  ↓ Shift+Down
[Test Reviewer] Checking coverage for edge cases in...
```

**Ctrl+T** to show the shared task list:
```
Tasks:
[✓] Security: Review authentication flow       (claimed by Security Reviewer)
[✓] Security: Check input validation            (claimed by Security Reviewer)
[→] Performance: Analyze database queries       (claimed by Performance Reviewer)
[ ] Performance: Check for N+1 queries          (pending)
[✓] Testing: Assess test coverage               (claimed by Test Reviewer)
[ ] All: Cross-review findings                   (blocked: depends on above)
```

**Direct messaging** -- click into the security reviewer's pane and ask:
```
Did you check the JWT token expiration handling specifically?
```
The reviewer responds directly to you without going through the lead.

## The Upgrade: Competing Hypotheses

Show a debugging scenario next:

```
Users report the app exits after one message instead of staying connected.
Spawn 5 agent teammates to investigate different hypotheses. Have them talk
to each other to try to disprove each other's theories, like a scientific
debate. Update the findings doc with whatever consensus emerges.
```

### Why This Is Better Than Sequential

A single agent tends to find one plausible explanation and stop. With competing hypotheses:
- Each teammate investigates a different theory
- They **actively try to disprove each other**
- The theory that survives debate is more likely correct
- No anchoring bias from sequential investigation

## Managing the Team

**Assign specific work:**
```
Have the security reviewer also check the WebSocket handshake
```

**Redirect approach:**
```
Tell the performance reviewer to focus on the API layer, not the frontend
```

**Require plan approval:**
```
Spawn an architect teammate to redesign the auth module.
Require plan approval before they make any changes.
```

**Shut down gracefully:**
```
Ask the test reviewer to shut down -- we have enough coverage data.
Then clean up the team.
```

## Wow Moment

You typed one prompt and got a coordinated team of 3 AI reviewers that work independently, challenge each other's findings, and produce a synthesized report. No manual terminal management. The team lead handles coordination. You just talk to it.

## Talking Points

- "One prompt created a complete review team."
- "Teammates communicate directly -- the security reviewer can ask the test reviewer about coverage gaps."
- "The shared task list prevents duplicate work and manages dependencies."
- "This is not 3 separate sessions. They coordinate."
- "Compare Demo 8.1: manual parallel has no communication. Agent teams do."
