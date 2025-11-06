<template>
    <navbar :navLight="'nav-light'" :logoLightBackground=false />

    <!-- Home Start -->
    <section class="bg-half-170 bg-primary d-table w-100"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h2 class="text-white title-dark title mb-3">Contact us</h2>
                        <p class="para-desc mx-auto text-white-50">Let's explore your vision for the future and how we can help you get there.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />
    <section class="section pb-0">
        <forms />
        <div class="container mt-5 mt-60 mb-5">
            <contactitem />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/bb/navbar.vue';
import image from './assets/bg-contact.png';
import shape from '@/components/shape-light.vue';
import forms from '@/bb/components/form.vue';
import contactitem from '@/bb/components/contact-item.vue';
import Footers from '@/bb/components/Footer.vue';
import backtotop from '@/bb/back-to-top.vue';

</script>

<style lang="scss" scoped></style>