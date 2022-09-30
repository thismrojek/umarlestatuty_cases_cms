import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { dirname, resolve } from 'path'

export default defineConfig({
  plugins: [
    svelte({
      emitCss: false
    }),
  ],
  resolve:{
    alias:{
      '@assets' : resolve(dirname('./'), './src/assets'),
      '@api' : resolve(dirname('./'), './src/api'),
      '@images' : resolve(dirname('./'), './src/assets/images'),
      '@components' : resolve(dirname('./'), './src/components'),
      '@lib' : resolve(dirname('./'), './src/lib'),
      '@type' : resolve(dirname('./'), './src/types'),
      '@stores' : resolve(dirname('./'), './src/stores')
    },
  }
})
