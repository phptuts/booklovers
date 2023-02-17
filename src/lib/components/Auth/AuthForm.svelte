<script>
	export let btnName;
</script>

<form on:submit|preventDefault>
	<div class="mb-3">
		<label for="email" class="form-label">Email</label>
		<input type="email" name="email" class="form-control" id="email" placeholder="Email" required />
	</div>
	<div class="mb-3">
		<label for="password" class="form-label">Password</label>
		<input
			type="password"
			name="password"
			class="form-control"
			id="password"
			placeholder="*********"
		/>
	</div>
	<button type="submit" class="btn btn-success w-100">{btnName}</button>
</form>
