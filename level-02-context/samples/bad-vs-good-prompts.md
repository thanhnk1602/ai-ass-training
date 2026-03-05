# Bad vs. Good Prompts: Side-by-Side Comparison

## Example 1: Code Generation

### Bad Prompt
```
Make a login form
```
**Result:** Generic HTML form, no framework, no validation, no styling system.

### Good Prompt
```
Create a login form component with email and password fields.
- Use our existing Input and Button components from @/components/ui
- Validate with Zod: email must be valid, password min 8 chars
- Show inline validation errors below each field
- Handle submission with React Query mutation to POST /api/auth/login
- Show loading state on the button during submission
- Redirect to /dashboard on success using next/navigation
```
**Result:** Production-ready component matching your stack exactly.

### Why It's Better
Specific framework, specific components, specific validation, specific behavior. The AI has no ambiguity.

---

## Example 2: Bug Fixing

### Bad Prompt
```
Fix the bug
```
**Result:** AI guesses what's wrong, might fix the wrong thing.

### Good Prompt
```
Users report that the wallet connection fails silently on mobile Safari.
The connect button click handler is in src/hooks/useWalletConnect.ts.
Expected: show error toast when connection fails.
Actual: nothing happens, no error in console.
Check if we're catching the error too broadly.
```
**Result:** AI goes to exactly the right file, finds the overly broad catch, fixes it.

### Why It's Better
Location, expected behavior, actual behavior, hypothesis. The AI has everything a developer needs to debug.

---

## Example 3: Refactoring

### Bad Prompt
```
Clean up this code
```
**Result:** Random changes, might break things, unclear what "clean" means.

### Good Prompt
```
Refactor src/services/portfolio.ts:
- Extract the token balance fetching into a separate function
- Replace the nested try/catch blocks with a Result type pattern
- Keep the same public API (function signatures unchanged)
- Don't change any tests
```
**Result:** Focused, safe refactoring with clear boundaries.

### Why It's Better
Specific scope, specific technique, explicit constraints. The AI knows exactly what to change and what to protect.

---

## The Pattern

Every good prompt has:
1. **What** -- the task
2. **Where** -- the files/components involved
3. **How** -- the approach/patterns to use
4. **Constraints** -- what NOT to change
5. **Expected result** -- what success looks like
