

import { createApp } from 'vue'
import store from './store';
import { VueFire,VueFireAuth } from 'vuefire';
import {firebaseApp} from './config/firebase';

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(VueFire, {firebaseApp, modules:[VueFireAuth()]})
app.use(store)
app.use(router)
app.mount('#app')
