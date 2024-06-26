<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import { headerHeight } from "../stores/header";
    import { get } from "svelte/store";

    let usedHeight = get(headerHeight);
    let contentHeight;

    $: headerHeight.subscribe((value) => {
        usedHeight = value;
    });

    $: contentHeight = "calc(100vh - " + usedHeight + "px)";
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

<Header />
<div class="mainpage-sizer" style="min-height: {contentHeight};">
    <slot />
</div>

<Footer />

<style>
    :root {
        --bg-color: #f8f8f8;
        --font-color: #202020;
    }

    :global(body) {
        margin: 0;
        background-color: var(--bg-color);
        color: var(--font-color);
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-variation-settings: "wdth" 100;
        font-display: swap;
    }
</style>