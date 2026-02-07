# Getting Started

## Purpose

These guidelines define the standards and best practices for frontend development at Kaliop. They aim to:

- **Ensure consistency** across all projects
- **Facilitate onboarding** for new team members
- **Improve maintainability** with clear conventions
- **Enable reusability** through modular component architecture

::: info Framework agnostic
These guidelines focus on architecture, styling, and component organization. They can be applied regardless of the frontend framework used (React, Vue, Angular, etc.).
:::

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Tailwind CSS** | Utility-first CSS framework |
| **tailwind-variants** | Component styling with slots and variants |
| **Storybook** | Component documentation and visual testing |

## Project Structure

```
components/
└── ui/                    # Design System
    ├── atoms/             # Basic building blocks
    ├── molecules/         # Combinations of atoms
    ├── organisms/         # Complex UI sections
    └── primitives/        # Headless/unstyled components

styles/
├── base/                  # Base styles and resets
├── configs/               # Design tokens (@theme)
├── helpers/               # Custom variants and helpers
└── utilities/             # Utility classes
```

## How to use this guide

Depending on your task, start with the relevant section:

| Task | Recommended sections |
|------|---------------------|
| Create a new component | [Atomic Design](/components/), [Naming Conventions](/components/naming-conventions), [Styling with TV](/styling/styling-with-tv) |
| Understand the styling system | [Design Tokens](/tailwind/design-tokens/), [Layout](/tailwind/layout) |
| Document a component | [Storybook](/storybook/) |
