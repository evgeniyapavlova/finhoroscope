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
		<p class="footer-rw">
			The content on the page is intended for Review, which means that the information provided on
			the page is intended for users to view and study. It does not require any active actions from
			the user, except for reading or viewing.
		</p>

		<div class="footer-links">
			{#each zodiacSigns as sign}
				<a href="{base}/{sign}/" data-sign={sign} onclick={setSignStore}
					>{capitalizeFirstLetter(sign)}</a
				>
			{/each}
		</div>
	</div>
</footer>

<style>
	.footer-rw {
		color: hsl(261, 66%, 82%);
	}
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
		font-size: 16px;
	}

	.footer-links {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 8px;
	}

	.content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 48px;
	}

	@media screen and (max-width: 1000px) {
		.footer-links {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media screen and (max-width: 660px) {
		.footer-links {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (max-width: 550px) {
		.content {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
