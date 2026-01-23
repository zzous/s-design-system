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
        // GitHub Pages base path 설정
        const isGitHubPages = process.env.GITHUB_PAGES === 'true';
        // Storybook의 configType이 'PRODUCTION'이면 빌드 모드
        const isBuild = configType === 'PRODUCTION';

        return mergeConfig(config, {
            // 빌드 시 GitHub Pages base path 설정
            // 환경 변수로 제어하거나, 항상 설정하여 배포 환경에서 정상 작동하도록 함
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
            },
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
