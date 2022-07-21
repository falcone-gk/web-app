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
      <BaseButton value="Login"/>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import InputForm from '@/components/custom_elements/InputForm.vue';
import BaseButton from '@/components/custom_elements/BaseButton.vue';

const data = reactive({
  'username': '',
  'password': ''
})
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