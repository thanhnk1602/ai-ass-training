---
name: test
description: >
  Generates comprehensive tests for recently changed files. Use when someone
  asks to add tests, write tests, improve test coverage, or says "we need
  tests for this", "make sure this is tested", or "add test coverage".
---

Generate comprehensive tests for the recently changed files.

1. Run `git diff --name-only HEAD` to find changed files
2. For each changed source file (skip test files):
   - Read the file to understand all functions/components
   - Create a test file next to it (or in `__tests__/`)
   - Write tests covering:
     - Happy path for each exported function
     - Edge cases (empty input, null, boundary values)
     - Error cases (invalid input, thrown exceptions)
     - For React components: render, props, user interactions, loading/error states
3. Use the project's existing test framework (detect from package.json)
4. Run the tests and fix any failures
5. Show the final test results

Match the testing style of any existing test files in the project.
