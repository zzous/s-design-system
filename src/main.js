import { createApp } from 'vue'
import App from './App.vue'
import Vuetify from '@/plugins/vuetify.js';
import 'vuetify/styles';

const app = createApp(App)
app.use(Vuetify);
app.mount('#app');
