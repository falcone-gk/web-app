import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Vue3Mq } from "vue3-mq";
import VueWriter from 'vue-writer'

createApp(App)
    .use(router)
    .use(Vue3Mq)
    .use(VueWriter)
    .mount('#app')
