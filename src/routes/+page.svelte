<script>
	export let data;
</script>

<ul>
	{#each data.books as book (book.id)}
		<li>{book.title}</li>
	{/each}
</ul>
