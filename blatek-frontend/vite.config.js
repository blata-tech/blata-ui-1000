import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  root: resolve(__dirname, '..'),
  base: process.env.NODE_ENV === 'production' ? '/blata-ui-1000/' : '/',
  build: {
    outDir: 'blatek-frontend/dist',
    assetsDir: 'assets',
  },
  plugins: [react()],
  resolve: {
    alias: {
      // ✅ Tell Vite where to find React dependencies
      react: resolve(__dirname, 'node_modules/react'),
      'react-dom': resolve(__dirname, 'node_modules/react-dom'),
    },
  },
  server: {
    fs: {
       allow: [resolve(__dirname, '..')], // Adjust this to allow only frontend files
    },
  },
  optimizeDeps: {
    exclude: [
      'express',
      'body-parser',
      'cors',
      'express-validator',
      'fs',
      'path',
      'url',
      'word-list',
    ],
  },
});
