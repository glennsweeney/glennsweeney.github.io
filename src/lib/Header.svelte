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
					<li><a href="/about">About</a></li>
					<li><a href="/projects">Projects</a></li>
					<li><a href="/gallery">Gallery</a></li>
					<li><a href="/demo">Demo</a></li>
				</ul>
			</nav>
		</div>
		<div class="header-right-container">
			<span>Placeholder</span>
		</div>
	</header>
</div>

<style>
	.title-background {
		width: 100%;
		background-color: red;
		padding-top: 2rem;
		padding-bottom: 1rem;
	}

	.title {
		/* Center the title */
		margin-left: auto;
		margin-right: auto;
		max-width: var(--header-max-width);
		padding-left: 16px;
		padding-right: 16px;
	}

	.logo {
		font-size: 2.5rem;
		font-variation-settings:
			'wght' 300,
			'wdth' 90;

		/* Remove underline from links */
		text-decoration: none;
		color: inherit;
	}

	.header-background {
		width: 100%;
		background-color: blue;

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
		max-width: var(--header-max-width);

		padding-left: 16px;
		padding-right: 16px;
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
		background-color: purple;
	}
</style>
