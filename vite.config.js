import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';


export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/',
  plugins: [vue()],
  build: {
    assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
  },
});
