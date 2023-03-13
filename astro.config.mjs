import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	site: 'https://www.nsmobile.be',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [
		sitemap({
			customPages: [
				'https://www.nsmobile.be',
				'https://www.nsmobile.be/particuliers',
				'https://www.nsmobile.be/entreprises',
			],
		}),
		prefetch(),
		tailwind(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
	],
});
