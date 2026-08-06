# Design Tokens

## What are Design Tokens?

Design tokens are the foundational values of a design system. They represent the smallest design decisions—colors, spacing, typography, animations—stored in a centralized and reusable way.

Instead of hardcoding values like `#3B82F6` or `16px` throughout your codebase, you reference tokens like `primary` or `spacing-md`.

## Why use Design Tokens?

- **Single source of truth**: All design values are defined in one place
- **Easy updates**: Changing a token value updates it everywhere automatically
- **Consistency**: Ensures visual coherence across all components
- **Communication**: Creates a shared vocabulary between designers and developers

## How Tokens are Defined

Tokens are defined using Tailwind CSS v4's `@theme` system, in CSS files inside the [`configs/`](/tailwind/styles-architecture) folder. Here is a simplified example:

```css
@theme {
  --color-primary: oklch(0.4965 0.2504 264.43);
  --color-secondary: oklch(0.9087 0.1753 136.27);
  --spacing-md: 1rem;
}
```

Each token category (colors, spacing, typography, easings) is explained in detail in its dedicated page.

This automatically generates Tailwind utility classes:

| Token definition  | Generated classes                                 |
| ----------------- | ------------------------------------------------- |
| `--color-primary` | `bg-primary`, `text-primary`, `border-primary`... |
| `--spacing-md`    | `p-md`, `m-md`, `gap-md`...                       |

::: info Token namespaces
Each token belongs to a **namespace** — the prefix before its name (`--color-*`, `--spacing-*`, `--text-*`, `--ease-*`, `--breakpoint-*`…). The namespace tells Tailwind which utilities to generate: that's why `--color-primary` produces color utilities and `--spacing-md` produces spacing ones.
:::

::: tip
Tokens are defined in CSS, not JavaScript. This keeps configuration close to where styles are written and makes it easy to use CSS features like media queries for responsive tokens — see [Breakpoints & Responsive](/tailwind/breakpoints).
:::

## Token Categories

| Category       | Description                                  | Page                                              |
| -------------- | -------------------------------------------- | ------------------------------------------------- |
| **Colors**     | Color palette in OKLCH                       | [Colors](/tailwind/design-tokens/colors)           |
| **Spacing**    | Base unit, auto-generated scale, named tokens | [Spacing](/tailwind/design-tokens/spacing)         |
| **Typography** | Font sizes, line heights, and text utilities  | [Typography](/tailwind/design-tokens/typography)   |
| **Easings**    | Animation timing functions                   | [Easings](/tailwind/design-tokens/easings)         |
