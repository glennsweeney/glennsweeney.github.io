<header>
	<!-- The container is used to force max content width within the header -->
	<div class="header-container">
		<div class="logo-container">
			<a class="logo" href="/">
				<span>Glenn Sweeney</span>
			</a>
		</div>
		<nav>
			<ul>
				<li><a href="/about">About</a></li>
				<li><a href="/projects">Projects</a></li>
				<li><a href="/gallery">Gallery</a></li>
				<li><a href="/demo">Demo</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		background-color: var(--background-color-lowlight);
	}

	.header-container {
		display: flex;
		justify-content: flex-start;
		margin-left: auto;
		margin-right: auto;
		max-width: var(--header-max-width);
		width: 100%;
	}

	.logo-container {
		margin-top: auto;
		margin-bottom: auto;
	}

	.logo {
		font-size: 1.5rem;
		text-decoration: none;
		color: inherit;
		margin-right: 1.5rem;
	}

	.logo span {
		font-variation-settings:
			'wght' 500,
			'wdth' 85;
	}

	nav {
		position: sticky;
		top: 0px;
	}

	nav ul {
		list-style-type: none;
		padding: 0px;
	}

	nav ul li {
		display: inline;
		margin: 0 0 0 10px;
	}

	nav ul li a {
		text-decoration: none;
		color: inherit;
		padding: 10px;
		border-radius: 6px;
		display: inline-block;
	}

	nav ul li a:hover {
		background-color: var(--highlight-color);
	}
</style>
