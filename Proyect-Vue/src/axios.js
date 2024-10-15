// src/axios.js
import axios from 'axios'
import { useUserStore } from './store/user'
import { storeToRefs } from 'pinia'
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
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
export default apiClient
