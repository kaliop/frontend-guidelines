# Building a Primitive

[Primitives](/components/#primitives) are headless components: they wrap a behaviour library like [Radix UI](https://www.radix-ui.com/) and add only the styling the design system needs. They follow the same [anatomy](/components/component-anatomy) as any other component — module-scope `tv()`, explicit props, `overrideClasses` — but expose the parts a parent may need to restyle (here the overlay and content) instead of a single `root`. They also keep their library-level name, without the `Ui` prefix (see [Naming Conventions](/components/naming-conventions)).

## Why a primitives layer?

Keeping behaviour and styling in separate layers pays off:

- **Accessibility, done right** — dialogs, menus, comboboxes and the like require correct focus management, keyboard navigation, and ARIA. The primitive (via Radix) handles all of it, so you don't reimplement it — or get it wrong.
- **Behaviour separated from style** — the primitive owns *how it works* (focus trap, portaling, click-outside, controlled state); the styled component on top owns only *how it looks*.
- **A reusable foundation** — one primitive (e.g. a popover) can back several styled components (tooltip, dropdown, date picker), so the interaction is written once.
- **Consistent interaction** — every component built on the same primitive behaves the same way (Escape to close, trapped focus…).
- **Isolated dependency** — wrapping the third-party library in your own primitive means swapping it later touches the primitive, not every consumer.

## Example: a Dialog

```tsx
// Dialog/Dialog.tsx

import { Dialog as RadixDialog } from "radix-ui";

import { tv } from "tailwind-variants";

export type DialogProps = {
  /** Element that opens the dialog. */
  trigger: React.ReactNode;
  /** Dialog content. */
  children: React.ReactNode;
  /** Optional close button. */
  closeButton?: React.ReactNode;
  /** Classes injected by the parent. */
  overrideClasses?: {
    overlay?: string;
    content?: string;
  };
};

const classes = tv({
  slots: {
    overlayElement: "fixed inset-0 bg-backdrop",
    contentElement:
      "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white",
  },
});

const Dialog = ({ trigger, children, closeButton, overrideClasses }: DialogProps) => {
  const { overlayElement, contentElement } = classes();

  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={overlayElement({ class: overrideClasses?.overlay })} />
        <RadixDialog.Content className={contentElement({ class: overrideClasses?.content })}>
          {closeButton && <RadixDialog.Close asChild>{closeButton}</RadixDialog.Close>}
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

export default Dialog;
```

The overlay reuses the `backdrop` color token (a validated translucent overlay — see [Colors](/tailwind/design-tokens/colors)), and `overrideClasses` exposes both `overlay` and `content` so a parent can adjust the dialog per context.
