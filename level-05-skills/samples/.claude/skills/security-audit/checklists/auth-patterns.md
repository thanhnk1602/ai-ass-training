# Authentication Security Checklist

## JWT Implementation
- [ ] Algorithm pinned (not accepting `none` or `HS256` when expecting `RS256`)
- [ ] Token expiration set (< 1 hour for access tokens)
- [ ] Refresh token rotation implemented
- [ ] Secret key length >= 256 bits
- [ ] Secret comes from environment variable (not hardcoded)

## Session Management
- [ ] Session IDs are cryptographically random
- [ ] Sessions expire after inactivity
- [ ] Sessions invalidated on logout
- [ ] Concurrent session limits enforced

## Password Handling
- [ ] Passwords hashed with bcrypt/scrypt/argon2 (not MD5/SHA)
- [ ] Salt rounds >= 10 for bcrypt
- [ ] Password minimum length >= 8
- [ ] No password in logs or error messages

## CORS Configuration
- [ ] Origin whitelist (not `*` in production)
- [ ] Credentials flag used correctly
- [ ] Preflight requests handled

## Authorization
- [ ] Every endpoint has auth middleware (no accidental public routes)
- [ ] Role-based access checked (not just authentication)
- [ ] Resource ownership verified (user can only access their own data)
- [ ] Admin endpoints separated and protected

## Rate Limiting
- [ ] Login endpoint rate limited (prevent brute force)
- [ ] Password reset rate limited
- [ ] API endpoints rate limited per user/IP
- [ ] Rate limit headers returned (X-RateLimit-*)
