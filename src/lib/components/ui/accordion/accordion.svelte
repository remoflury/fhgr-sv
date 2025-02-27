<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ChevronDown } from 'lucide-svelte';
	import { slide } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';

	type Props = {
		title: Snippet;
		body: Snippet;
		class?: string;
	};
	let { title, body, class: className = '' }: Props = $props();

	let open = $state(false);
	const toggle = () => {
		open = !open;
	};
</script>

<article class="border-b border-secondary {className}">
	<button class="w-full" onclick={toggle} aria-label="toggle">
		<h3 class="flex w-full items-center justify-between gap-x-4 py-4 transition">
			{@render title()}
			<ChevronDown />
		</h3>
	</button>

	{#if open}
		<div class="pb-6 pt-4" transition:slide={{ duration: 200, easing: sineInOut }}>
			{@render body()}
		</div>
	{/if}
</article>
