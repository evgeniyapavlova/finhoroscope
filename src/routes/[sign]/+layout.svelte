<script>
	import { onMount } from 'svelte';
	import { signStore } from '$lib/signStore.js';
	export let data;

	const { sign } = data;

	onMount(() => {
		$signStore = sign;
	});
</script>

<slot />
