# Decorators

Decorators are wrappers around a story that provide context for rendering. They are useful when a component needs a specific layout or environment to be displayed correctly.

## Usage

Decorators are defined in the `meta` object and apply to all stories in the file:

```typescript
const meta = {
  title: "ui/molecules/MyComponent",
  component: UiMyComponent,
  decorators: [
    (Story) => (
      <div className="p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiMyComponent>;
```

::: info Where decorators apply
Decorators can be set at three levels:

- **Meta** — in the `meta` object (shown above), for every story in the file. This is the most common case.
- **Story** — on a single exported story, for that story only.
- **Global** — in [`.storybook/preview.ts`](/storybook/installation-and-setup), for every story in the project.
:::

## Common Use Cases

### Constraining width

Some components need a max-width to render as they would in the real layout:

```typescript
decorators: [
  (Story) => (
    <div className="max-w-[940px]">
      <Story />
    </div>
  ),
],
```

### Setting a font size context

Components that use `em` units (like icons) may need a font size context:

```typescript
decorators: [
  (Story) => (
    <div className="text-[100px]">
      <Story />
    </div>
  ),
],
```

### Handling overflow

Components with animations or elements that extend beyond their bounds:

```typescript
decorators: [
  (Story) => (
    <div className="overflow-x-clip">
      <Story />
    </div>
  ),
],
```
