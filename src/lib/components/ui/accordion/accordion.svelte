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
		<h3 class="mb-0 flex w-full items-center justify-between gap-x-4 py-4 transition lg:py-6">
			{@render title()}
			<ChevronDown class="transition {open && 'rotate-180'}" />
		</h3>
	</button>

	{#if open}
		<div class="pb-8 pt-4 lg:pb-16" transition:slide={{ duration: 200, easing: sineInOut }}>
			{@render body()}
		</div>
	{/if}
</article>
