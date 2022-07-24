import { defineStore } from 'pinia'

interface user {
  isAuthenticated: boolean,
  token: string
  username: string
}

export const useAuthStore = defineStore('auth', {
  state: (): user => {
    return {
      isAuthenticated: false,
      token: '',
      username: '',
    }
  }
})