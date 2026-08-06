# Story Organization

Stories are organized in the Storybook sidebar following the Atomic Design hierarchy.

## Naming Convention

The `title` property in the meta object defines the story's position in the sidebar. It follows this pattern:

```
ui / [Level] / [ComponentName]
```

For example:

| Component | Title |
|-----------|-------|
| Icon (atom) | `ui/atoms/Icon` |
| Accordion (molecule) | `ui/molecules/Accordion` |
| Hero (organism) | `ui/organisms/Hero` |
| Dialog (primitive) | `ui/primitives/Dialog` |

## Resulting Sidebar

```
ui/
├── atoms/
│   ├── Icon
│   ├── Image
│   └── Cta
├── molecules/
│   ├── Accordion
│   ├── Card
│   └── Menu
├── organisms/
│   ├── Header
│   ├── Hero
│   └── Footer
└── primitives/
    └── Dialog
```

This structure mirrors the component folder organization and makes it easy to find any component.
