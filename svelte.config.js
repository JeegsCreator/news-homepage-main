import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess'
import path from 'node:path';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			entries: [
				'*'
			]
		},
		paths: {
			base: dev ? '' : '/news-homepage-main',
		},
		appDir: 'internal',
		adapter: adapter()
	},
	preprocess: preprocess({
		scss: {
			prependData: `@import '${path.resolve('./src/routes/app.scss')}';`
		  } 
	})
};

export default config;
