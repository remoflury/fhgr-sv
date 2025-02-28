<script lang="ts">
	import { draw, type DrawParams } from 'svelte/transition';
	import Button from '../ui/button/button.svelte';
	import { cubicIn, cubicInOut, cubicOut, sineOut } from 'svelte/easing';

	let show = $state(false);
	let isFinished = $state(false);
	const duration = 1000;

	const toggle = () => {
		show = !show;

		setTimeout(() => {
			isFinished = !isFinished;
		}, duration);
	};

	const transitionConfig: DrawParams = {
		duration,
		easing: sineOut
	};
</script>

<div class="space-y-8">
	<Button onclick={toggle} title="toggle">SVG {show ? 'verbergen' : 'anzeigen'}</Button>
	<figure class="h-20 w-20">
		{#if show}
			<svg
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="fill-none transition"
				class:stroke-white={!isFinished}
				class:stroke-primary={isFinished}
			>
				<path transition:draw={{ ...transitionConfig }} d="M2 10v3" />
				<path transition:draw={{ delay: 100, ...transitionConfig }} d="M6 6v11" />
				<path transition:draw={{ delay: 200, ...transitionConfig }} d="M10 3v18" />
				<path transition:draw={{ delay: 300, ...transitionConfig }} d="M14 8v7" />
				<path transition:draw={{ delay: 400, ...transitionConfig }} d="M18 5v13" />
				<path transition:draw={{ delay: 500, ...transitionConfig }} d="M22 10v3" />
			</svg>
		{/if}
	</figure>
</div>
