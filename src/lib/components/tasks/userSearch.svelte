<script lang="ts">
	import type { DummyJsonUsersApiResponse } from '$lib/types';
	import { page } from '$app/state';
	import * as Card from '$lib/components/ui/card';

	import Skeleton from '../ui/skeleton/skeleton.svelte';

	let query = $state('');
	let fetchWithKey = $state(true);

	const fetchUsers = async (q: string, withKey: boolean) => {
		// to simulate latency
		await new Promise((resolve) => setTimeout(resolve, 500));
		const url = new URL(`${page.url.origin}/api/tasks/user`);
		if (q) {
			url.searchParams.set('q', q);
		}
		if (withKey) {
			url.searchParams.set('with-key', withKey.toString());
		}

		const res = await fetch(url);
		const data: DummyJsonUsersApiResponse = await res.json();

		if (res.status >= 400) {
			throw new Error();
		}

		return data;
	};
</script>

<div class="space-y-4">
	<div class="max-w-80">
		<label for="s">Suche nach User</label>
		<input type="search" id="search" bind:value={query} />
	</div>
	<div class="flex max-w-80 items-center gap-x-4">
		<label for="key" class="mb-0 max-w-max">Fetch mit API Key</label>
		<input type="checkbox" id="key" class="max-w-max accent-primary" bind:checked={fetchWithKey} />
	</div>
	<div class="grid-content grid-spacing mt-4 grid">
		{#await fetchUsers(query, fetchWithKey)}
			{#each Array.from({ length: 8 }) as _}
				<Skeleton class="col-span-4 block aspect-square" />
			{/each}
		{:then users}
			{#each users.users as user}
				<Card.Root class="lg:col-span-4">
					<Card.Header>
						<Card.Title tag="h4" class="flex items-start justify-between gap-x-4">
							<span>
								{user.firstName}
								{user.lastName}
							</span>

							<img
								class="h-12 w-12"
								src={user.image}
								alt="Bild von {user.firstName} {user.lastName}"
								loading="lazy"
							/>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<p>
							{user.address.address}<br />
							{user.address.postalCode}
							{user.address.city}<br />
							{user.address.country}
						</p>
					</Card.Content>
				</Card.Root>
			{:else}
				<p>Kein User mit Suchbegriff: {query} gefunden.</p>
			{/each}
		{:catch err}
			<p class="rounded-md bg-destructive px-4 py-2 text-destructive-foreground">
				{#if fetchWithKey}
					Ups, da lief etwas schief.
				{:else}
					Unauthentifizierter Zugriff, access denied.
				{/if}
			</p>
		{/await}
	</div>
</div>
