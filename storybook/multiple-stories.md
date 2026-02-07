# Multiple Stories per Component

A component can have multiple stories to document its different states and variants. Each exported constant is a separate story.

## Base Story

Start with a default story that represents the most common usage:

```typescript
export const Default: Story = {
  args: {
    title: "Page title",
  },
};
```

## Extending a Base Story

Reuse the base story's args with the spread operator to create variations without repeating yourself:

```typescript
export const WithSubtitle: Story = {
  args: {
    ...Default.args,
    subtitle: "A subtitle",
  },
};

export const WithCta: Story = {
  args: {
    ...Default.args,
    ctaLabel: "Click here",
    ctaLink: {
      url: "#",
      target: "_self",
    },
  },
};

export const FullExample: Story = {
  args: {
    ...Default.args,
    subtitle: "A subtitle",
    ctaLabel: "Click here",
    ctaLink: {
      url: "#",
      target: "_self",
    },
  },
};
```

::: tip
Name your stories descriptively. Each story name should make it clear what state or variant it represents.
:::
