import '@/assets/style/common.scss'
import vuetify from '@/_setting/vuetify/vuetify.js'
import i18n from '@/_setting/i18n'
import setComponents from '@/components/_common/global-components.js'
import yup from '@/_setting/yup'
import I18nextVue from 'i18next-vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(I18nextVue, { i18next: i18n })

setComponents(app)
yup()

app.mount('#app')
