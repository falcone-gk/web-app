<template>
  <div class="posts">
    <section class="posts">
      <h1 class="section-title">Blog</h1>
      <div class="latest-post-list">
        <CardPost v-for="(post, index) in posts" :key="'post-' + index"
        :title="post['title']"
        :description="post['description']"
        :created="post['created']" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import http from '@/helpers/http-common'
import { ref } from 'vue';
import CardPost from '@/components/CardPost.vue'

const posts = ref([])

// Get posts list when component is created.
const poststURL = 'api/posts-summary'
http.get(poststURL)
  .then(response => {
    posts.value = response.data.results
  })
</script>

<style lang="scss" scoped>
@import "@/styles/sections/blog"
</style>