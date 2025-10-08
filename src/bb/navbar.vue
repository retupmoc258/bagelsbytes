<template>
        <!-- Navbar STart -->
        <header id="topnav" class="defaultscroll sticky">
                <div class="container">
                        <!-- Logo container-->
                        <div v-if="logoLight">
                                <router-link class="logo" to="/">
                                        <span class="logo-light-mode">
                                                <img src="../assets/images/logo-dark.png" class="l-dark" alt="">
                                                <img src="../assets/images/logo-light.png" class="l-light" alt="">
                                        </span>
                                        <img src="../assets/images/logo-light.png" class="logo-dark-mode" alt="">
                                </router-link>
                        </div>

                        <div v-else>
                                <router-link class="logo" to="/">
                                        <img src="../assets/images/logo-dark.png" class="logo-light-mode" alt="">
                                        <img src="../assets/images/logo-light.png" class="logo-dark-mode" alt="">
                                </router-link>
                        </div>

                        <div v-if="buttonLight" class="buy-button">
                                <a href="javascript:void(0)">
                                        <div class="btn btn-primary login-btn-primary">Buy Now</div>
                                        <div class="btn btn-light login-btn-light">Buy Now</div>
                                </a>
                        </div><!--end login button-->

                        <div v-else class="buy-button">
                                <a href="javascript:void(0)" class="btn btn-primary">Buy Now</a>
                        </div><!--end login button-->

                        <!-- End Logo container-->
                        <div class="menu-extras" @click="handler">
                                <div class="menu-item">
                                        <!-- Mobile menu toggle-->
                                        <a class="navbar-toggle" :class="toggle === false ? '' : 'open'">
                                                <div class="lines">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                </div>
                                        </a>
                                        <!-- End mobile menu toggle-->
                                </div>
                        </div>

                        <div id="navigation" :class="toggle === false ? 'd-none' : 'd-block'">
                                <!-- Navigation Menu-->
                                <ul class="navigation-menu nav-left" :class="navLight">
                                        <li :class="activeIndex === '/' ? 'active' : ''"><router-link to="/"
                                                        class="sub-menu-item">Home</router-link></li>
                                        <li class="has-submenu parent-parent-menu-item"
                                                :class="['/landing', '/index-app', '/index-saas', '/index-software', '/index-career', '/index-crypto', '/index-startup', '/index-business', '/index-seo-agency', '/index-freelancer', '/index-broker', '/index-developer', '/index-studio', '/index-hosting', '/index-service'].includes(activeIndex) ? 'active' : ''">
                                                <router-link @click="submenu(openMenu === '/landing' ? '' : '/landing')"
                                                        to="">Landing</router-link><span class="menu-arrow"></span>
                                                <ul class="submenu"
                                                        :class="['/landing'].includes(openMenu) ? 'open' : ''">
                                                        <li :class="activeIndex === '/index-app' ? 'active' : ''">
                                                                <router-link to="/index-app"
                                                                        class="sub-menu-item">Apps</router-link></li>
                                                        <li :class="activeIndex === '/index-saas' ? 'active' : ''">
                                                                <router-link to="/index-saas"
                                                                        class="sub-menu-item">Saas</router-link></li>
                                                        <li :class="activeIndex === '/index-software' ? 'active' : ''">
                                                                <router-link to="/index-software"
                                                                        class="sub-menu-item">Software</router-link>
                                                        </li>
                                                        <li :class="activeIndex === '/index-career' ? 'active' : ''">
                                                                <router-link to="/index-career"
                                                                        class="sub-menu-item">Career</router-link></li>
                                                        <li :class="activeIndex === '/index-crypto' ? 'active' : ''">
                                                                <router-link to="/index-crypto"
                                                                        class="sub-menu-item">Crypto</router-link></li>
                                                        <li :class="activeIndex === '/index-startup' ? 'active' : ''">
                                                                <router-link to="/index-startup"
                                                                        class="sub-menu-item">Startup</router-link></li>
                                                        <li :class="activeIndex === '/index-business' ? 'active' : ''">
                                                                <router-link to="/index-business"
                                                                        class="sub-menu-item">Business</router-link>
                                                        </li>
                                                        <li
                                                                :class="activeIndex === '/index-seo-agency' ? 'active' : ''">
                                                                <router-link to="/index-seo-agency"
                                                                        class="sub-menu-item">SEO Agency</router-link>
                                                        </li>
                                                        <li
                                                                :class="activeIndex === '/index-freelancer' ? 'active' : ''">
                                                                <router-link to="/index-freelancer"
                                                                        class="sub-menu-item">Freelancer</router-link>
                                                        </li>
                                                        <li :class="activeIndex === '/index-broker' ? 'active' : ''">
                                                                <router-link to="/index-broker"
                                                                        class="sub-menu-item">Broker</router-link></li>
                                                        <li :class="activeIndex === '/index-developer' ? 'active' : ''">
                                                                <router-link to="/index-developer"
                                                                        class="sub-menu-item">Developer</router-link>
                                                        </li>
                                                        <li :class="activeIndex === '/index-studio' ? 'active' : ''">
                                                                <router-link to="/index-studio"
                                                                        class="sub-menu-item">Studio</router-link></li>
                                                        <li :class="activeIndex === '/index-hosting' ? 'active' : ''">
                                                                <router-link to="/index-hosting"
                                                                        class="sub-menu-item">Hosting &
                                                                        Domain</router-link></li>
                                                        <li :class="activeIndex === '/index-service' ? 'active' : ''">
                                                                <router-link to="/index-service"
                                                                        class="sub-menu-item">Service</router-link></li>
                                                </ul>
                                        </li>

                                        <li class="has-submenu parent-parent-menu-item"
                                                :class="['/pages', '/page-about', '/page-services', '/page-team', '/page-pricing', '/page-faqs', '/profile', '/profile-setting', '/profile-payment', '/billing-invoice', '/career-detail', '/career-apply', '/blogs', '/blog-detail', '/page-terms', '/page-privacy', '/page-comingsoon', '/page-maintenance', '/page-error', '/login', '/signup', '/forgot-password', '/thankyou', '/contact'].includes(activeIndex) ? 'active' : ''">
                                                <router-link to=""
                                                        @click="submenu(openMenu === '/pages' ? '' : '/pages')">Pages</router-link><span
                                                        class="menu-arrow"></span>
                                                <ul class="submenu"
                                                        :class="['/pages', '/profiles', '/career', '/blog', '/utility', '/special', '/authentication'].includes(openMenu) ? 'open' : ''">
                                                        <li :class="activeIndex === '/page-about' ? 'active' : ''">
                                                                <router-link to="/page-about" class="sub-menu-item">
                                                                        About Us</router-link></li>
                                                        <li :class="activeIndex === '/page-services' ? 'active' : ''">
                                                                <router-link to="/page-services"
                                                                        class="sub-menu-item">Services</router-link>
                                                        </li>
                                                        <li :class="activeIndex === '/page-team' ? 'active' : ''">
                                                                <router-link to="/page-team" class="sub-menu-item">
                                                                        Team</router-link></li>
                                                        <li :class="activeIndex === '/page-pricing' ? 'active' : ''">
                                                                <router-link to="/page-pricing"
                                                                        class="sub-menu-item">Pricing</router-link></li>
                                                        <li :class="activeIndex === '/page-faqs' ? 'active' : ''">
                                                                <router-link to="/page-faqs"
                                                                        class="sub-menu-item">FAQs</router-link></li>

                                                        <li class="has-submenu parent-menu-item"
                                                                :class="['/profiles', '/profile', '/profile-setting', '/profile-payment', '/billing-invoice'].includes(activeIndex) ? 'active' : ''">
                                                                <router-link to=""
                                                                        @click="submenu(openMenu === '/profiles' ? '' : '/profiles')">
                                                                        Profile </router-link><span
                                                                        class="submenu-arrow"></span>
                                                                <ul class="submenu"
                                                                        :class="['/profiles'].includes(openMenu) ? 'open' : ''">
                                                                        <li
                                                                                :class="activeIndex === '/profile' ? 'active' : ''">
                                                                                <router-link to="/profile"
                                                                                        class="sub-menu-item">Profile</router-link>
                                                                        </li>
                                                                        <li
                                                                                :class="activeIndex === '/profile-setting' ? 'active' : ''">
                                                                                <router-link to="/profile-setting"
                                                                                        class="sub-menu-item">Setting</router-link>
                                                                        </li>
                                                                        <li
                                                                                :class="activeIndex === '/profile-payment' ? 'active' : ''">
                                                                                <router-link to="/profile-payment"
                                                                                        class="sub-menu-item">Payment</router-link>
                                                                        </li>
                                                                        <li
                                                                                :class="activeIndex === '/billing-invoice' ? 'active' : ''">
                                                                                <router-link to="/billing-invoice"
                                                                                        class="sub-menu-item">Invoice</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>

                                                        <li class="has-submenu parent-menu-item"
                                                                :class="['/career', '/career-detail', '/career-apply'].includes(activeIndex) ? 'active' : ''">
                                                                <router-link to=""
                                                                        @click="submenu(openMenu === '/career' ? '' : '/career')">
                                                                        Career
                                                                </router-link><span class="submenu-arrow"></span>
                                                                <ul class="submenu"
                                                                        :class="['/career', '/career-detail', '/career-apply'].includes(openMenu) ? 'open' : ''">
                                                                        <li
                                                                                :class="activeIndex === '/career-detail' ? 'active' : ''">
                                                                                <router-link to="/career-detail"
                                                                                        class="sub-menu-item">Career
                                                                                        Detail</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/career-apply' ? 'active' : ''">
                                                                                <router-link to="/career-apply"
                                                                                        class="sub-menu-item">Career
                                                                                        Apply</router-link></li>
                                                                </ul>
                                                        </li>

                                                        <li class="has-submenu parent-menu-item"
                                                                :class="['/blog', '/blogs', '/blog-detail'].includes(activeIndex) ? 'active' : ''">
                                                                <router-link to=""
                                                                        @click="submenu(openMenu === '/blog' ? '' : '/blog')">
                                                                        Blog
                                                                </router-link><span class="submenu-arrow"></span>
                                                                <ul class="submenu"
                                                                        :class="['/blog'].includes(openMenu) ? 'open' : ''">
                                                                        <li
                                                                                :class="activeIndex === '/blogs' ? 'active' : ''">
                                                                                <router-link to="/blogs"
                                                                                        class="sub-menu-item">Blogs &
                                                                                        News</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/blog-detail' ? 'active' : ''">
                                                                                <router-link to="/blog-detail"
                                                                                        class="sub-menu-item">Blog
                                                                                        Detail</router-link></li>
                                                                </ul>
                                                        </li>

                                                        <li class="has-submenu parent-menu-item"
                                                                :class="['/utility', '/page-terms', '/page-privacy'].includes(activeIndex) ? 'active' : ''">
                                                                <router-link to=""
                                                                        @click="submenu(openMenu === '/utility' ? '' : '/utility')">
                                                                        Utility
                                                                </router-link><span class="submenu-arrow"></span>
                                                                <ul class="submenu"
                                                                        :class="['/utility'].includes(openMenu) ? 'open' : ''">
                                                                        <li
                                                                                :class="activeIndex === '/page-terms' ? 'active' : ''">
                                                                                <router-link to="/page-terms"
                                                                                        class="sub-menu-item">Terms of
                                                                                        Services</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/page-privacy' ? 'active' : ''">
                                                                                <router-link to="/page-privacy"
                                                                                        class="sub-menu-item">Privacy
                                                                                        Policy</router-link></li>
                                                                </ul>
                                                        </li>

                                                        <li class="has-submenu parent-menu-item"
                                                                :class="['/special', '/page-comingsoon', '/page-maintenance', '/page-error'].includes(activeIndex) ? 'active' : ''">
                                                                <router-link to=""
                                                                        @click="submenu(openMenu === '/special' ? '' : '/special')">
                                                                        Special
                                                                </router-link><span class="submenu-arrow"></span>
                                                                <ul class="submenu"
                                                                        :class="['/special'].includes(openMenu) ? 'open' : ''">
                                                                        <li
                                                                                :class="activeIndex === '/page-comingsoon' ? 'active' : ''">
                                                                                <router-link to="/page-comingsoon"
                                                                                        class="sub-menu-item">Coming
                                                                                        Soon</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/page-maintenance' ? 'active' : ''">
                                                                                <router-link to="/page-maintenance"
                                                                                        class="sub-menu-item">Maintenance</router-link>
                                                                        </li>
                                                                        <li
                                                                                :class="activeIndex === '/page-error' ? 'active' : ''">
                                                                                <router-link to="/page-error"
                                                                                        class="sub-menu-item">Error</router-link>
                                                                        </li>
                                                                </ul>
                                                        </li>

                                                        <li class="has-submenu parent-menu-item"
                                                                :class="['/authentication', '/login', '/signup', '/forgot-password', '/thankyou'].includes(activeIndex) ? 'active' : ''">
                                                                <router-link to=""
                                                                        @click="submenu(openMenu === '/authentication' ? '' : '/authentication')">
                                                                        Authentication
                                                                </router-link><span class="submenu-arrow"></span>
                                                                <ul class="submenu"
                                                                        :class="['/authentication'].includes(openMenu) ? 'open' : ''">
                                                                        <li
                                                                                :class="activeIndex === '/login' ? 'active' : ''">
                                                                                <router-link to="/login"
                                                                                        class="sub-menu-item">Login</router-link>
                                                                        </li>
                                                                        <li
                                                                                :class="activeIndex === '/signup' ? 'active' : ''">
                                                                                <router-link to="/signup"
                                                                                        class="sub-menu-item">signup</router-link>
                                                                        </li>
                                                                        <li
                                                                                :class="activeIndex === '/forgot-password' ? 'active' : ''">
                                                                                <router-link to="/forgot-password"
                                                                                        class="sub-menu-item">Forgot
                                                                                        Password</router-link>
                                                                        </li>
                                                                        <li
                                                                                :class="activeIndex === '/thankyou' ? 'active' : ''">
                                                                                <router-link to="/thankyou"
                                                                                        class="sub-menu-item">Thank
                                                                                        you</router-link></li>
                                                                </ul>
                                                        </li>
                                                        <li :class="activeIndex === '/contact' ? 'active' : ''">
                                                                <router-link to="/contact"
                                                                        class="sub-menu-item">Contact</router-link></li>
                                                </ul>
                                        </li>

                                        <li class="has-submenu parent-parent-menu-item"
                                                :class="['/classic', '/work-classic-two', '/work-classic-three', '/work-classic-four', '/work-classic-five', '/work-classic-six', '/work-grid-two', '/work-grid-three', '/work-grid-four', '/work-grid-five', '/work-grid-six', '/work-modern-two', '/work-modern-three', '/work-modern-four', '/work-modern-five', '/work-modern-six', '/work-masonry-two', '/work-masonry-three', '/work-masonry-four', '/work-masonry-five', '/work-masonry-six', '/work-detail'].includes(activeIndex) ? 'active' : ''">
                                                <router-link to=""
                                                        @click="submenu(openMenu === '/classic' ? '' : '/classic')">Portfolio</router-link><span
                                                        class="menu-arrow"></span>
                                                <ul class="submenu megamenu"
                                                        :class="['/classic'].includes(openMenu) ? 'open' : ''">
                                                        <li>
                                                                <ul>
                                                                        <li class="megamenu-head">Classic Portfolio</li>
                                                                        <li
                                                                                :class="activeIndex === '/work-classic-two' ? 'active' : ''">
                                                                                <router-link to="/work-classic-two"
                                                                                        class="sub-menu-item">Two
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-classic-three' ? 'active' : ''">
                                                                                <router-link to="/work-classic-three"
                                                                                        class="sub-menu-item">Three
                                                                                        Column</router-link>
                                                                        </li>
                                                                        <li
                                                                                :class="activeIndex === '/work-classic-four' ? 'active' : ''">
                                                                                <router-link to="/work-classic-four"
                                                                                        class="sub-menu-item">Four
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-classic-five' ? 'active' : ''">
                                                                                <router-link to="/work-classic-five"
                                                                                        class="sub-menu-item">Five
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-classic-six' ? 'active' : ''">
                                                                                <router-link to="/work-classic-six"
                                                                                        class="sub-menu-item">Six
                                                                                        Column</router-link></li>

                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li class="megamenu-head">Grid Portfolio</li>
                                                                        <li
                                                                                :class="activeIndex === '/work-grid-two' ? 'active' : ''">
                                                                                <router-link to="/work-grid-two"
                                                                                        class="sub-menu-item">Two
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-grid-three' ? 'active' : ''">
                                                                                <router-link to="/work-grid-three"
                                                                                        class="sub-menu-item">Three
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-grid-four' ? 'active' : ''">
                                                                                <router-link to="/work-grid-four"
                                                                                        class="sub-menu-item">Four
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-grid-five' ? 'active' : ''">
                                                                                <router-link to="/work-grid-five"
                                                                                        class="sub-menu-item">Five
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-grid-six' ? 'active' : ''">
                                                                                <router-link to="/work-grid-six"
                                                                                        class="sub-menu-item">Six
                                                                                        Column</router-link></li>

                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li class="megamenu-head">Modern Portfolio</li>
                                                                        <li
                                                                                :class="activeIndex === '/work-modern-two' ? 'active' : ''">
                                                                                <router-link to="/work-modern-two"
                                                                                        class="sub-menu-item">Two
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-modern-three' ? 'active' : ''">
                                                                                <router-link to="/work-modern-three"
                                                                                        class="sub-menu-item">Three
                                                                                        Column</router-link>
                                                                        </li>
                                                                        <li
                                                                                :class="activeIndex === '/work-modern-four' ? 'active' : ''">
                                                                                <router-link to="/work-modern-four"
                                                                                        class="sub-menu-item">Four
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-modern-five' ? 'active' : ''">
                                                                                <router-link to="/work-modern-five"
                                                                                        class="sub-menu-item">Five
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-modern-six' ? 'active' : ''">
                                                                                <router-link to="/work-modern-six"
                                                                                        class="sub-menu-item">Six
                                                                                        Column</router-link></li>

                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li class="megamenu-head">Masonry Portfolio</li>
                                                                        <li
                                                                                :class="activeIndex === '/work-masonry-two' ? 'active' : ''">
                                                                                <router-link to="/work-masonry-two"
                                                                                        class="sub-menu-item">Two
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-masonry-three' ? 'active' : ''">
                                                                                <router-link to="/work-masonry-three"
                                                                                        class="sub-menu-item">Three
                                                                                        Column</router-link>
                                                                        </li>
                                                                        <li
                                                                                :class="activeIndex === '/work-masonry-four' ? 'active' : ''">
                                                                                <router-link to="/work-masonry-four"
                                                                                        class="sub-menu-item">Four
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-masonry-five' ? 'active' : ''">
                                                                                <router-link to="/work-masonry-five"
                                                                                        class="sub-menu-item">Five
                                                                                        Column</router-link></li>
                                                                        <li
                                                                                :class="activeIndex === '/work-masonry-six' ? 'active' : ''">
                                                                                <router-link to="/work-masonry-six"
                                                                                        class="sub-menu-item">Six
                                                                                        Column</router-link></li>

                                                                </ul>
                                                        </li>

                                                        <li>
                                                                <ul>
                                                                        <li class="megamenu-head">Portfolio Detail</li>
                                                                        <li
                                                                                :class="activeIndex === '/work-detail' ? 'active' : ''">
                                                                                <router-link to="/work-detail"
                                                                                        class="sub-menu-item">Work
                                                                                        Detail</router-link></li>
                                                                </ul>
                                                        </li>
                                                </ul>
                                        </li>
                                        <li :class="activeIndex === '/components' ? 'active' : ''"><router-link
                                                        to="/components" class="sub-menu-item">Components</router-link>
                                        </li>
                                </ul><!--end navigation menu-->
                                <div class="buy-menu-btn d-none">
                                        <a href="javascript:void(0)" class="btn btn-primary">Buy Now</a>
                                </div> <!-- end login button -->
                        </div><!--end navigation-->
                </div><!--end container-->
        </header><!--end header-->
        <!-- Navbar End -->
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, defineProps } from 'vue';

const activeIndex = computed(() => window.location.pathname)
const menu = ref('')
const openMenu = ref('')
const toggle = ref(false)

defineProps({
        logoLight: {
                type: Boolean,
                required: true
        },
        buttonLight: {
                type: Boolean,
                required: true
        },
        navLight: {
                type: String,
                required: true
        },

})

onMounted(() => {
        window.addEventListener('scroll', handleScroll);
        scrollToTop()
});

onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
});

const submenu = (item) => {
        menu.value = !menu.value
        openMenu.value = item
}

const handler = () => {
        toggle.value = !toggle.value
}

const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
}

const handleScroll = () => {
        const navbar = document.getElementById("topnav");
        if (window.scrollY >= 50) {
                navbar.classList.add("nav-sticky");
        } else {
                navbar.classList.remove("nav-sticky");
        }
}
</script>

<style lang="scss" scoped></style>