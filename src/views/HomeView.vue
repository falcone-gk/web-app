<template>
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
      <CardProject v-for="(project, index) in projects" :key="'py-' + index"
      :title="project['title']"
      :description="project['description']"
      :tags="project['tags']" />
    </div>
    <SeeMore link="/projects"/>
  </section>
  <section class="posts">
    <h1 class="section-title">Blog</h1>
    <div class="latest-post-list">
      <CardPost v-for="(post, index) in posts" :key="'post-' + index"
      :title="post['title']"
      :description="post['description']"
      :created="post['created']" />
    </div>
    <SeeMore link="/blog"/>
  </section>
  <section id="contact" class="contact-me">
    <h1 class="section-title">Contact me</h1>
    <form>
      <InputForm
      type="email"
      name="email"
      label="Email"/>
      <InputForm
      type="text"
      name="subject"
      label="Subject"/>
      <TextareaField
      name="message"
      label="Message"/>
    </form>
  </section>
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

<style lang="scss">
section {
  margin: 20em 0;
}

.job-title {
  text-align: left;

  h1 {
    color: #ffffff;
    font-size: min(7vw, 60px);
    white-space: nowrap;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0
  }

  50% {
    opacity: 1
  }

  100% {
    opacity: 0
  }
}

.is-typed {
  display: inline;

  span.typed {
    display: inline-block;
    color: var(--primary-color);
    vertical-align: bottom;
    margin-right: 5px;
  }

  span.cursor {
    display: inline-block;
    background-color: var(--primary-color);
    width: min(1vw, 10px);
    animation: fadeIn 1s infinite alternate;
  }
}

.description {
  font-size: min(3.5vw, 20px);
  opacity: .75;
  width: 70%;
  min-width: 350px;
  max-width: 750px;
  margin-bottom: 1.2vh;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  grid-gap: 2rem;
}

.latest-post-list {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

@keyframes slide {
  0% {
    -webkit-transform: translateX(5px);
  }
  50% {
    -webkit-transform: translateX(10px);
  }
  100% {
    -webkit-transform: translateX(5px);
  }
}

.contact-url {
  position: relative;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 700;

  &::after {
    content: ">";
    position: absolute;
    animation: slide 1.5s infinite;
  }
}

.section-title {
  color: #ffffff;
  margin-bottom: 2em;
}

</style>
