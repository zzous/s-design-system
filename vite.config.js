import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    base: `${process.env.VITE_BASE_PUBLIC_URL}/`,
    plugins: [vue(), vueDevTools()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern' // or "modern"
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      // 빌드 시 console log 제거
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: mode !== 'dev',
          drop_debugger: mode !== 'dev'
        }
      }
    },
    server: {
      port: 3001,
      proxy: {
        '^/api(/v1|/v2)/portal': {
          target: process.env.VITE_USER_API,
          changeOrigin: true,
          secure: false,
          headers: {
            origin: process.env.VITE_USER_API
          }
        }
      }
    }
  })
}
