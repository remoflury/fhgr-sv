<script lang="ts">
	import '../css/main.css';
	let { children } = $props();
</script>

<main class="container">
	{@render children()}
</main>
