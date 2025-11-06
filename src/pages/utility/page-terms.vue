<template>
    <navbar />

    <section class="bg-half-130 d-table bg-light w-100"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h3 class="title mb-3">Terms of Services</h3>
                        <p class="para-desc mx-auto text-muted mb-0">Explore and learn more about everything from
                            machine learning and global payments to scaling your team.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />

    <section class="section">
        <terms />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/bb/navbar.vue';
import image from '../../assets/images/bg/bg-lines-one.png';
import shape from '@/components/shape-light.vue';
import terms from '@/components/utility/page-terms.vue';
import Footers from '@/bb/components/Footer.vue';
import backtotop from '@/bb/back-to-top.vue'

</script>

<style lang="scss" scoped></style>