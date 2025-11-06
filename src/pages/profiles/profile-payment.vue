<template>
    <navbar />

    <!-- Start -->
    <section class="bg-half-130 d-table bg-light w-100"
        :style="{ 'background-image': 'url(' + (image) + ')', backgroundPosition: 'center' }">
        <div class="container">
            <div class="row mt-5">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h3 class="title mb-2">Payments</h3>
                        <h5 class="text-muted mb-0">@calvin_carlo</h5>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

    <section class="section">
        <payment />
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/bb/navbar.vue';
import image from '../../assets/images/bg/bg-lines-one.png';
import payment from '@/components/profile/profile-payment.vue';
import Footers from '@/bb/components/Footer.vue';
import backtotop from '@/bb/back-to-top.vue'

</script>

<style lang="scss" scoped></style>