# Atomic Design

[Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) is a methodology created by Brad Frost that structures UI components into levels of increasing complexity. It helps build consistent, reusable, and maintainable design systems.

::: info Simplified approach
The original methodology defines 5 levels: atoms, molecules, organisms, templates, and pages. For the purpose of our design system, we only apply the first 3 levels (atoms, molecules, organisms) and add a **primitives** level specific to our approach. Templates and pages are handled at the application level and are outside the scope of the design system.
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

Headless (unstyled) components that encapsulate behavior without any visual opinion. They are typically based on libraries like [Radix UI](https://www.radix-ui.com/) and serve as a foundation for building styled components.

Examples: Popover, Dialog, Tooltip.

## Folder Structure

```
components/ui/
├── atoms/            # Basic building blocks
├── molecules/        # Combinations of atoms
├── organisms/        # Complex page sections
└── primitives/       # Headless behavior components
```

## How to Choose the Right Level

When creating a new component, ask yourself:

| Question | If yes → |
|----------|----------|
| Is it an indivisible UI element? | **Atom** |
| Is it a simple combination of atoms? | **Molecule** |
| Is it a complete page section? | **Organism** |
| Is it behavior without style? | **Primitive** |
