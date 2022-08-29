import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target:'https://api.igdb.com/',
        changeOrigin: true,
        followRedirects: true,
        rewrite: (url) => (console.log('url', url), url)
      }
    }
  }
})
