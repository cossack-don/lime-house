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
// UI KIT BASE
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseCheckBox from '@/components/UI/BaseCheckBox.vue'
import BaseTextarea from '@/components/UI/BaseTextarea.vue'
import BaseInputNumber from '@/components/UI/BaseInputNumber.vue'
app.component("BaseButton", BaseButton);
app.component("BaseInput", BaseInput);
app.component("BaseCheckBox", BaseCheckBox);
app.component("BaseTextarea", BaseTextarea);
app.component("BaseInputNumber", BaseInputNumber);

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
