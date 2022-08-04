<template>
  <div class="post">
    <div class="post-info">
      <h1 class="post-title">{{ props.title }}</h1>
      <p>{{ props.description }}</p>
      <div class="read-more">
        <a @click.prevent="goToPost">Read more</a>
      </div>
    </div>
    <div class="post-date">
      <p><strong>Date released:</strong> {{ props.created }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const props = defineProps(['title', 'description', 'urlToPost', 'created'])
const goToPost = () => {
  router.push(props.urlToPost)
}
</script>

<style lang="scss" src="@/styles/components/_card-post.scss" scoped />
