<script lang="ts">
	import { page } from '$app/state';
	import * as Card from '$lib/components/ui/card';
	let { data } = $props();
</script>

<svelte:head>
	<title>Stores</title>
</svelte:head>

<section class="section-spacing grid-content grid-spacing container">
	<h1>Produkte</h1>

	<ul class="grid-spacing grid grid-cols-subgrid">
		{#each data.products.products as product}
			<li class="relative col-span-full h-full sm:col-span-2 md:col-span-4">
				<Card.Root
					tag="a"
					href="{page.url.pathname}/{product.id}"
					class="group relative inline-block w-full"
				>
					<Card.Header>
						<Card.Title class="transition group-hover:text-primary">{product.title}</Card.Title>
						<Card.Description>{product.price} $</Card.Description>
					</Card.Header>
					<Card.Content>
						<img
							src={product.thumbnail}
							loading="lazy"
							alt={product.title}
							class="aspect-video h-full w-full object-contain"
						/>
					</Card.Content>
				</Card.Root>
			</li>
		{/each}
	</ul>
</section>
