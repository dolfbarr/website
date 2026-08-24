import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import remarkTwoslash from 'remark-shiki-twoslash'

import { CONFIG } from './config'

// https://astro.build/config
export default defineConfig({
  ...CONFIG,
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    optimizeDeps: { exclude: ['fsevents'] },
  },
  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.ts',
    }),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      [remarkTwoslash as any, { themes: ['github-dark', 'github-light'] }],
    ],
  },
})
