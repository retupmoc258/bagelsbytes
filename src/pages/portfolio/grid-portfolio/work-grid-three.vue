<template>
    <navbar />
    <hero />

    <section class="section">
        <griditem :containerclass="'container'" :gridrow="'row row-cols-lg-3 row-cols-md-2 mb-4 pb-2'" />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/bb/navbar.vue';
import hero from '@/components/portfolio/portfolio-hero.vue';
import griditem from '@/components/portfolio/grid-portfolio/grid-item.vue';
import footers from '@/bb/footer.vue';
import backtotop from '@/bb/back-to-top.vue'

</script>

<style lang="scss" scoped></style>