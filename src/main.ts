import { createApp } from 'vue';
import Toast, { PluginOptions, useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import App from './App.vue';
// eslint-disable-next-line import/extensions,import/no-unresolved
import router from './router';
// eslint-disable-next-line import/extensions,import/no-unresolved
import store from './store';
import './assets/css/tailwind.css';

const options: PluginOptions = {

};

createApp(App).use(store).use(router).use(Toast, options)
  .mount('#app');

/*
  how to call toast
*to remove when merging on main
  const toast = useToast();
  toast("I'm a toast!");
*/
