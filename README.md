# Kaliop Frontend Guidelines

This repository hosts the **Kaliop Frontend Guidelines** documentation, and is built with [VitePress](https://vitepress.dev/).

📖 **Live site:** <https://kaliop.github.io/frontend-guidelines/>

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

- **Node.js** 22 or higher ([nodejs.org](https://nodejs.org/); LTS is recommended). A `.nvmrc` is provided — run `nvm use`.

> [!NOTE]
> This site runs on VitePress `2.0.0-alpha`. It is a pre-release, so some APIs and defaults may change between versions.

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

## Deployment

The site is deployed automatically to **GitHub Pages** on every push to `main`, via the [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) workflow (it can also be triggered manually from the Actions tab). The workflow builds the site and publishes `.vitepress/dist`.

**Merging to `main` puts changes live immediately** at <https://kaliop.github.io/frontend-guidelines/> — there is no manual publish step. The GitHub Pages path must stay aligned with the `base` option (`/frontend-guidelines/`) in `.vitepress/config.mts`.

## Project structure

```
.
├── .vitepress/
│   ├── config.mts        # Site config: title, base, sidebar/navigation
│   └── theme/            # Theme customization (Kaliop brand colors)
├── index.md              # Home page (hero + feature cards)
├── getting-started/      # Purpose, tech stack, migration from Sass/CSS modules
├── tailwind/             # Tailwind setup, styles architecture, design tokens, layout
├── components/           # Atomic Design, naming conventions
├── styling/              # tailwind-variants (slots, variants), override patterns
└── storybook/            # Stories, organization, args/argTypes, decorators
```

Documentation content is plain Markdown; each top-level folder maps to a section of the site.

## Contributing (adding a page)

The navigation is **not** generated from the file system — it is declared explicitly. To add a new page:

1. Create the Markdown file in the relevant section folder (e.g. `tailwind/my-new-page.md`).
2. Register it in the `sidebar` array in [`.vitepress/config.mts`](.vitepress/config.mts) so it appears in the navigation. Sidebar `link` paths are root-relative and omit the `.md` extension (e.g. `/tailwind/my-new-page`).
3. If it is a new top-level section, optionally add a matching feature card in [`index.md`](index.md).

A page that isn't added to the sidebar still builds, but nothing links to it.
