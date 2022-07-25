<template>
  <div class="card-container">
    <div class="card-description">
      <h1>{{ props.title }}</h1>
      <p>{{ props.description }}</p>
    </div>
    <div class="card-chips">
      <span v-for="(tag, index) in tags" :key="index" class="chip">
        {{ tag.name }}
      </span>
    </div>
    <div class="card-buttons">
      <a>View Code</a>
      <a>See More</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['title', 'description', 'tags'])
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  position: relative;
  background-color: #121212;
  border-radius: 20px;
  width: 100%;
  max-width: 30rem;
  margin: auto;
  padding: 1em;
  transition: transform .5s ease, border-color .5s ease-out;

  &:hover {
    transform: translateY(-10px);
    border: 1px solid var(--primary-color);
  }
}
.card-description {
  text-align: left;

  h1 {
    color: #ffffff;
    margin-bottom: .5em;
  }
}
.card-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.card-buttons {
  display: flex;
  justify-content: right;
  gap: 10px;

  a {
    cursor: pointer;
    font-size: 12px;
    background-color: var(--primary-color);
    padding: .4rem .8rem;
    border-radius: 2rem;
    transition: background-color 0.5s ease;
    outline: none;

    &:hover {
      background-color: var(--primary-dark-color);
    }
  }
}
.chip {
  font-size: 11px;
  padding: 3px 8px;
  background-color: #ffffff;
  border-radius: 5px;
}
</style>