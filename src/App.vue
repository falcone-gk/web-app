<template>
  <NavBar />
  <main :class="mq">
    <router-view/>
  </main>
</template>

<script setup lang="ts">
import { useMq } from "vue3-mq"
import NavBar from '@/components/NavBar.vue'

const mq = useMq()
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Lobster&display=swap');

:root {
  --bg-dark: #0c0c0c;
  --side-padding: min(12vw, 250px);
  --primary-color: #00e056;
  --primary-dark-color: #00b947;
  --para-color: hsla(0,0%,96.1%,0.65);
}

html{
  scroll-behavior:smooth
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-dark);
}

main {
  padding: 0 var(--side-padding);

  &.mdMinus {
    padding: 0 1.5em;
  }
}

#app {
  font-family: 'Lato', sans-serif, Avenir, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
