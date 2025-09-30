import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['.'], // Adjust this to allow only frontend files
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
