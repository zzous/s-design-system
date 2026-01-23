import { mergeConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/preset-scss',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    async viteFinal(config, { configType }) {
        // Storybook의 configType이 'PRODUCTION'이면 빌드 모드
        const isBuild = configType === 'PRODUCTION';

        return mergeConfig(config, {
            // 빌드 시 GitHub Pages base path 설정
            // 항상 설정하여 배포 환경에서 정상 작동하도록 함
            ...(isBuild ? { base: '/s-design-system/' } : {}),
            resolve: {
                alias: {
                    '@': path.resolve(dirname, '../src'),
                },
            },
            css: {
                preprocessorOptions: {
                    scss: {
                        // SCSS 변수는 각 컴포넌트에서 직접 import
                    },
                },
            },
            build: {
                // CSS 파일 경로를 상대 경로로 생성하여 base path 문제 해결
                assetsDir: 'assets',
                cssCodeSplit: true,
                // 빌드된 파일의 경로가 올바르게 생성되도록 설정
                rollupOptions: {
                    output: {
                        // 에셋 파일 경로가 base path를 포함하도록 설정
                        assetFileNames: 'assets/[name]-[hash][extname]',
                        // CSS 파일도 assets 폴더에 생성되도록 설정
                        chunkFileNames: 'assets/[name]-[hash].js',
                        entryFileNames: 'assets/[name]-[hash].js',
                    },
                },
            },
            // @mdi/font 같은 node_modules 패키지의 CSS를 올바르게 처리
            assetsInclude: ['**/*.css'],
            // 개발 서버 설정
            server: {
                fs: {
                    strict: false,
                },
            },
        });
    },
    // 전역 스타일을 preview.js에서 import하도록 설정
    staticDirs: ['../public'],
};

export default config;
