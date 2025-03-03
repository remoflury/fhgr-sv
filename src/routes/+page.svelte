<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	const links: {
		label: string;
		href: string;
		desc?: string;
		target?: '_blank' | undefined;
	}[] = [
		{
			label: 'Svelte Dokumentation',
			href: 'https://svelte.dev/',
			desc: 'Erfahre mehr, wie Svelte und SvelteKit funktioniert.',
			target: '_blank'
		},
		{
			label: 'Interaktives Svelte Tutorial',
			href: 'https://svelte.dev/tutorial/svelte/welcome-to-svelte',
			target: '_blank'
		},
		{
			label: 'Svelte Playground',
			href: 'https://svelte.dev/playground/',
			desc: 'Keine Lust ein Repo aufzusetzen? Hier schnell etwas aufsetzen.',
			target: '_blank'
		},
		{
			label: 'Svelte Libraries',
			href: 'https://github.com/TheComputerM/awesome-svelte',
			desc: 'Übersicht beliebter Svelte Libraries',
			target: '_blank'
		},
		{
			label: 'Tailwind v4 Dokumentation',
			href: 'https://tailwindcss.com/',
			desc: 'Dokumentation des beliebten utility-first CSS-Frameworks.',
			target: '_blank'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="section-spacing grid-content grid-spacing container">
	<h1>Welcome to Svelte / SvelteKit</h1>

	<h2 class="">Quicklinks:</h2>
	<ul class="grid-spacing grid md:grid-cols-2">
		{#each links as link}
			<li>
				<Card.Root
					tag="a"
					href={link.href}
					title={link.label}
					target={link.target}
					class="group relative inline-block h-full w-full transition hover:bg-accent"
				>
					<figure class="absolute right-6 top-6">
						<SquareArrowOutUpRight class="transition group-hover:stroke-primary" />
					</figure>
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
