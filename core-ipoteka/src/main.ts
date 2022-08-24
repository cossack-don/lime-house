import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createPinia } from 'pinia'
import Maska from 'maska'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VueNumberFormat from 'vue-number-format'

import '@/style/reset.css';
import '@/style/vars.css';
import '@/style/body.css';

import App from './App.vue';

// UI KIT BASE
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseCheckBox from '@/components/UI/BaseCheckBox.vue'
import BaseTextarea from '@/components/UI/BaseTextarea.vue'
import BaseInputNumber from '@/components/UI/BaseInputNumber.vue'



// const vueLifecycles = singleSpaVue({
//   createApp,
//   appOptions: {
//     render() {
//       return h(App, {
//         // single-spa props are available on the "this" object. Forward them to your component as needed.
//         // https://single-spa.js.org/docs/building-applications#lifecycle-props
//         // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
//         /*
//         name: this.name,
//         mountParcel: this.mountParcel,
//         singleSpa: this.singleSpa,
//         */
//       });
//     },
//   },
// });
const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // name: this.name,
        // mountParcel: this.mountParcel,
        // singleSpa: this.singleSpa,
      });
    },
  },
  handleInstance: (app) => {
    app.use(Maska);
    app.use(createPinia());
    app.use(VueNumberFormat, {
      precision: 0,
      prefix: '',
      suffix: ' руб.',
      decimal: '',
      thousand: ' ',
      acceptNegative: false,
      isInteger: false
    });
    app.component("BaseButton", BaseButton);
    app.component("BaseInput", BaseInput);
    app.component("BaseCheckBox", BaseCheckBox);
    app.component("BaseTextarea", BaseTextarea);
    app.component("BaseInputNumber", BaseInputNumber);
  }
});
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
