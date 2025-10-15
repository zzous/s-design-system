import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'vite-plugin-compression2';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        compression({
            include: /\.(js|scss)$/,
            threshold: 1400,
        }),
        // 이미지 파일들을 라이브러리 빌드에 포함
        viteStaticCopy({
            targets: [
                {
                    src: 'public/assets/images/*',
                    dest: 'assets/images'
                }
            ]
        }),
        { // 빌드 시 css src 속성 경로 수정
            name: 'update-font-paths',
            transform(code, id) {
                if (id.endsWith('.scss')) {
                    return {
                        code: code.replace(
                            /src:\s*url\(\s*"?\.\.\/\.\.\/public\/assets\/([^)"]+)"?\s*\)/g,
                            'src: url("assets/$1")'
                        ),
                        map: null,
                    };
                }
                return null;
            },
        },
    ],

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
        assetsInlineLimit: 0,
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'), // 라이브러리의 진입 파일 설정
            name: 'strato-ui',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['vue', /\.(ttf|otf|woff2?)$/],
            output: {
                globals: {vue: 'Vue'},
            },
        },
    },
});
