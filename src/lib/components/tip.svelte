<script lang="ts">
	type Props = {
		text: string;
		class?: string;
		icon?: string;
	};
	let { text, class: className = '', icon = '💡' }: Props = $props();
</script>

<p class={className}>
	<span class="mr-4">{icon}</span>{text}
</p>
