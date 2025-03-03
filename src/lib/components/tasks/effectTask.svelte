<script lang="ts">
	import { browser } from '$app/environment';
	import Button from '../ui/button/button.svelte';

	let buttonClick = $state(0);

	const toggle = () => buttonClick++;
	const reset = () => {
		if (!browser) return;

		document.body.style.backgroundColor = '';
		document.body.style.transition = '';
	};

	const randomRgba = () => {
		const randomBetween = (min: number, max: number) =>
			min + Math.floor(Math.random() * (max - min + 1));
		const r = randomBetween(0, 255);
		const g = randomBetween(0, 255);
		const b = randomBetween(0, 255);
		return `rgb(${r},${g},${b})`;
	};

	$effect(() => {
		if (buttonClick) {
			document.body.style.backgroundColor = randomRgba();
			document.body.style.transition = 'ease 100ms';
		}
	});
</script>

<div class="flex flex-wrap items-center justify-start gap-x-4 gap-y-2">
	<Button onclick={toggle}>Hintergrundfarbe ändern</Button>
	<Button variant="secondary" onclick={reset}>Reset</Button>
</div>
