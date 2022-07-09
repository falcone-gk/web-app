<template>
  <section>
    <div class="job-title">
      <h1>
        Your
        <vue-writer
        :array="technologies"
        :typeSpeed="70"
        :eraseSpeed="20" />
        developer.
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
const technologies: string[] = ["Python", "Django", "Typescript", "VueJs", "Typescript"]

</script>

<style lang="scss">
.job-title {
  margin: 6em var(--side-padding);
  text-align: left;

  h1 {
    color: #ffffff;
    font-size: max(5vw, 25px);
  }
}
@keyframes fadeIn {
  0% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
}
.is-typed {
  display: inline;

  span.typed {
    display: inline-block;
    color: var(--main-color);
    vertical-align: bottom;
    margin-right: 10px;
  }

  span.cursor {
    display: inline-block;
    background-color: var(--main-color);
    width: 10px;
    animation: fadeIn 1s infinite alternate;
  }
}
</style>
