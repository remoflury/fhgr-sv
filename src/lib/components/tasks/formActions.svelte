<script lang="ts">
	import { enhance } from '$app/forms';
	import { toast } from 'svelte-sonner';
	import Button from '../ui/button/button.svelte';
</script>

<p>
	Hier ist ein Formular, welches keine Frontend-Validierung hat (max=9 und requred="true" fehlen).
	Die Nummer sollte kleiner als 10 sein. Die Valiedierung geschieht Server-Seitig.
</p>
<form
	action="/aufgaben?/formaction"
	method="POST"
	class="max-w-80"
	use:enhance={() => {
		return async ({ result }) => {
			if (result.type == 'failure') {
				toast.error(result.data?.message as string);
			} else {
				toast.success('Nummer erfolgreich validiert.');
			}
		};
	}}
>
	<label for="number">Deine Nummer <sup class="text-destructive">*</sup></label>
	<input name="number" id="number" />

	<Button type="submit" class="mt-4">Submit</Button>
</form>
