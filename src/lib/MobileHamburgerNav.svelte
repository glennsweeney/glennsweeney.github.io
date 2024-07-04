<script lang="ts">
    import { createDropdownMenu, melt } from "@melt-ui/svelte";

    const {
        elements: { trigger, menu, item },
        states: { open }
    } = createDropdownMenu({
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
    <div use:melt={$menu} class="hamburger">
        <ul>
            <li><a use:melt={$item} href="/">Home</a></li>
            <li><a use:melt={$item} href="/engineering">Engineering</a></li>
            <li><a use:melt={$item} href="/photography">Photography</a></li>
            <li><a use:melt={$item} href="/contact">Contact</a></li>
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

    li {
        border-radius: 4px;
        padding: 0.25rem 1rem 0.25rem 0.5rem;
        margin: 0.25rem;
    }

    li + li {
        margin-top: 0.25rem;
    }

    li:hover {
        background-color: var(--layer1-color);
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

    .hamburger {
        border-color: var(--border-color);
        border: 1px solid;
        border-radius: 8px;
    }
</style>
