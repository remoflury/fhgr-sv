<script lang="ts">
	import Accordion from '../ui/accordion/accordion.svelte';

	const accordions = [
		{
			title: 'Accordion 1',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis fugit impedit molestiae ab neque? Soluta facilis voluptatum expedita odit?'
		},
		{
			title: 'Accordion 2',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis fugit impedit molestiae ab neque? Soluta facilis voluptatum expedita odit?'
		},
		{
			title: 'Accordion 3',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis fugit impedit molestiae ab neque? Soluta facilis voluptatum expedita odit?'
		}
	];
</script>

{#each accordions as item}
	<Accordion>
		{#snippet title()}
			{item.title}
		{/snippet}
		{#snippet body()}
			{item.content}
		{/snippet}
	</Accordion>
{/each}
