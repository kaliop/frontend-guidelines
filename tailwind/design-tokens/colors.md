# Colors

Colors are defined as tokens to ensure visual consistency across all components and make it easy to update the color palette when needed.

## Color Format: OKLCH

Colors are defined using the [OKLCH](https://oklch.com/) color format. OKLCH offers better perceptual uniformity than HSL or RGB:

- **L** (Lightness): 0 to 1
- **C** (Chroma): Color intensity
- **H** (Hue): Color angle (0-360)

Two colors with the same L value will have the same perceived brightness, making it easier to create harmonious palettes.

## Defining Colors

```css
/* styles/configs/color.css */

@theme {
  /* Reset default Tailwind colors */
  --color-*: initial;

  /* Project UI Colors */
  --color-primary: oklch(0.4965 0.2504 264.43);
  --color-secondary: oklch(0.9087 0.1753 136.27);
  --color-white: oklch(1 0 0);
  --color-black: oklch(0.2067 0.0061 236.87);

  /* Shades of gray */
  --color-gray-01: oklch(0.3728 0.0103 278.34);
  --color-gray-02: oklch(0.9029 0.0033 17.22);
  /* ... */

  /* Utility colors */
  --color-transparent: transparent;
  --color-backdrop: rgba(0, 0, 0, 0.25);
}
```

::: tip
`--color-*: initial;` resets all default Tailwind colors. This ensures only your project's colors are available, preventing accidental use of off-brand colors.
:::

## Color Palette

| Token | Usage |
|-------|-------|
| `primary` | Brand color, CTAs, links |
| `secondary` | Accent color, highlights |
| `white` | Light backgrounds, text on dark |
| `black` | Dark text, dark backgrounds |
| `gray-01`, `gray-02`... | Shades of gray for borders, backgrounds, secondary text |
| `transparent` | Transparent backgrounds |
| `backdrop` | Overlay backgrounds (modals, menus) |

## Usage

Tailwind automatically generates utility classes for each color token:

```html
<!-- Background -->
<div class="bg-primary">...</div>
<div class="bg-gray-02">...</div>

<!-- Text -->
<p class="text-black">...</p>
<p class="text-gray-01">...</p>

<!-- Border -->
<div class="border border-gray-02">...</div>
```
