import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

// AOS — animaciones al scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

// Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const app = createApp(App)
app.mount('#app')

// Inicializar AOS después de montar
AOS.init({ duration: 600, once: true, easing: 'ease-out-cubic', offset: 40 })
