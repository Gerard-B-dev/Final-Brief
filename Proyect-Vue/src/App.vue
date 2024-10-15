<!-- music-store-frontend/src/App.vue -->
<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
/* Puedes añadir estilos globales adicionales aquí si es necesario */
</style>
