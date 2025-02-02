<script lang="ts">
	import Nav from '$lib/components/layout/nav/nav.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../css/main.css';
	let { children } = $props();
</script>

<ModeWatcher />
<Nav />

<main class="container">
	{@render children()}
</main>
