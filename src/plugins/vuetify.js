// Vuetify
import '@mdi/font/css/materialdesignicons.css';
import { ko } from 'vuetify/locale';
import {createVuetify} from 'vuetify';
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components'
import {aliases, mdi} from 'vuetify/iconsets/mdi';
import customTheme from '@/plugins/customTheme.js';
import * as sComponents from '@/components.js';


const defaultOptions = {
    variant: 'outlined',
    density: 'compact',
    hideDetails: 'auto',
}

export default createVuetify({
    components: { ...components, ...sComponents },
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi },
    },
    locale: {
        locale: 'ko',
        messages: { ko },
    },
    theme: { ...customTheme },
    defaults: {
        VTextField: { ... defaultOptions },
        VSelect: { ... defaultOptions },
        VTextarea: { ... defaultOptions },
        VSwitch: { ... defaultOptions },
        VCheckbox: { ... defaultOptions },
        VRadio: { ... defaultOptions },
    },
});
