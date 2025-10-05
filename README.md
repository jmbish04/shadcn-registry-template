# React + shadcn/ui Cloudflare Worker Template

This repository provides a plain React (Vite) starter that integrates the shadcn/ui component system, Tailwind CSS, and a blue-accented dashboard layout. It is paired with a Cloudflare Worker configuration that serves the built static assets with single-page application routing enabled.

## Features

- **Vite + React** JavaScript setup with sensible defaults.
- **Tailwind CSS** configured for shadcn/ui components and blue primary/secondary colors.
- **Prebuilt Layout** including a sidebar and stat card dashboard views.
- **shadcn/ui Components** (button, card, input, label, navigation menu, scroll area, separator, sidebar, sheet) ready to compose.
- **Cloudflare Worker Deployment** via Wrangler using the assets binding and SPA fallbacks.
- **Gemini Recommendations** folder capturing the rollout plan and checklist.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Build

Create an optimized production build in `dist/`:

```bash
npm run build
```

## Cloudflare Worker

Preview locally with Wrangler:

```bash
npx wrangler dev --local
```

Deploy to Cloudflare Workers:

```bash
npx wrangler deploy
```

The Worker entry point is defined in [`worker/index.js`](worker/index.js) and uses Wrangler's assets binding declared in [`wrangler.toml`](wrangler.toml).
