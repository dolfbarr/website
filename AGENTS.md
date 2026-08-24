# Repository Guidelines

## Project Structure & Module Organization
Core code lives in `src/`:
- `src/pages/`: route-entry `.astro` pages (`index.astro`, `notes.astro`, `notes/[...slug].astro`, `404.astro`).
- `src/components/`: reusable UI in `PascalCase` (`.astro` and `.tsx`).
- `src/layouts/`: page/layout wrappers.
- `src/utils/`: shared data/types (`data.ts`, `types.ts`).
- `src/styles/`: global and page-level SCSS.
- `src/content/notes/`: markdown notes content, validated by `src/content/config.ts`.

Static files (favicons, resume, images) are in `public/`.  
Tests are split between unit tests in `src/**` (for example `Clock.test.tsx`) and E2E tests in `cypress/e2e/`.

## Build, Test, and Development Commands
Use Node `v20` (`.nvmrc`) and `pnpm`.
- `pnpm install`: install dependencies.
- `pnpm check:node`: assert local runtime is Node `20.x`.
- `pnpm dev` (or `pnpm start`): run local Astro dev server at `http://localhost:4321`.
- `pnpm build`: create production build.
- `pnpm preview`: serve the built site locally.
- `pnpm typecheck`: run TypeScript checks (`tsc --noEmit`).
- `pnpm lint`: run ESLint + Stylelint.
- `pnpm test:unit run`: run Vitest once.
- `pnpm cypress:install`: install Cypress binary (needed on fresh machines/CI).
- `pnpm test:e2e`: run Cypress E2E tests in Chrome.
- `pnpm test`: run unit + E2E suite.
- `pnpm ci`: local CI flow (typecheck, lint, dev server, tests).

## Coding Style & Naming Conventions
- Follow `.editorconfig`: UTF-8, LF, 2-space indentation, trim trailing whitespace.
- Prettier is authoritative (`prettier-plugin-astro`, `prettier-plugin-tailwindcss`): single quotes, no semicolons, trailing commas.
- ESLint enforces Astro/React/TypeScript rules and import ordering.
- Prefer `type` over `interface` (`@typescript-eslint/consistent-type-definitions`).
- Keep component/layout filenames in `PascalCase`; keep utility modules concise and domain-based.
- Use configured aliases (for example `@components/*`, `@utils/*`) instead of deep relative paths.

## Testing Guidelines
- Unit tests use Vitest + Testing Library with `happy-dom` and `tests/setup.ts`.
- Place unit tests near source files as `*.test.tsx`.
- Keep Cypress specs in `cypress/e2e/`.
- Prefer `httpie` (`http`, `https`) over `curl` for local manual HTTP checks while verifying routes and responses.
- `pnpm test:e2e` auto-runs Cypress install via `pretest:e2e`.
- Before pushing, run `pnpm lint`, `pnpm typecheck`, and `pnpm test` (also enforced by `lefthook` pre-push).

## Commit & Pull Request Guidelines
- Follow Conventional Commit style seen in history: `feat: ...`, `fix: ...`, `chore: ...`.
- Keep subject lines imperative and specific.
- PRs should include:
  - clear summary of behavior changes,
  - linked issue (if available),
  - test evidence (commands run),
  - screenshots/GIFs for visible UI changes.
- Ensure checks pass before requesting review.

## Current Findings & Priorities
Use this as a short-term improvement backlog while contributing:
- `Guard Node runtime`: keep Node `v20` enforced (`.nvmrc`, package `engines`, CI checks) to avoid Astro config issues.
- `Keep unit tests deterministic`: use valid timezone/date fixtures and reset fake timers in tests.
- `Fail loud on content routing errors`: avoid swallowing errors in `getStaticPaths`.
- `Keep notes listing dynamic`: derive years from content and render empty state only when collection is empty.
- `Prefer resilient client scripts`: use `addEventListener` and null-safe DOM access patterns.
- `Keep E2E onboarding stable`: preserve explicit Cypress install command and `pretest:e2e` hook.
- `Preserve content quality`: fix user-facing typos and invalid utility classes quickly.
- `Keep intentional copy intact`: preserve the `Do<strong>bu</strong>le check the URL spelling` pun in the 404 page; it is intentional, not a typo.
