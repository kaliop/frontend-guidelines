# Self-contained Components

A component is responsible for **its own inside**, never for **its place in the outside world**. It should blend into any environment it is dropped into — a grid, a flex row, a sidebar — without disturbing its surroundings.

This is the principle behind the [Override Classes](/styling/override-classes) pattern: it explains *why* a parent, not the component, controls layout and outer spacing.

## Two rules

### 1. A component blends into any environment

A component must not make assumptions about **where** it is used. It does not decide:

- its **width** — it takes the width its parent gives it, rather than forcing a fixed `width`;
- its **position** — no `position: absolute`, `float`, or grid placement decided from the inside;
- the **space around it** — margins to its neighbours are not its concern.

This is what makes a component reusable: the same `UiCard` can sit in a 3-column grid, a modal, or a full-width section without any change.

### 2. A component's styles never leak outside

The classic case is the **outer margin**. A component that carries its own `margin-right` becomes unpredictable: the margin is there even when it isn't wanted, it can collapse in surprising ways, and it couples the component to one specific context.

::: warning
Never set an outer margin (or positioning) inside a component. Outer spacing is contextual — it belongs to the parent.
:::

## Where does spacing live?

| Concern | Example | Owner |
|---------|---------|-------|
| **Inner** spacing | `padding`, `gap` between the component's own elements | **The component** |
| **Outer** spacing | margin to neighbours, column span, alignment | **The parent** |

In Tailwind, the idiom that goes with this principle is **`gap` on the parent container** rather than margins on the children. It keeps every child margin-free by design.

### ❌ The component pushes space outward

```tsx
// UiCard.tsx — the card imposes a margin on whatever follows it
const classes = tv({
  slots: {
    root: "mb-6 flex flex-col gap-3", // ❌ mb-6 leaks into the layout
  },
});
```

### ✅ The parent owns the spacing between components

```tsx
// The parent spaces its children with gap — cards stay margin-free
<div className="flex flex-col gap-6">
  <UiCard />
  <UiCard />
</div>
```

## How the parent applies layout

When the parent needs to position or space a component, it does so from the outside — it does **not** reach into the component's styles. Two channels:

- **Grid placement** — utility classes like `col-span-*` applied by the parent, as shown in [Layout](/tailwind/layout).
- **Contextual adjustments** — the [`overrideClasses`](/styling/override-classes) prop, which exposes the `root` slot precisely so the parent can inject positioning and outer spacing.

```tsx
// The parent decides where the card goes and how it sits in the grid
<UiCard
  overrideClasses={{
    root: "col-span-6 mt-auto", // positioning + outer spacing, from the parent
  }}
/>
```

::: tip
This is exactly why [Override Classes](/styling/override-classes) recommends always exposing `root`: it is the seam through which the parent takes responsibility for layout.
:::

## Why it matters

- **Reusability** — a context-agnostic component works everywhere without tweaks.
- **Predictability** — no margins leaking or collapsing where you didn't expect them.
- **Clear ownership** — the parent composes the layout; the component renders itself. Each side has one job.
