<template>
  <div class="post">
    <div class="post-info">
      <h1 class="post-title">{{ props.title }}</h1>
      <p>{{ props.description }}</p>
      <div class="read-more">
        <a href="#">Read more</a>
      </div>
    </div>
    <div class="post-date">
      <p><strong>Date released:</strong> {{ props.created }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['title', 'description', 'created'])
</script>

<style lang="scss" src="@/styles/components/_card-post.scss" scoped />