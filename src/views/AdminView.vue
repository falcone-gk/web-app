<template>
  <div class="admin">
    <section class="admin-projects">
      <h1>Project form</h1>
      <form class="admin-projects">
        <InputForm v-model="projectData.title" label="Title" name="title" placeholder="title" />
        <TextareaField v-model="projectData.description" label="Description" name="description" />
        <MultipleSelect v-model="projectData.tags" label="Tags" name="tags" :options="options" />
        <InputForm v-model="projectData.source_code" label="Source code" name="source-code" type="url" placeholder="Source code" />
        <InputForm v-model="projectData.source_app" label="Source app" name="source-app" type="url" placeholder="Source app" />
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
          <textarea v-if="tab === 'code'" v-model="markdown" name="post-markdown" id="post-input" rows="50" />
          <div v-if="tab === 'preview'" v-html="htmlMarkdown" class="preview-post"></div>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts" setup>
import InputForm from '@/components/custom_elements/InputForm.vue';
import TextareaField from '@/components/custom_elements/TextareaField.vue';
import MultipleSelect from '@/components/custom_elements/MultipleSelect.vue';
import { ref, reactive } from 'vue';
import { computed } from '@vue/reactivity';
import { marked } from 'marked';
import http from '@/helpers/http-admin'

interface tag {
  id: number,
  name: string
}

const options = ref<tag | null>(null)
const projectData = reactive({
  title: '',
  description: '',
  tags: [],
  source_code: '',
  source_app: '',
})
const tab = ref("code")
const markdown = ref("[comment]: <> (Write your post with markdown syntax!)")

const htmlMarkdown = computed(() => {
  return marked(markdown.value)
})

// Get tags list.
const getTags = async () => {
  try {
    const url = '/api/list-tags'
    const response = await http.get(url)
    options.value = response.data
  } catch(error) {
    return error
  }
}

getTags()
</script>


<style lang="scss" src="@/styles/pages/_admin.scss" scoped />