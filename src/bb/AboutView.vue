<template>
    <navbar :navLight="'nav-light'" :logoLightBackground=false />

    <section class="bg-half-170 bg-primary d-table w-100" :style="{ 'background-image': 'url(' + (image) + ')' }">
        <div class="bg-overlay"></div>
        <div class="container">
            <div class="row mt-5 justify-content-center">
                <div class="col-12">
                    <div class="heading-title text-center">
                        <h2 class="text-white title title-dark mb-3">About Me</h2>
                        <p class="para-desc mx-auto text-white-50">Hi, I'm Jason. Let me share my story and how I can help you.</p>
                        <div class="mt-4 pt-2">
                            <a href="#my-story" class="btn btn-light">Learn More</a>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->
    </section><!--end section-->
    <shape />

    <section class="section" id="my-story">
        <!-- Personal Story Section -->
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6">
                    <img src="@/bb/assets/profile-pic.jpg" class="img-fluid rounded shadow" alt="Your Name">
                </div>
                <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="section-title ms-lg-5">
                        <h4 class="title mb-4">My Journey</h4>
                        <p class="text-muted">
                            I have spent countless hours trying to solve problems with computers, programs, hardware, and other systems over the course of a lifetime.
                            I love computers and I love learning.  I have a background in education, though I recently completed a bachelor's degree in software engineering.
                            I enjoy the challenge of solving problems and learning new things.
                        </p>
                        <p class="text-muted">
                            I have spent the last 6 years making software solutions for my work, in college courses, in my free time as self-study, and for additional clients
                            who have contacted me for help with their projects.  I have worked on a variety of different projects, using entirely different systems, and each
                            requiring different expertise.  The main goal of all my projects is to create something that meets the client's needs as simply as possible.
                        </p>
                        <p class="text-muted mb-0">
                          I believe in making high quality code that is easy to understand and maintain.  I value efficient systems that meet the needs of the client,
                          not necessarily what education teaches students to prioritize (not everyone needs scalable systems, for example).  I believe interfaces should be
                          tailored to the client and not to the developer (clients need to be able to use the software intuitively).  I will always make sure you
                          know my current skill level so you can make an informed decision.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      <!-- What I Do Section -->
      <Services/>


        <!-- Why Work With Me Section -->
        <div class="container mt-60">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">Why Work With Me</h4>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                    <div class="text-center">
                        <h1 class="mb-0 fw-bold">
                            <span class="counter-value" data-target="[number]">6</span>+
                        </h1>
                        <h6 class="counter-head text-muted">Years Experience</h6>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                    <div class="text-center">
                        <h1 class="mb-0 fw-bold">
                            <span class="counter-value" data-target="[number]">5</span>+
                        </h1>
                        <h6 class="counter-head text-muted">Projects Completed</h6>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                    <div class="text-center">
                        <h1 class="mb-0 fw-bold">
                            <span class="counter-value" data-target="[number]">3</span>+
                        </h1>
                        <h6 class="counter-head text-muted">Happy Clients</h6>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                    <div class="text-center">
                        <h1 class="mb-0 fw-bold">
                            <span class="counter-value" data-target="100">100</span>%
                        </h1>
                        <h6 class="counter-head text-muted">Dedication</h6>
                    </div>
                </div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title">
                        <h4 class="title mb-4">Ready to Work Together?</h4>
                        <p class="text-muted para-desc mx-auto">
                            I'd love to hear about your project and see how I can help bring your vision to life.
                        </p>
                        <div class="mt-4">
                            <a href="/contact" class="btn btn-primary">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footers />
    <backtotop />
</template>

<script setup>
import navbar from '@/bb/navbar.vue';
import image from '../bb/assets/bg-contact.png';
import shape from '@/components/shape-light.vue';
import footers from '@/bb/footer.vue';
import backtotop from '@/bb/back-to-top.vue'
import Services from "@/bb/components/Services.vue";
</script>

<style lang="scss" scoped></style>