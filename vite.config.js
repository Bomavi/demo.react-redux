import path from 'node:path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  // },

  resolve: {
    alias: { src: path.resolve(__dirname, 'src') },
  },
});
