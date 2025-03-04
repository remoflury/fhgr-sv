<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="section-spacing container">
	<h1>Ups, da lief etwas schief.</h1>

	<p>Das ist eine +error.svelte Seite, welche von SvelteKit bei einem Error geladen wird.</p>

	<Button href="/" class="mt-8">Zur Startseite</Button>
</section>

<svelte:head>
	<title>Error</title>
</svelte:head>
