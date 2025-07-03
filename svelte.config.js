import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

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
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		// paths: {
		// 	base: process.env.NODE_ENV === 'production' ? '/finhoroscope' : ''
		// },
		prerender: {
			entries: [...zodiacSigns.map((sign) => `/${sign}`), '/']
		}
	},
	alias: {
		$lib: path.resolve('src/lib'),
		$common: path.resolve('src/components/common'),
		$comps: path.resolve('src/components')
	}
};

export default config;
