<script>
	import { base } from '$app/paths';

	import { signStore } from '$lib/signStore.js';

	function capitalizeFirstLetter(str) {
		if (!str) return '';
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	const zodiacSigns = [
		'aquarius',
		'aries',
		'cancer',
		'capricorn',
		'gemini',
		'leo',
		'libra',
		'pisces',
		'sagittarius',
		'scorpio',
		'taurus',
		'virgo'
	];

	const setSignStore = (e) => {
		const { sign } = e.target.dataset;
		$signStore = sign;
	};
</script>

<footer>
	<div class="content">
		{#each zodiacSigns as sign}
			<a href="{base}/{sign}/" data-sign={sign} onclick={setSignStore}
				>{capitalizeFirstLetter(sign)}</a
			>
		{/each}
	</div>
</footer>

<style>
	a {
		color: var(--highlight-text);
		text-decoration: none;
		display: block;
		transition: color ease-in-out 0.2s;
	}

	a:hover {
		text-decoration: underline;
		color: var(--highlight-text-hover);
	}

	footer {
		padding: 60px 0;
		background-color: var(--highlight-bgr);
		margin-top: 60px;
		margin-bottom: -80px;
	}

	.content {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 8px;
	}

	@media screen and (max-width: 600px) {
		.content {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
