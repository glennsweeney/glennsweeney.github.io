<script lang="ts">
	const featured_projects = [
		{ name: 'Test', path: '/' },
		{ name: 'Test', path: '/' },
		{ name: 'Test', path: '/' },
		{ name: 'Test', path: '/' }
	];
</script>

<h1>Hi, I'm Glenn!</h1>

<p>
	I have really horrible taste in color, unfortunately. However, here's a little bit about me
	anyways.
</p>

<section>
	<h2>About Me</h2>
</section>

<section>
	<h2>Projects</h2>

	<div class="project-tiles">
		{#each featured_projects as project}
			<div class="project-tile">project.name</div>
		{/each}
	</div>
</section>

<style>
	section {
		width: 100%;
		border: 2px solid #000;
		border-radius: 10px;
		background-color: lightgray;
		margin-top: 0.8rem;
		margin-bottom: 0.8rem;
	}

	.project-tiles {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

	.project-tile {
		border: 1px solid #000;
		border-radius: 10px;
	}
</style>
