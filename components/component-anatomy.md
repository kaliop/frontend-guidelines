# Component Anatomy

[Naming Conventions](/components/naming-conventions) covers the files and folders of a component. This page covers the inside of the main component file: a suggested section order and where each piece lives.

::: info Framework agnostic
Examples are in React (the baseline for our examples). Treat this as a **suggestion, not a rule** — keep the overall structure, and adapt the concrete syntax to your framework and project.
:::

## The three sections

1. **Props** — a single, exported, **explicitly typed** `UiComponentNameProps`: variant props, content, and the optional [`overrideClasses`](/styling/override-classes) object. Document each prop with JSDoc so it surfaces in IDE tooltips and Storybook controls.
2. **Styles** — the [`tv()`](/styling/styling-with-tv) definition at **module scope** (defined once). Each element maps to a named [slot](/styling/styling-with-tv#slots); prop-driven style changes go in [variants](/styling/styling-with-tv#variants).
3. **Component** — read the props (with defaults where needed), get the slot functions from `classes()`, and render. Forward `overrideClasses?.root` on the `root` slot so the parent can position the component (see [Self-contained Components](/components/self-contained-components)).

## Reference example (React)

```tsx
// UiCard/UiCard.tsx

import { tv } from "tailwind-variants";

// 1. Props
export type UiCardProps = {
  /** Card title. */
  title: string;
  /** Supporting text under the title. */
  description: string;
  /**
   * Visual size.
   * @default "default"
   */
  size?: "default" | "compact";
  /** Classes injected by the parent for positioning. */
  overrideClasses?: {
    root?: string;
  };
};

// 2. Styles
const classes = tv({
  slots: {
    root: "flex flex-col",
    titleElement: "heading-6",
    descriptionElement: "body-m",
  },
  variants: {
    size: {
      default: { root: "gap-3" },
      compact: { root: "gap-2" },
    },
  },
});

// 3. Component
const UiCard = ({
  title,
  description,
  size = "default",
  overrideClasses,
}: UiCardProps) => {
  const { root, titleElement, descriptionElement } = classes({ size });

  return (
    <div className={root({ class: overrideClasses?.root })}>
      <h3 className={titleElement()}>{title}</h3>
      <p className={descriptionElement()}>{description}</p>
    </div>
  );
};

export default UiCard;
```

::: tip
Keep this structure consistent across components so any file is easy to scan.
:::
