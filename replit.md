# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Replit Setup

Two workflows are configured:

- **Frontend** — Vite dev server for `@workspace/nativos-3d`, runs on port 5000 (`PORT=5000 pnpm --filter @workspace/nativos-3d run dev`)
- **API Server** — Express server for `@workspace/api-server`, runs on port 3000 (`PORT=3000 pnpm --filter @workspace/api-server run dev`). Requires `DATABASE_URL` environment variable to start.

The frontend is the primary artifact visible in the Replit preview pane.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React 19 + Vite 7, Tailwind CSS v4, wouter routing
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (ESM bundle)

## Environment Variables

- `DATABASE_URL` — PostgreSQL connection string (required for API server)
- `PORT` — Set automatically by workflows (5000 for frontend, 3000 for API server)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/nativos-3d run dev` — run frontend locally

## Vercel Deployment (original)

The `vercel.json` at the root was the original Vercel config. On Replit, use the workflows described above instead.
