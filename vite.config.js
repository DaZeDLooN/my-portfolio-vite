import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/my-portfolio-vite/' : '/',
    build: {
      rollupOptions: {
        input: {
          main: 'index.html',
        },
      },
    },
  };
});


