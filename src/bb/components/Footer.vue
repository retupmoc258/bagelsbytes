<template>
    <!-- Start -->
    <footer class="bg-footer footer-compressed" :class="footerbar">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-0 mb-md-2 pb-0 pb-md-2">
                    <a href="/public" class="logo-footer">
                        <img src="../assets/bagels-bytes-icon.png" height="36" alt="Bagel's Bytes">
                        <span class="text-light ms-2 fw-bold fs-6">Bagel's Bytes</span>
                    </a>
                    <p class="mt-3 text-foot mb-3">Custom software solutions built by a focused team of experts. 
                        We turn your ideas into reality with quality code and personal attention.</p>
                    <ul class="list-unstyled footer-list px-0 mt-3">
                        <li class="mb-2"><i data-feather="map-pin" class="fea icon-sm me-2"></i><a href="#" class="text-foot">Logan, Utah</a></li>
                        <li class="mb-2"><i data-feather="mail" class="fea icon-sm me-2"></i><a href="mailto:bagels.bytes.programming@gmail.com"
                                class="text-foot">bagels.bytes.programming@gmail.com</a></li>
                        <li class="mb-2"><i data-feather="phone" class="fea icon-sm me-2"></i><a href="tel:+14352587699"
                                class="text-foot">+1 (435) 258-7699</a></li>
                    </ul>
                </div><!--end col-->

                <div class="col-lg-8 col-md-12">
                    <div class="row">
                        <div class="col-md-4 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h5 class="footer-head">Company</h5>
                            <ul class="list-unstyled footer-list mt-3">
                                <li v-for="item in company" :key="item.name" class="mb-2">
                                    <router-link :to="item.link" class="text-foot">
                                        <i class="mdi mdi-chevron-right me-1"></i> {{ item.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div><!--end col-->

                        <div class="col-md-4 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h5 class="footer-head">Services</h5>
                            <ul class="list-unstyled footer-list mt-3">
                                <li v-for="item in services" :key="item" class="mb-2">
                                    <a href="#services" class="text-foot">
                                        <i class="mdi mdi-chevron-right me-1"></i> {{ item }}
                                    </a>
                                </li>
                            </ul>
                        </div><!--end col-->

                        <div class="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h5 class="footer-head">Resources</h5>
                            <ul class="list-unstyled footer-list mt-3">
                                <li v-for="item in resources" :key="item.name" class="mb-2">
                                    <router-link :to="item.link" class="text-foot">
                                        <i class="mdi mdi-chevron-right me-1"></i> {{ item.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-4">
            <div class="pt-3 footer-bar">
                <div class="row align-items-center">
                  <!-- Social Media buttons
                    <div class="col-sm-6">
                        <div class="text-sm-start text-center">
                            <ul class="list-unstyled social-icon social mb-0">
                                <li v-for="item in social" :key="item.icon" class="list-inline-item me-1">
                                    <a :href="item.link" target="_blank" class="rounded" :title="item.title">
                                        <i :class="item.icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    -->

                    <!--div class="col-sm-6 mt-3 mt-sm-0" old style-->
                    <div class="mt-3 mt-sm-0">
                        <ul class="list-unstyled footer-list text-center mb-0">
                            <li class="list-inline-item">
                                <router-link to="/page-terms" class="text-foot me-2">Terms</router-link>
                            </li>
                            <li class="list-inline-item">
                                <router-link to="/page-privacy" class="text-foot me-2">Privacy</router-link>
                            </li>
                            <li class="list-inline-item">
                                <router-link to="/about" class="text-foot me-2">About</router-link>
                            </li>
                            <li class="list-inline-item">
                                <router-link to="/contact" class="text-foot me-2">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="row justify-content-center mt-3">
                    <div class="col-12 text-center">
                        <p class="mb-0">©
                            {{ date }} Bagel's Bytes Programming LLC. Built with <i class="mdi mdi-heart text-danger"></i> for your success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer><!--end footer-->
    <!-- End -->
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import feather from 'feather-icons'

defineProps({
    footerbar: {
        type: String,
        required: false,
        default: ''
    }
})

const date = ref(new Date().getFullYear());

const company = ref([
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    //{ name: 'Portfolio', link: '/portfolio' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact', link: '/contact' }
])

const services = ref([
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'API Development',
    'IT Services',
    'Consulting'
])

const resources = ref([
    { name: 'Case Studies', link: '/portfolio' },
    { name: 'Blog & Articles', link: '/blog' },
    { name: 'FAQs', link: '/page-faqs' },
    { name: 'Support', link: '/contact' }
])

/* Social Media buttons
const social = ref([
    {
        link: 'https://github.com/bagelsbytes',
        icon: 'uil uil-github align-middle',
        title: 'GitHub'
    },
    {
        link: 'https://linkedin.com/company/bagelsbytes',
        icon: 'uil uil-linkedin',
        title: 'LinkedIn'
    },
    {
        link: 'https://twitter.com/bagelsbytes',
        icon: 'uil uil-twitter align-middle',
        title: 'Twitter'
    },
    {
        link: 'mailto:contact@bagelsbytes.com',
        icon: 'uil uil-envelope align-middle',
        title: 'Email'
    }
])

 */

onMounted(() => {
    feather.replace()
})
</script>

<style lang="scss" scoped>
.logo-footer {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.footer-compressed {
    padding-top: 60px !important;
    padding-bottom: 30px !important;

  .footer-list {
    transform: translateZ(0); /* Forces hardware acceleration */
    /*  will-change: transform;   Hints to the browser that this element will change */
  }
    
    .footer-list li {
        margin-bottom: 0.5rem;
    }
    
    .footer-head {
        margin-bottom: 0.75rem;
        font-size: 1rem;
    }
    
    .social-icon {
        margin-top: 0 !important;
    }
}
</style>