<template>
  <div class="see-more">
    <a @click.prevent="linkTo">See More</a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Router, useRouter } from 'vue-router';

const props = defineProps(["link"])
const router: Router = useRouter()

const linkTo = () => router.push({ path: props.link })
</script>

<style lang="scss" src="@/styles/components/_see-more.scss" scoped />