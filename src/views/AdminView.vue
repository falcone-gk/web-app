<template>
  <div class="admin">
    <section class="admin-projects">
      <h1>Project form</h1>
      <form class="admin-projects">
        <InputForm v-model="projectData.title" label="Title" name="title" placeholder="title" :error="vProjectData.title.$errors[0]" />
        <TextareaField v-model="projectData.description" label="Description" name="description" :error="vProjectData.description.$errors[0]" />
        <MultipleSelect v-model="projectData.tags" label="Tags" name="tags" :options="options" :error="vProjectData.tags.$errors[0]" />
        <InputForm v-model="projectData.source_code" label="Source code" name="source-code" type="url" placeholder="Source code" :error="vProjectData.source_code.$errors[0]"/>
        <InputForm v-model="projectData.source_app" label="Source app" name="source-app" type="url" placeholder="Source app" :error="vProjectData.source_app.$errors[0]"/>
        <button @click.prevent="submitProject" class="app-btn" type="submit">Create Project</button>
      </form>
    </section>
    <section class="admin-posts">
      <h1>Post form</h1>
      <form>
        <InputForm v-model="postData.title" :error="vPostData.title.$errors[0]" label="Title" name="title" placeholder="title" />
        <TextareaField v-model="postData.description" :error="vPostData.description.$errors[0]" label="Description" name="description" />
        <div class="editor">
          <div class="tabs">
            <input v-model="tab" value="code" type="radio" name="tabs" id="code" checked />
            <label for="code">Raw Code</label>
            <input v-model="tab" value="preview" type="radio" name="tabs" id="preview" />
            <label for="preview">Preview</label>
          </div>
          <textarea v-if="tab === 'code'" v-model="postData.body" name="post-markdown" id="post-input" rows="50" />
          <span v-if="vPostData.body.$errors[0]" class="error-msg">{{ vPostData.body.$errors[0].$message }}</span>
          <div v-highlightjs v-if="tab === 'preview'" v-html="htmlToMarkdown" class="preview-post"></div>
        </div>
        <button @click.prevent="submitPost" class="app-btn" type="submit">Create Post</button>
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
import { useModalStore } from '@/stores/modal';
import useVuelidate from '@vuelidate/core';
import { required, url } from '@vuelidate/validators';
import http from '@/helpers/http-admin'

interface tag {
  id: number,
  name: string
}

// Modal store imported to show successful message
const modalStore = useModalStore()
// Store all tags optiones that are elegible
const options = ref<tag | null>(null)
// Reactive data to store project form values.
const projectData = reactive({
  title: '',
  description: '',
  tags: [],
  source_code: '',
  source_app: '',
})
// Computed rules to store validation form.
const rulesProjectData = computed(() => {
  return {
    title: { required },
    description: { required },
    tags: { required },
    source_code: { url },
    source_app: { url }
  }
})
// Creates form validation for project form
const vProjectData = useVuelidate(rulesProjectData, projectData)

// Logic to submit a new project.
const submitProject = async () => {
  const isFormCorrect = await vProjectData.value.$validate()
  if (!isFormCorrect) return

  try {
    const url = '/api/projects/'
    await http.post(url, projectData)
    modalStore.$patch({
      title: 'Successful request',
      message: 'New project was created successfuly!',
      isActive: true
    })
  } catch(error) {
    const err = error as AxiosError
    return err
  }
}

// Tab ref to know which tab is currently active.
const tab = ref("code")
// Reactive data to store post form values.
const postData = reactive({
  title: '',
  description: '',
  body: '[comment]: <> (Write your post with markdown syntax!)'
})
// Rules to validate post form before submit
const rulesPostData = computed(() => {
  return {
    title: { required },
    description: { required },
    body: { required }
  }
})
// Computed property to transform markdown to html
const htmlToMarkdown = computed(() => {
  return marked(postData.body)
})
// Create form validation
const vPostData = useVuelidate(rulesPostData, postData)
// Post submit logic
const submitPost = async () => {
  const isFormCorrect = await vPostData.value.$validate()
  if (!isFormCorrect) return

  try {
    const url = '/api/posts/'
    await http.post(url, postData)
    modalStore.$patch({
      title: 'Successful request',
      message: 'New post was created successfuly!',
      isActive: true
    })
  } catch(error) {
    const err = error as AxiosError
    return err
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
