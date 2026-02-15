# Installation and editor setup

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework. Before using it in your project, you need to install and configure it according to your build tool and framework.

## How it works

Tailwind scans your HTML files, JavaScript components, and templates for class names, generates the corresponding styles, and writes them to a static CSS file. It is fast, flexible, and reliable — with zero runtime.

## Installation

Installation steps depend on your tooling. The official documentation describes the recommended approach for each setup:

- **Vite** — If you use Vite (React, Vue, SvelteKit, etc.), follow the [Installing Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite) guide. You will install `tailwindcss` and `@tailwindcss/vite`, add the plugin to your Vite config, and import Tailwind in your main CSS file with `@import "tailwindcss";`.

For other setups (PostCSS, Tailwind CLI, or Play CDN), see the [Tailwind CSS installation overview](https://tailwindcss.com/docs/installation).

## Framework-specific guides

The exact installation can vary depending on the framework you use (Next.js, Nuxt, Angular, Laravel, etc.). Tailwind provides [framework-specific guides](https://tailwindcss.com/docs/installation/framework-guides) that cover the recommended way to install and configure Tailwind in each environment.

Check the [Framework guides](https://tailwindcss.com/docs/installation/framework-guides) page to find the guide that matches your stack. If your framework is not listed, you can fall back to the Vite plugin, PostCSS, or the Tailwind CLI.

If you're coming from our previous guidelines (Sass, CSS modules), see [Differences from previous guidelines](/getting-started/#differences-from-previous-guidelines) in Getting started.

## Editor setup

To get the most out of Tailwind in your IDE, we recommend using the tooling described in the official [Editor setup](https://tailwindcss.com/docs/editor-setup) guide.

Two tools are especially useful:

- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)** — The official extension (e.g. for VS Code and Cursor) provides autocomplete for utility classes, syntax highlighting for Tailwind's custom CSS (`@theme`, `@variant`, etc.), linting, and hover previews that show the generated CSS. It helps avoid typos and makes it easier to work with design tokens and custom utilities.

- **[Prettier plugin for Tailwind CSS](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)** — The official Prettier plugin automatically sorts class names in a consistent order. It works with your Tailwind config and keeps markup readable, especially when many classes are applied to a single element.

For details and support in VS Code and Cursor, see the [Editor setup](https://tailwindcss.com/docs/editor-setup) documentation.

## Next steps

Once Tailwind is installed, continue with:

- [Styles Architecture](/tailwind/styles-architecture) — folder structure, `@theme`, and custom utilities
- [Design Tokens](/tailwind/design-tokens/) — colors, spacing, typography, and easings
