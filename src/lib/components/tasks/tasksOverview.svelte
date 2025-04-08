<script lang="ts">
	import type { DifficultyProps } from '$lib/types';
	import { sineInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { createTasks } from '$lib/data';
	import Accordion from '../ui/accordion/accordion.svelte';
	import Badge from '../ui/badge/badge.svelte';
	import Button from '../ui/button/button.svelte';

	const tasks = createTasks().sort((a, b) => a.difficulty.level - b.difficulty.level);

	const levelMap = {
		1: 'easy',
		2: 'medium',
		3: 'advanced'
	};

	const levels = tasks.reduce((acc: (1 | 2 | 3)[], curr) => {
		if (!acc.includes(curr.difficulty.level)) {
			acc.push(curr.difficulty.level);
		}

		return acc;
	}, []);

	let selected: (1 | 2 | 3)[] = $state([]);

	const toggleFilter = (level: 1 | 2 | 3) => {
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
			return selected.includes(task.difficulty.level);
		});
	});
</script>

<div class="my-2 flex items-center justify-start gap-x-4 gap-y-2">
	<Button variant={!selected.length ? 'default' : 'secondary'} onclick={resetFilter}>Alle</Button>
	{#each levels as level}
		<Button
			variant={selected.includes(level) ? 'default' : 'secondary'}
			onclick={() => toggleFilter(level)}>{levelMap[level]}</Button
		>
	{/each}
</div>

{#each filteredTasks as task (crypto.randomUUID())}
	<div
		class="grid-spacing grid grid-cols-subgrid"
		in:fly={{ duration: 150, easing: sineInOut, y: -8 }}
	>
		<Accordion class="col-span-full lg:col-span-8">
			{#snippet title()}
				<div class="flex w-full items-center justify-between gap-x-4">
					<span class="text-left">
						{task.title}
					</span>
					<Badge
						variant="outline"
						class="inline-block max-w-max lg:mr-8 {task.difficulty.label == 'easy' && 'bg-primary'}
						{task.difficulty.label == 'medium' && 'bg-yellow text-yellow-foreground'}
						{task.difficulty.label == 'advanced' && 'bg-destructive text-destructive-foreground'}
						"
					>
						{task.difficulty.label}
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
