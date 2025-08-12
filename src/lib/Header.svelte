<script lang="ts">
</script>

<header>
    <h1><span>Glenn</span> <span>Sweeney</span></h1>

    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/engineering">Engineering</a></li>
        <li><a href="/photography">Photography</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem auto;
        padding: 0 1.5rem;
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
        font-weight: 500;
    }

    a {
        display: inline-block; /* required for ::first-letter to work */
        width: 100%;
        text-decoration: none; /* Remove underline */
        font-variant: small-caps;
        font-size: 1.2rem;
    }

    a::first-letter {
        font-weight: 400;
    }

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        flex-direction: row;
    }

    li {
        border-radius: 4px;
        padding: 0.25rem 0.5rem 0.25rem 0.5rem;
        margin: 0.25rem;
    }
</style>
