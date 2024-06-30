<script lang="ts">
	export let isOpen: boolean;
</script>

<div class="dropdown" class:visible={isOpen}>
	<slot />
</div>

<style>
	.dropdown {
		position: absolute;
		display: none;
		background-color: cadetblue;
		border-radius: 4px;
	}

	.visible {
		/* Apply selectively to show the hamburger menu */
		display: block;
	}
</style>
