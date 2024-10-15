// src/store/task.js
import { defineStore } from 'pinia';
import apiClient from '../axios';
export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: []
    }),
    actions: {
        async fetchTasks() {
            try {
                const response = await apiClient.get('/tasks');
                this.tasks = response.data;
            } catch (error) {
                console.error('Error al obtener tareas:', error);
            }
        },
        async createTask(title) {
            try {
                const response = await apiClient.post('/tasks', {
                    title,
                    completed: false
                });
                this.tasks.push(response.data);
            } catch (error) {
                console.error('Error al crear tarea:', error);
            }
        },
        async updateTask(task) {
            try {
                const response = await apiClient.put(`/tasks/${task.id}`, task);
                const index = this.tasks.findIndex(t => t.id === task.id);
                if (index !== -1) {
                    this.tasks[index] = response.data;
                }
            } catch (error) {
                console.error('Error al actualizar tarea:', error);
            }
        },
        async deleteTask(id) {
            try {
                await apiClient.delete(`/tasks/${id}`);
                this.tasks = this.tasks.filter(task => task.id !== id);
            } catch (error) {
                console.error('Error al eliminar tarea:', error);
            }
        }
    }
});
