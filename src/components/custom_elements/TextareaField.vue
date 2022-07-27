<template>
  <label :for="props.name">{{ props.label }}</label>
  <textarea
  @input="handleInput"
  :name="props.name"
  :id="props.name"
  rows="10"></textarea>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['modelValue', 'label', 'name'])
const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event): void => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style lang="scss" src="@/styles/components/_textarea.scss" scoped />