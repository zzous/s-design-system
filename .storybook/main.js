/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import {mergeConfig} from 'vite';
import path from 'path';

const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        {
            name: '@storybook/preset-scss',
            options: {
                sassLoaderOptions: {
                    scss: {additionalData: '@import "/src/styles/Entry.scss";'},
                },
            },
        },
    ],
    framework: { name: '@storybook/vue3-vite' },
    
    async viteFinal(config) {
        // Merge custom configuration into the default config
        
        return mergeConfig(config, {
            resolve: {alias: {'@': path.resolve('src')}},
            css: {
                preprocessorOptions: {
                    scss: {additionalData: '@import "/src/styles/Entry.scss";'},
                },
            },
            optimizeDeps: {
                include: ['storybook-dark-mode'],
            },
        });
    },
};
export default config;
