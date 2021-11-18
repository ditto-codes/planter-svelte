/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

import { URL } from 'url';
const __dirname = new URL('.', import.meta.url).pathname;

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					'$styles': resolve(__dirname, "./src/styles/"),
					'$components': resolve(__dirname, "./src/components/"),
				}
			}
		}
	},
	preprocess: [
		sveltePreprocess({
			scss: {
				includePaths: ['./src/styles', './node_modules'],
				prependData: `
					@import "./src/styles/_functions.scss";
					@import "./src/styles/tokens/_index.scss";
					@import "./src/styles/mixins/_index.scss";
				`
			},
			postcss: {
				plugins: [
					autoprefixer(),
				]
			}
		}),
	]
};

export default config;
