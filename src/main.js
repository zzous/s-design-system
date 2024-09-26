import '@/assets/style/common.scss'
import vuetify from '@/_setting/vuetify/vuetify.js'
import i18n from '@/_setting/i18n/i18n.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

app.config.globalProperties.$t = i18n.t

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(i18n)

app.mount('#app')
