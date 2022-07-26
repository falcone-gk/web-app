<template>
  <header :class="mq">
    <div class="name-logo">
      <p>Enzo Falcón</p>
    </div>
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link v-if="authStore.isAuthenticated" to="/admin">Admin</router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useMq } from "vue3-mq"
import { useAuthStore } from "@/stores/auth";

const mq = useMq()
const authStore = useAuthStore()
</script>
