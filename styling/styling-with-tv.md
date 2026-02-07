# Styling with Tailwind Variants

[Tailwind Variants](https://www.tailwind-variants.org/) is a library that brings a **slots** and **variants** system for organizing component styling with Tailwind CSS. It is framework-agnostic.

## Tailwind Merge

When combining Tailwind classes dynamically (e.g. merging a component's default classes with override classes from a parent), class conflicts can occur. For example, `"p-4 p-6"` would apply both padding values instead of the last one winning.

[tailwind-merge](https://github.com/dcastil/tailwind-merge) solves this by intelligently resolving conflicts: it detects that `p-4` and `p-6` target the same CSS property and keeps only the last one.

Tailwind Variants supports tailwind-merge as an optional peer dependency for [automatic conflict resolution](https://www.tailwind-variants.org/docs/introduction#automatic-conflict-resolution). When installed alongside tailwind-variants, class overrides work correctly without you having to think about it.

::: warning
Always install `tailwind-merge` alongside `tailwind-variants`. Without it, overriding styles from a parent component may not work as expected.
:::

## Slots

Slots are the core concept. Each DOM element in a component is associated with a named **slot**, keeping classes organized by element.

```typescript
const classes = tv({
  slots: {
    root: "flex flex-col gap-m",
    titleElement: "heading-6",
    descriptionElement: "body-m",
  },
});

const { root, titleElement, descriptionElement } = classes();

return (
  <div className={root()}>
    <h3 className={titleElement()}>{title}</h3>
    <p className={descriptionElement()}>{description}</p>
  </div>
);
```

## Variants

Variants allow you to change styles dynamically. Each variant can modify one or more slots. The variant value is typically driven by a component prop or a computed value.

```typescript
const UiMyComponent = ({ size = "default" }) => {
  const classes = tv({
    slots: {
      root: "rounded-full",
    },
    variants: {
      size: {
        default: { root: "size-50" },
        small: { root: "size-30" },
      },
    },
  });

  // The variant value comes from the component's prop
  const { root } = classes({ size });

  return <div className={root()} />;
};
```

This way, the parent component controls the style by passing a prop:

```html
<UiMyComponent size="small" />
```

## Overriding Styles

Slots **can** receive classes from props to allow a parent component to override styles:

```typescript
<div className={root({ class: overrideClasses?.root })}>
```

However, this is **not mandatory on every slot**. Only expose override capability on slots where it makes sense on a case-by-case basis. Most internal elements don't need to be overridable.

::: tip
This pattern is detailed in the [Override Classes](/styling/override-classes) page.
:::

## Slot Naming Convention

Slots follow a consistent naming convention:

| Suffix | Purpose | Example |
|--------|---------|---------|
| `root` | Root element | `root` |
| `*Element` | HTML elements | `titleElement`, `iconElement` |
| `*Component` | Child components | `ctaComponent` |
| `*Container` | Layout wrappers | `textContainer` |

## Custom Wrapper

When using custom design tokens (like custom spacing values), `tailwind-merge` needs to be configured to recognize them. A custom wrapper around `tv` handles this:

```typescript
// lib/tailwindVariants.ts

import { tv as tvBase } from "tailwind-variants";

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMergeConfig: {
      theme: {
        spacing: ["1", "2", "3", "4", "5", "6", "7", "8"],
      },
      conflictingClassGroups: {
        px: ["pl", "pr"],
        py: ["pt", "pb"],
        // ...
      },
    },
  });
```

::: warning
Always import `tv` from this wrapper instead of directly from `tailwind-variants`. This ensures your custom tokens are handled correctly when merging classes.
:::
