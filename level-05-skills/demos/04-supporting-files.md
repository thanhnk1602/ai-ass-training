# Demo 5.4: Skills with Supporting Files

> **Tool:** Claude Code (CLI)
> **Time:** 3 minutes
> **Audience:** [DEV]
> **Setup:** Copy `samples/.claude/skills/deploy/` to your project

## The Demo

A deployment skill with supporting files -- a pre-flight checklist script and a report template. Shows that skills are **directories**, not just single files.

## The Skill Structure

```
.claude/skills/deploy/
├── SKILL.md                    # Main instructions
├── templates/
│   └── deploy-report.md        # Report template Claude fills in
└── scripts/
    └── preflight.sh            # Pre-flight check script
```

## Key: Supporting Files in Action

**SKILL.md** references its supporting files:

```yaml
---
name: deploy
description: Deploy application to staging or production
argument-hint: [staging|production]
disable-model-invocation: true
allowed-tools: Bash, Read, Grep
---

Deploy to $ARGUMENTS environment.

## Pre-flight
Run the pre-flight script: `bash .claude/skills/deploy/scripts/preflight.sh`

## Steps
1. Verify pre-flight passed
2. Run tests, abort on failure
3. Build the application
4. Tag the release
5. Deploy to target environment

## Report
Fill in the template at [templates/deploy-report.md](templates/deploy-report.md)
with actual deployment details.
```

The **template** (`deploy-report.md`) gives Claude a structured format:

```markdown
# Deployment Report
- **Version**: [version]
- **Environment**: [env]
- **Git SHA**: [sha]
- **Timestamp**: [time]
- **Pre-flight**: PASS / FAIL
- **Tests**: PASS / FAIL
- **Build**: PASS / FAIL
- **Health check**: PASS / FAIL
```

## Prompt

```
/deploy staging
```

## What to Watch For

- Claude reads SKILL.md, then loads the supporting files as needed
- The pre-flight script runs first (actual bash execution)
- The template gets filled in with real deployment data
- Supporting files keep SKILL.md focused and short

## Wow Moment

The skill isn't just instructions -- it carries **executable scripts** and **fill-in templates**. This is a self-contained deployment toolkit in a directory.

## Talking Points

- "Skills are directories, not just files"
- "The pre-flight script is reusable outside of AI too"
- "Templates ensure consistent deployment reports"
- "Keep SKILL.md under 500 lines -- move details to supporting files"
