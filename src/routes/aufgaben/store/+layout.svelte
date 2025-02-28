<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { cartStore } from '$lib/store';
	import { Accessibility, ShoppingBasket } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';

	let { children } = $props();
	let open = $state(false);

	const cleanCart = $derived.by(() => {
		const map = new Map();

		$cartStore.forEach((item) => {
			if (!map.has(item.id)) {
				// Store a new entry in the map with an 'amount' of 1
				map.set(item.id, { ...item, amount: 1 });
			} else {
				// Increment the existing amount
				const existing = map.get(item.id);
				existing.amount++;
			}
		});
		return Array.from(map.values());
	});
</script>

<div class="section-spacing container">
	<p>Dein Warenkorb: {$cartStore.length} Produkte</p>

	<Button onclick={() => (open = true)} class="mt-4"><ShoppingBasket /></Button>

	<Dialog.Root bind:open>
		<Dialog.Content>
			<Dialog.Header>
				<Dialog.Title class="text-foreground">Dein Warenkorb</Dialog.Title>
			</Dialog.Header>

			<div class="">
				{#each cleanCart as item}
					<p class="mt-3 first:mt-0">{item.amount}x: {item.title}</p>
					<small>{item.price} $ / Stk.</small>
				{:else}
					<p>Du hast noch keine Produkte in deinem Warenkorb.</p>
				{/each}

				<p class="mt-6 font-bold">
					Total: {$cartStore
						.reduce((p, c) => {
							return p + c.price;
						}, 0)
						.toFixed(2)} $
				</p>
			</div>
		</Dialog.Content>
	</Dialog.Root>
</div>

{@render children()}
