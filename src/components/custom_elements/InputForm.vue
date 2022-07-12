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

<style scoped>
.input-wrapper {
  padding: 2em 0;
  position: relative;
}
.form-group {
  display: flex;
  position: relative;
}
/**These styles affects when there is no placeholder (there is text in input) */
.label-control {
  position: absolute;
  left: 0;
  top: -15px;
  z-index: 1;
  font-size: 12px;
  color: rgb(196, 200, 209);
  transition: all .3s;
}
.form-control {
  position: absolute;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(196, 200, 209);
  outline: none;
  z-index: 2;
  color: white;
  background-color: transparent;
  font-size: 14px;
}
.form-control::placeholder {
  color: transparent;
}
.form-control:placeholder-shown~.label-control {
  color: rgb(196, 200, 209);
  top: -2px;
  font-size: 14px;
}
.form-control:focus {
  border-bottom: 1px solid var(--primary-color);
}
.form-control:focus~.label-control {
  top: -15px;
  color: var(--primary-color);
  font-size: 12px;
}
.error-msg {
  position: absolute;
  bottom: -2px;
  color: rgb(245, 125, 125);
  font-size: 11px;
}
</style>
