import { defineStore } from 'pinia'

interface modalData {
  title: string,
  message: string,
  isActive: boolean
}

export const useStore = defineStore('modal', {
  state: (): modalData => {
    return {
      title: '',
      message: '',
      isActive: false
    }
  }
})