<template>
        <!-- Navbar Start -->
        <header id="topnav" class="defaultscroll sticky">
                <div class="container">
                        <!-- Logo container-->
                        <div>
                                <router-link class="logo" id="logo" to="/">
                                        <img src="../bb/assets/bagels-bytes-icon.png" style="height:24px" alt="Bagel's Bytes">
                                        <span id="logo-text" class="logo-text logo-color-change" :class="logoLightBackground ? 'logo-dark-text' : 'logo-light-text'">Bagel's Bytes</span>
                                </router-link>
                        </div>

                        <!-- Mobile menu toggle-->
                        <div class="menu-extras" @click="handler">
                                <div class="menu-item">
                                        <a class="navbar-toggle" :class="toggle === false ? '' : 'open'">
                                                <div class="lines">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                </div>
                                        </a>
                                </div>
                        </div>

                        <!-- Navigation Menu-->
                        <div id="navigation" :class="toggle === false ? 'd-none' : 'd-block'">
                                <ul class="navigation-menu nav-right" :class="navLight">
                                        <li :class="activeIndex === '/' ? 'active' : ''">
                                                <router-link to="/" class="sub-menu-item">Home</router-link>
                                        </li>
                                        
                                        <li :class="activeIndex === '/about' ? 'active' : ''">
                                                <router-link to="/about" class="sub-menu-item">About</router-link>
                                        </li>
                                        
                                        <li :class="activeIndex === '/services' ? 'active' : ''">
                                                <router-link to="/services" class="sub-menu-item">Services</router-link>
                                        </li>
                                        
                                        <li class="has-submenu parent-parent-menu-item"
                                                :class="['/portfolio'].includes(openMenu) || ['/work-detail'].includes(activeIndex) ? 'active' : ''">
                                                <router-link to="" @click="submenu(openMenu === '/portfolio' ? '' : '/portfolio')">
                                                        Portfolio
                                                </router-link>
                                                <span class="menu-arrow"></span>
                                                <ul class="submenu" :class="['/portfolio'].includes(openMenu) ? 'open' : ''">
                                                        <li :class="activeIndex === '/portfolio' ? 'active' : ''">
                                                                <router-link to="/portfolio" class="sub-menu-item">All Projects</router-link>
                                                        </li>
                                                        <li :class="activeIndex === '/work-detail' ? 'active' : ''">
                                                                <router-link to="/work-detail" class="sub-menu-item">Project Details</router-link>
                                                        </li>
                                                </ul>
                                        </li>

                                        <li :class="activeIndex === '/contact' ? 'active' : ''">
                                                <router-link to="/contact" class="sub-menu-item">Contact</router-link>
                                        </li>
                                </ul>
                        </div>
                </div>
        </header>
        <!-- Navbar End -->
</template>

<script setup>
// TODO Figure out why the menu bar changes color on Contact Page (Without nav-sticky) but goes normal for nav-sticky.
import { ref, computed, onMounted, onUnmounted, defineProps } from 'vue';

const activeIndex = computed(() => window.location.pathname)
const menu = ref('')
const openMenu = ref('')
const toggle = ref(false)

const props = defineProps({
        logoLightBackground: {
                type: Boolean,
                required: false,
                default: true
        },
        navLight: {
                type: String,
                required: false,
                default: ''
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
                document.getElementById("logo-text").classList.add("logo-dark-text");
        } else {
                navbar.classList.remove("nav-sticky");
                if(!props.logoLightBackground) {
                  document.getElementById("logo-text").classList.remove("logo-dark-text");
                }
        }
}
</script>

<style lang="scss" scoped>
.logo-text {
  margin-left: 10px;
  vertical-align: middle;
  font-weight: 600;
  font-size: 1.1rem;
}

.logo-light-text {
  color: #fff;
}

.logo-color-change {
  transition: color 0.3s ease;
}
.nav-sticky .logo-dark-text {
  color: #000000; /* Change this to your desired color */
}
</style>