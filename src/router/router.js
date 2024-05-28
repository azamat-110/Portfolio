import { createRouter, createWebHashHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import About from '../pages/About.vue';
import Projects from '../pages/Projects.vue';
import Skills from '../pages/Skills.vue';




const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { name: 'MainPage', path: '/', component: MainPage },
        { name: 'About', path: '/about', component: About },
        { name: 'Projects', path: '/projects', component: Projects },
        { name: 'Skills', path: '/skills', component: Skills },
    ],
});

export default router;

