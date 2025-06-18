import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: 'https://react-portfolioadmin-production.up.railway.app/',
        changeOrigin: true,
      }
    }
  }
}) 