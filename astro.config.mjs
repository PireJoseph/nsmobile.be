import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true,
	},
	output: 'server',
	site: 'https://www.nsmobile.be/',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [sitemap(), prefetch(), tailwind()],
});

