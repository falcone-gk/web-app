<template>
  <div class="see-more">
    <a :href="props.link">See More</a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(["link"])
</script>

<style lang="scss" scoped>
.see-more {
  margin-top: 2em;
  a {
    display: flex;
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