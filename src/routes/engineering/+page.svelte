<script lang="ts">
    import { onMount } from "svelte";
    let fred: SVGPathElement;

    onMount(() => {
        console.log(fred.getTotalLength());
    });
</script>

<main>
    <!-- Path length is extracted with path.getTotalLength()  -->
    <!-- dasharray is [segment_length, total_length - segment_length]  -->
    <!-- dashoffset is [-segment_length, segment_length]  -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 40 40"
        ><path
            bind:this={fred}
            fill="none"
            stroke="#F3276B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-dasharray="20 49.78"
            stroke-dashoffset="0"
            d="M 0 10 C 0 1 1 0 10 0 C 19 0 20 1 20 10 C 20 19 19 20 10 20 C 1 20 0 19 0 10"
            ><animate
                attributeName="stroke-dashoffset"
                calcMode="spline"
                dur="5"
                from="-69.78"
                to="69.78"
                repeatCount="indefinite"
            ></animate></path
        ></svg
    >
</main>

<style>
    main {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    svg {
        width: 12rem;
        height: 12rem;
    }
</style>
