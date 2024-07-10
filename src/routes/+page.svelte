<script lang="ts">
    import { onMount, onDestroy, getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import { browser } from "$app/environment";
    let headerHeight: Writable<number> = getContext("headerHeight");

    let nameText: HTMLElement;

    function adjustFontSize() {
        const maxFontSize = "5rem";
        nameText.style.fontSize = maxFontSize;
        const parentWidth = nameText.parentElement?.offsetWidth;
        if (!parentWidth) {
            return;
        }

        while (nameText.offsetWidth > parentWidth && parseFloat(nameText.style.fontSize) > 0) {
            nameText.style.fontSize = `${parseFloat(nameText.style.fontSize) - 0.1}rem`;
        }
    }

    onMount(() => {
        if (browser) {
            adjustFontSize();
            window.addEventListener("resize", adjustFontSize);
        }
    });

    // Cleanup to prevent memory leaks
    onDestroy(() => {
        if (browser) {
            window.removeEventListener("resize", adjustFontSize);
        }
    });
</script>

<main>
    <!-- https://dev.to/frehner/css-vh-dvh-lvh-svh-and-vw-units-27k4 -->
    <section class="hero" style="min-height: calc(100svh - {2 * $headerHeight}px">
        <h1 bind:this={nameText}><span>Glenn</span> <span>Sweeney</span></h1>
        <h2>Engineer</h2>
        <h2>·</h2>
        <h2>Photographer</h2>
    </section>
</main>

<style>
    h1 {
        font-variation-settings:
            "wght" 400,
            "wdth" 100;
        font-size: 5rem;
        color: var(--font-color);
        margin: 0rem 0 10vh 0;
        padding: 0 2rem 0 2rem;
        white-space: nowrap;
        text-shadow: 2px 2px 3px #707461; /* TODO: This color isn't exactly the same hue. */
    }

    h1 span {
        display: inline-block;
    }

    h1 span::first-letter {
        font-variation-settings:
            "wght" 450,
            "wdth" 100;
    }

    h2 {
        /* Font */
        font-variation-settings:
            "wght" 400,
            "wdth" 100;
        font-size: 1.8rem;
        color: var(--font-light);
        margin: 0;
        line-height: 1.1;
    }

    h2::first-letter {
        font-variation-settings:
            "wght" 500,
            "wdth" 100;
    }

    .hero {
        background-color: #999e85;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
