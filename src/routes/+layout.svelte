<script lang="ts">
	import Nav from '$lib/components/layout/nav/nav.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../css/main.css';
	import Footer from '$lib/components/layout/footer/footer.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	let { children } = $props();

	let navHeight = $state(0);
	let footerHeight = $state(0);
</script>

<ModeWatcher />

<Toaster position="top-right" />
<Nav bind:clientHeight={navHeight} />

<main class="container" style="min-height: calc(100dvh - {footerHeight}px - {navHeight}px">
	{@render children()}
</main>

<Footer bind:clientHeight={footerHeight} />
