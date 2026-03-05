# Demo 5.3: Skills with Arguments & Patterns

> **Tool:** Claude Code (CLI)
> **Time:** 2 minutes
> **Setup:** Copy `samples/.claude/skills/component/` to your project

## The Demo

A parameterized skill that takes arguments via `$ARGUMENTS` to generate consistent code structures.

## The Skill: `/component`

```yaml
---
name: component
description: Generates a React component with tests and stories following project conventions
argument-hint: [ComponentName]
disable-model-invocation: true
---
```

The `argument-hint` shows users what to type: `/component [ComponentName]`

`disable-model-invocation: true` means you must invoke it manually -- Claude won't auto-trigger component generation.

## Prompt

```
/component InvestmentCard
```

That's it. One command, one argument.

## What Gets Generated

4 files, all named consistently:

```
src/components/InvestmentCard/
├── InvestmentCard.tsx          # Component with loading/error states
├── InvestmentCard.test.tsx     # Render, props, loading, a11y tests
├── InvestmentCard.stories.tsx  # Default, loading, error stories
└── index.ts                   # Barrel export
```

## Advanced: Positional Arguments

Skills support `$ARGUMENTS[0]`, `$ARGUMENTS[1]`, or shorthand `$0`, `$1`:

```yaml
---
name: migrate-component
description: Migrate a component from one framework to another
argument-hint: [component] [from-framework] [to-framework]
---

Migrate the $0 component from $1 to $2.
Preserve all existing behavior and tests.
```

Usage: `/migrate-component SearchBar React Vue`

## Try More

```
/component WalletBalance
/component TransactionHistory
/component PortfolioChart
```

Each produces the same consistent structure.

## Wow Moment

The `argument-hint` field shows autocomplete hints. `disable-model-invocation` prevents accidental triggering. These aren't simple text replacements -- they're configurable, controlled skill invocations.

## Talking Points

- "$ARGUMENTS makes skills reusable with different inputs"
- "argument-hint provides autocomplete guidance"
- "disable-model-invocation: true means only humans trigger this"
- "New developers produce standardized components on day one"
