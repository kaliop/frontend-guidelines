# Naming Conventions

## Component Naming

All UI components follow the pattern `Ui` + PascalCase:

- `UiIcon`, `UiAvatar`, `UiAccordion`, `UiHeader`

The `Ui` prefix clearly distinguishes design system components from other application components.

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
