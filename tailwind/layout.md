# Layout

The layout system relies on two utilities: `layout-container` for centering and margins, and `layout-grid` for the responsive grid.

## Layout Tokens

Layout parameters are defined as tokens:

```css
/* styles/configs/layout.css */

@theme {
  --layout-width: 1440px;

  --grid-columns-number: 4;
  --grid-desktop-columns-number: 12;
  --grid-gap: 16px;
  --grid-desktop-gap: 32px;
}
```

::: tip
These values are commonly used defaults, but they may vary depending on your project's design specifications.
:::

## Layout Container

The `layout-container` utility creates a centered container with responsive side margins and a maximum width.

```css
/* styles/utilities/layout.css */

@utility layout-container {
  display: grid;
  grid-template-columns:
    1fr min(calc(100% - var(--spacing-4) * 2), var(--layout-width))
    1fr;

  & > * {
    grid-column: 2 / -2;
  }
}
```

### How it works

This utility uses CSS Grid to create a 3-column layout:

```
|  column 1  |       column 2 (content)       |  column 3  |
|    1fr     |      min(..., 1440px)          |    1fr     |
```

**Breaking down the code:**

1. **`display: grid`** — Activates CSS Grid on the container.

2. **`grid-template-columns: 1fr min(...) 1fr`** — Creates 3 columns:
   - Column 1: `1fr` (flexible, takes remaining space → left margin)
   - Column 2: `min(calc(100% - margins), 1440px)` (content area)
   - Column 3: `1fr` (flexible, takes remaining space → right margin)

3. **`min(calc(100% - var(--spacing-4) * 2), var(--layout-width))`** — The center column width is the **smaller** of:
   - `100%` minus side margins (full width with padding)
   - `1440px` (maximum width)
   
   This ensures the content never exceeds the max width, but shrinks on smaller screens.

4. **`& > * { grid-column: 2 / -2; }`** — All direct children are automatically placed in column 2 (the center column).

### Visual result

```
|  margin  |        content (max 1440px)        |  margin  |
```

On small screens, margins are minimal. On large screens, margins grow to keep content centered at max width.

## Layout Grid

The `layout-grid` utility creates a responsive grid: 4 columns on mobile, 12 columns on desktop.

```css
@utility layout-grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns-number), 1fr);
  column-gap: var(--grid-gap);

  @variant lg {
    grid-template-columns: repeat(var(--grid-desktop-columns-number), 1fr);
    column-gap: var(--grid-desktop-gap);
  }
}
```

### How it works

**Breaking down the code:**

1. **`display: grid`** — Activates CSS Grid on the container.

2. **`grid-template-columns: repeat(var(--grid-columns-number), 1fr)`** — Creates a grid with:
   - `repeat(4, 1fr)` on mobile → 4 equal-width columns
   - `repeat(12, 1fr)` on desktop → 12 equal-width columns
   
   The `1fr` unit means each column takes an equal fraction of the available space.

3. **`column-gap: var(--grid-gap)`** — Adds spacing between columns (16px mobile, 32px desktop).

4. **`@variant lg { ... }`** — At the `lg` breakpoint (desktop), the grid switches to 12 columns with larger gaps.

### Placing items in the grid

Use Tailwind's `col-span-*` utilities to define how many columns an element should occupy:

```html
<div class="layout-grid">
  <!-- Full width on mobile (4/4), half width on desktop (6/12) -->
  <div class="col-span-4 lg:col-span-6">...</div>
  
  <!-- Full width on mobile (4/4), one third on desktop (4/12) -->
  <div class="col-span-4 lg:col-span-4">...</div>
</div>
```

## Usage

Combine both utilities to create page sections:

```html
<section class="layout-container">
  <div class="layout-grid">
    <div class="col-span-4 lg:col-span-6">Left content</div>
    <div class="col-span-4 lg:col-span-6">Right content</div>
  </div>
</section>
```

::: warning
These utilities are meant for page and component layout only. Do not apply them directly to content elements, as they set properties like `display: grid` that could interfere with your content styling.
:::
