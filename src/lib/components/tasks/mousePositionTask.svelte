<script lang="ts">
	let x = $state(0);
	let y = $state(0);
	let innerHeight = $state(0);
	let innerWidth = $state(0);

	const updatePos = (e: MouseEvent) => {
		x = e.x;
		y = e.y;
	};
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<svelte:body onmousemove={updatePos} />

<div class="mb-20">
	<p>Aktuelle X Position: {x}px</p>
	<p>Aktuelle Y Position: {y}px</p>

	<p class="mt-4">Deine Maus ist in der {x > innerWidth / 2 ? 'rechten' : 'linken'} Hälfte.</p>
	<p>Deine Maus ist in der {y > innerHeight / 2 ? 'unteren' : 'oberen'} Hälfte.</p>
</div>
