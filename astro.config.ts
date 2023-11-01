import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import remarkTwoslash from 'remark-shiki-twoslash'

import { CONFIG } from './config'

// https://astro.build/config
export default defineConfig({
  ...CONFIG,
  vite: {
    optimizeDeps: { exclude: ['fsevents'] },
  },
  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.ts',
    }),
  ],
  markdown: {
    remarkPlugins: [
      [remarkTwoslash, { themes: ['github-dark', 'github-light'] }],
    ],
  },
})
