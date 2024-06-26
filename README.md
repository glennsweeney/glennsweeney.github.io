# glennsweeney.github.io

## Environment

1. Install [nvm](https://github.com/nvm-sh/nvm)

1. Install node:

    ```bash
    nvm install node
    ```

## Project Setup

1. Start a SvelteKit project ([docs](https://kit.svelte.dev/docs/creating-a-project))

## Developing

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the development server:

    ```bash
    npm run dev -- --open
    ```

## Building

### Preview Version

```bash
npm run preview
```

### Production Version

```bash
npm run build
```

## Notes:

### [rem/em/px accessibility](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/):

**Plan on testing both at different scales AND at different default font sizes.**

-   Font sizes: relative units (rem/em) so that browser default font sizes function.
-   Horizontal padding/margin: often pixels, because we don't want to amplify margin with font scale.
-   Vertical padding/margin: Used for readability; scaling might be good and vertical scroll is easier.
-   Heading/paragraph margin: em is sometimes nice instead of rem because they'll scale with the font size automagically.
-   Borders: Unless there's a strong reason to scale, pixels are ideal.
-   Media queries: rem are great, because we'll hop over to a layout more optimized for available space earlier.
-   Buttons and such: Could be either, but use relative unless you have a good layout reason and are willing to have text wrap, etc.
