import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stacss.dev',
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
});
