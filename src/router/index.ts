import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routes from '@/router/routes/index'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router
