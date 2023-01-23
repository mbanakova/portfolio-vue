import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { createPinia } from 'pinia'
import FontAwesome from "./assets/fontawesome";
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false
})
app.component('font-awesome', FontAwesome)
app.mount('#app')

