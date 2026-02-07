# Easings

Easings define acceleration curves for transitions and animations. They make movements feel more natural and polished.

## Easing Types

There are three main types of easings:

- **ease-in**: Starts slow, accelerates progressively. Use for elements leaving the screen.
- **ease-out**: Starts fast, decelerates. Use for elements entering the screen.
- **ease-in-out**: Slow at the beginning and end. Use for continuous transitions.

## Defining Easings

```css
/* styles/configs/easings.css */

@theme {
  /* Ease out - most commonly used */
  --ease-out-quad: cubic-bezier(0.5, 1, 0.89, 1);
  --ease-out-cubic: cubic-bezier(0.33, 1, 0.68, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);

  /* Ease in */
  --ease-in-quad: cubic-bezier(0.11, 0, 0.5, 0);
  --ease-in-cubic: cubic-bezier(0.32, 0, 0.67, 0);

  /* Ease in-out */
  --ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);
  --ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);
}
```

::: tip
Visit [easings.net](https://easings.net/) to visualize easing curves and understand the difference between quad, cubic, quart, etc.
:::

## Usage

```html
<button class="transition-colors duration-300 ease-out-quart">
  Hover me
</button>
```
