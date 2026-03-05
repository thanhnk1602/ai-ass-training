---
name: deploy
description: Deploy application to staging or production environment
argument-hint: [staging|production]
disable-model-invocation: true
allowed-tools: Bash, Read, Grep
---

Deploy to **$ARGUMENTS** environment.

## Pre-flight Checks

Run the pre-flight script:

```bash
bash .claude/skills/deploy/scripts/preflight.sh
```

If pre-flight fails, stop and report what failed.

## Deployment Steps

1. **Run tests**: `npm test` -- abort if any test fails
2. **Build**: `npm run build` -- abort if build fails
3. **Version bump**:
   - Read current version from package.json
   - If staging: bump patch version
   - If production: bump minor version
   - Update package.json
4. **Git tag**: Create tag `v{version}`
5. **Docker build** (if Dockerfile exists): `docker build -t app:v{version} .`
6. **Deploy**:
   - If staging: `docker compose -f docker-compose.staging.yml up -d`
   - If production: **SHOW commands only, do NOT execute** (safety)
7. **Health check**: `curl -sf http://localhost:3000/health || echo "Health check failed"`

## Report

Fill in the deployment report template at [templates/deploy-report.md](templates/deploy-report.md).

If ANY step fails, stop immediately. Do not continue to the next step.
