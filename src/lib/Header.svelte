<div class="title-background">
	<div class="title">
		<a class="logo" href="/"> Glenn Sweeney </a>
	</div>
</div>
<div class="header-background">
	<header>
		<div class="header-left-container">
			<nav>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/projects">Projects</a></li>
					<li><a href="/gallery">Gallery</a></li>
					<li><a href="/demo">Demo</a></li>
				</ul>
			</nav>
		</div>
		<div class="header-right-container">
			<a href="https://github.com/glennsweeney" target="_blank">
				<svg id="github-logo" viewBox="0 0 98 96" width="2rem" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
						fill="#24292f"
					/>
				</svg>
			</a>
		</div>
	</header>
</div>

<style>
	.title-background {
		width: 100%;
		background-color: var(--detail-color);
		padding-top: 2.5rem;
		padding-bottom: 0rem;
	}

	.title {
		/* Center the title */
		margin-left: auto;
		margin-right: auto;
		max-width: var(--max-width);
		padding-left: var(--min-border);
		padding-right: var(--min-border);
	}

	.logo {
		font-size: 3rem;
		font-variation-settings:
			'wght' 300,
			'wdth' 90;

		/* Remove underline from links */
		text-decoration: none;
		color: var(--highlight-color);
	}

	.header-background {
		width: 100%;
		background-color: var(--detail-color);

		/* Stick to the top of the window when scrolling */
		position: sticky;
		top: 0;
	}

	header {
		/* Flexbox settings */
		display: flex;
		justify-content: space-between;
		align-items: center;

		/* Center the header */
		margin-left: auto;
		margin-right: auto;
		max-width: var(--max-width);

		padding-left: var(--min-border);
		padding-right: var(--min-border);
	}

	nav ul {
		list-style-type: none;
		padding-left: 0;
		padding-right: 0;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		margin: 0;
	}

	nav ul li {
		display: inline;
	}

	nav ul li a {
		/* Remove underline from links */
		text-decoration: none;
		color: inherit;

		/* Add padding and border radius to buttons */
		padding: 10px;
		border-radius: 6px;
		display: inline-block;
	}

	nav ul li a:hover {
		background-color: var(--highlight-color);
	}

	#github-logo:hover path {
		fill: var(--highlight-color);
	}
</style>
