<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Basic Routing</title>
</svelte:head>

<section class="section-spacing grid-content grid-spacing container">
	<h1>{data.content.h1}</h1>
	<p>{data.content.p}</p>
</section>
