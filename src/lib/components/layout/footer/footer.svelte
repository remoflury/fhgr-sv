<script lang="ts">
	const year = new Date().getFullYear();

	type Props = {
		clientHeight?: number;
	};
	let { clientHeight = $bindable(0) }: Props = $props();
</script>

<footer bind:clientHeight class="container flex justify-end py-4 lg:py-8">
	<small>{year} Remo Flury</small>
</footer>
