# Breakpoints & Responsive

Our layouts are **mobile-first**: you style the mobile version with unprefixed utilities, then layer changes on top for larger screens. This page lists the breakpoints and shows how to apply a token responsively.

## Breakpoints are tokens

Breakpoints are design tokens too. In Tailwind CSS v4 they are defined with `@theme` using the `--breakpoint-*` namespace, so they live in `configs/` alongside the other tokens (see [Styles Architecture](/tailwind/styles-architecture)).

Each `--breakpoint-<name>` token automatically generates a matching variant (`<name>:`). These are the Tailwind defaults:

| Variant | Min width |
|---------|-----------|
| `sm:` | 40rem (640px) |
| `md:` | 48rem (768px) |
| `lg:` | 64rem (1024px) |
| `xl:` | 80rem (1280px) |
| `2xl:` | 96rem (1536px) |

::: tip
These are Tailwind's default breakpoints. Adjust them to your design in `configs/` — for example, reset everything and define your own:

```css
/* styles/configs/breakpoints.css */

@theme {
  --breakpoint-*: initial;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 64rem;
}
```
:::

Across these guidelines, **`lg` is the primary desktop breakpoint** — it is where the [grid switches from 4 to 12 columns](/tailwind/layout) and where responsive typography scales up.

## Mobile-first: the golden rule

A prefixed utility applies **from that breakpoint and up** — never "only at that size". So:

- **Unprefixed = mobile** (and everything above, until overridden).
- **`lg:` = `lg` and larger.**

::: warning
`sm:` does **not** mean "on mobile". It targets the small breakpoint **and above**. Style mobile with unprefixed utilities, then override upward.
:::

```html
<!-- ✅ Mobile-first: centered on mobile, left-aligned from lg -->
<div class="text-center lg:text-left"></div>

<!-- ❌ Wrong: only centers from sm upward, mobile is left unset -->
<div class="sm:text-center"></div>
```

## Applying a token at a breakpoint

This is the everyday answer to *"how do I use a token responsively?"*: use the token's utility class, prefixed by the breakpoint. The unprefixed value is the mobile value; each prefix overrides it upward.

```html
<!-- Spacing token, mobile-first cascade:
     16px (p-4) on mobile, 32px (p-6) from lg, 48px (p-8) from xl -->
<section class="p-4 lg:p-6 xl:p-8">...</section>

<!-- Gap token: grows on desktop -->
<div class="flex flex-col gap-3 lg:gap-6">...</div>
```

Each prefix overrides the value **from its breakpoint upward**: above, `lg:p-6` holds from `lg` through `xl`, then `xl:p-8` takes over from `xl` and up. You only add a prefix where the value needs to change — unset breakpoints keep the value inherited from the one below.

The same works for any token-backed utility (colors, spacing, layout...). You are not changing the token's value — you are choosing **which token applies at which breakpoint**.

## Targeting a range

Every breakpoint also has a `max-*` variant, so you can target a range — or a single breakpoint by stacking both:

```html
<!-- Only between md and xl -->
<div class="md:max-xl:flex">...</div>

<!-- Only at the md breakpoint (md up to lg) -->
<div class="md:max-lg:flex">...</div>
```

## Bundling responsive rules into a utility

When the same responsive behaviour repeats, don't scatter `lg:` prefixes across every component — bake it into a composite `@utility` with `@variant`, so the responsive logic lives in one place. This is exactly how the typography utilities work:

```css
/* styles/utilities/text.css */

@utility heading-1 {
  @apply leading-s text-4xl font-semibold;

  @variant lg {
    @apply text-6xl; /* larger from lg up */
  }
}
```

`heading-1` is now responsive on its own — see [Typography](/tailwind/design-tokens/typography).
