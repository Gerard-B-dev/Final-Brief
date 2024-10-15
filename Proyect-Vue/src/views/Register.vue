<!-- src/views/Register.vue -->

<template>
    <div class="form-container">
        <h2 class="text-center mb-4">Registrarse</h2>
        <form @submit.prevent="registerUser">
            <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input type="email" v-model="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" v-model="password" class="form-control" id="password" required>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
                <input type="password" v-model="confirmPassword" class="form-control" id="confirmPassword" required>
            </div>
            <button type="submit" class="btn btn-custom w-100">Registrarse</button>
        </form>
        <p class="mt-3 text-center">
            ¿Ya tienes una cuenta? <router-link to="/login">Inicia Sesión aquí</router-link>
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
        const confirmPassword = ref('');

        const registerUser = async () => {
            if (password.value !== confirmPassword.value) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            await userStore.signUp(email.value, password.value);
            // Opcional: Redirigir al usuario a la página de inicio de sesión
            router.push('/login');
        };

        return { email, password, confirmPassword, registerUser };
    }
};
</script>

<style scoped>
/* Puedes añadir estilos específicos si es necesario */
</style> 
