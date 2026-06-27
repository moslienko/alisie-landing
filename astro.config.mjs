// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://alisie.app',
  // Custom domain (alisie.app) is served from the root, so base stays '/'.
  base: '/',
  output: 'static',
  // Emit /privacy/index.html etc. so deep links and reloads work on GitHub Pages.
  build: {
    format: 'directory',
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
})
