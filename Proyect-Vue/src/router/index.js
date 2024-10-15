// music-store-frontend/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Navegación protegida para rutas que requieren autenticación
router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.path === '/dashboard' && !userStore.isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

import { useUserStore } from '../store/user';
export default router;

