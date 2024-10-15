<!-- music-store-frontend/src/components/ProductCard.vue -->
<template>
    <div class="card product-card h-100">
        <img :src="product.coverImage" class="card-img-top" alt="Cover Image">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.artist }}</p>
            <button class="btn btn-custom mt-auto" @click="addToCart(product)">Agregar al Carrito</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
    methods: {
        addToCart(product) {
            // Lógica para agregar producto al carrito
            this.$emit('add-to-cart', product);
        }
    }
};
</script>

<style scoped>
.card-img-top {
    height: 300px;
    object-fit: cover;
}
</style>
