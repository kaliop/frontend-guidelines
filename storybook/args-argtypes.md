# Args & ArgTypes

## Args

`args` define the default prop values for a story. They represent a specific state of the component.

```typescript
export const Default: Story = {
  args: {
    title: "Hello world",
    variant: "primary",
  },
};
```

## ArgTypes

`argTypes` configure the interactive controls displayed in Storybook's panel. They let you try different prop values without editing code.

::: info Controls are inferred automatically
With TypeScript, Storybook reads your component's prop types (and their JSDoc) to generate controls and descriptions on its own. You only write `argTypes` manually to **customize** a control — for example to force a `select` with specific options.
:::

### Select control

Useful for enums or predefined options:

```typescript
const meta = {
  title: "ui/atoms/MyComponent",
  component: UiMyComponent,
  argTypes: {
    color: {
      control: "select",
      options: ["blue", "black", "white"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof UiMyComponent>;
```

### Meta-level vs Story-level

ArgTypes can be defined at the **meta level** (applies to all stories) or at the **story level** (applies to a specific story only):

```typescript
// Meta level — shared across all stories
const meta = {
  argTypes: {
    color: {
      control: "select",
      options: ["blue", "black", "white"],
    },
  },
};

// Story level — specific to this story
export const WithIcon: Story = {
  args: { icon: "arrow" },
  argTypes: {
    icon: {
      control: "select",
      options: ["arrow", "chat", "plus"],
    },
  },
};
```
