<script lang="ts">
	import { sineInOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';

	const tween = new Tween(20, { duration: 125, easing: sineInOut });
</script>

<div class="flex flex-wrap items-center gap-x-4 gap-y-2 lg:gap-x-8">
	<input
		type="range"
		name="range"
		id="range"
		class="max-w-80 accent-primary focus:outline-none"
		min="0"
		max="100"
		bind:value={tween.target}
	/>
</div>

<div class="relative mt-4 h-6 w-60 max-w-full border border-primary" role="progressbar">
	<span class="absolute inset-0 block bg-primary transition" style="width: {tween.current}%">
	</span>
	<small class="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full"
		>{tween.current.toFixed(2)}%</small
	>
</div>
