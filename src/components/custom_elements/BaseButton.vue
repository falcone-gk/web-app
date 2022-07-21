<template>
  <button>{{ props.value }}</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['value'])
</script>

<style lang="scss" scoped>
button {
  background-color: var(--primary-color);
  border-radius: 5px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
  color: #000;
  cursor: pointer;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  padding: 3px 20px;
  transition: all .3s;
  white-space: nowrap;
}

button:hover {
  background-color: var(--primary-dark-color);
  box-shadow: rgba(39, 174, 96, .2) 0 6px 12px;
  opacity: 1;
}

</style>