<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';

	let { data } = $props();

	const { product } = $derived(data);
</script>

<section class="section-spacing grid-content grid-spacing container">
	<figure class="aspect-video md:col-span-4">
		<img
			class="aspect-contain"
			src={product.images?.[0] ?? product.thumbnail}
			alt={product.title}
		/>
	</figure>
	<article class="md:col-span-4">
		<h1>{product.title}</h1>

		{#if product.tags.length}
			<div class="my-4 flex flex-wrap gap-x-4 gap-y-2 lg:my-8">
				{#each product.tags as tag}
					<Badge variant="secondary">{tag}</Badge>
				{/each}
			</div>
		{/if}

		<p class="font-bold">{product.price} $</p>
		<p class="mt-4">{product.description}</p>
	</article>
</section>
