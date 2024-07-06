<script lang="ts">
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    let contentHeight: Writable<number> = getContext("contentHeight");
</script>

<main>
    <div class="top-separator" style="height: {$contentHeight / 7}px"></div>
    <section class="engineering" style="height: {($contentHeight * 2) / 7}px">
        <h2>Engineering.</h2>
    </section>
    <div class="middle-separator" style="height: {$contentHeight / 7}px"></div>
    <section class="photography" style="height: {($contentHeight * 2) / 7}px">
        <h2>Photography.</h2>
    </section>
    <div class="bottom-separator" style="height: {$contentHeight / 7}px"></div>
</main>

<style>
    h2 {
        font-variation-settings:
            "wght" 400,
            "wdth" 100;
        font-size: 3.5rem;
        color: var(--font-light);
    }
    h2::first-letter {
        font-variation-settings:
            "wght" 500,
            "wdth" 100;
    }
    .top-separator {
        background-color: var(--bg-color);
    }
    .engineering {
        background-color: var(--bg-dark);
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        padding-left: 12%;
    }
    .middle-separator {
        background-color: var(--bg-color);
    }
    .photography {
        background-color: var(--bg-dark);
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: center;
        padding-right: 12%;
    }
    .photography h2 {
        display: inline;
        float: right;
        align-items: right;
        text-align: right;
    }
    .bottom-separator {
        background-color: var(--bg-color);
    }
</style>
