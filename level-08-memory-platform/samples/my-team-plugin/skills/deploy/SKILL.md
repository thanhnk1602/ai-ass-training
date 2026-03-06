---
name: deploy
description: Deploy application to staging or production with pre-flight checks
argument-hint: [staging|production]
disable-model-invocation: true
allowed-tools: Bash, Read
---

## Deployment Pipeline

Deploy to the specified environment with safety checks.

### Pre-flight Checks
1. Verify all tests pass: `npm test`
2. Verify build succeeds: `npm run build`
3. Check for uncommitted changes: `git status`
4. Verify correct branch:
   - staging: any branch
   - production: must be `main`

### Deploy Steps
1. Run pre-flight checks (STOP if any fail)
2. Create deployment tag: `v{date}-{short-sha}`
3. Deploy command:
   - staging: `npx vercel --env preview`
   - production: `npx vercel --prod`
4. Verify deployment health check
5. Report deployment summary

### Output
Provide deployment summary with:
- Environment deployed to
- Git SHA and tag
- Pre-flight check results
- Deployment URL
- Health check status
