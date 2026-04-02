# Development Guide

This guide covers how to set up and run the project locally, and how to work with the component registry.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) `20` or `>=22`
- [pnpm](https://pnpm.io/) `>=9`
- [Git](https://git-scm.com/)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/piyushdotcomm/portfolio.git
cd portfolio/piyush.in
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Then, update the necessary environment variables inside `.env.local`:

```env
APP_URL=http://localhost:1408
REGISTRY_URL=http://localhost:1408
```

### 4. Run the development server

```bash
pnpm dev
```

The application should now be available at [http://localhost:1408](http://localhost:1408).

## Building for Production

```bash
pnpm build
```

After building, start the application with:

```bash
pnpm start
```

## Scripts Reference

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server (port 1408, Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm preview` | Build + start locally |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Auto-fix lint errors |
| `pnpm format:write` | Format code with Prettier |
| `pnpm check-types` | TypeScript type check |
| `pnpm registry:build` | Build the shadcn component registry |

## Registry

This project uses the **shadcn Registry** system to manage and distribute custom UI components. Components hosted in `src/registry/` can be consumed by any React project via the shadcn CLI.

### Using Registry Components in Other Projects

```bash
npx shadcn@latest add https://piyush.in/r/utils.json
npx shadcn@latest add https://piyush.in/r/theme-switcher.json
npx shadcn@latest add https://piyush.in/r/flip-sentences.json
npx shadcn@latest add https://piyush.in/r/apple-hello-effect.json
npx shadcn@latest add https://piyush.in/r/wheel-picker.json
npx shadcn@latest add https://piyush.in/r/work-experience.json
```

> **Note**: Components require [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4) and [React 19](https://react.dev/blog/2024/12/05/react-19).

### Building the Registry

Before publishing or testing registry components locally, run:

```bash
pnpm registry:internal:build
pnpm registry:build
```

This generates the JSON files in `public/r/` and updates `src/__registry__/`.

> **Never manually edit** files in `src/__registry__/` or `public/r/` — they are auto-generated.

### Registry Source Files

- `src/registry/` — Component source code
- `src/registry/registry-components.ts` — Component definitions
- `src/registry/registry-hook.ts` — Hook definitions
- `src/registry/registry-examples.ts` — Example definitions

### shadcn Registry Documentation

For more details, see the [official shadcn registry docs](https://ui.shadcn.com/docs/registry).
