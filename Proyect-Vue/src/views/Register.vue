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
            <div v-if="authError" class="alert alert-danger">
                {{ authError }}
            </div>
            <div v-if="successMessage" class="alert alert-success">
                {{ successMessage }}
            </div>
            <button type="submit" class="btn btn-custom w-100" :disabled="isLoading">
                <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Registrarse
            </button>
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
        const isLoading = ref(false);
        const successMessage = ref('');

        const registerUser = async () => {
            if (password.value !== confirmPassword.value) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            isLoading.value = true;
            try {
                await userStore.signUp(email.value, password.value);
                successMessage.value = 'Registro exitoso. Por favor, inicia sesión.';
                // Limpiar campos del formulario
                email.value = '';
                password.value = '';
                confirmPassword.value = '';
                // Redirigir automáticamente después de unos segundos
                setTimeout(() => {
                    router.push('/login');
                }, 2000);
            } catch (error) {
                // El error ya está manejado en el store y se refleja en authError
            } finally {
                isLoading.value = false;
            }
        };

        return { email, password, confirmPassword, registerUser, authError: userStore.authError, isLoading, successMessage };
    }
};
</script>

<style scoped>
/* Puedes añadir estilos específicos si es necesario */
</style>
