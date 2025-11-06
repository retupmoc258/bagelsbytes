<template>
    <navbar />
    <hero />

    <section class="section">
        <modernitem :containerclass="'container'" :gridrow="'row row-cols-lg-4 row-cols-md-2 mb-4 pb-2'" />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/bb/navbar.vue';
import hero from '@/components/portfolio/portfolio-hero.vue';
import modernitem from '@/components/portfolio/modern-portfolio/modern-item.vue';
import Footers from '@/bb/components/Footer.vue';
import backtotop from '@/bb/back-to-top.vue'

</script>

<style lang="scss" scoped></style>