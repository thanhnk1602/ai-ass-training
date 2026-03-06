# Demo 2.1: The A/B Test -- Without vs. With Context

> **Tool:** Claude Code (CLI) -- run twice
> **Time:** 3 minutes
> **Audience:** [ALL]
> **Setup:** Two directories: one empty, one with CLAUDE.md

## Why This Demo Matters

This is the single most effective demo for skeptics who say "AI generates generic code." Same prompt, radically different output.

## Part A: Without Context

Create an empty temp directory and run Claude Code there:

```bash
mkdir /tmp/no-context && cd /tmp/no-context
```

**Prompt:**
```
Create a React component for a user profile card that shows avatar, name,
role, and a list of recent activities.
```

**What you'll get:** Generic React component. Maybe `useState`, maybe CSS modules, maybe inline styles. Functional but vanilla -- could have come from any tutorial.

---

## Part B: With Context

Create a directory with a CLAUDE.md and run Claude Code there:

```bash
mkdir /tmp/with-context && cd /tmp/with-context
```

Copy the CLAUDE.md from `samples/CLAUDE.md` into this directory, then run the **exact same prompt:**

```
Create a React component for a user profile card that shows avatar, name,
role, and a list of recent activities.
```

**What you'll get:** A component using:
- Named export (no default)
- shadcn/ui `Card`, `Avatar`, `Badge` components
- Tailwind CSS classes with `cn()` utility
- Typed `UserProfileCardProps` interface
- `useUserActivities()` hook reference
- `t()` for i18n strings
- kebab-case filename: `user-profile-card.tsx`

---

## Side-by-Side Comparison

| Aspect | Without Context | With Context |
|--------|----------------|-------------|
| Export style | `export default` | Named export |
| Styling | CSS modules or inline | Tailwind + cn() |
| Components | Raw HTML elements | shadcn/ui primitives |
| Types | Loose or `any` | Strict interfaces |
| File name | `UserProfileCard.tsx` | `user-profile-card.tsx` |
| i18n | Hardcoded strings | `t()` function |
| Data fetching | `useState` + `useEffect` | React Query hook |

## Wow Moment

**Same prompt. Radically different output.** The CLAUDE.md made the AI produce code that looks like your team wrote it. Point at each difference and say: "This is what 30 lines of configuration gets you."

## Talking Points

- "CLAUDE.md is like onboarding a new developer -- you tell them your conventions once"
- "It checks into git. Every team member gets the same AI behavior"
- "You write it once and every AI interaction benefits from it"
