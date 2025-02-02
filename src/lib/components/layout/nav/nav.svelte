<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Menubar from '$lib/components/ui/menubar';
	import { CodeXml } from 'lucide-svelte';
	import LightSwitch from './lightSwitch.svelte';

	type Props = {
		clientHeight?: number;
	};
	let { clientHeight = $bindable(0) }: Props = $props();

	const items: {
		label: string;
		href: string;
	}[] = [
		// {
		// 	href: '/quicklinks',
		// 	label: 'Quicklinks'
		// },
		{
			href: '/aufgaben',
			label: 'Aufgaben'
		}
	];
</script>

<nav class="container py-2" bind:clientHeight>
	<Menubar.Root class="items-center justify-end py-1 pl-4">
		<a href="/" class="col-span-1 mr-auto max-w-max" title="zur Startseite">
			<CodeXml class="stroke-primary" />
		</a>
		{#each items as item}
			<Menubar.Menu>
				<Button variant="link" href={item.href}>{item.label}</Button>
			</Menubar.Menu>
		{/each}
		<Menubar.Menu>
			<LightSwitch />
		</Menubar.Menu>
	</Menubar.Root>
</nav>
