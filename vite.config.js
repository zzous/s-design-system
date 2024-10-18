import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    base: `${process.env.VITE_BASE_PUBLIC_URL}/`,
    publicDir: `public${process.env.VITE_BASE_PUBLIC_URL}`,
    plugins: [vue(), vueDevTools()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern', // or "modern"
          additionalData: `@import "@/assets/style/_variables.scss";@import "@/assets/style/_mixin.scss";` //scss 값 전역 설정
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      rollupOptions: {
        output: {
          globals: {
            vuetify: 'Vuetify',
          },
          assetFileNames: assetInfo => {
            let extType = assetInfo.name.split('.').at(1)
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'img'
            } else if (/ttf|woff|woff2/.test(extType)) {
              extType = 'css'
            }
            return `chunks/${extType}/[name]-[hash][extname]`
          },
          chunkFileNames: 'chunks/js/[name]-[hash].js',
          entryFileNames: 'chunks/js/[name]-[hash].js',
        },
      },
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
        '^/(api/(v[0-9])/portal|auth)': {
          target: process.env.VITE_USER_API,
          changeOrigin: true,
          secure: false,
          headers: {
            origin: process.env.VITE_USER_API
          }
        },
        '^/api/(v[0-9])/devops': {
          target: process.env.VITE_DEVOPS_API,
          changeOrigin: true,
          secure: false,
          headers: {
            origin: process.env.VITE_DEVOPS_API
          }
        },
      }
    }
  })
}
