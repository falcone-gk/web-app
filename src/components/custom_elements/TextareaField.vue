<template>
  <textarea
  @input="handleInput"
  :name="props.name"
  :id="props.name"
  :placeholder="props.label"
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

<style lang="scss" scoped>
textarea {
  width: 100%;
  resize: vertical;
  padding: 10px;
  border-radius: 5px;
  background: transparent;
  color: white;

  &::placeholder {
    color: var(--primary-color);
  }
}
</style>