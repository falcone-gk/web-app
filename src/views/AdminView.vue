<template>
  <section class="admin-projects">
    <h1>Project form</h1>
    <form class="admin-projects">
      <InputForm
      label="Title"
      name="title"
      placeholder="title" />
      <TextareaField
      label="Description"
      name="description" />
      <MultipleSelect
      label="Tags"
      name="tags"
      :options="options" />
      <InputForm
      label="Source code"
      name="source-code"
      type="url"
      placeholder="Source code" />
      <InputForm
      label="Source app"
      name="source-app"
      type="url"
      placeholder="Source app" />
    </form>
  </section>
</template>

<script lang="ts" setup>
import InputForm from '@/components/custom_elements/InputForm.vue';
import TextareaField from '@/components/custom_elements/TextareaField.vue';
import MultipleSelect from '@/components/custom_elements/MultipleSelect.vue';

interface tag {
  id: number,
  tag: string
}

const options: tag[] = [
  {
    id: 1,
    tag: 'Python',
  },
  {
    id: 2,
    tag: 'Vue'
  }
]
</script>

<style lang="scss" src="@/styles/pages/_admin.scss" scoped />