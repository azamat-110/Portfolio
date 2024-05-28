import { createApp } from 'vue';
import './assets/style/main.scss';
import App from './App.vue';
import router from '../src/router/router';

createApp(App).use(router).mount('#app')
