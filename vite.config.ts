import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // Put Tailwind first so its CSS transforms run early
    tailwindcss(),
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true, // auto-open browser
    strictPort: true, // don’t fall back to random port
    watch: {
      usePolling: true, // 👈 helps in Docker, WSL, VM, or network drives
      interval: 100, // check for changes every 100ms
    },
    hmr: {
      overlay: true, // show errors in browser overlay
    },
  },
})
