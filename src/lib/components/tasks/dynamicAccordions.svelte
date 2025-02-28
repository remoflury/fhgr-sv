<script lang="ts">
	import Accordion from '../ui/accordion/accordion.svelte';
	import Skeleton from '../ui/skeleton/skeleton.svelte';

	const fetchContent = async () => {
		await new Promise((resolve) => setTimeout(resolve, 5000));
		const res = await fetch('/api/accordions');
		const data: { accordions: { title: string; content: string }[] } = await res.json();

		return data;
	};
</script>

{#await fetchContent()}
	{#each Array.from({ length: 6 }) as _}
		<Skeleton class="mb-4 block h-12 w-full " />
	{/each}
{:then data}
	{#each data.accordions as item}
		<Accordion>
			{#snippet title()}
				{item.title}
			{/snippet}
			{#snippet body()}
				{@html item.content}
			{/snippet}
		</Accordion>
	{/each}
{/await}
