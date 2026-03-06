# Acme Corp Engineering Standards

## Tech Stack
- **Backend:** Node.js 22 + TypeScript 5.x + Express
- **Frontend:** React 18 + TypeScript + Tailwind CSS
- **Database:** PostgreSQL 16 + Prisma ORM
- **Testing:** Vitest + React Testing Library + Supertest
- **CI/CD:** GitHub Actions + Vercel

## Code Conventions
- TypeScript strict mode always enabled
- Use `interface` over `type` for object shapes
- Prefer named exports over default exports
- Use `zod` for all input validation
- Error handling with custom `AppError` class

## API Conventions
- RESTful with consistent resource naming
- All endpoints return `{ data, meta, errors }` envelope
- Use `zod` middleware for request validation
- Rate limiting on all public endpoints

## File Naming
- React components: PascalCase (e.g., `UserProfile.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- API routes: kebab-case (e.g., `user-profile.ts`)
- Test files: `*.test.ts` or `*.spec.ts`
