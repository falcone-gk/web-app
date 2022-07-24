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
       <BaseButton @click.prevent="onClose" value="Close" /> 
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/modal'
import BaseButton from './custom_elements/BaseButton.vue';

const store = useStore()
const onClose = () => store.$reset()
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  text-align: left;
  max-width: 500px;
  min-width: 350px;
  background-color: #121212;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translate(-50%, 100px);
  padding: .5em 1em;
  border-radius: 5px;
  border: 1px solid var(--primary-color);
  z-index: -999;
}
.modal-header {
  h1 {
    color: #fff;
    font-size: 16px;
    border-bottom: 1px solid var(--primary-color);
    padding-bottom: .5em;
  } 
}
.modal-body {
  padding: 1em 0;
  p {
    color: #fff;
    font-size: 13px;
  }
}
.modal-btn {
  text-align: right;
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>