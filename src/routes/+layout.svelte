<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../default.css';
</script>

<Header />

<main>
	<div class="contents-container">
		<slot />
	</div>
</main>

<Footer />

<style>
	main {
		background-color: var(--background-color-default);
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}

	.contents-container {
		margin-left: auto;
		margin-right: auto;
		max-width: var(--content-max-width);
	}
</style>
