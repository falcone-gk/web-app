<template>
  <transition name="modal">
    <div id="modal" v-show="store.isActive" class="modal">
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

// Function to close modal when a click happens outside modal.
window.onclick = (event: Event) => {
  const target = event.target as HTMLElement
  if (target.id !== "modal") {
    store.$reset()
  }
}
</script>
