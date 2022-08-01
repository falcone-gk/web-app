<template>
  <WebModal />
  <NavBar />
  <main :class="mq">
    <router-view/>
  </main>
  <WebFooter />
</template>

<script setup lang="ts">
import { useMq } from "vue3-mq"
import WebModal from '@/components/WebModal.vue';
import NavBar from '@/components/NavBar.vue'
import WebFooter from '@/components/WebFooter.vue'
import { useAuthStore } from '@/stores/auth'

const mq = useMq()
const authStore = useAuthStore()

// Check if user has already login.
authStore.checkStoredToken()
</script>

<style lang="scss" src="@/styles/global.scss" />
