# Custom Tailwind Variants

Tailwind CSS allows you to create [custom variants](https://tailwindcss.com/docs/hover-focus-and-other-states#custom-variants) via `@custom-variant`. This lets you define reusable selectors — like `hover:` or `focus:` — tailored to your project's specific needs.

## Defining Custom Variants

Custom variants are defined in a dedicated file:

```css
/* styles/helpers/variants.css */

@custom-variant hoverfocus (&:hover, &:focus);
@custom-variant dataactive (&[data-active]:not([data-active="false"]));
@custom-variant opened (&[open]:not([open="false"]));
```

## Usage

Use them in your markup just like any native Tailwind variant:

```html
<button class="hoverfocus:text-primary">...</button>
<div class="opened:bg-primary">...</div>
```

## When to Create a Custom Variant

- When a selector is **used repeatedly** across multiple components
- When the equivalent native Tailwind syntax would be **too verbose**
