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
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />
    </div>
  </section>
  <section class="posts">
    <h1 class="section-title">Posts</h1>
    <div class="latest-post-list">
      <div class="post">
        <div class="post-info">
          <h1 class="post-title">Título de un post</h1>
          <p>Descripción: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quaerat, quam rem dignissimos illo eum necessitatibus distinctio? Rem, qui magnam.</p>
        </div>
        <div class="post-date">
          <p><strong>Date released:</strong> 20/09/2022</p>
        </div>
      </div>
      <div class="post">
        <div class="post-info">
          <h1 class="post-title">Título de un post</h1>
          <p>Descripción: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quaerat, quam rem dignissimos illo eum necessitatibus distinctio? Rem, qui magnam.</p>
        </div>
        <div class="post-date">
          <p><strong>Date released:</strong> 20/09/2022</p>
        </div>
      </div>
      <div class="post">
        <div class="post-info">
          <h1 class="post-title">Título de un post</h1>
          <p>Descripción: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quaerat, quam rem dignissimos illo eum necessitatibus distinctio? Rem, qui magnam.</p>
        </div>
        <div class="post-date">
          <p><strong>Date released:</strong> 20/09/2022</p>
        </div>
      </div>
    </div>
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
import CardProject from '@/components/CardProject.vue'
import InputForm from '@/components/custom_elements/InputForm.vue'
import TextareaField from '@/components/custom_elements/TextareaField.vue'

const technologies: string[] = ["Python", "Django", "Typescript", "VueJs"]

</script>

<style lang="scss">
section {
  margin: 18em 0;
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
  color: var(--para-color);
  opacity: .75;
  width: 70%;
  min-width: 350px;
  max-width: 750px;
  margin-bottom: 1.2vh;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem,1fr));
  grid-gap: 2rem;
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

.latest-post-list {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.post {
  background-color: #121212;
  border-radius: 5px;
  padding: .5em;
  transition: transform .5s ease, border-color .5s ease-out;

  &:hover {
    transform: scale(1.01);
    border: 1px solid var(--primary-color);
  }

  .post-info {
    text-align: left;

    h1 {
      font-size: 16px;
      color: #ffffff;
    }

    p {
      color: var(--para-color);
    }
  }

  .post-date {
    border-top: 1px solid #ffffff;
    margin-top: 1em;
    padding-top: .5em;
    text-align: left;

    p {
      font-size: 12px;
      color: #ffffff;
    }
  }
}
</style>
