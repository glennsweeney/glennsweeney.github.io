<script lang="ts">
    import Header from "$lib/Header/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import { setContext } from "svelte";
    import { writable, type Writable } from "svelte/store";

    let headerHeight: Writable<number> = writable(0);
    setContext("headerHeight", headerHeight);
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

<Header bind:headerHeight={$headerHeight} />

<!-- Only render past the header if we've calculated a headerHeight to avoid flicker -->
{#if $headerHeight > 0}
    <div class="mainpage-sizer" style="min-height: calc(100svh - {$headerHeight}px">
        <slot />
    </div>

    <Footer />
{/if}

<style>
    :root {
        --bg-color: #f8f8f8;
        --bg-dark: #303030;
        --layer1-color: #e8e8e8;
        --layer2-color: #d8d8d8;
        --font-color: #202020;
        --font-light: #d8d8d8;
        --max-width: 75rem;
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

    /* Media query for tablets */
    @media (max-width: 48rem) {
        :global(body) {
            font-size: 1rem;
        }

        :global(h1) {
            font-size: 1.8rem;
        }

        :global(h2) {
            font-size: 1.4rem;
        }

        :global(h3) {
            font-size: 1.2rem;
        }

        :global(h4) {
            font-size: 1.1rem;
        }

        :global(h5) {
            font-size: 1.05rem;
        }

        :global(h6) {
            font-size: 1rem;
        }
    }
</style>
