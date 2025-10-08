<template>
    <navbar :navLight="'nav-light'" :logoLight=true :buttonLight=true />

    <section class="bg-half-170 d-table w-100" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h2 class="text-white title  title-dark mb-3">About us</h2>
                        <p class="para-desc mx-auto text-white-50">Explore and learn more about everything from machine
                            learning and global payments to scaling your team.</p>
                        <div class="mt-4 pt-2">
                            <a href="javascript:void(0)" class="btn btn-light">Read Our Story</a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />

    <section class="section">
        <story />
        <div class="container mt-100 mt-60">
            <images />
        </div>
        <div class="container mt-100 mt-60">
            <counter />
        </div>
        <div class="container mt-100 mt-60">
            <teams />
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/bb/navbar.vue';
import image from '../assets/images/bg/bg-about.jpg';
import shape from '@/components/shape-light.vue';
import story from '@/components/page-about/about-story.vue';
import images from '@/components/startup/startup-images.vue';
import counter from '@/components/startup/startup-counter.vue';
import teams from '@/components/business/business-team.vue';
import footers from '@/bb/footer.vue';
import backtotop from '@/bb/back-to-top.vue'

</script>

<style lang="scss" scoped></style>