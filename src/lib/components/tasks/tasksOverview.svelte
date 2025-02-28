<script lang="ts">
	import { tasks } from '$lib/data';
	import Accordion from '../ui/accordion/accordion.svelte';
	import Badge from '../ui/badge/badge.svelte';
</script>

{#each tasks as task}
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
{/each}
