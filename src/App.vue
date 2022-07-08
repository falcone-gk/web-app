<template>
  <NavBar />
  <router-view/>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Lobster&display=swap');

:root {
  --bg-dark: #0c0c0c;
  --side-padding: 3em;
  --main-color: #F9B975;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-dark);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
