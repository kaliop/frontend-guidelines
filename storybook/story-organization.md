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
| Icon (atom) | `ui/Atoms/Icon` |
| Accordion (molecule) | `ui/Molecules/Accordion` |
| Hero (organism) | `ui/Organisms/Hero` |

## Resulting Sidebar

```
ui/
├── Atoms/
│   ├── Icon
│   ├── Image
│   └── Cta
├── Molecules/
│   ├── Accordion
│   ├── Card
│   └── Menu
└── Organisms/
    ├── Header
    ├── Hero
    └── Footer
```

This structure mirrors the component folder organization and makes it easy to find any component.
