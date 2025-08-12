<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
    />
    <link rel="stylesheet" href="/global.css" />
</svelte:head>

<Header />

{@render children?.()}

<Footer />
