# Colors

Colors are defined as tokens to ensure visual consistency across all components and make it easy to update the color palette when needed.

## Color Format: OKLCH

Colors are defined using the [OKLCH](https://oklch.com/) color format. Its three components are:

- **L** (Lightness): 0 to 1
- **C** (Chroma): color intensity
- **H** (Hue): color angle (0–360)

The **"OK"** means it is based on a *perceptually uniform* model — an improved, more accurate version of the older **LCH** format (they share the same L/C/H letters, but are not the same thing). In practice, the numbers behave the way your eyes expect.

### Why Tailwind uses it

Tailwind CSS v4 switched its default palette to OKLCH because it makes colors **predictable to work with**:

- Two colors with the same **L** look equally bright — unlike HSL or RGB, where similar numbers can read as very different brightnesses.
- You can adjust a color intuitively: raise or lower **L** for lighter/darker, **C** for more/less vivid, **H** to shift the hue — without the color drifting unexpectedly.
- It can produce more vivid colors on modern wide-gamut screens.

### How to align

- Define every color token in OKLCH, like the palette below.
- Need a variation of an existing color? Keep the same **H** and adjust **L** and/or **C**, rather than hand-picking a new hex value — your palette stays consistent.
- Pick and fine-tune values visually with [oklch.com](https://oklch.com/).

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

::: warning Accessibility — avoid alpha transparency by default
Using an alpha channel to make a color semi-transparent (e.g. `rgba(0, 0, 0, 0.25)` or `oklch(... / 0.5)`) should not be recommended unless it has been tested and validated with the design team. A translucent color changes with whatever sits behind it, which can silently break contrast ratios and is hard to test reliably. Prefer solid, opaque tokens. Reserve alpha for validated cases such as overlays/scrims (like `backdrop` above).
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
