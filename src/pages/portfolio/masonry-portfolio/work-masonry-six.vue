<template>
    <navbar />
    <hero />
 
    <section class="section">
        <masonryitem :containerclass="'container-fluid'" :masonrywidth="300" />
    </section>
    <footers />
    <backtotop />
 </template>
 
 <script setup>
 import navbar from '@/bb/navbar.vue';
 import hero from '@/components/portfolio/portfolio-hero.vue';
 import masonryitem from '@/components/portfolio/masonry-portfolio/masonry-item.vue';
 import footers from '@/bb/footer.vue';
 import backtotop from '@/bb/back-to-top.vue'
 
 </script>
 
 <style lang="scss" scoped></style>