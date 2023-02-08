import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess'
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		})
	},
	preprocess: preprocess({
		scss: {
			prependData: `@use "sass:color"; @import '${path.resolve('./src/routes/app.scss')}';`
		  } 
	})
};

export default config;
