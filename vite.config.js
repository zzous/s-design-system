import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'vite-plugin-compression2';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        compression({
            include: /\.(js|scss)$/,
            threshold: 1400,
        })],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/Entry.scss";`, // 모든 SCSS 파일에서 자동으로 import
            },
        },
    },
    
    build: {
        outDir: './lib',
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'), // 라이브러리의 진입 파일 설정
            name: 'strato-ui',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'], // 외부 종속성 제외
            output: {
                globals: {vue: 'Vue'},
            },
        },
    },
});
