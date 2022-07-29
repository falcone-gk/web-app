<template>
  <div class="login">
    <form>
      <InputForm
      v-model="data.username"
      label="Username"
      name="username"
      :error="v.username.$errors[0]" />
      <InputForm
      v-model="data.password"
      label="Password"
      name="password"
      type="password"
      :error="v.password.$errors[0]" />
      <button @click.prevent="onLogin" class="app-btn">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useAuthStore } from '@/stores/auth'
import { Router, useRouter } from 'vue-router';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import InputForm from '@/components/custom_elements/InputForm.vue';

const data = reactive({
  username: '',
  password: ''
})

const dataRules = computed(() => {
  return {
    username: { required },
    password: { required }
  }
})

const v = useVuelidate(dataRules, data)

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

const onLogin = async () => {
  const isFormCorrect: boolean = await v.value.$validate()
  if (!isFormCorrect) return

  authStore.login(data)
}

</script>

<style lang="scss" src="@/styles/pages/_login.scss" scoped />