<script lang="ts">
    import NavContents from "./NavContents.svelte";
    import { createDropdownMenu, melt } from "@melt-ui/svelte";

    const {
        elements: {
            trigger,
            menu
        } /* TODO: We're not using the item element, which may be an issue! */,
        states: { open }
    } = createDropdownMenu({
        positioning: {
            placement: "bottom-end"
        },
        loop: true
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
    <nav use:melt={$menu} class="responsive-narrow">
        <NavContents paddingDirection="v" --hover-color="var(--bg-color)" />
    </nav>
{/if}

<style>
    svg {
        width: 2rem;
        height: 2rem;
        display: block;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
    }

    nav {
        background-color: var(--layer1-color);
        border-radius: 8px;
        padding: 0.5rem;
    }

    .responsive-narrow {
        display: none;
    }

    /* Media query for tablets */
    @media (max-width: 48rem) {
        .responsive-narrow {
            display: block;
        }
    }
</style>
