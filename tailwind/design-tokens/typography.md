# Typography

Typography is defined in two parts:
- **Base tokens** (sizes, line-heights) in `configs/`
- **Typography utilities** (heading, body, label) in `utilities/`

## Base Tokens

Base tokens define the fundamental typographic values that will be used to build typography utilities.

```css
/* styles/configs/text.css */

@theme {
  --text-*: initial;

  /* Text sizes */
  --text-sm: 1.4rem;
  --text-base: 1.6rem;
  --text-lg: 1.8rem;
  --text-xl: 2rem;
  --text-2xl: 2.4rem;
  --text-3xl: 3.2rem;
  --text-4xl: 4rem;
  --text-5xl: 6rem;
  --text-6xl: 7.2rem;
  /* ... */

  /* Line heights */
  --leading-s: 1.14;
  --leading-m: 1.2;
  --leading-l: 1.66;
}
```

## Typography Utilities

Typography utilities are composite classes that combine size, line-height, and font-weight into reusable styles. They are defined using `@utility` in the utilities folder.

```css
/* styles/utilities/text.css */

@utility heading-1 {
  @apply leading-s text-4xl font-semibold;

  @variant lg {
    @apply text-6xl;
  }
}

@utility body-m {
  @apply leading-m text-base font-normal;
}
```

### Responsive Typography

Designers often define typography styles that change based on screen size (e.g., smaller headings on mobile). Using `@variant`, you can bundle these responsive variations directly into the utility class.

In the example above, `heading-1` is `text-4xl` (40px) on mobile and becomes `text-6xl` (72px) on desktop (`lg` breakpoint). This keeps responsive logic centralized in one place rather than scattered across components.

::: tip
These styles are examples. Actual values should match the typographic choices from your design system.
:::

## Usage

Use typography utilities directly in your markup:

```html
<h1 class="heading-1">Page title</h1>
<h2 class="heading-2">Section title</h2>
<p class="body-m">Paragraph text</p>
<span class="label-m">Label text</span>
```
