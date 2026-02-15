# Override Classes Pattern

## The Problem

A design system component defines its own styles. But when used in a specific context, the parent may need to customize it (positioning, sizing...) without modifying the component itself.

## The Solution

The `overrideClasses` prop is a typed object that exposes certain slots of a component to its parent, allowing it to inject additional classes.

## How it Works

### Inside the child component

Declare `overrideClasses` in the props type, listing only the slots you want to expose:

```typescript
type UiMyComponentProps = {
  title: string;
  overrideClasses?: {
    root?: string;
    titleElement?: string;
  };
};

const UiMyComponent = ({ title, overrideClasses }: UiMyComponentProps) => {
  const classes = tv({
    slots: {
      root: "flex flex-col gap-3",
      titleElement: "heading-6",
    },
  });

  const { root, titleElement } = classes();

  return (
    <div className={root({ class: overrideClasses?.root })}>
      <h3 className={titleElement({ class: overrideClasses?.titleElement })}>
        {title}
      </h3>
    </div>
  );
};
```

### From the parent component

Pass the desired classes via the `overrideClasses` prop:

```typescript
<UiMyComponent
  title="Hello"
  overrideClasses={{
    root: "mt-auto col-span-6",
  }}
/>
```

## What to Expose

- **Always expose `root`**: The parent typically needs it for positioning and layout
- **Only expose other slots when a real need exists**: Don't expose everything by default
- **Add slots progressively**: Start minimal, add more as needs arise

## When Not to Use It

- **Don't use `overrideClasses` to change the fundamental look** of a component — that's what variants are for
- It is meant for **positioning and contextual adjustments** only
