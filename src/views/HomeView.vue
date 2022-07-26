<template>
  <div class="home-container">
    <section class="about-me">
      <div class="job-title">
        <h1>
          Your
          <vue-writer :array="technologies" :typeSpeed="70" :eraseSpeed="20" />
          developer.
        </h1>
        <p class="description">
          I'm Enzo Falcón, I have 2 years of programming experience and I specialise in backend development.
        </p>
        <a class="contact-url" href="#contact">Get in touch</a>
      </div>
    </section>
    <section class="projects">
      <h1 class="section-title">Projects</h1>
      <div class="project-list">
        <CardProject v-for="(project, index) in projects" :key="'py-' + index" :title="project['title']"
          :description="project['description']" :tags="project['tags']" />
      </div>
      <SeeMore link="/projects" />
    </section>
    <section class="posts">
      <h1 class="section-title">Blog</h1>
      <div class="latest-post-list">
        <CardPost v-for="(post, index) in posts" :key="'post-' + index" :title="post['title']"
          :description="post['description']" :created="post['created']" />
      </div>
      <SeeMore link="/blog" />
    </section>
    <section id="contact" class="contact-me">
      <h1 class="section-title">Contact me</h1>
      <form>
        <InputForm type="email" name="email" label="Email" />
        <InputForm type="text" name="subject" label="Subject" />
        <TextareaField name="message" label="Message" />
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import http from '@/helpers/http-common'

import CardProject from '@/components/CardProject.vue'
import CardPost from '@/components/CardPost.vue'
import SeeMore from '@/components/custom_elements/SeeMore.vue'
import InputForm from '@/components/custom_elements/InputForm.vue'
import TextareaField from '@/components/custom_elements/TextareaField.vue'

// Component data
const projects = ref([])
const posts = ref([])

const technologies: string[] = ["Python", "Django", "HTML", "CSS", "Javascript", "Typescript", "VueJs"]

http.get('api/home')
  .then(response => {
    projects.value = response.data.summary_project
    posts.value = response.data.summary_post
  })

</script>

<style lang="scss" scoped>
@import "@/styles/pages/home";
@import "@/styles/sections/about-me";
@import "@/styles/sections/projects";
@import "@/styles/sections/blog";
</style>
