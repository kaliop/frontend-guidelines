# Decorators

Decorators are wrappers around a story that provide context for rendering. They are useful when a component needs a specific layout or environment to be displayed correctly.

## Usage

Decorators are defined in the `meta` object and apply to all stories in the file:

```typescript
const meta = {
  title: "ui/Molecules/MyComponent",
  component: UiMyComponent,
  decorators: [
    (Story) => (
      <div className="max-w-940">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiMyComponent>;
```

## Common Use Cases

### Constraining width

Some components need a max-width to render as they would in the real layout:

```typescript
decorators: [
  (Story) => (
    <div className="max-w-940">
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
