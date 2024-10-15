// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate'; // Asegúrate de tener este plugin
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles.css'; // Estilos personalizados
const pinia = createPinia();
pinia.use(piniaPersist);
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');