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
import { useStore } from '@/stores/modal'
import InputForm from '@/components/custom_elements/InputForm.vue';
import BaseButton from '@/components/custom_elements/BaseButton.vue';
import http from '@/helpers/http-common';

const data = reactive({
  username: '',
  password: ''
})

const store = useStore()

const onLogin = () => {
  const loginUrlApi = '/token-auth/'
  http.post(
    loginUrlApi,
    data
  ).then(response => {
    // Storing token in local storage.
    localStorage.setItem('token', response.data.token)
  }).catch(error => {
    store.$patch({
      title: 'Authentication error',
      message: 'Credentials sent to server are not correct.',
      isActive: true
    })
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