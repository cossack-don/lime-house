import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Maska from 'maska'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueNumberFormat from 'vue-number-format'
import App from './App.vue'

import '@/style/reset.css';
import '@/style/vars.css';
import '@/style/body.css';

const app = createApp(App);

app.use(VueNumberFormat, {
    precision: 0,
    prefix: '',
    suffix: ' руб.',
    decimal: '',
    thousand: ' ',
    acceptNegative: false,
    isInteger: false
})
app.use(Maska)
app.use(createPinia())
app.mount('#app')
