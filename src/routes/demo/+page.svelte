<script>
	let age = 0;
	let name = 'Glenn';

	// Demo a reactive variable - this updates whenever its dependencies change
	$: title = `${name}'s Age: ${age}`;

	function incrementAge() {
		age += 1;
	}
</script>

<main>
	<h1>{title}</h1>
	<button on:click={incrementAge}>Increment Age</button>
	<button on:click={() => (age = 0)}>Reset Age</button>

	<!-- Note: we don't always have to use bind; bind implies 2-directional data flow, not unidirectional -->
	<input type="text" bind:value={name} />
	<!-- The two forms of unidirectional flow looks like: -->
	<!-- <input type="text" value={name} on:input={functionHandleToUpdateValue} /> -->

	<hr />

	<p>Hello</p>
</main>

<style>
	hr {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}
</style>
