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
            // 빌드 시에만 base path 설정
            ...(isBuild && isGitHubPages ? { base: '/s-design-system/' } : {}),
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
