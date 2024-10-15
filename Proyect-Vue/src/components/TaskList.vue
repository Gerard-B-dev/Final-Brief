<!-- music-store-frontend/src/components/TaskList.vue -->
<template>
    <div class="task-list">
        <h3>Mis Tareas</h3>
        <ul class="list-group">
            <li 
                v-for="task in tasks" 
                :key="task.id" 
                class="list-group-item d-flex justify-content-between align-items-center"
            >
                <div>
                    <input type="checkbox" v-model="task.completed" @change="toggleTask(task)">
                    <span :class="{ 'text-decoration-line-through': task.completed }">{{ task.title }}</span>
                </div>
                <div>
                    <button class="btn btn-sm btn-primary me-2" @click="editTask(task)">Editar</button>
                    <button class="btn btn-sm btn-danger" @click="deleteTask(task.id)">Eliminar</button>
                </div>
            </li>
        </ul>
        <form @submit.prevent="addTask" class="mt-3">
            <div class="input-group">
                <input type="text" v-model="newTask" class="form-control" placeholder="Nueva Tarea" required>
                <button class="btn btn-custom" type="submit">Agregar</button>
            </div>
        </form>
    </div>
</template>
<script>
import { useTaskStore } from '../store/task';
import { ref, onMounted } from 'vue';
export default {
    setup() {
        const taskStore = useTaskStore();
        const newTask = ref('');
        onMounted(() => {
            taskStore.fetchTasks();
        });
        const addTask = () => {
            taskStore.createTask(newTask.value);
            newTask.value = '';
        };
        const toggleTask = (task) => {
            taskStore.updateTask(task);
        };
        const editTask = (task) => {
            const updatedTitle = prompt("Editar Tarea", task.title);
            if (updatedTitle !== null && updatedTitle.trim() !== "") {
                task.title = updatedTitle;
                taskStore.updateTask(task);
            }
        };
        const deleteTask = (id) => {
            if (confirm("¿Estás seguro de eliminar esta tarea?")) {
                taskStore.deleteTask(id);
            }
        };
        return { tasks: taskStore.tasks, newTask, addTask, toggleTask, editTask, deleteTask };
    }
};
</script>
<style scoped>
.text-decoration-line-through {
    text-decoration: line-through;
}
</style>