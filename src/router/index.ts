import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import routes from '@/router/routes/index'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})


router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  const authenticated: boolean = store.isAuthenticated
  const onlyAdmin: boolean = to.matched.some(record => record.meta.isAdmin)
  if (!authenticated && onlyAdmin) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
  next()
})

export default router
