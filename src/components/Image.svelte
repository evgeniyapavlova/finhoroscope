<script>
	import { base } from '$app/paths';

	export let path = '',
		format = 'jpg',
		classes = '',
		alt = '';

	const basePath = `${base}/images/${path}`;
</script>

<picture class={classes}>
	<source type="image/avif" srcset="{basePath}@1x.avif 1x, {basePath}@2x.avif 2x" />

	<source type="image/webp" srcset="{basePath}@1x.webp 1x, {basePath}@2x.webp 2x" />

	<source srcset="{basePath}@1x.{format} 1x, {basePath}@2x.{format} 2x" />

	<img src="{basePath}@1x.{format}" {alt} loading="lazy" />
</picture>
