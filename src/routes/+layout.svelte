<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../default.css';
</script>

<!-- Use a flex container to ensure we can make space to push the footer to the bottom -->
<div class="page-container">
	<Header />

	<div class="main-background">
		<main>
			<slot />
		</main>
	</div>

	<Footer />
</div>

<style>
	.page-container {
		/* Sticky footer */
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.main-background {
		background-color: var(--background-color);
		width: 100%;

		/* Flex settings for sticky footer */
		flex: 1 0 auto;
	}

	main {
		margin-left: auto;
		margin-right: auto;
		max-width: var(--max-width);

		padding-left: 16px;
		padding-right: 16px;

		/* Prevent margin collapse by absorbing top and bottom margin into main */
		overflow: auto;
	}
</style>
