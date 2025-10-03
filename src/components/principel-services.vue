<template>
    <div class="row align-items-center">
        <div class="col-lg-6 col-md-5">
            <img src="../assets/images/svg/coworking.svg" alt="">
        </div><!--end col-->

        <div class="col-lg-6 col-md-7">
            <div class="section-title">
                <h1 class="title mb-3">Measure to decide, <br> not just to measure.</h1>
                <p class="para-desc text-muted">Explore and learn more about everything from machine learning and global
                    payments to scaling your team.</p>
                <ul class="list-unstyled text-muted">
                    <li v-for="item in datas" :key="item" class="mb-0"><span class="text-primary h5 me-2"><i
                                class="uil uil-check-circle align-middle"></i></span>{{ item }}</li>
                </ul>
                <div class="mt-4">
                    <a href="javascript:void(0)" class="btn btn-primary">Learn more</a>
                </div>
            </div>
        </div><!--end col-->
    </div><!--end row-->

    <div class="container mt-100 mt-60">
        <div class="row align-items-center">
            <div class="col-md-5 order-1 order-md-2">
                <img src="../assets/images/1.png" class="img-fluid" alt="">
            </div><!--end col-->

            <div class="col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
                <div class="section-title">
                    <h1 class="title mb-3">Collaborate with your <br> team anytime, anywhere.</h1>
                    <p class="para-desc text-muted">Explore and learn more about everything from machine learning and
                        global payments to scaling your team.</p>
                    <ul class="list-unstyled text-muted">
                        <li v-for="item in datas" :key="item" class="mb-0"><span class="text-primary h5 me-2"><i
                                    class="uil uil-check-circle align-middle"></i></span>{{ item }}</li>
                    </ul>
                    <div class="mt-4">
                        <a href="javascript:void(0)" class="btn btn-primary">Learn more</a>
                    </div>
                </div>
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</template>

<script setup>
import { ref } from 'vue';

const datas = ref(['Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand'])

</script>

<style lang="scss" scoped></style>