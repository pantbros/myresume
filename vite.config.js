import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/myresume/',  // Adjust the base path for GitHub Pages
  plugins: [react()],
});