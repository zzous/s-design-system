// Vuetify
import '@mdi/font/css/materialdesignicons.css';
import {createVuetify} from 'vuetify';
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components'
import {aliases, mdi} from 'vuetify/iconsets/mdi';
import customTheme from '@/plugins/customTheme.js';
import * as sComponents from '@/components.js';

export default createVuetify({
    components: { ...components, ...sComponents },
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi },
    },
    theme: { ...customTheme },
    defaults: {
        VTextField: {
            variant: 'outlined',
            density: 'compact',
            hideDetails: 'auto',
        },
    },
});
