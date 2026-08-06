# Story Structure

A story file follows a consistent structure: a `meta` object that configures the story, and one or more exported stories.

::: info Framework agnostic
Examples use React (`@storybook/react`). Storybook supports other frameworks too — swap in the matching package (`@storybook/vue3`, `@storybook/angular`, ...); the story structure stays the same.
:::

## Basic Structure

```typescript
import type { Meta, StoryObj } from "@storybook/react";

import UiMyComponent from "./UiMyComponent";

// Meta: configures the story
const meta = {
  title: "ui/atoms/MyComponent",
  component: UiMyComponent,
} satisfies Meta<typeof UiMyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story: a specific state of the component
export const Default: Story = {
  args: {
    label: "Hello",
  },
};
```

This is Storybook's standard **Component Story Format (CSF)**: a default export for the `meta`, plus a named export for each story.

## Meta Properties

| Property | Purpose |
|----------|---------|
| `title` | Path in the Storybook sidebar |
| `component` | The component being documented |
| `parameters` | Storybook configuration (layout, backgrounds...) |
| `argTypes` | Controls configuration for interactive props |
| `decorators` | Wrappers around the story for context |
| `tags` | Labels such as `autodocs` (auto-generates a documentation page), `beta`, `deprecated`... |
