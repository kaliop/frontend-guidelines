# Getting Started

## Purpose

These guidelines define the standards and best practices for frontend development at Kaliop. They aim to:

- **Ensure consistency** across all projects
- **Facilitate onboarding** for new team members
- **Improve maintainability** with clear conventions
- **Enable reusability** through modular component architecture

::: info Framework agnostic
These guidelines focus on architecture, styling, and component organization. They can be applied regardless of the frontend framework used (React, Vue, Angular, etc.).
:::

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Tailwind CSS** | Utility-first CSS framework |
| **tailwind-variants** | Component styling with slots and variants |
| **Storybook** | Component documentation and visual testing |

## Project Structure

```
components/
└── ui/                    # Design System
    ├── atoms/             # Basic building blocks
    ├── molecules/         # Combinations of atoms
    ├── organisms/         # Complex UI sections
    └── primitives/        # Headless/unstyled components

styles/
├── base/                  # Base styles and resets
├── configs/               # Design tokens (@theme)
├── helpers/               # Custom variants and helpers
└── utilities/             # Utility classes
```

## Differences from previous guidelines

If you're coming from our previous guidelines, which relied on **Sass** and sometimes **CSS modules**, here's how the current Tailwind-based approach differs.

### Sass is no longer necessary

Our previous guidelines relied on **Sass** for variables, nesting, and imports. With Tailwind CSS, **Sass is no longer necessary**. Tailwind is designed as a full-featured CSS build tool for a specific workflow and is not intended to be used with preprocessors like Sass, Less, or Stylus — think of Tailwind itself as your preprocessor. For modern browsers, you get what you used to rely on Sass for in other ways:

- **Variables** — Native CSS custom properties (`@theme` and `var(--...)`) are supported everywhere Tailwind runs.
- **Nesting** — Tailwind uses Lightning CSS to process nested CSS, and native CSS nesting is also well supported in current browsers.
- **Imports** — Tailwind bundles CSS files included via `@import` at build time, without a separate preprocessor.
- **Colors and math** — Use your design tokens or modern CSS (`color-mix()`, `min()`, `max()`) instead of Sass functions like `darken`/`lighten`.

### CSS modules are not required

**CSS modules** are not required when using Tailwind. Tailwind can co-exist with them (e.g. when introducing Tailwind into an existing codebase), but the official docs [recommend avoiding the combination](https://tailwindcss.com/docs/compatibility#css-modules) when possible. Reasons:

- **Scoping** — CSS modules solve scoping problems that don't arise with utility classes: each class has a single, predictable effect wherever it's used, so there's no need for file-level scope.
- **Performance** — Build tools process each CSS module separately. With many modules, Tailwind has to run once per file, which slows down builds and worsens developer experience.

Prefer styling with utility classes in your markup (and, when needed, shared styles in a small set of global or layout CSS files). If you do use component `<style>` blocks (Vue, Svelte, Astro), either avoid Tailwind-specific features there or import your global styles with `@reference` so that `@apply` and theme variables work as expected.

For full details on browser support, preprocessors, and CSS modules, see the official [Compatibility](https://tailwindcss.com/docs/compatibility) documentation.

## How to use this guide

Depending on your task, start with the relevant section:

| Task | Recommended sections |
|------|---------------------|
| Create a new component | [Atomic Design](/components/), [Naming Conventions](/components/naming-conventions), [Styling with TV](/styling/styling-with-tv) |
| Understand the styling system | [Design Tokens](/tailwind/design-tokens/), [Layout](/tailwind/layout) |
| Document a component | [Storybook](/storybook/) |
