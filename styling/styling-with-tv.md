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
    root: "flex flex-col gap-3",
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
const classes = tv({
  slots: {
    root: "rounded-full",
  },
  variants: {
    size: {
      default: { root: "size-[50px]" },
      small: { root: "size-[30px]" },
    },
  },
});

type UiMyComponentProps = {
  size?: "default" | "small";
  title: string;
};

const UiMyComponent = ({ size = "default", title }: UiMyComponentProps) => {
  const { root } = classes({ size });

  return <div className={root()}>{title}</div>;
};
```

Props are typed **explicitly** — variant props (`size`) and any others (content, handlers, `overrideClasses`...) live in the same type.

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

`tailwind-merge` (which resolves class conflicts) already knows Tailwind's default utilities — including the **numeric spacing scale** (`p-4`, `gap-8`...) and `--color-*` tokens. Those need no configuration.

It does **not** read your `@theme`, though. So if you use **named** tokens that aren't part of the defaults — such as named spacing like `p-md` (see [Spacing](/tailwind/design-tokens/spacing)) — you must register their keys, or `tailwind-merge` won't treat them as conflicting. A thin wrapper around `tv` centralises that config:

```typescript
// lib/tailwindVariants.ts

import { tv as tvBase, type TV } from "tailwind-variants";

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMergeConfig: {
      theme: {
        // Named spacing tokens (numeric ones are already known)
        spacing: ["xs", "sm", "md", "lg", "xl", "2xl"],
      },
    },
  });
```

::: warning Keep this list in sync
These keys must match the named tokens in your `@theme` — `tailwind-merge` can't read them for you. Whenever you add or rename a named token, update this list, or class overrides for that token will silently stop merging correctly.
:::

If your project uses only the numeric scale and default colors, you don't need this wrapper — import `tv` directly from `tailwind-variants`. If you do add it, always import `tv` from the wrapper (not from `tailwind-variants`) so the config applies everywhere.
