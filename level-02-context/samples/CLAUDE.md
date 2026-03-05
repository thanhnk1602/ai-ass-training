# CLAUDE.md

## Project Context
This is the LuminNet RWA Platform - an enterprise blockchain application for tokenizing real-world assets.

## Tech Stack
- Next.js 14 (App Router) with TypeScript (strict mode)
- Tailwind CSS (no CSS modules, no styled-components)
- shadcn/ui component library (use existing components from @/components/ui)
- React Query (tanstack) for server state
- Zod for validation
- Prisma ORM with PostgreSQL
- Ethers.js v6 for blockchain interactions

## Code Conventions
- Functional components only, no default exports
- Name files in kebab-case: `user-profile-card.tsx`
- Use `cn()` utility from `@/lib/utils` for conditional classes
- All API calls go through typed hooks in `@/hooks/`
- Props interfaces named `{ComponentName}Props`
- No `any` types ever. Use `unknown` and narrow.
- Prefer composition over large components (max 80 lines per component)
- All user-facing strings must support i18n (use `t()` from next-intl)
- Use `async/await` consistently, never raw `.then()` chains

## API Conventions
- All API routes in `app/api/` directory
- Input validation with Zod schemas
- Typed responses: `{ success: true, data: T } | { success: false, error: string }`
- Authentication via `getServerSession()` from next-auth
- Rate limiting on sensitive endpoints

## Database Conventions
- UUID primary keys
- All tables have `createdAt` and `updatedAt` timestamps
- Soft deletes where applicable (`deletedAt` column)
- Use Prisma transactions for multi-table operations

## Folder Structure
- Components: `@/components/{feature}/`
- Hooks: `@/hooks/use-{name}.ts`
- Types: `@/types/{domain}.ts`
- API Routes: `@/app/api/{resource}/route.ts`
- Services: `@/services/{domain}.ts`
