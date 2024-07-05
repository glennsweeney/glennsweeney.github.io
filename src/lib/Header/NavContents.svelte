<script lang="ts">
    export let paddingDirection: string = "h";
</script>

<ul class={paddingDirection}>
    <li><a href="/">Home</a></li>
    <li><a href="/engineering">Engineering</a></li>
    <li><a href="/photography">Photography</a></li>
    <li><a href="/contact">Contact</a></li>
</ul>

<style>
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

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    ul.h {
        flex-direction: row;
    }

    ul.v {
        flex-direction: column;
    }

    li {
        border-radius: 4px;
        padding: 0.25rem 0.25rem 0.25rem 0.25rem;
        margin: 0.25rem;
    }

    ul.v li + li {
        margin-top: 0.25rem;
    }

    ul.h li + li {
        margin-left: 0.5rem;
    }

    li:hover {
        background-color: var(--layer1-color);
    }
</style>
