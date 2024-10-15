<!-- src/views/Login.vue -->
<template>
    <div class="form-container">
        <h2 class="text-center mb-4">Iniciar Sesión</h2>
        <form @submit.prevent="loginUser">
            <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input type="email" v-model="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" v-model="password" class="form-control" id="password" required>
            </div>
            <button type="submit" class="btn btn-custom w-100">Iniciar Sesión</button>
        </form>
        <p class="mt-3 text-center">
            ¿No tienes una cuenta? <router-link to="/register">Regístrate aquí</router-link>
        </p>
    </div>
</template>
<script>
import { useUserStore } from '../store/user';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
    setup() {
        const userStore = useUserStore();
        const router = useRouter();
        const email = ref('');
        const password = ref('');
        const loginUser = async () => {
            try {
                await userStore.signIn(email.value, password.value);
                router.push('/dashboard');
            } catch (error) {
                // Error ya manejado en el store
            }
        };
        return { email, password, loginUser };
    }
};
</script>
<style scoped>
/* Puedes añadir estilos específicos si es necesario */
</style>