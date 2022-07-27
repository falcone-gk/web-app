<template>
  <label :for="props.name">{{ props.label }}</label>
  <select :name="props.name" :id="props.name" multiple>
    <option v-for="(opt, index) in props.options" :key="'opt-'+ index" :value="opt.id">{{ opt.tag }}</option>
  </select>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['label', 'name', 'options'])
</script>

<style lang="scss" src="@/styles/components/_multi-select.scss" scoped />