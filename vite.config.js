import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
    assetsDir: 'assets', 
  },
  server: { port: 3030},
  preview: {
    port: 7806, 
  }
})
