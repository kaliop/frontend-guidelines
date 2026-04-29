# Kaliop Frontend Guidelines

This repository hosts the **Kaliop Frontend Guidelines** documentation, and is built with [VitePress](https://vitepress.dev/).

## What you will find in the docs

| Area | Topics |
|------|--------|
| **Getting started** | Purpose, tech stack overview, folder conventions (`components/ui`, `styles/`), migration notes vs older Sass/CSS-modules workflows |
| **Tailwind CSS** | Installation and editor setup, styles architecture, design tokens (colors, spacing, typography, easings), layout, custom variants |
| **Components** | Atomic design, naming conventions |
| **Styling components** | [tailwind-variants](https://www.tailwind-variants.org/) (slots, variants), override patterns |
| **Storybook** | Stories, organization, args/argTypes, multiple stories, decorators |

Each project's section contains its own documentation (e.g. `getting-started/`, `tailwind/`, `components/`, `storybook/`).

## Prerequisites

- **Node.js** 20 or higher ([nodejs.org](https://nodejs.org/); LTS is recommended)

## Installation

```bash
npm install
```

## Local development

Start the dev server with hot reload:

```bash
npm run dev
```

Then open the URL shown in the terminal. This project sets VitePress `base` to `/frontend-guidelines/`, so local URLs typically look like:

`http://localhost:5173/frontend-guidelines/`

## Production build

Build the static site (output under `.vitepress/dist` by default):

```bash
npm run build
```

Local build preview: 

```bash
npm run preview 
```

When the site is deployed behind a path prefix, hosting should match the configured `base` (`/frontend-guidelines/` in `.vitepress/config.mts`).
