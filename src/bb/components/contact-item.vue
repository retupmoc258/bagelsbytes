<template>
    <div class="row">
        <div v-for="(item, index) in contactInfo" :key="index" class="col-lg-4 col-md-6">
            <div class="card border-0 text-center features feature-primary">
                <div class="icon text-center mx-auto rounded-md">
                    <h3 class="mb-0"><i :class="item.icon"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                    <h5 class="title fw-bold">{{ item.title }}</h5>
                    <p class="text-muted">{{ item.description }}</p>
                    <a :href="item.href" class="link">{{ item.linkText }}</a>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-md-6">
            <div class="card border-0 text-center features feature-primary">
                <div class="icon text-center mx-auto rounded-md">
                    <h3 class="mb-0"><i class="uil uil-map-marker"></i></h3>
                </div>

                <div class="card-body p-0 mt-4">
                    <h5 class="title fw-bold">Location</h5>
                    <p class="text-muted">Privately owned<br>Logan, Utah, USA</p>
                </div>
            </div>
        </div>
    </div>

    <div v-if="!isActive" class="modal-video" tabindex="-1" role="dialog" aria-modal="true"
        aria-label="You just opened the modal video">
        <div class="modal-video-body">
            <div class="modal-video-inner">
                <div class="modal-video-movie-wrap">
                    <iframe width="460" height="230"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen="" tabindex="-1">
                    </iframe>
                    <a @click="toggle" class="mdi mdi-close m-3 h4 position-class title-icon"> </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true);

const toggle = () => {
    isActive.value = !isActive.value;
}

const contactInfo = [
    {
        icon: 'uil uil-phone',
        title: 'Phone',
        description: 'Call me directly to schedule your free consultation',
        href: 'tel:+14352587699',
        linkText: '+1 435 258 7699'
    },
    {
        icon: 'uil uil-envelope',
        title: 'Email',
        description: 'Send an email with your requirements and we\'ll respond in 2 business days',
        href: 'mailto:bagels.bytes.programming@gmail.com',
        linkText: 'bagels.bytes.programming@gmail.com'
    },
]
</script>

<style lang="scss" scoped>
/* your styles here */
</style>