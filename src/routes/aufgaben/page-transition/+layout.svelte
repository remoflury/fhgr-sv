<script lang="ts">
	import { page } from '$app/state';
	import { sineInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let { children } = $props();

	const sites = [
		{
			label: 'Page Transition',
			href: `/aufgaben/page-transition`
		},
		{
			label: 'Subseite 1',
			href: `/aufgaben/page-transition/subseite-1`
		},
		{
			label: 'Subseite 2',
			href: `/aufgaben/page-transition/subseite-2`
		},
		{
			label: 'Subseite 3',
			href: `/aufgaben/page-transition/subseite-3`
		}
	];
</script>

<svelte:head>
	<title>Page Transitions</title>
</svelte:head>

<ul class="section-spacing flex flex-wrap gap-x-4 gap-y-2 lg:gap-x-8">
	{#each sites as site}
		<li>
			<a
				class:underline={page.url.pathname === site.href}
				class="underline-offset-2"
				href={site.href}>{site.label}</a
			>
		</li>
	{/each}
</ul>

{#key page.url.pathname}
	<div
		class="overflow-x-hidden"
		out:fly={{ duration: 500, easing: sineInOut, x: 100 }}
		in:fly={{ duration: 500, easing: sineInOut, x: -100, delay: 500 }}
	>
		{@render children()}
	</div>
{/key}
