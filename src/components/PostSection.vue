<template>
  <div v-html="props.html" class="preview-post"></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(['html'])
</script>

