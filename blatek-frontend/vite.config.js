import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  base: process.env.NODE_ENV === 'production' ? '/blata-ui-1000/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    host: true
  },
  preview: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  }
});
