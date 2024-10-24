import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['twitter-api-v2']
  },
  build: {
    commonjsOptions: {
      include: [/twitter-api-v2/, /node_modules/]
    }
  }
});