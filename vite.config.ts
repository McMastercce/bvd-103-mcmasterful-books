import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  server: {
    host: '0.0.0.0',
    port: 9080,
    allowedHosts: 'all',
    fs: {
      strict: false,
    }
  },
})
