# Atomic Design

[Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) is a methodology created by Brad Frost that structures UI components into levels of increasing complexity. It helps build consistent, reusable, and maintainable design systems.

::: info Simplified approach
The original methodology defines 5 levels: atoms, molecules, organisms, templates, and pages. For the purpose of our design system, we only apply the first 3 levels (atoms, molecules, organisms) and add a **primitives** level specific to our approach. Templates and pages are intentionally left out: they belong to the application that *composes* these components — keeping them out of scope is what keeps the design system reusable across projects.
:::

::: tip A shared vocabulary, not a rulebook
The point of these levels is to make **composition** and **communication** easier across the team — not to classify every component perfectly. When a component sits on the fence (is this card a molecule or an organism?), don't over-think it: **pick a level, stay consistent, and move on.** What matters is that the system helps the team build faster, and that a component's name says what it is (`UiCard`) regardless of its level.
:::

## Component Levels

### Atoms

The most basic, indivisible UI elements. They don't depend on any other UI component.

Examples: Icon, Image, Avatar, Button, Burger menu.

### Molecules

Functional combinations of atoms working together as a unit.

Examples: Card, Accordion, Author block, Menu, Video player.

### Organisms

Complete page sections composed of molecules and/or atoms. They represent distinct areas of the interface.

Examples: Header, Footer, Hero, Content sections.

### Primitives

Headless (unstyled) components that encapsulate behavior without any visual opinion. They are typically based on a headless library ([Radix UI](https://www.radix-ui.com/), or your framework's equivalent) and serve as a foundation for building styled components.

Examples: Popover, Dialog, Tooltip.

## Folder Structure

```
components/ui/
├── atoms/            # Basic building blocks
├── molecules/        # Combinations of atoms
├── organisms/        # Complete page sections
└── primitives/       # Headless behavior components
```

## How to Choose the Right Level

Use these questions as a quick rule of thumb, not a strict test — they settle most cases, and the rare ambiguous ones aren't worth a long debate:

| Question | If yes → |
|----------|----------|
| Is it an indivisible UI element? | **Atom** |
| Is it a simple combination of atoms? | **Molecule** |
| Is it a complete page section? | **Organism** |
| Is it behavior without style? | **Primitive** |
