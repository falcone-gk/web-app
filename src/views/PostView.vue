<template>
  <div class="post-view">
    <div v-highlightjs v-html="htmlPost" class="preview-post"></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import http from '@/helpers/http-common'
import { marked } from 'marked';
import { ref } from 'vue';

const route = useRoute()
const htmlPost = ref<string>('')

const getPostById = async () => {
  const id: string | string[] = route.params.id
  const url = `/api/posts/${id}`
  try {
    const response = await http.get(url)
    htmlPost.value = marked(response.data.body)
  } catch(error) {
  return error
  }
}
getPostById()
</script>

