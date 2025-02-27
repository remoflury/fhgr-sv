<script lang="ts">
	import Button from '../ui/button/button.svelte';

	let count = $state(0);
	let doubled = $derived(count * 2);
</script>

<p class="mb-4">Aktueller Count: {count}</p>
<p class="mb-4">Verdoppelt: {doubled}</p>

<div class="mt-4 flex flex-wrap gap-x-4">
	<Button onclick={() => count++}>Count erhöhen</Button>
	<Button onclick={() => count--} variant="destructive">Count verkleinern</Button>
</div>
