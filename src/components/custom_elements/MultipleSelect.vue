<template>
  <label :for="props.name">{{ props.label }}</label>
  <select @input="handleInput" ref="refSelect" :name="props.name" :id="props.name" multiple>
    <option v-for="(opt, index) in props.options" :key="'opt-'+ index" :value="opt.id">{{ opt.name }}</option>
  </select>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps(['modelValue', 'label', 'name', 'options'])
const emits = defineEmits(['update:modelValue'])

const refSelect = ref<HTMLSelectElement | null>(null)

const handleInput = (): void => {
  const selectedValues = [...Array.prototype.slice.call(refSelect.value?.options)]
                        .filter(x => x.selected)
                        .map(x => x.value);
  emits('update:modelValue', selectedValues)
}
</script>

<style lang="scss" src="@/styles/components/_multi-select.scss" scoped />