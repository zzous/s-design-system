/** @type { import('@storybook/vue3').Preview } */

import {setup} from '@storybook/vue3';
import vuetify from '@/plugins/vuetify.js';
import customTheme from '@/plugins/customTheme.js';
import * as components from 'vuetify/components';
import VuetifyWrapper from './VuetifyWrapper.vue';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import './preview.scss';

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    globals: {theme: 'light'},
};

setup((app) => {
    app.use({...vuetify, components, theme: {...customTheme}});
});

export const decorators = [
    (story) => ({
        components: { VuetifyWrapper, story },
        template: `
          <VuetifyWrapper>
            <story />
          </VuetifyWrapper>
        `,
    }),
];



export default preview;
