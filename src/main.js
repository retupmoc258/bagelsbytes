import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootsratp from 'bootstrap/dist/js/bootstrap.bundle.js';
import '@/assets/scss/style.scss';
import '@/assets/libs/@iconscout/unicons/css/line.css';
import '@/assets/libs/@mdi/font/css/materialdesignicons.min.css';
import MasonryWall from '@yeger/vue-masonry-wall'
import router from './router'

const app = createApp(App)
app.use(MasonryWall)
app.use(bootsratp)
app.use(router)
app.mount('#app')
