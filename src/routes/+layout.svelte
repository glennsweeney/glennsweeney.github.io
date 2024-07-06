<script lang="ts">
    import Header from "$lib/Header/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import { onMount, onDestroy, setContext } from "svelte";
    import { writable, type Writable } from "svelte/store";
    import { browser } from "$app/environment";

    let headerHeight: number = 0;
    let contentHeight: Writable<number> = writable(0);
    setContext("contentHeight", contentHeight);

    function handleResize() {
        const viewportHeight = window.innerHeight;
        $contentHeight = viewportHeight - headerHeight;
        console.log("contentHeight:", contentHeight);
    }

    onMount(() => {
        if (browser) {
            handleResize();
            window.addEventListener("resize", handleResize);
        }
    });

    onDestroy(() => {
        if (browser) {
            window.removeEventListener("resize", handleResize);
        }
    });
</script>

<svelte:head>
    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=,.?"
        rel="stylesheet"
    />
</svelte:head>

<Header bind:headerHeight />
<div class="mainpage-sizer" style={"min-height: " + $contentHeight + "px"}>
    <slot />
</div>

<Footer />

<style>
    :root {
        --bg-color: #f8f8f8;
        --bg-dark: #303030;
        --layer1-color: #e8e8e8;
        --layer2-color: #d8d8d8;
        --font-color: #202020;
        --font-light: #d8d8d8;
    }

    :global(body) {
        margin: 0;
        background-color: var(--bg-color);
        color: var(--font-color);
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-variation-settings:
            "wdth" 100,
            "wght" 400;
        font-display: swap;
    }

    :global(h1) {
        font-variation-settings:
            "wdth" 95,
            "wght" 350;
        font-variant: small-caps;
        font-size: 2.4rem;
    }

    :global(h2) {
        font-variation-settings:
            "wdth" 95,
            "wght" 350;
        font-variant: small-caps;
        font-size: 1.8rem;
    }

    :global(h3) {
        font-variation-settings:
            "wdth" 95,
            "wght" 350;
        font-variant: small-caps;
        font-size: 1.4rem;
    }

    :global(h4) {
        font-variation-settings:
            "wdth" 95,
            "wght" 350;
        font-variant: small-caps;
        font-size: 1.2rem;
    }

    :global(h5) {
        font-variation-settings:
            "wdth" 95,
            "wght" 350;
        font-variant: small-caps;
        font-size: 1.1rem;
    }

    :global(h6) {
        font-variation-settings:
            "wdth" 95,
            "wght" 350;
        font-variant: small-caps;
        font-size: 1rem;
    }
</style>
