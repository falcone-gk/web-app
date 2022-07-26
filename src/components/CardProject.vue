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

<style lang="scss" src="@/styles/components/_card-project.scss" scoped />