// src/axios.js

import axios from 'axios'
import { useUserStore } from './store/user'
import { storeToRefs } from 'pinia'
import router from './router' // Importar el router correctamente

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

// Interceptor para añadir el token JWT en cada solicitud
apiClient.interceptors.request.use(
    (config) => {
        const userStore = useUserStore()
        const { token } = storeToRefs(userStore)
        if (token.value) {
            config.headers.Authorization = `Bearer ${token.value}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Interceptor para manejar respuestas globalmente
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Token inválido o expirado, redirigir al login
            const userStore = useUserStore()
            userStore.signOut()
            router.push('/login')
        }
        return Promise.reject(error)
    }
)

export default apiClient
