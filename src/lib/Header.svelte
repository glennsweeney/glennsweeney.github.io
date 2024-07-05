<script lang="ts">
    import { onMount } from "svelte";
    import { headerHeight } from "../stores/header.js";

    import MobileHamburgerNav from "./MobileHamburgerNav.svelte";

    export let qqq: Number;

    // Publish the full header size, including margin, to allow other components to position themselves correctly.
    let headerElement: HTMLElement;
    onMount(() => {
        const updateHeight = () => {
            const contentHeight = headerElement.getBoundingClientRect().height;
            const style = getComputedStyle(headerElement);
            const marginTop = parseFloat(style.marginTop);
            const marginBottom = parseFloat(style.marginBottom);
            headerHeight.set(contentHeight + marginTop + marginBottom);
            qqq = contentHeight + marginTop + marginBottom;
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
        <h1><span>Glenn</span> <span>Sweeney</span></h1>
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

    <div class="responsive-narrow">
        <MobileHamburgerNav />
    </div>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1.5rem;
        padding: 0;
        box-sizing: border-box;
    }

    h1 {
        margin: 0;
        padding: 0;
    }

    span {
        display: inline-block; /* required for ::first-letter to work */
    }
    span::first-letter {
        font-variation-settings: "wght" 400;
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
        margin-left: 1.5rem;
    }

    a {
        display: inline-block; /* required for ::first-letter to work */
        text-decoration: none; /* Remove underline */
        color: var(--font-color);
        font-variant: small-caps;
        font-size: 1.2rem;
        font-variation-settings:
            "wdth" 100,
            "wght" 350;
    }

    a::first-letter {
        font-variation-settings: "wght" 400;
    }

    /* Responsive Width */

    .responsive-wide {
        display: block;
    }

    .responsive-narrow {
        display: none;
    }

    /* Media query for tablets */
    @media (max-width: 48rem) {
        /* Hide desktop nav and show mobile nav */
        .responsive-wide {
            display: none;
        }

        .responsive-narrow {
            display: block;
        }
    }
</style>
