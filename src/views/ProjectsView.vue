<template>
  <div class="projects">
    <section class="projects">
      <h1 class="section-title">Projects</h1>
      <div class="project-list">
        <CardProject v-for="(project, index) in projects" :key="'py-' + index"
        :title="project['title']"
        :description="project['description']"
        :tags="project['tags']" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import http from '@/helpers/http-common'
import { ref } from 'vue';
import CardProject from '@/components/CardProject.vue'

const projects = ref([])

// Get projects list when component is created.
const projectURL = 'api/projects'
http.get(projectURL)
  .then(response => {
    projects.value = response.data.results
  })
</script>

<style lang="scss" scoped>
</style>