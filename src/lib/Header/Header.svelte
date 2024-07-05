<script lang="ts">
    import { onMount } from "svelte";
    import WideNav from "./WideNav.svelte";
    import NarrowNav from "./NarrowNav.svelte";

    import MobileHamburgerNav from "./MobileHamburgerNav.svelte";

    export let headerHeight: Number = 0;

    // Track the full header size, including margin, to allow parent components to size themselves correctly.
    let headerElement: HTMLElement;
    onMount(() => {
        const updateHeight = () => {
            const contentHeight = headerElement.getBoundingClientRect().height;
            const style = getComputedStyle(headerElement);
            const marginTop = parseFloat(style.marginTop);
            const marginBottom = parseFloat(style.marginBottom);
            headerHeight = contentHeight + marginTop + marginBottom;
        };
        updateHeight();

        window.addEventListener("resize", updateHeight);

        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    });
</script>

<header bind:this={headerElement}>
    <h1><span>Glenn</span> <span>Sweeney</span></h1>

    <div class="gap"></div>

    <div class="wide-nav-container">
        <WideNav />
    </div>

    <div class="narrow-nav-container">
        <NarrowNav />
        <!-- <MobileHamburgerNav /> -->
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
        display: block;
    }

    span {
        display: inline-block; /* required for ::first-letter to work */
    }

    span::first-letter {
        font-variation-settings: "wght" 400;
    }

    /* Responsive Width */

    .wide-nav-container {
        display: block;
    }

    .narrow-nav-container {
        display: none;
    }

    /* Media query for tablets */
    @media (max-width: 48rem) {
        /* Hide desktop nav and show mobile nav */
        .wide-nav-container {
            display: none;
        }

        .narrow-nav-container {
            display: block;
        }
    }
</style>
