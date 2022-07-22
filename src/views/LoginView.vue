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
import InputForm from '@/components/custom_elements/InputForm.vue';
import BaseButton from '@/components/custom_elements/BaseButton.vue';
import http from '@/helpers/http-common';

const data = reactive({
  'username': '',
  'password': ''
})

const onLogin = () => {
  const loginUrlApi = '/token-auth/'
  http.post(
    loginUrlApi,
    data
  ).then(response => {
    // Storing token in local storage.
    localStorage.setItem('token', response.data.token)
  }).catch(error => console.log(error.response.data))
}
</script>

<style lang="scss" scoped>
.login {
  margin-top: 5em;
  display: flex;

  form {
    flex: 0 1 350px;
    margin: auto;
  }
}
</style>