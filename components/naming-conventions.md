# Naming Conventions

::: info Framework agnostic
Examples use React file conventions (PascalCase filenames, `.tsx`). The naming principles — the `Ui` prefix and one folder per component — are the same in any framework; adapt the file names and extensions to yours.
:::

## Component Naming

All UI components follow the pattern `Ui` + PascalCase:

- `UiIcon`, `UiAvatar`, `UiAccordion`, `UiHeader`

The `Ui` prefix clearly distinguishes design system components from other application components.

::: info Primitives
Headless [primitives](/components/#primitives) are the exception: they keep their library-level name (`Dialog`, `Tooltip`) **without** the `Ui` prefix. This leaves the `Ui`-prefixed name free for a styled component built on top of the primitive (e.g. a `UiDialog` wrapping `Dialog`).
:::

## Folder Structure

Each component lives in its own folder, named after the component, containing all related files:

```
UiMyComponent/
├── UiMyComponent.tsx              # Component
├── UiMyComponent.stories.tsx      # Storybook stories
├── UiMyComponent.css              # CSS (only if needed)
└── UiMyComponent.animation.ts     # Animation logic (only if needed)
```

## Sub-components

When a component has internal sub-components, they live in sub-folders within the parent component folder:

```
UiMyComponent/
├── UiMyComponent.tsx
├── UiMyComponent.stories.tsx
├── UiMyComponentPartA/
│   └── UiMyComponentPartA.tsx
├── UiMyComponentPartB/
│   └── UiMyComponentPartB.tsx
└── UiMyComponentPartC/
    └── UiMyComponentPartC.tsx
```

## File Naming Summary

| File type | Pattern | Example |
|-----------|---------|---------|
| Component | `UiComponentName.tsx` | `UiMyComponent.tsx` |
| Stories | `UiComponentName.stories.tsx` | `UiMyComponent.stories.tsx` |
| CSS | `UiComponentName.css` | `UiMyComponent.css` |
| Animation | `UiComponentName.animation.ts` | `UiMyComponent.animation.ts` |
