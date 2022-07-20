<template>
  <div class="see-more">
    <a @click.prevent="linkTo">See More</a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Router, useRouter } from 'vue-router';

const props = defineProps(["link"])
const router: Router = useRouter()

const linkTo = () => router.push({ path: props.link })
</script>

<style lang="scss" scoped>
.see-more {
  margin-top: 2em;
  a {
    display: flex;
    cursor: pointer;
    flex-direction: row;
    color: var(--primary-color);
    text-decoration: none;
    transition: transform .5s ease;

    &:hover {
      transform: scale(1.1);
    }

    &::before, &::after {
      content: "";
      flex: 1 1;
      margin: auto;
      border-bottom: 1px solid var(--primary-color);
    }

    &::before {
      margin-right: 10px;
    }
    &::after {
      margin-left: 10px;
    }
  }
}
</style>