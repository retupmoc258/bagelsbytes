<script setup>
import {RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <!-- This item provides a buffer so that the views don't need an upper margin. -->
  <!--div style="height: 120px; margin: 0; padding: 0;"></div-->

  <RouterView />

  <Footer />
</template>

<style scoped>

</style>
