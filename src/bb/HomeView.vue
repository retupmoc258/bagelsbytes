<template>
    <navbar />

    <!-- Hero Section Start -->
    <section class="bg-half-170 d-table w-100" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="container">
            <div class="row align-items-center mt-5 mt-lg-0">
                <div class="col-lg-6 col-md-6">
                    <div class="heading-title">
                        <h4 class="heading fw-bold">Custom Software Solutions for <br><span class="wrap">
                                <vue-typewriter-effect
                                    class="typewrite text-primary position-relative text-type-element"
                                    data-period="2000" :strings='["Your Business", "Web Apps", "Mobile Apps", "Cloud Solutions", "API Integrations"]' />
                            </span></h4>
                        <p class="text-muted para-desc mb-0">At Bagel's Bytes, we craft innovative software solutions 
                            tailored to your unique business needs. From web applications to cloud infrastructure, 
                            we turn your ideas into reality.</p>
                        <div class="watch-video mt-4 pt-2">
                            <a href="#services" class="btn btn-primary">Our Services <i
                                    class="mdi mdi-chevron-right"></i></a>
                            <router-link to="/contact" class="btn btn-outline-primary ms-2">Get Started</router-link>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="col-lg-6 col-md-6">
                    <img src="../bb/assets/pixeltrue-web-development-1.svg" class="img-fluid" alt="Web Development">
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <!-- Hero Section End -->

    <!-- Services Section -->
    <Services/>

    <!-- Why Choose Us Section -->
    <section class="section bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">Why Choose Bagel's Bytes?</h4>
                        <p class="text-muted para-desc mx-auto mb-0">A lean, versatile team delivering 
                            enterprise-quality solutions without the enterprise overhead.</p>
                    </div>
                </div><!--end col-->
            </div><!--end row-->

            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6">
                    <img src="../bb/assets/pixeltrue-web-development-1.svg" class="img-fluid" alt="Why Choose Us">
                </div><!--end col-->

                <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="section-title ms-lg-5">
                        <div class="d-flex mb-4">
                            <i class="uil uil-user-check text-primary h5 me-3 mt-1"></i>
                            <div class="flex-1">
                                <h5 class="mb-2">Full-Stack Expertise</h5>
                                <p class="text-muted mb-0">Our versatile developers handle frontend, backend, 
                                    and infrastructure—ensuring seamless integration and consistent quality across 
                                    your entire application.</p>
                            </div>
                        </div>

                        <div class="d-flex mb-4">
                            <i class="uil uil-comment-alt-dots text-primary h5 me-3 mt-1"></i>
                            <div class="flex-1">
                                <h5 class="mb-2">Direct Communication</h5>
                                <p class="text-muted mb-0">Work directly with the developers building your 
                                    product. No account managers, no game of telephone—just clear, technical 
                                    conversations that move your project forward.</p>
                            </div>
                        </div>

                        <div class="d-flex mb-4">
                            <i class="uil uil-focus-target text-primary h5 me-3 mt-1"></i>
                            <div class="flex-1">
                                <h5 class="mb-2">Focused Attention</h5>
                                <p class="text-muted mb-0">We take on select projects to ensure yours gets the 
                                    dedicated focus it deserves. Your success is our priority, not just another 
                                    ticket in a massive queue.</p>
                            </div>
                        </div>

                        <div class="d-flex mb-4">
                            <i class="uil uil-rocket text-primary h5 me-3 mt-1"></i>
                            <div class="flex-1">
                                <h5 class="mb-2">Efficient Delivery</h5>
                                <p class="text-muted mb-0">Without the bureaucracy of large firms, we make 
                                    decisions quickly and adapt rapidly. This means faster iterations, shorter 
                                    timelines, and better value for your investment.</p>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section>

    <!-- CTA Section -->
    <section class="section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h4 class="title mb-4">Ready to Start Your Project?</h4>
                        <p class="text-muted para-desc mx-auto">Let's discuss how we can help bring your 
                            ideas to life with custom software solutions.</p>
                        <div class="mt-4">
                            <router-link to="/contact" class="btn btn-primary mt-2 me-2">Contact Us</router-link>
                            <router-link to="/portfolio" class="btn btn-outline-primary mt-2">View Our Work</router-link>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section>

    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/bb/navbar.vue';
import image from './assets/bg-developer.png';
import Footers from '@/bb/components/Footer.vue';
import backtotop from '@/bb/back-to-top.vue'
import VueTypewriterEffect from "vue-typewriter-effect";
import Services from "@/bb/components/Services.vue";
</script>

<style lang="scss" scoped>
.explore-feature {
    transition: all 0.3s ease;
}

.explore-feature:hover {
    transform: translateY(-5px);
}

.icons i {
    font-size: 48px;
    width: 80px;
    height: 80px;
    line-height: 80px;
    background: rgba(47, 85, 212, 0.1);
    display: inline-block;
}
</style>