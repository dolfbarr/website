import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://dolfbarr.github.io',
  base: '/website',
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
