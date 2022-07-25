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
import { RouteLocationNormalizedLoaded, Router, useRoute, useRouter } from 'vue-router';
import InputForm from '@/components/custom_elements/InputForm.vue';
import BaseButton from '@/components/custom_elements/BaseButton.vue';

const data = reactive({
  username: '',
  password: ''
})

const router: Router = useRouter()
const route: RouteLocationNormalizedLoaded = useRoute()
const authStore = useAuthStore()

// Check if there is a redirect in the url query. In case of existing then
// user is redirected to that url if not then user goes to 'admin' page.
const goToNext = () => {
  const redirect: string | undefined = route.query.redirect as string | undefined
  if (redirect) {
    router.push({path: redirect})
  } else {
    router.push({path: '/admin'})
  }
}

// Function that runs when component is created.
const beforeCreate = () => {
  if (authStore.isAuthenticated) {
    goToNext()
  }
}

// running function to make some validations.
beforeCreate()

// Login event
const onLogin = async () => {
  await authStore.login(data)
    .then(() => {
      // In case that credentials sent are correct the user is redirect to admin page
      // or redirect to previous page.
      goToNext()
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