import { defineConfig } from 'vite'

export default defineConfig({
  base: '/birthday-countdown-js/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
