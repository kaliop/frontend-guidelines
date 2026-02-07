# Design Tokens

## What are Design Tokens?

Design tokens are the foundational values of a design system. They represent the smallest design decisions—colors, spacing, typography, animations—stored in a centralized and reusable way.

Instead of hardcoding values like `#3B82F6` or `16px` throughout your codebase, you reference tokens like `primary` or `spacing-m`.

## Why use Design Tokens?

- **Single source of truth**: All design values are defined in one place
- **Easy updates**: Changing a token value updates it everywhere automatically
- **Consistency**: Ensures visual coherence across all components
- **Communication**: Creates a shared vocabulary between designers and developers

## How Tokens are Defined

Tokens are defined using Tailwind CSS v4's `@theme` system directly in CSS files. Here is a simplified example:

```css
@theme {
  --color-primary: oklch(0.4965 0.2504 264.43);
  --color-secondary: oklch(0.9087 0.1753 136.27);
  --spacing-m: 12px;
}
```

Each token category (colors, spacing, typography, easings) is explained in detail in its dedicated page.

This automatically generates Tailwind utility classes:

| Token definition  | Generated classes                                 |
| ----------------- | ------------------------------------------------- |
| `--color-primary` | `bg-primary`, `text-primary`, `border-primary`... |
| `--spacing-m`     | `p-m`, `m-m`, `gap-m`...                          |

::: tip
Tokens are defined in CSS, not JavaScript. This keeps configuration close to where styles are written and makes it easy to use CSS features like media queries for responsive tokens.
:::

## Token Categories

| Category       | Description                                  | Page                                              |
| -------------- | -------------------------------------------- | ------------------------------------------------- |
| **Colors**     | Color palette and semantic colors            | [Colors](/tailwind/design-tokens/colors)           |
| **Spacing**    | Spacing scale with responsive values         | [Spacing](/tailwind/design-tokens/spacing)         |
| **Typography** | Font sizes, line heights, and text utilities  | [Typography](/tailwind/design-tokens/typography)   |
| **Easings**    | Animation timing functions                   | [Easings](/tailwind/design-tokens/easings)         |
