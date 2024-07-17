import { fileURLToPath, URL } from 'node:url';
import copy from 'rollup-plugin-copy';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue(),
    copy({
      targets: [
        {
          src: 'src/img',
          dest: 'dist/src'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    emptyOutDir: false,
    plugins: []
  }
});
