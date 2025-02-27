<script lang="ts">
	import Button from '../ui/button/button.svelte';

	const values = ['rot', 'grün', 'blau', 'violett', 'gelb', 'pink'];

	let selected = $state(values[0]);

	const changeColor = () => {
		const filteredValues = values.filter((v) => v != selected);

		selected = filteredValues[Math.floor(Math.random() * filteredValues.length)];
	};
</script>

<p
	class="transition duration-500"
	class:text-red-600={selected == 'rot'}
	class:text-green-600={selected == 'grün'}
	class:text-blue-600={selected == 'blau'}
	class:text-purple-600={selected == 'violett'}
	class:text-yellow-600={selected == 'gelb'}
	class:text-pink-500={selected == 'pink'}
>
	Mein text ist {selected}
</p>
<Button class="mt-4" onclick={changeColor}>Farbe wechseln</Button>
