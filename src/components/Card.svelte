<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	export let i, idx, content;

	const titles = [
		'overall financial situation',
		'financial management',
		'what will bring success',
		'where you have to be careful',
		'astrological influences in&nbsp;2025',
		'numbers that will bring good luck in&nbsp;2025',
		'in conclusion'
	];

	let visible = false;

	function handleIntersection(entries) {
		if (entries[0].isIntersecting) {
			visible = true;
		}
	}

	let observer;
	let element;

	onMount(() => {
		observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.5
		});
		if (element) observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	});
</script>

<div class="content-card content-card-{i}">
	<div class="content-image" class:visible bind:this={element}>
		<img src="{base}/images/card{i}.webp" loading="lazy" alt="Card {i} illustration" />
	</div>
	<div class="content-text">
		<h3 class="h3-item" class:visible>{@html titles[idx]}:</h3>

		<ul class="outer">
			{#each content as j}
				<li class:visible class="li-item">
					<div class="li-bullet"></div>
					<div class="li-content">
						{#if typeof j === 'object'}
							{j.title}
							<ul class="inner">
								{#each j.list as k}
									<li>{k}</li>
								{/each}
							</ul>
						{:else}
							{@html j}
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
