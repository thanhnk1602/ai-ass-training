---
name: component
description: Generates a React component with tests and stories following project conventions
argument-hint: [ComponentName]
disable-model-invocation: true
---

Generate a new React component named: $ARGUMENTS

## Steps:

1. Read CLAUDE.md or .cursorrules to understand project conventions
2. Create `src/components/$ARGUMENTS/$ARGUMENTS.tsx`:
   - Named export (no default export)
   - Props interface with JSDoc comments
   - Loading skeleton state
   - Error state with retry
   - Tailwind CSS styling
   - Accessibility: ARIA labels, keyboard support, focus management
   - Max 80 lines -- split into sub-components if needed

3. Create `src/components/$ARGUMENTS/$ARGUMENTS.test.tsx`:
   - Render test (mounts without errors)
   - Props test (displays provided data)
   - Loading state test
   - Error state test
   - Accessibility test (roles, labels)
   - Use project's test framework (vitest/jest + testing-library)

4. Create `src/components/$ARGUMENTS/$ARGUMENTS.stories.tsx`:
   - Default story with realistic data
   - Loading story
   - Error story
   - Edge case stories (empty data, long text)

5. Create `src/components/$ARGUMENTS/index.ts`:
   - Barrel export of component and props type

Follow the project's existing component patterns exactly.
