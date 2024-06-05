
import { createApp } from 'vue'

import store from './store';

import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './config/firebase';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(VueFire, { firebaseApp, modules: [VueFireAuth()]})
app.use(store)
app.use(router)
app.mount('#app')
