# Spacing

Spacing tokens ensure visual consistency and a harmonious rhythm throughout the interface.

## Base Unit

The spacing system is built on a **base unit of 4px**. All spacing values are multiples of this unit, creating a consistent visual rhythm.

::: tip
The base unit and scale shown here are examples. Actual values should come from your design system (Figma or other design tool) and reflect the choices made by your designers.
:::

## Defining Spacing

```css
/* styles/configs/spacing.css */

@theme {
  --spacing: 4px;

  --spacing-1: calc(var(--spacing) * 1);   /* 4px */
  --spacing-2: calc(var(--spacing) * 2);   /* 8px */
  --spacing-3: calc(var(--spacing) * 3);   /* 12px */
  --spacing-4: calc(var(--spacing) * 4);   /* 16px */
  --spacing-5: calc(var(--spacing) * 6);   /* 24px */
  --spacing-6: calc(var(--spacing) * 8);   /* 32px */
  --spacing-7: calc(var(--spacing) * 10);  /* 40px */
  --spacing-8: calc(var(--spacing) * 12);  /* 48px */
}
```

## Usage

Tailwind generates utility classes for each spacing token:

```html
<!-- Padding -->
<div class="p-4">...</div>
<section class="py-6 px-4">...</section>

<!-- Margin -->
<div class="mt-2 mb-4">...</div>

<!-- Gap -->
<div class="flex gap-3">...</div>
```
