import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'StratoComponents',
            formats: ['es', 'umd'],
            fileName: (format) => `index.${format === 'es' ? 'es' : 'umd'}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
        cssCodeSplit: false,
        outDir: 'lib',
    },
});
