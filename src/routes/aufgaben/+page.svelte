<script lang="ts">
	import TasksOverview from '$lib/components/tasks/tasksOverview.svelte';
	import Tip from '$lib/components/tip.svelte';
</script>

<svelte:head>
	<title>Aufgaben</title>
</svelte:head>

<section class="section-spacing grid-content grid-spacing container">
	<h1>Let's get some shit done! 💥</h1>

	<article>
		<p>Du hast nun Zeit um Svelte / SvelteKit kennenzulernen und Hands-On Erfahrung zu machen.</p>
		<p>
			Dazu findest du hier eine Aufgabensammlung, welche dir unterschiedliche Konzepte des
			Frameworks näher bringen soll. Sammle möglichst viele Punkte!
		</p>
		<p>
			Die Beispiele der Aufgaben sind wortwörtlich Beispiele. Ihr dürft euch gerne an ihnen
			orientieren, dürft aber gerne eigene Ideen umsetzen.
		</p>
		<Tip
			class="lg:max-w-3/4 mt-8 pl-4 lg:pl-8"
			text="Erstelle in deinem eigenen Svelte Projekt immer eine neue route (+page.svelte) pro Aufgabe."
		/>
		<Tip
			class="lg:max-w-3/4 mt-3 pl-4 lg:pl-8"
			icon="🧠"
			text="AI-Tools sind erlaubt, probiert aber so gut es geht darauf zu verzichten - so lernt ihr mehr (;"
		/>
	</article>
</section>

<section class="section-spacing grid-content container">
	<h2>Aufgaben</h2>

	<TasksOverview />
</section>
