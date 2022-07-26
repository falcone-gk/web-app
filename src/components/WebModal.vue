<template>
  <transition name="modal">
    <div v-show="store.isActive" class="modal">
      <div class="modal-header">
        <h1>{{ store.title }}</h1>
      </div>
      <div class="modal-body">
        <p>{{ store.message }}</p>
      </div>
      <div class="modal-btn">
       <button @click.prevent="onClose" class="app-btn">Close</button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal'

const store = useModalStore()
const onClose = () => store.$reset()
</script>
