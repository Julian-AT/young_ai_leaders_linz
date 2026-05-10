# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Young AI Leaders Linz

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Docker (standalone) or Vercel

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run lint:fix` — ESLint auto-fix
- `npm run typecheck` — TypeScript check
- `npm run format` — Prettier format
- `npm run check` — Run lint + typecheck + build

## Code Style

- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- kebab-case file names
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first
- Server components by default, "use client" only where needed

## Project Structure

```
src/
  app/                    # Next.js routes only
  components/
    shared/               # Layout-level (header, footer, smooth-scroll, theme-band, icons)
    sections/             # Page sections (hero, stats, programs-switcher, etc.)
    ui/                   # shadcn/ui primitives
  content/                # Static content data (future CMS swap-point)
  hooks/                  # Shared React hooks
  config/                 # Environment validation
  lib/                    # Utilities (cn)
public/
  fonts/                  # Self-hosted WOFF2
  images/                 # Site images
  videos/                 # WebM + MP4 pairs
  logos/                  # Brand assets
  seo/                    # Favicon, OG image
```

## Architecture Rules

- Server components by default — only add "use client" for interactivity
- Content data lives in `src/content/` — this is the future CMS swap-point
- No barrel exports (index.ts) — use explicit file imports
- No global state management — use server rendering, props, URL state
- Shared hooks in `src/hooks/` — e.g., `use-reveal.ts` for IntersectionObserver animations
- Absolute imports via `@/*` mapped to `src/*`

## Important Notes

- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end.
- Pre-commit hooks run ESLint + Prettier via Husky + lint-staged.
