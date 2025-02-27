<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		tag?: keyof HTMLElementTagNameMap;
		href?: string;
		target?: string;
	};

	let className: $$Props['class'] = undefined;
	let tag: $$Props['tag'] = 'div';
	let href: $$Props['href'] = undefined;
	let target: $$Props['target'] = undefined;
	export { className as class, tag, href, target };
</script>

<svelte:element
	this={tag}
	{href}
	class={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
	{target}
	{...$$restProps}
>
	<slot />
</svelte:element>
