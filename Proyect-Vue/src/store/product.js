// src/store/product.js

import { defineStore } from 'pinia';
import apiClient from '../axios';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: []
    }),
    actions: {
        async fetchProducts() {
            try {
                const response = await apiClient.get('/products');
                this.products = response.data;
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        },
        // Puedes añadir acciones adicionales si es necesario
    }
});
