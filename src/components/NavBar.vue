<template>
  <header :class="mq">
    <div class="name-logo">
      <p>Enzo Falcón</p>
    </div>
    <nav class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useMq } from "vue3-mq"

const mq = useMq()
</script>

<style lang="scss" scoped>

header {
  display: flex;
  background-color: var(--bg-dark);
  align-items: center;
  padding: 1em var(--side-padding);

  &.smMinus {
    flex-direction: column;
  }

  .name-logo {
    font-family: 'Lobster', cursive;
    font-size: 30px;
    display: flex;
    flex: 1 1 auto;

    p {
      display: inline;
      margin-right: auto;
      color: #ffffff;
    }
  }

  .nav-links {
    display: flex;
    gap: min(5vw, 2em);

    a {
      position: relative;
      font-weight: 700;
      font-size: 1.3rem;
      color: #ffffff;
      text-decoration: none;

      &.router-link-active {
        color: var(--primary-color);
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 4px;
        bottom: -4px;
        left: 0;
        background-color: var(--primary-color);
        border-radius: 5px;
        transform-origin: bottom center;
        transition: transform 0.25s ease-out;
      }
      &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom center;
      }
    }
  }
}
</style>