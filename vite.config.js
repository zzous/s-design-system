import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: { '@': path.resolve(__dirname, './src') },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/style/variables.scss";@import "@/style/mixin.scss";`,
            },
        },
    },
    
    build: {
        lib: {
            entry: 'src/index.js', // 라이브러리의 진입 파일 설정
            name: 'strato-ui',
            fileName: (format) => `strato-ui.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'], // 외부 종속성 제외
            output: {
                globals: {vue: 'Vue'},
            },
        },
    },
});
