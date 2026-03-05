# Level 1: Prompt Library

Ready-to-use prompts for basic AI-assisted coding. Copy-paste directly into Claude Code or Cursor.

---

## Code Generation

### Generate a REST API endpoint
```
Create an Express.js route handler for a POST /api/users endpoint that:
- Validates the request body has name (string, 2-50 chars) and email (valid email format)
- Checks if email already exists in the database (use Prisma)
- Hashes the password with bcrypt (12 rounds)
- Creates the user and returns the user object (without password)
- Returns appropriate HTTP status codes (201, 400, 409)
- Uses TypeScript with proper types
```

### Generate a React component
```
Create a React component called SearchBar that:
- Has a text input with debounced onChange (300ms)
- Shows a loading spinner while searching
- Displays results in a dropdown below the input
- Handles keyboard navigation (arrow keys + enter)
- Closes dropdown on Escape or click outside
- Uses TypeScript, functional component, no external libraries
```

### Generate a database schema
```
Create a Prisma schema for a project management app with these models:
- User (id, email, name, role: ADMIN/MEMBER/VIEWER)
- Project (id, name, description, status: ACTIVE/ARCHIVED, owner)
- Task (id, title, description, status: TODO/IN_PROGRESS/DONE, priority: LOW/MEDIUM/HIGH, assignee, project)
- Comment (id, content, author, task, createdAt)

Include all relationships, indexes on frequently queried fields, and timestamps.
```

---

## Debugging

### Find bugs in code
```
Read [filename] and find all bugs. For each bug:
1. What line is it on
2. What the bug is
3. Why it's a problem (what would happen at runtime)
4. The fix
```

### Explain an error
```
I'm getting this error when running my app:

[paste error message]

The relevant code is in [filename]. Read the file, explain what's causing
this error, and fix it.
```

### Debug a failing test
```
My test in [test file] is failing with:

[paste test output]

Read both the test file and the source file being tested. Figure out
whether the bug is in the code or the test, and fix it.
```

---

## Refactoring

### Clean up a file
```
Refactor [filename]:
- Replace magic numbers with named constants
- Extract repeated logic into helper functions
- Add TypeScript types where missing
- Fix any obvious bugs or anti-patterns
- Keep the same external behavior
```

### Modernize old code
```
Modernize [filename] from [old pattern] to [new pattern]:
- Replace callbacks with async/await
- Replace var with const/let
- Replace require() with import
- Replace class components with functional components + hooks
- Keep the same external behavior, add type annotations
```

---

## Explanation

### Explain a codebase
```
Read the files in [directory]. Explain:
1. What this code does (high level)
2. The main data flow
3. Key functions and their responsibilities
4. Any patterns or architectural choices
5. Potential improvements
```

### Explain a function
```
Explain what this function does step by step, as if I'm a junior developer:

[paste function]
```

---

## Quick Utilities

### Generate test data
```
Generate a JSON file with 50 realistic user records. Each user should have:
id, firstName, lastName, email, age (18-65), role (admin/editor/viewer),
department, joinDate (within last 3 years), isActive (boolean).
Make the data realistic - not "test1@test.com" but actual-looking names and emails.
```

### Generate regex
```
Write a regex that validates [description of what to match].
Include 5 test cases that should match and 5 that should not.
Explain each part of the regex.
```

### Write a git commit message
```
Look at my staged changes (git diff --staged) and write a conventional
commit message. Use the format: type(scope): description
```
