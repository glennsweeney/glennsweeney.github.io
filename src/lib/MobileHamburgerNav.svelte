<script lang="ts">
    import { createPopover, melt } from "@melt-ui/svelte";

    // Popover for dropdown menu
    const {
        elements: { trigger, content, overlay, close, arrow },
        states: { open }
    } = createPopover({
        positioning: { placement: "bottom" },
        preventScroll: false
    });
</script>

<button use:melt={$trigger}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        ><path d="M0 0h24v24h-24z" fill="none" /><path
            d="M4 6h16v2h-16v-2zm0 5h16v2h-16v-2zm16 7h-16v-2h16v2z"
        /></svg
    >
</button>
{#if open}
    <div use:melt={$content} class="hamburger">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/engineering">Engineering</a></li>
            <li><a href="/photography">Photography</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
{/if}

<style>
    a {
        text-decoration: none;
        color: var(--font-color);
        font-weight: 400;
        font-variation-settings:
            "wdth" 100,
            "wght" 400;
        font-variant: small-caps;
    }

    svg {
        width: 2rem;
        height: 2rem;
        display: block;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>
