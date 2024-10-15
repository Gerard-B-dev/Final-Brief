// src/store/user.js

import { defineStore } from 'pinia';
import apiClient from '../axios';
import { ref } from 'vue';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        isAuthenticated: false,
        token: null, // Almacena el token JWT
        authError: null, // Almacena errores de autenticación
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
                const response = await apiClient.post('/register', { email, password });
                this.authError = null;
                return response.data;
            } catch (error) {
                this.authError = error.response?.data || 'Error en el registro.';
                throw error;
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
                const response = await apiClient.post('/login', { email, password });
                this.user = response.data.user; // Información del usuario
                this.token = response.data.token; // Token JWT
                this.isAuthenticated = true;
                this.authError = null;
            } catch (error) {
                this.authError = error.response?.data || 'Error en el inicio de sesión.';
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
            this.authError = null;
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'user-store',
                storage: localStorage,
                paths: ['user', 'isAuthenticated', 'token'], // Sólo persistir estos campos
            },
        ],
    },
});

