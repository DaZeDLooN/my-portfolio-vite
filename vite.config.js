import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio-vite/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
});


