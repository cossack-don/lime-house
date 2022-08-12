import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Maska from 'maska'
import App from './App.vue'

import '@/style/reset.css';
import '@/style/vars.css';
import '@/style/body.css';

const app = createApp(App);

app.use(Maska)
app.use(createPinia())
app.mount('#app')
