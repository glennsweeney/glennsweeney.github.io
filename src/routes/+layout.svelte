<script>
	import '../default.css';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
</nav>

<header></header>

<slot />

<footer></footer>

<style>
	nav {
		position: sticky;
		top: 0px;
		box-sizing: border-box;
		background-color: gray;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
	}

	header {
		display: flex;
	}
</style>
