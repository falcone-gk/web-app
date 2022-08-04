import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/ProjectsView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView.vue'),
  },
  {
    path: '/blog/:id',
    name: 'post',
    component: () => import('@/views/PostView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  }
]

export default routes
