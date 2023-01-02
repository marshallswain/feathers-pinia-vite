import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { pinia } from './modules/pinia'
import { router } from './router'
import { createHead } from '@vueuse/head'

const head = createHead()

createApp(App).use(pinia).use(router).use(head).mount('#app')
