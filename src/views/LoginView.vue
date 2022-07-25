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
      <BaseButton @click.prevent="onLogin" value="Login"/>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '@/stores/auth'
import { Router, useRouter } from 'vue-router';
import InputForm from '@/components/custom_elements/InputForm.vue';
import BaseButton from '@/components/custom_elements/BaseButton.vue';

const data = reactive({
  username: '',
  password: ''
})

const router: Router = useRouter()
const authStore = useAuthStore()

// Login event
const onLogin = async () => {
  await authStore.login(data)
    .then(() => {
      // In case that credentials sent are correct the user is redirect to admin page.
      router.push({path: '/admin'})
    })
}
</script>

<style lang="scss" scoped>
.login {
  form {
    width: 350px; 
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>