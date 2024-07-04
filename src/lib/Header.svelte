<script lang="ts">
    import { onMount } from "svelte";
    import { headerHeight } from "../stores/header";

    import MobileHamburgerNav from "./MobileHamburgerNav.svelte";

    // Publish the full header size, including margin, to allow other components to position themselves correctly.
    let headerElement: HTMLElement;
    onMount(() => {
        const updateHeight = () => {
            const contentHeight = headerElement.getBoundingClientRect().height;
            const style = getComputedStyle(headerElement);
            const marginTop = parseFloat(style.marginTop);
            const marginBottom = parseFloat(style.marginBottom);
            headerHeight.set(contentHeight + marginTop + marginBottom);
        };
        updateHeight();

        window.addEventListener("resize", updateHeight);

        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    });
</script>

<header bind:this={headerElement}>
    <div class="logo">
        <h1>Glenn Sweeney</h1>
    </div>
    <div class="gap"></div>
    <nav class="responsive-wide">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/engineering">Engineering</a></li>
            <li><a href="/photography">Photography</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>

    <nav class="responsive-narrow">
        <MobileHamburgerNav />
    </nav>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: 1.5rem;
        box-sizing: border-box;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-variation-settings:
            "wdth" 95,
            "wght" 400;
        font-variant: small-caps;
    }

    .logo {
        margin: 0;
        padding: 0;
        display: block;
    }

    .responsive-wide ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .responsive-wide li + li {
        /* Pad only elements preceded by another list element */
        padding-left: 1.5rem;
    }

    a {
        text-decoration: none;
        color: var(--font-color);
        font-weight: 400;
        font-variation-settings:
            "wdth" 100,
            "wght" 400;
        font-variant: small-caps;
    }

    /* Responsive Width */

    nav.responsive-wide {
        display: block;
    }

    nav.responsive-narrow {
        display: none;
    }

    /* Media query for tablets */
    @media (max-width: 48rem) {
        /* Hide desktop nav and show mobile nav */
        nav.responsive-wide {
            display: none;
        }

        nav.responsive-narrow {
            display: block;
        }
    }
</style>
