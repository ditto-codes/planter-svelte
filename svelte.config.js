/** @type {import('@sveltejs/kit').Config} */
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

const config = {
	kit: {
		vite: {
			resolve: {
				alias: {
					'$styles': resolve("./src/styles/"),
					'$components': resolve("./src/components/"),
				}
			},
			css: {
				devSourcemap: true,
			},
		},
	},
	preprocess: [
		sveltePreprocess({
			sourceMap: true,
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
			},
		}),
	],
	compilerOptions: {
    enableSourcemap: true,
  },
};

export default config;
