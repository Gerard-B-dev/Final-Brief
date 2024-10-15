<!-- src/components/Header.vue -->
<template>
    <nav class="navbar navbar-expand-lg header">
        <div class="container">
            <router-link class="navbar-brand" to="/">Music Store</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" v-if="!isAuthenticated">
                        <router-link class="nav-link" to="/login">Iniciar Sesión</router-link>
                    </li>
                    <li class="nav-item" v-if="!isAuthenticated">
                        <router-link class="nav-link" to="/register">Registrarse</router-link>
                    </li>
                    <li class="nav-item dropdown" v-if="isAuthenticated">
                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown">
                            {{ user.email }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                            <li><a class="dropdown-item" href="#" @click.prevent="logout">Cerrar Sesión</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import { useUserStore } from '../store/user';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
export default {
    setup() {
        const userStore = useUserStore();
        const { isAuthenticated, user } = storeToRefs(userStore);
        const logout = () => {
            userStore.signOut();
        };
        return { isAuthenticated, user, logout };
    },
};
</script>
<style scoped>
/* Estilos específicos del Header si es necesario */
</style>