<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import '$lib/styles/fonts.scss';
	import '$lib/styles/styles.scss';

	import { signStore } from '$lib/signStore.js';

	import Card from '../../components/Card.svelte';

	export let data;

	const { sign } = data;

	let content;

	$: if ($signStore) {
		loadContent($signStore);
	}

	async function loadContent(sign) {
		const module = await import(`$lib/data/${sign}.json`);
		content = module.default;
	}
</script>

<div class="decorations">
	<div class="horo-circle"></div>
	<div class="star1"></div>
	<div class="star2"></div>
</div>

<div class="content">
	{#if content}
		<div class="content-title">
			<h1>financial horoscope <span>for 2025</span></h1>
			<h2><span>for</span> <span>{@html content.title}</span></h2>

			<div class="horo-image">
				<img src="{base}/images/{$signStore}.webp" loading="lazy" alt="{$signStore} sign" />
			</div>
		</div>

		{#each [1, 2, 3, 4, 5, 6, 7] as i, idx}
			<Card {i} content={content[`card${i}`]} {idx} />
		{/each}
	{/if}
</div>
