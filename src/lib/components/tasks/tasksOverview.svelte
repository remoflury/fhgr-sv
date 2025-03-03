<script lang="ts">
	import type { DifficultyProps } from '$lib/types';
	import { sineInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import { createTasks } from '$lib/data';
	import Accordion from '../ui/accordion/accordion.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import Button from '../ui/button/button.svelte';

	const tasks = createTasks();

	const levels = tasks.reduce((acc: DifficultyProps[], curr) => {
		if (!acc.includes(curr.difficulty)) {
			acc.push(curr.difficulty);
		}

		return acc;
	}, []);

	let selected: DifficultyProps[] = $state([]);

	const toggleFilter = (level: DifficultyProps) => {
		const index = selected.indexOf(level);
		if (index < 0) {
			selected.push(level);
		} else {
			selected.splice(index, 1);
		}
	};

	const resetFilter = () => (selected = []);

	const filteredTasks = $derived.by(() => {
		return tasks.filter((task) => {
			if (!selected.length) return true;
			return selected.includes(task.difficulty);
		});
	});
</script>

<div class="my-2 flex items-center justify-start gap-x-4 gap-y-2">
	<Button variant={!selected.length ? 'default' : 'secondary'} onclick={resetFilter}>Alle</Button>
	{#each levels as level}
		<Button
			variant={selected.includes(level) ? 'default' : 'secondary'}
			onclick={() => toggleFilter(level)}>{level}</Button
		>
	{/each}
</div>

{#each filteredTasks as task (crypto.randomUUID())}
	<div
		class="grid-spacing grid grid-cols-subgrid"
		in:fly={{ duration: 150, easing: sineInOut, y: -8 }}
	>
		<Accordion class="lg:col-span-8">
			{#snippet title()}
				<div class="flex w-full items-center justify-between gap-x-4">
					<span class="text-left">
						{task.title}
					</span>
					<Badge
						variant="outline"
						class="inline-block max-w-max lg:mr-8 {task.difficulty == 'easy' && 'bg-primary'}
				{task.difficulty == 'medium' && 'bg-yellow text-yellow-foreground'}
				{task.difficulty == 'advanced' && 'bg-destructive text-destructive-foreground'}
				"
					>
						{task.difficulty}
					</Badge>
				</div>
			{/snippet}

			{#snippet body()}
				<h4 class="mb-4">
					Punkte: {task.points}
				</h4>

				<p class="cke">
					{@html task.description}
				</p>

				{#if task.more}
					<div class="ml-8 mt-8">
						<h4 class="mb-4">{task.more.title}</h4>
						<task.more.component />
					</div>
				{/if}
			{/snippet}
		</Accordion>
	</div>
{/each}
