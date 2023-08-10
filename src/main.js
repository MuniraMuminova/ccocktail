import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/style/style.scss'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



import { routers } from "@/router";

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(routers)
app.mount('#app')
app.use(ElementPlus)