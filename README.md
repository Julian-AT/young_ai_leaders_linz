# Young AI Leaders Linz

Marketing website for Young AI Leaders Linz — the Austrian hub of the global AI for Good network.

## Tech Stack

- **Next.js 16** — App Router, React 19, TypeScript strict
- **Tailwind CSS v4** — oklch design tokens, CSS-first config
- **shadcn/ui** — Radix primitives
- **Deployment** — Docker (standalone) or Vercel

## Getting Started

```bash
node --version  # Requires Node.js 24+
npm install
npm run dev     # http://localhost:3000
```

## Scripts

| Command                | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start dev server          |
| `npm run build`        | Production build          |
| `npm run start`        | Serve production build    |
| `npm run lint`         | ESLint check              |
| `npm run lint:fix`     | ESLint auto-fix           |
| `npm run typecheck`    | TypeScript check          |
| `npm run format`       | Prettier format all files |
| `npm run format:check` | Check formatting          |
| `npm run check`        | lint + typecheck + build  |

## Project Structure

```
src/
  app/                    # Next.js routes (7 pages)
  components/
    shared/               # Layout components (header, footer, smooth-scroll, theme-band)
    sections/             # Page sections (hero, stats, programs, partners, etc.)
    ui/                   # shadcn/ui primitives
  content/                # Static content data (future CMS swap-point)
  hooks/                  # Shared React hooks (use-reveal, use-typewriter)
  config/                 # Environment validation
  lib/                    # Utilities (cn)
public/
  fonts/                  # Self-hosted WOFF2
  images/                 # Site images
  videos/                 # WebM + MP4 pairs
  logos/                  # Brand assets
  seo/                    # Favicon, OG image
```

## Architecture

- **Server-first** — client components only where interactivity is required
- **Content layer** (`src/content/`) — centralized data, ready for future CMS integration
- **No global state** — server rendering, props, URL state only
- **No barrel exports** — explicit file imports for tree-shaking

## Development Workflow

Pre-commit hooks run automatically via Husky + lint-staged:

- ESLint auto-fix
- Prettier formatting

## Docker

```bash
docker compose up app --build    # Production on port 3000
docker compose up dev --build    # Dev mode on port 3001
```

## Environment

Copy `.env.example` to `.env.local` and configure as needed. See `src/config/env.ts` for the validation schema.
