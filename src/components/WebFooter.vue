<template>
  <footer>
    <p v-if="!authStore.isAuthenticated">Are you and admin? then <a @click.prevent="toLogin">Login</a></p>
    <p v-else>Are you done? well, <a @click.prevent="toLogout">Logout</a></p>
  </footer>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import { Router, useRouter, useRoute, RouteLocationNormalizedLoaded } from 'vue-router';

const router: Router = useRouter()
const route: RouteLocationNormalizedLoaded = useRoute()
const authStore = useAuthStore()

// Send to login page with a redirect query.
const toLogin = () => {
  if (route.path !== '/login') router.push('/login')
}

// Logout that reset authStore to default values (no user data at all)
// and redirect to 'login' page.
const toLogout = () => {
  authStore.$reset()
  router.push({ path: '/login' })
}
</script>
