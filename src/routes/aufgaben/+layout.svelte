<script lang="ts">
	import Breadcrumbs from '$lib/components/layout/nav/breadcrumbs.svelte';

	let { children } = $props();
</script>

<Breadcrumbs />

{@render children()}
