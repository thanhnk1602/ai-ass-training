---
name: security-audit
description: Performs a security audit on the codebase checking for vulnerabilities, misconfigurations, and best practice violations
argument-hint: [full|auth|api|dependencies|secrets]
disable-model-invocation: true
allowed-tools: Bash(npm audit *), Read, Grep, Glob
---

Perform a security audit on this project.

Scope: $ARGUMENTS (default to "full" if not specified)

## Audit Procedures

### If scope includes "auth" or "full":
- Check authentication middleware for bypass vulnerabilities
- Verify JWT: algorithm pinning, expiration, secret rotation
- Check session management and CORS configuration
- Look for missing auth on sensitive endpoints
- Check for IDOR (insecure direct object references)

For detailed auth checklist, see [checklists/auth-patterns.md](checklists/auth-patterns.md).

### If scope includes "api" or "full":
- Check all route handlers for input validation
- Look for SQL/NoSQL injection vectors (even with ORM)
- Check for mass assignment (accepting unfiltered req.body)
- Verify rate limiting on auth and sensitive endpoints
- Check for SSRF, path traversal, command injection

### If scope includes "dependencies" or "full":
- Run `npm audit` or equivalent
- Flag packages with known CVEs
- Identify outdated critical dependencies (especially auth, crypto)

### If scope includes "secrets" or "full":
- Scan for hardcoded secrets, API keys, passwords, tokens
- Check .gitignore covers: .env, *.pem, *.key, credentials.*
- Verify secrets come from environment variables

## Report

Fill in the report template at [templates/audit-report.md](templates/audit-report.md).
