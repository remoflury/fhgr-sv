<script lang="ts">
	let value = $state(20);
</script>

<div class="flex flex-wrap items-center gap-x-4 gap-y-2 lg:gap-x-8">
	<input
		type="range"
		name="range"
		id="range"
		class="max-w-80 accent-primary focus:outline-none"
		min="0"
		max="100"
		bind:value
	/>
</div>

<div class="relative mt-4 h-6 w-60 max-w-full border border-primary" role="progressbar">
	<span class="absolute inset-0 block bg-primary transition" style="width: {value}%"> </span>
	<small class="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full"
		>{value.toFixed(2)}%</small
	>
</div>
