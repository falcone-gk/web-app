<template>
  <footer>
    <p>Are you and admin? then <a @click.prevent="toLogin">Login</a></p>
  </footer>
</template>

<script setup lang="ts">
import { Router, useRouter } from 'vue-router';

const router: Router = useRouter()
const toLogin = () => router.push({path: '/login'})
</script>

<style lang="scss" scoped>
footer {
  padding: 2em 1em;
  margin-top: auto;
  * {
    color: var(--para-color);
  }
  a {
    cursor: pointer;
    color: var(--primary-color);
    &:hover {
      color: var(--primary-dark-color);
    }
  }
}
</style>