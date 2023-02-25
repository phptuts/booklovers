<script>
	import { goto } from '$app/navigation';
	import messagesStore from '$lib/stores/messages.store';

	export let data;

	async function back() {
		try {
			await goto(`/?page=${+data.page - 1}`);
		} catch (e) {
			messagesStore.showError();
		}
	}

	async function next() {
		try {
			await goto(`/?page=${+data.page + 1}`);
		} catch (e) {
			messagesStore.showError();
		}
	}
</script>

<ul>
	{#each data.books as book (book.id)}
		<li>{book.title}</li>
	{/each}
</ul>

<div class="row">
	<div class="col">
		<button on:click={back} disabled={!data.previous} class="btn btn-info w-100">Previous</button>
	</div>
	<div class="col">
		<button on:click={next} disabled={!data.next} class="btn btn-info w-100">Next</button>
	</div>
</div>
