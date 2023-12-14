<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../default.css';
</script>

<Header />

<div class="main-background">
	<main>
		<slot />
	</main>
</div>

<Footer />

<style>
	.main-background {
		background-color: yellow;
		width: 100%;
	}

	main {
		margin-left: auto;
		margin-right: auto;
		max-width: var(--content-max-width);

		/* Prevent margin collapse by absorbing top and bottom margin into main */
		overflow: auto;
	}
</style>
