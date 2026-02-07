# Tailwind CSS 4 & Styles Architecture

## Tailwind CSS 4

[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework. Instead of writing custom CSS, you apply pre-existing utility classes directly in your markup.

### Core Concepts

- **Utility-first**: Style elements by combining small, single-purpose classes like `flex`, `p-4`, `text-center`
- **[`@theme`](https://tailwindcss.com/docs/theme)**: Define your design tokens (colors, spacing, fonts...) directly in CSS using the `@theme` directive
- **[`@utility`](https://tailwindcss.com/docs/adding-custom-styles#adding-custom-utilities)**: Create your own reusable utility classes that combine multiple properties
- **[`@custom-variant`](https://tailwindcss.com/docs/hover-focus-and-other-states#custom-variants)**: Define custom selectors to use as variants (like `hover:` or `focus:`)

## Styles Folder Structure

```
styles/
├── index.css       → Entry point, imports all other files
├── base/           → Base styles and resets
├── configs/        → Design tokens (@theme definitions)
├── helpers/        → Custom variants and helper utilities
└── utilities/      → Composite utility classes
```

## Folder Descriptions

| Folder | Purpose |
|--------|---------|
| `base/` | Global styles applied to HTML elements (body, links, buttons...). Resets and foundational rules. |
| `configs/` | Design tokens defined with `@theme`: colors, spacing, typography, easings, layout variables. |
| `helpers/` | Custom Tailwind variants (`@custom-variant`) and small reusable helpers. |
| `utilities/` | Complex utility classes (`@utility`) that combine multiple Tailwind properties, like `layout-container` or `heading-1`. |

## Import Order

The order of imports in `index.css` matters for CSS cascade. Files are imported in this specific order:

```css
/* styles/index.css */

/* 1. Tailwind base */
@import "tailwindcss";

/* 2. Base styles */
@import "./base/base.css";

/* 3. Configs (design tokens) */
@import "./configs/color.css";
@import "./configs/spacing.css";
/* ... */

/* 4. Helpers */
@import "./helpers/variants.css";
/* ... */

/* 5. Utilities */
@import "./utilities/layout.css";
@import "./utilities/text.css";
/* ... */
```

::: warning
Always respect this import order when adding new files. Utilities depend on tokens defined in configs, and helpers may rely on base styles.
:::
