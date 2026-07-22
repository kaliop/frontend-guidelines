# Spacing

Spacing tokens ensure visual consistency and a harmonious rhythm throughout the interface.

## The base unit generates the scale

You define a **single** value, `--spacing` (the base multiplier). Tailwind CSS v4 then **generates the whole spacing scale automatically** — you don't list each step.

```css
/* styles/configs/spacing.css */

@theme {
  --spacing: 4px;
}
```

Every numeric spacing utility is derived as `n × --spacing`, for **any integer**:

| Utility | Computed as | Value |
|---------|-------------|-------|
| `p-1` | `1 × 4px` | 4px |
| `p-2` | `2 × 4px` | 8px |
| `p-4` | `4 × 4px` | 16px |
| `p-8` | `8 × 4px` | 32px |
| `p-13` | `13 × 4px` | 52px |

The scale is **linear**: `p-5` is always `20px`, `gap-6` is `24px`, etc. This applies to every spacing/sizing utility (`p-*`, `m-*`, `gap-*`, `w-*`, `h-*`...).

::: tip
`4px` is Tailwind's default base value (it ships as `--spacing: 0.25rem`). You only need to override `--spacing` if your design system uses a different base unit.
:::

## Curated (non-linear) scales: use named tokens

Designers often use a **progressive scale with gaps** (e.g. `4, 8, 16, 24, 40, 64`) rather than a linear one. Do **not** try to express it with numeric names — a numeric name implies linear steps, so `p-5` on a gapped scale becomes meaningless.

Instead, define **named** tokens that carry the design's intent:

```css
@theme {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 40px;
  --spacing-2xl: 64px;
}
```

This generates `p-md`, `gap-lg`, `mt-2xl`, and so on. The names carry the meaning, and the gaps between values are expected — nobody wonders what `p-5` should be.

::: warning
Never put **numeric** names on a non-linear scale. Numeric utilities are meant for the linear base scale; a curated scale belongs in **named** tokens.
:::

You then choose how strict to be:

| Approach | How | When |
|----------|-----|------|
| **Hybrid** (recommended) | Keep `--spacing` **and** add your named tokens | Use `p-md` by default, keep `p-4` / `p-[13px]` as an escape hatch |
| **Closed scale** | Reset the namespace with `--spacing-*: initial`, then define only your named tokens | Strict designs where only the approved steps may be used |

## Usage

```html
<!-- Linear scale -->
<section class="py-6 px-4">...</section>
<div class="mt-2 mb-4">...</div>
<div class="flex gap-3">...</div>

<!-- Named scale -->
<section class="py-lg px-md">...</section>
<div class="flex gap-sm">...</div>
```
