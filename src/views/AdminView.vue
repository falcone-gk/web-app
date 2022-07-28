<template>
  <div class="admin">
    <section class="admin-projects">
      <h1>Project form</h1>
      <form class="admin-projects">
        <InputForm label="Title" name="title" placeholder="title" />
        <TextareaField label="Description" name="description" />
        <MultipleSelect label="Tags" name="tags" :options="options" />
        <InputForm label="Source code" name="source-code" type="url" placeholder="Source code" />
        <InputForm label="Source app" name="source-app" type="url" placeholder="Source app" />
      </form>
    </section>
    <section class="admin-posts">
      <h1>Post form</h1>
      <form>
        <InputForm label="Title" name="title" placeholder="title" />
        <TextareaField label="Description" name="description" />
        <div class="editor">
          <div class="tabs">
            <input v-model="tab" value="code" type="radio" name="tabs" id="code" checked />
            <label for="code">Raw Code</label>
            <input v-model="tab" value="preview" type="radio" name="tabs" id="preview" />
            <label for="preview">Preview</label>
          </div>
          <textarea v-if="tab === 'code'" name="post-markdown" id="post-input" rows="50"></textarea>
          <div v-if="tab === 'preview'" class="preview-post"></div>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts" setup>
import InputForm from '@/components/custom_elements/InputForm.vue';
import TextareaField from '@/components/custom_elements/TextareaField.vue';
import MultipleSelect from '@/components/custom_elements/MultipleSelect.vue';
import { ref } from 'vue';

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

const tab = ref("code")
</script>


<style lang="scss" src="@/styles/pages/_admin.scss" scoped />