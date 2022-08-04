import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { Vue3Mq } from "vue3-mq";
import VueWriter from 'vue-writer'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

createApp(App)
    .use(router)
    .use(Vue3Mq)
    .use(VueWriter)
    .use(VueHighlightJS)
    .use(createPinia())
    .mount('#app')
