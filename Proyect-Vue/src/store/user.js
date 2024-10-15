// src/store/user.js

import { defineStore } from 'pinia';
import apiClient from '../axios';
import { ref } from 'vue';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        isAuthenticated: false,
        token: null, // Almacena el token JWT
    }),
    actions: {
        /**
         * Registra un nuevo usuario.
         *
         * @param {String} email - Correo electrónico del usuario.
         * @param {String} password - Contraseña del usuario.
         */
        async signUp(email, password) {
            try {
                const response = await apiClient.post('/register', {
                    email,
                    password
                });
                alert('Registro exitoso. Por favor, inicia sesión.');
                // Opcional: Puedes redirigir al usuario a la página de inicio de sesión
            } catch (error) {
                alert(error.response?.data || 'Error en el registro.');
            }
        },

        /**
         * Inicia sesión un usuario existente.
         *
         * @param {String} email - Correo electrónico del usuario.
         * @param {String} password - Contraseña del usuario.
         */
        async signIn(email, password) {
            try {
                const response = await apiClient.post('/login', {
                    email,
                    password
                });
                this.user = response.data.user; // Información del usuario
                this.token = response.data.token; // Token JWT
                this.isAuthenticated = true;
            } catch (error) {
                alert(error.response?.data || 'Error en el inicio de sesión.');
                throw error;
            }
        },

        /**
         * Cierra sesión al usuario actual.
         */
        signOut() {
            this.user = null;
            this.token = null;
            this.isAuthenticated = false;
        },
    },
    persist: true, // Mantiene el estado persistente en el almacenamiento local
});
