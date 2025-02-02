<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		tag?: keyof HTMLElementTagNameMap;
		href?: string;
	};

	let className: $$Props['class'] = undefined;
	let tag: $$Props['tag'] = 'div';
	let href: $$Props['href'] = undefined;
	export { className as class, tag, href };
</script>

<svelte:element
	this={tag}
	{href}
	class={cn('bg-card text-card-foreground rounded-lg border shadow-sm', className)}
	{...$$restProps}
>
	<slot />
</svelte:element>
