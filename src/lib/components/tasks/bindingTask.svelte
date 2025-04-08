<script lang="ts">
	import { sineInOut, linear } from 'svelte/easing';
	import { Tween } from 'svelte/motion';
	import * as Card from '$lib/components/ui/card';

	let duration = $state(1000);
	let delay = $state(0);
	const easingMap = {
		sineInOut: sineInOut,
		linear: linear
	};

	let selectedEasing: keyof typeof easingMap = $state('sineInOut');

	const tween = $derived(new Tween(20, { duration, delay, easing: easingMap[selectedEasing] }));
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

<Card.Root class="group relative mt-8 inline-block h-full w-full max-w-sm transition ">
	<Card.Header>
		<Card.Title>Properties</Card.Title>
	</Card.Header>
	<Card.Content class="space-y-3">
		<div class="flex items-center gap-x-4">
			<input
				id="duration"
				class="max-w-20"
				type="number"
				min="0"
				max="1000"
				bind:value={duration}
			/>
			<label for="duration" class="mb-0">Duration in ms</label>
		</div>
		<div class="flex items-center gap-x-4">
			<input id="delay" class="max-w-20" type="number" min="0" max="1000" bind:value={delay} />
			<label for="delay" class="mb-0">Delay in ms</label>
		</div>
		<fieldset>
			<legend>Easing</legend>
			{#each Object.keys(easingMap) as easing (easing)}
				<div class="flex items-center gap-x-4">
					<input
						id={easing}
						class="focus:ring-none max-w-max accent-primary focus:outline-none"
						type="radio"
						bind:group={selectedEasing}
						value={easing}
					/>
					<label for={easing} class="mb-0">{easing}</label>
				</div>
			{/each}
		</fieldset>
	</Card.Content>
</Card.Root>
