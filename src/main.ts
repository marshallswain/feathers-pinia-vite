import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import { pinia } from './modules/pinia'
import { createHead } from '@vueuse/head'

const head = createHead()

createApp(App).use(pinia).use(router).use(head).mount('#app')
