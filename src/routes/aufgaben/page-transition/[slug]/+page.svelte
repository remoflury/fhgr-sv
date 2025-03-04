<script lang="ts">
	import { page } from '$app/state';
	import { LoremIpsum } from 'lorem-ipsum';

	const lorem = new LoremIpsum({
		sentencesPerParagraph: {
			max: 8,
			min: 4
		},
		wordsPerSentence: {
			max: 16,
			min: 4
		}
	});

	const countRandomSentences = Math.floor(Math.random() * (10 - 3) + 3);

	const title = $derived(
		'Subseite ' + page.url.pathname.split('-')[page.url.pathname.split('-').length - 1]
	);
</script>

<svelte:head><title>{title}</title></svelte:head>

<section class="section-spacing container">
	<h1>{title}</h1>
	<p>{lorem.generateSentences(countRandomSentences)}</p>
</section>
