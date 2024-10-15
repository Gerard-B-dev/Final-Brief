<!-- src/views/Dashboard.vue -->

<template>
    <div class="dashboard container">
        <h1 class="mb-4">Bienvenido a Music Store</h1>
        <div class="row">
            <div class="col-md-8">
                <TaskList />
            </div>
            <div class="col-md-4">
                <h3>Productos Destacados</h3>
                <div class="row">
                    <div class="col-md-12 mb-3" v-for="product in products" :key="product.id">
                        <ProductCard :product="product" @add-to-cart="addToCart" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TaskList from '../components/TaskList.vue';
import ProductCard from '../components/ProductCard.vue';
import { useProductStore } from '../store/product';
import { onMounted } from 'vue';
import { useTaskStore } from '../store/task';

export default {
    components: {
        TaskList,
        ProductCard
    },
    setup() {
        const productStore = useProductStore();
        const taskStore = useTaskStore();

        onMounted(() => {
            productStore.fetchProducts();
            taskStore.fetchTasks();
        });

        const addToCart = (product) => {
            // Lógica para agregar al carrito
            alert(`Añadiste "${product.title}" al carrito.`);
        };

        return { products: productStore.products, addToCart };
    }
};
</script>

<style scoped>
/* Estilos específicos del Dashboard si es necesario */
</style>
