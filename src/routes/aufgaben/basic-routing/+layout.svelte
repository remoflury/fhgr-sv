<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';

	let { children } = $props();
</script>

<nav class="border-b border-secondary py-4">
	❗ Mein Custom Menu das auf dieser und jeder Subseite erscheint. ❗

	<div class="">
		<Button
			variant="link"
			href="/aufgaben/basic-routing"
			class="{page.url.pathname != '/aufgaben/basic-routing'
				? 'text-foreground'
				: ''} cursor-pointer">Basic Routing</Button
		>
		<Button
			variant="link"
			class="{page.url.pathname != '/aufgaben/basic-routing/test'
				? 'text-foreground'
				: ''} cursor-pointer"
			href={'/aufgaben/basic-routing/test'}>Subseite</Button
		>
	</div>
</nav>
{@render children()}
