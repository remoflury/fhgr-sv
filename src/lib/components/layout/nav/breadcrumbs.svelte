<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';

	import { page } from '$app/state';

	const uriSegments = $derived(page.url.pathname.split('/').filter(Boolean));
	const capitalizeFirstLetter = (input: string): string => {
		return String(input).charAt(0).toUpperCase() + String(input).slice(1);
	};
</script>

{#if uriSegments.length > 1}
	<Breadcrumb.Root class="py-8">
		<Breadcrumb.List>
			{#each uriSegments as seg, i}
				<Breadcrumb.Item>
					<Breadcrumb.Link href={seg}>{capitalizeFirstLetter(seg)}</Breadcrumb.Link>
				</Breadcrumb.Item>
				{#if i + 1 != uriSegments.length}
					<Breadcrumb.Separator />
				{/if}
			{/each}
		</Breadcrumb.List>
	</Breadcrumb.Root>
{/if}
