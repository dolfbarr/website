# Contributor's Guide

Welcome to the repository for [dolf.me](https://dolf.me), the personal website of Dolf Barr.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **UI & Components**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [SCSS](https://sass-lang.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Icons**: [React Feather](https://feathericons.com/)
- **Testing**: [Vitest](https://vitest.dev/) (unit) + [Testing Library](https://testing-library.com/), [Cypress](https://www.cypress.io/) (E2E)
- **Code Quality**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Stylelint](https://stylelint.io/), [Lefthook](https://github.com/evilmartians/lefthook)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `20.x` (enforced via `.nvmrc` and `package.json` engines)
- **Package Manager**: [pnpm](https://pnpm.io/)

```sh
# Ensure you are on Node 20
nvm use

# Install dependencies
pnpm install
```

---

## 🧞 Available Commands

| Command              | Description                                                     |
| :------------------- | :-------------------------------------------------------------- |
| `pnpm dev`           | Starts local dev server at `http://localhost:4321`              |
| `pnpm build`         | Builds the static production site into `./dist/`                |
| `pnpm preview`       | Serves the built site locally for verification                  |
| `pnpm typecheck`     | Runs TypeScript compiler checks (`tsc --noEmit`)                |
| `pnpm lint`          | Runs both ESLint and Stylelint                                  |
| `pnpm test:unit run` | Runs Vitest unit tests once                                     |
| `pnpm test:e2e`      | Runs Cypress E2E test suite in Chrome                           |
| `pnpm test`          | Runs both unit and E2E test suites                              |
| `pnpm ci`            | Runs the full local CI pipeline (typecheck, lint, build, tests) |

---

## 📁 Project Structure

```text
├── public/                 # Static assets (favicons, resume, images)
├── cypress/                # Cypress E2E tests and configuration
│   └── e2e/                # E2E test specifications
├── src/
│   ├── components/         # Reusable UI components (.astro and .tsx)
│   ├── content/            # Markdown content collections (notes)
│   │   ├── config.ts       # Zod schema definitions
│   │   └── notes/          # Markdown posts
│   ├── layouts/            # Page layout wrappers (BaseLayout, Main, Note)
│   ├── pages/              # File-based routing pages
│   │   ├── index.astro     # Landing page
│   │   ├── 404.astro       # 404 Not Found page
│   │   └── notes/          # Notes archive and dynamic [slug] post pages
│   ├── styles/             # Global and landing SCSS styles
│   └── utils/              # Shared data, types, and helpers
└── tests/                  # Test setup and shared testing utilities
```

---

## 📐 Guidelines & Conventions

- **Code Style**: 2-space indentation, single quotes, no semicolons, trailing commas.
- **Type Definitions**: Prefer `type` over `interface` for TypeScript consistency.
- **Client Scripts**: Write resilient client scripts using standard `addEventListener` and null-safe DOM checks.
- **Commits**: Follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `test:`).
