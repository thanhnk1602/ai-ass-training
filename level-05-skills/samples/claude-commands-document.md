Generate documentation for recently changed files.

1. Run `git diff --name-only HEAD` to find changed files
2. For each changed file:
   - Read and understand the code
   - Add JSDoc/docstring comments to all exported functions, classes, and types
   - Include @param, @returns, @throws, and @example tags
   - For React components, document Props interfaces with descriptions
3. Do NOT create separate markdown documentation files
4. Do NOT change any logic -- only add/update comments and docstrings
5. Show a summary of all documentation added

Follow existing documentation style in the project. Be concise -- describe what and why, not how.
