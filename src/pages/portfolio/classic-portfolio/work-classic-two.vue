<template>
   <navbar />
   <hero />

   <section class="section">

      <classicitem :containerclass="'container'" :gridrow="'row row-cols-lg-2 row-cols-md-2'" :row="'row justify-content-center'" :col="'col-lg-10'" />

   </section>
   <footers />
   <backtotop />
</template>

<script setup>
import navbar from '@/bb/navbar.vue';
import hero from '@/components/portfolio/portfolio-hero.vue';
import classicitem from '@/components/portfolio/classic-portfolio/classic-item.vue';
import footers from '@/bb/footer.vue';
import backtotop from '@/bb/back-to-top.vue'

</script>

<style lang="scss" scoped></style>