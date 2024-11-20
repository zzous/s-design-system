// Vuetify
import {createVuetify} from 'vuetify';
import {
    VBtn, VTextField, VLabel, VCol, VRow, VCheckbox, VList, VListItem, VListItemTitle, VListGroup,
    VSnackbar, VSheet, VFileInput, VMenu, VImg, VDialog, VCard, VCardText, VCardActions, VIcon,
    VPagination, VDataTable, VFooter, VApp, VAppBar, VAppBarTitle, VAvatar, VOverlay, VMain
} from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {aliases, mdi} from 'vuetify/iconsets/mdi';
import customTheme from '@/plugins/customTheme.js';

export default createVuetify(
    {
        components: {
            VBtn, VTextField, VLabel, VCol, VRow, VCheckbox, VList, VListItem, VListGroup,
            VListItemTitle, VSnackbar, VSheet, VFileInput, VMenu, VImg, VDialog,
            VCard, VCardText, VCardActions, VIcon, VPagination, VDataTable, VFooter,
            VApp, VAppBar, VAppBarTitle, VAvatar, VOverlay, VMain
        },
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {mdi},
        },
        theme: {...customTheme},
    },
);
