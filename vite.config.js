import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' if hosted at the root domain, or '/subpath/' for subpath hosting
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
