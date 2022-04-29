import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { dynamicBase } from 'vite-plugin-dynamic-base'
import legacy from '@vitejs/plugin-legacy'
import { dynamicBase } from '../dist/index'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'a/b',
  plugins: [
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    vue(),
    dynamicBase({ transformIndexHtml: true }),
    VitePWA({}),
  ],
  build: {
    // assetsDir: 'assets/a/b'
  }
})
