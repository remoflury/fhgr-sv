<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	const links: {
		label: string;
		href: string;
		desc?: string;
	}[] = [
		{
			label: 'Svelte Dokumentation',
			href: 'https://svelte.dev/',
			desc: 'Erfahre mehr, wie Svelte und SvelteKit funktioniert.'
		},
		{
			label: 'Interaktives Svelte Tutorial',
			href: 'https://svelte.dev/tutorial/svelte/welcome-to-svelte'
		},
		{
			label: 'Svelte Playground',
			href: 'https://svelte.dev/playground/',
			desc: 'Keine Lust ein Repo aufzusetzen? Hier schnell etwas aufsetzen.'
		},
		{
			label: 'Svelte Libraries / Ecosystem',
			href: 'https://github.com/svecosystem',
			desc: 'Übersicht beliebter Svelte Libraries'
		},
		{
			label: 'Tailwind v3 Dokumentation',
			href: 'https://v3.tailwindcss.com/',
			desc: 'Dokumentation des beliebten utility-first CSS-Frameworks.'
		}
	];
</script>

<section class="section-spacing grid-content grid-spacing container">
	<h1>Welcome to Svelte / SvelteKit</h1>

	<h2 class="">Quicklinks:</h2>
	<ul class="grid-spacing grid grid-cols-2">
		{#each links as link}
			<li>
				<Card.Root
					tag="a"
					href={link.href}
					title={link.label}
					class=" hover:bg-accent inline-block h-full w-full transition"
				>
					<Card.Header>
						<Card.Title>{link.label}</Card.Title>
					</Card.Header>
					<Card.Content>
						{#if link.desc}
							<Card.Description>{link.desc}</Card.Description>
						{/if}
					</Card.Content>
				</Card.Root>
			</li>
		{/each}
	</ul>
</section>
