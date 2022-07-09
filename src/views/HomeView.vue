<template>
  <section>
    <div class="job-title">
      <h1>
        Your
        <transition
        name="typing"
        mode="out-in"
        appear>
          <strong :key="currentTech" class="highlight tech">{{ currentTech }}</strong>
        </transition>
        <strong class="highlight cursor">|</strong>
        developer.
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const technologies: string[] = ["Python", "Django", "Typescript", "VueJs", "Typescript"]
const index = ref(0)
const currentTech = computed(() => technologies[index.value])

const changeTech = () => {
  const newIndex: number = (index.value + 1) % technologies.length
  index.value = newIndex
}

setInterval(changeTech, 4000)

</script>

<style lang="scss" scoped>
.job-title {
  margin: 6em var(--side-padding);
  text-align: left;

  h1 {
    color: #ffffff;
    font-size: max(5vw, 25px);
  }
}

.highlight {
  color: var(--main-color);
}
@keyframes typing-erase {
  from { width: 0 }
  to { width: 100% }
}

@keyframes fadeIn {
  0% { opacity: 0 }
  50% { opacity: 1 }
  100% { opacity: 0 }
}
.tech {
  display: inline-block;
  width: 0;
  max-width: max-content;
  overflow: hidden;
  vertical-align: bottom;
}
.cursor {
  animation: fadeIn 1s infinite alternate;
}

.typing-enter-active {
  animation: 2s typing-erase,
}
.typing-leave-active {
  animation: 2s typing-erase reverse,
}
</style>
