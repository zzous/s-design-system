// Vuetify
import {createVuetify} from 'vuetify';
import { VBtn } from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import customTheme from '@/plugins/customTheme.js';

export default createVuetify(
    {
        components: { VBtn },
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: { mdi }
        },
        theme: {...customTheme },
    },
);
