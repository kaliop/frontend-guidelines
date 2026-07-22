# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is **not** an application codebase — it is the **Kaliop Frontend Guidelines**, a documentation website built with [VitePress](https://vitepress.dev/) (v2 alpha). The content is authored in Markdown and describes frontend standards (Tailwind CSS, Atomic Design components, tailwind-variants styling, Storybook) used on Kaliop projects. Editing work here is almost always about writing/organizing Markdown docs, not shipping runtime frontend code.

## Commands

```bash
npm install       # install dependencies (Node.js 22+ required)
npm run dev       # dev server with hot reload (http://localhost:5173/frontend-guidelines/)
npm run build     # static build → .vitepress/dist
npm run preview   # serve the production build locally
```

There is no test suite or linter — `npm test` is a placeholder that exits with an error.

## Architecture

- **`.vitepress/config.mts`** — the single source of site structure. The `themeConfig.sidebar` array defines navigation and, in practice, which Markdown files are "published." When you add or rename a doc page, you must update the sidebar here or it won't be linked. `base` is `/frontend-guidelines/` and must match the GitHub Pages deploy path.
- **`.vitepress/theme/`** — extends the default VitePress theme. `index.ts` imports `custom.css`, which overrides VitePress CSS variables (`--vp-c-*`) with the Kaliop brand palette expressed in `oklch()`.
- **`index.md`** — the `layout: home` landing page (hero + feature cards). Its links are maintained separately from the sidebar; keep both in sync.
- **Content directories** — each top-level folder is a doc section mirrored in the sidebar: `getting-started/`, `tailwind/` (incl. `tailwind/design-tokens/`), `components/`, `styling/`, `storybook/`. A folder's landing page is its `index.md`; other pages are individual `.md` files linked by filename (no extension) in the sidebar.

## Deployment

`.github/workflows/deploy.yml` builds the site and deploys `.vitepress/dist` to GitHub Pages on every push to `main` (also manually via `workflow_dispatch`). Because deploy is tied to `main`, doc changes should land there to publish. Keep `base` in the config aligned with the Pages URL path.

## Conventions

- Sidebar link paths omit the `.md` extension and are root-relative (e.g. `/tailwind/design-tokens/colors`).
- New pages require three coordinated edits when they should be discoverable: create the `.md` file, add it to the `sidebar` in `config.mts`, and (if top-level) optionally add a feature card in `index.md`.
