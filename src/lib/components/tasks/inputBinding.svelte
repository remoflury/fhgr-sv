<script lang="ts">
	let value = $state('');
	let countOfE = $derived.by(() => {
		const valueAsArr = value.split('');

		return valueAsArr.filter((char) => char == 'e' || char == 'E').length;
	});
</script>

<div class="max-w-80">
	<input type="text" bind:value />
	<h3 class="mt-2">{value}</h3>
	<p>Anzahl "E": {countOfE}</p>
</div>
