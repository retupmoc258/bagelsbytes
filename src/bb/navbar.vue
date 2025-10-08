<template>
        <!-- Navbar STart -->
        <header id="topnav" class="defaultscroll sticky">
                <div class="container">
                        <!-- Logo container-->
                        <div>
                                <router-link class="logo" to="/">
                                        <img src="../bb/assets/bagels-bytes-icon.png" class="logo-light-mode" style="height:24px" alt="Bagel's Bytes">
                                        <img src="../bb/assets/bagels-bytes-icon.png" class="logo-dark-mode" style="height:24px" alt="Bagel's Bytes">
                                        <span class="logo-text">Bagel's Bytes</span>
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
import { ref, computed, onMounted, onUnmounted, defineProps } from 'vue';

const activeIndex = computed(() => window.location.pathname)
const menu = ref('')
const openMenu = ref('')
const toggle = ref(false)

defineProps({
        logoLight: {
                type: Boolean,
                required: false,
                default: false
        },
        buttonLight: {
                type: Boolean,
                required: false,
                default: false
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
        } else {
                navbar.classList.remove("nav-sticky");
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
</style>