import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus';
import { i18n } from '@/i18n';
import App from './App.vue'

import 'dayjs/locale/fr';
import { locale as dayjsLocale } from 'dayjs';
dayjsLocale('fr');

const app = createApp(App);
app.use(ElementPlus);
app.use(i18n);
app.mount('#app');
