<script lang="ts">
	type Props = {
		text: string;
		class?: string;
	};
	let { text, class: className = '' }: Props = $props();
</script>

<p class={className}>
	<span class="mr-4">💡</span>{text}
</p>
