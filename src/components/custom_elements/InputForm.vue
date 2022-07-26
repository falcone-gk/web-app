<template>
  <div class="input-wrapper">
    <div class="form-group">
      <input
      :value="props.modelValue"
      :name="props.name"
      @input="handleInput"
      class="form-control"
      :type="props.type"
      :placeholder="props.label">
      <label class="label-control">{{ label }}</label>
    </div>
    <span v-if="error" class="error-msg">{{ error.$message }}</span>
  </div>
</template>

<script setup lang="ts">

import { defineProps, defineEmits } from 'vue'

const props = defineProps(['modelValue', 'label', 'name', 'type', 'error'])
const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event): void => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

</script>

<style lang="scss" src="@/styles/components/_input.scss" scoped />
