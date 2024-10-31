// Vuetify
import {createVuetify} from 'vuetify';
import { VBtn, VTextField, VLabel, VCol, VRow, VCheckbox, VList, VListItem, VListItemTitle, VSnackbar } from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import customTheme from '@/plugins/customTheme.js';

export default createVuetify(
    {
        components: { VBtn, VTextField, VLabel, VCol, VRow, VCheckbox, VList, VListItem, VListItemTitle, VSnackbar },
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: { mdi }
        },
        theme: {...customTheme },
    },
);
