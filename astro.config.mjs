import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [
		sitemap(),
		prefetch(),
		tailwind(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
	],
});
