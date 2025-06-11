import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/' : '/', // Vercel auto-routes at root
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}));