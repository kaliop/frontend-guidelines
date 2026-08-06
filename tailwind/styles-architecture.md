# Tailwind CSS 4 & Styles Architecture

## Tailwind CSS 4

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework. Instead of writing custom CSS, you apply pre-existing utility classes directly in your markup.

### Core Concepts

- **Utility-first**: Style elements by combining small, single-purpose classes like `flex`, `p-4`, `text-center`
- **[`@theme`](https://tailwindcss.com/docs/theme)**: Define your design tokens (colors, spacing, fonts...) directly in CSS using the `@theme` directive
- **[`@utility`](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities)**: Create your own reusable utility classes that combine multiple properties
- **[`@apply`](https://tailwindcss.com/docs/functions-and-directives#apply-directive)**: Reuse existing utility classes inside your own CSS — for example within an `@utility` definition
- **[`@custom-variant`](https://tailwindcss.com/docs/hover-focus-and-other-states#custom-variants)**: Define a custom variant (a selector to use like `hover:` or `focus:`)
- **[`@variant`](https://tailwindcss.com/docs/functions-and-directives#variant-directive)**: Apply an existing variant (like `lg:` or `hover:`) to CSS inside a custom utility

## Styles Folder Structure

```
styles/
├── index.css       → Entry point, imports all other files
├── base/           → Element styles and resets (plain CSS)
├── configs/        → Design tokens — @theme
├── utilities/      → Custom utility classes — @utility
└── variants/       → Custom variants — @custom-variant
```

## Folder Descriptions

Each folder maps to **exactly one** kind of rule, which tells you where new code goes:

| Folder | Purpose | Directive |
|--------|---------|-----------|
| `base/` | Global styles applied to HTML elements (body, links, buttons...). Resets and foundational rules. | `@layer base` |
| `configs/` | Design tokens: colors, spacing, typography, easings, layout variables. | `@theme` |
| `utilities/` | Custom utility classes that combine multiple properties, like `layout-container` or `heading-1`. | `@utility` |
| `variants/` | Custom variants such as `hoverfocus` or `opened`. | `@custom-variant` |

::: tip Which folder does my code go in?
Follow the directive, not the intent:

- an element or reset style (`@layer base`) → `base/`
- a design token (`@theme`) → `configs/`
- a custom utility class (`@utility`) → `utilities/`
- a custom variant (`@custom-variant`) → `variants/`
:::

## Import Order

`@import "tailwindcss"` **must come first** — it sets up Tailwind's theme and cascade layers. The grouping below is for **readability and consistency**; it does not drive the cascade (see the note under the snippet):

```css
/* styles/index.css */

/* 1. Tailwind (theme + base/components/utilities layers) */
@import "tailwindcss";

/* 2. Base styles */
@import "./base/base.css";

/* 3. Configs (design tokens) */
@import "./configs/color.css";
@import "./configs/spacing.css";
/* ... */

/* 4. Utilities */
@import "./utilities/layout.css";
@import "./utilities/text.css";
/* ... */

/* 5. Variants */
@import "./variants/variants.css";
/* ... */
```

::: tip Precedence comes from layers, not import order
Tailwind v4 organises styles into cascade layers — `theme`, `base`, `components`, `utilities` (lowest to highest priority). A **utility always wins over a `base` rule** through this layer order, so the position of your `@import`s does not change precedence. Likewise, `@theme`, `@utility`, and `@custom-variant` are registered wherever they are imported.

The one rule that matters for the cascade: write your resets and element styles inside `@layer base { … }`. Unlayered CSS beats every layer, so base styles left outside a layer would override your utilities.
:::
