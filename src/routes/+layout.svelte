<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	import { MAIN_LINK } from '$lib/link';
	import Footer from '../components/Footer.svelte';

	const title = 'Financial horoscope for 2025';
	const desc =
		'Discover your personalized financial horoscope for 2025. Learn what the stars reveal about your money, investments, and career opportunities in the year ahead. Plan wisely and align with cosmic guidance for financial success.';
	const meta_img = `${base}/images/meta.jpg`;

	onMount(() => {
		const search = window.location.search;
		$MAIN_LINK = $MAIN_LINK + search.replace('?', '&');
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta_img} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta_img} />
</svelte:head>

<slot />
<Footer />
