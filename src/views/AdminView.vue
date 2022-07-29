<template>
  <div class="admin">
    <section class="admin-projects">
      <h1>Project form</h1>
      <form class="admin-projects">
        <InputForm v-model="projectData.title" label="Title" name="title" placeholder="title" :error="vProjectData.title.$errors[0]" />
        <TextareaField v-model="projectData.description" label="Description" name="description" />
        <MultipleSelect v-model="projectData.tags" label="Tags" name="tags" :options="options" />
        <InputForm v-model="projectData.source_code" label="Source code" name="source-code" type="url" placeholder="Source code" :error="vProjectData.source_code.$errors[0]"/>
        <InputForm v-model="projectData.source_app" label="Source app" name="source-app" type="url" placeholder="Source app" :error="vProjectData.source_app.$errors[0]"/>
        <button @click.prevent="submitProject" class="app-btn" type="submit">Create Project</button>
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
import { AxiosError } from 'axios';
import { marked } from 'marked';
import useVuelidate from '@vuelidate/core';
import { required, url } from '@vuelidate/validators';
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
const rulesProjectData = computed(() => {
  return {
    title: { required },
    description: { required },
    tags: { required },
    source_code: { url },
    source_app: { url }
  }
})
const vProjectData = useVuelidate(rulesProjectData, projectData)
const tab = ref("code")
const markdown = ref("[comment]: <> (Write your post with markdown syntax!)")

const htmlMarkdown = computed(() => {
  return marked(markdown.value)
})

const submitProject = async () => {
  const isFormCorrect = await vProjectData.value.$validate()
  if (!isFormCorrect) return

  try {
    const url = '/api/projects/'
    const response = await http.post(url, projectData)
    console.log(response.data)
  } catch(error) {
    const err = error as AxiosError
    console.log(err.response?.data)
  }
}

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