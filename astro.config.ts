import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

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
})
