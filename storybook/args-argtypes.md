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

`argTypes` configure the interactive controls displayed in Storybook's panel. They allow you to test different prop values without editing code.

### Select control

Useful for enums or predefined options:

```typescript
const meta = {
  title: "ui/Atoms/MyComponent",
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
