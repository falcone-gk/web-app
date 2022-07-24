import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue')
  }
]

export default routes.map(route => {
  const meta = {
    isAdmin: true
  }
  return { ...route, meta }
})