<template>
    <!-- Footer Start -->
    <footer class="bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 mb-0 mb-md-4 pb-0 pb-md-2">
                    <a href="#" class="logo-footer">
                        <img src="../../assets/images/logo-icon.png" height="48" alt="">
                    </a>
                    <ul class="list-unstyled footer-list px-0 mt-4">
                        <li><i data-feather="map-pin" class="fea icon-sm me-2"></i><a href="#"
                                class="text-muted">Londan, England</a></li>
                        <li><i data-feather="mail" class="fea icon-sm me-2"></i><a href="mailto:contact@example.com"
                                class="text-muted">test@yourdomain.com</a></li>
                        <li><i data-feather="phone" class="fea icon-sm me-2"></i><a href="tel:+152534-468-854"
                                class="text-muted">+(125) 1254-5487</a></li>
                    </ul>
                </div><!--end col-->

                <div class="col-lg-9 col-md-12">
                    <div class="row">
                        <div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h5 class="text-dark footer-head">Company</h5>
                            <ul class="list-unstyled footer-list mt-4">
                                <li v-for="item in company" :key="item"><a href="javascript:void(0)"
                                        class="text-muted"><i class="mdi mdi-chevron-right me-1"></i> {{ item }}</a>
                                </li>

                            </ul>
                        </div><!--end col-->

                        <div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h5 class="text-dark footer-head">Features</h5>
                            <ul class="list-unstyled footer-list mt-4">
                                <li><a href="javascript:void(0)" class="text-muted"><i
                                            class="mdi mdi-chevron-right me-1"></i> Release Notes</a></li>
                                <li><a href="javascript:void(0)" class="text-muted"><i
                                            class="mdi mdi-chevron-right me-1"></i> Invoice</a></li>
                                <li><a href="javascript:void(0)" class="text-muted"><i
                                            class="mdi mdi-chevron-right me-1"></i> Integrations</a></li>
                                <li><a href="javascript:void(0)" class="text-muted"><i
                                            class="mdi mdi-chevron-right me-1"></i> APIs</a></li>
                            </ul>
                        </div><!--end col-->

                        <div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h5 class="text-dark footer-head">Documentation</h5>
                            <ul class="list-unstyled footer-list mt-4">
                                <li><a href="javascript:void(0)" class="text-muted"><i
                                            class="mdi mdi-chevron-right me-1"></i> Support</a></li>
                                <li><a href="javascript:void(0)" class="text-muted"><i
                                            class="mdi mdi-chevron-right me-1"></i> Docs</a></li>
                                <li><a href="javascript:void(0)" class="text-muted"><i
                                            class="mdi mdi-chevron-right me-1"></i> Changelog</a></li>
                                <li><a href="javascript:void(0)" class="text-muted"><i
                                            class="mdi mdi-chevron-right me-1"></i> Components</a></li>
                            </ul>
                        </div><!--end col-->

                        <div class="col-md-3 col-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <h5 class="text-dark footer-head">Usefull Links</h5>
                            <ul class="list-unstyled footer-list mt-4">
                                <li><a href="javascript:void(0)" class="text-muted"><i
                                            class="mdi mdi-chevron-right me-1"></i> Terms Policy</a></li>
                                <li><a href="javascript:void(0)" class="text-muted"><i
                                            class="mdi mdi-chevron-right me-1"></i> Privacy Policy</a></li>
                            </ul>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end col-->
            </div><!--end row-->
        </div><!--end container-->

        <div class="container mt-5">
            <div class="pt-4 border-top">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="text-sm-start text-center">
                            <ul class="list-unstyled social-icon social-light mb-0 mt-4 mt-sm-0">
                                <li v-for="item in social" :key="item" class="list-inline-item me-1"><a
                                        :href="item.link" class="rounded"><i :class="item.icon" title="Buy Now"></i></a>
                                </li>
                            </ul><!--end icon-->
                        </div>
                    </div>

                    <div class="col-sm-6 mt-4 mt-sm-0">
                        <ul class="list-unstyled footer-list text-sm-end text-center mb-0">
                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted me-2">Terms</a>
                            </li>
                            <li class="list-inline-item"><a href="javascript:void(0)"
                                    class="text-muted me-2">Privacy</a></li>
                            <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted me-2">About</a>
                            </li>
                            <li class="list-inline-item"><a href="javascript:void(0)"
                                    class="text-muted me-2">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div class="row justify-content-center mt-4">
                    <div class="col-12 text-center">
                        <p class="mb-0">© {{ date }} Landflow. Design & Develop with <i
                                class="mdi mdi-heart text-danger"></i> by <a href="https://shreethemes.in"
                                target="_blank" class="text-reset">Shreethemes</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer><!--end footer-->
    <!-- Footer End -->
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import feather from 'feather-icons'

defineProps({
    footerbar: {
        type: String,
        required: true
    }
})

const date = ref(new Date().getFullYear());

const company = ref(['About us', 'Services', 'Team', 'Project', 'Blog', 'Login'])

const social = ref([
    {
        link: 'https://dribbble.com/shreethemes',
        icon: 'uil uil-dribbble align-middle'
    },
    {
        link: 'https://www.behance.net/shreethemes',
        icon: 'uil uil-behance'
    },
    {
        link: 'http://linkedin.com/company/shreethemes',
        icon: 'uil uil-linkedin'
    },
    {
        link: 'https://www.facebook.com/shreethemes',
        icon: 'uil uil-facebook-f align-middle'
    },
    {
        link: 'https://www.instagram.com/shreethemes/',
        icon: 'uil uil-instagram align-middle'
    },
    {
        link: 'https://twitter.com/shreethemes',
        icon: 'uil uil-twitter align-middle'
    },
    {
        link: 'mailto:support@shreethemes.in',
        icon: 'uil uil-envelope align-middle'
    },
    {
        link: 'https://forms.gle/QkTueCikDGqJnbky9',
        icon: 'uil uil-file align-middle'
    },
])

onMounted(() => {
    feather.replace()
})
</script>

<style lang="scss" scoped></style>