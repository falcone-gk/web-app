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

<style lang="scss" scoped>
.post {
  background-color: #121212;
  border-radius: 5px;
  padding: .5em;
  transition: transform .5s ease, border-color .5s ease-out;

  &:hover {
    transform: scale(1.01);
    border: 1px solid var(--primary-color);
  }
}
.post-info {
  text-align: left;

  h1 {
    font-size: 18px;
    color: #ffffff;
    margin-bottom: .5em;
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

.read-more {
  margin-top: .5em;

  a {
    font-size: 14px;
    text-decoration: none;
    color: var(--primary-color);

    &:hover {
      color: var(--primary-dark-color)
    }

    &::after {
      content: "→";
      margin-left: 1em;
    }
  }
}
</style>