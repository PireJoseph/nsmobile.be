import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://www.nsmobile.be/',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    sitemap(),
    tailwind(),
    partytown({
      config: {
        // Adds dataLayer.push as a forwarding-event.
        forward: ['dataLayer.push'],
      },
    }),
    mdx(),
  ],
})
