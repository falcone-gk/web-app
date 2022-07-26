<template>
  <div class="login">
    <form>
      <InputForm
      v-model="data.username"
      label="Username"
      name="username"
      type="text" />
      <InputForm
      v-model="data.password"
      label="Password"
      name="password"
      type="password" />
      <button @click.prevent="authStore.login(data)" class="app-btn">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '@/stores/auth'
import { Router, useRouter } from 'vue-router';
import InputForm from '@/components/custom_elements/InputForm.vue';

const data = reactive({
  username: '',
  password: ''
})

const router: Router = useRouter()
const authStore = useAuthStore()

// Function that runs when component is created.
const beforeCreate = () => {
  if (authStore.isAuthenticated) {
    router.push('/admin')
  }
}

// running function to make some validations.
beforeCreate()

</script>

<style lang="scss" src="@/styles/pages/_login.scss" scoped />