<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		const response = await fetch('/like/4xdYV4N3C8eXyQ8BG2kX');

		const json = await response.json();
		console.log(json, 'book');
	});
</script>
