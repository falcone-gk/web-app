import { defineStore } from 'pinia'
import { useModalStore } from './modal';
import http from '@/helpers/http-common';

interface user {
  isAuthenticated: boolean,
  token: string | null
  username: string | null
}

export const useAuthStore = defineStore('auth', {
  state: (): user => {
    return {
      isAuthenticated: false,
      token: null,
      username: null,
    }
  },
  actions: {
    async login(data: {username: string, password: string}) {
      const modalStore = useModalStore()

      const url = '/token-auth/'
      try {
        // Making a post request to verify if user is an admin.
        const tokenData = await http.post(url, data)
        // Updating auth store data when user have correct credentials
        this.isAuthenticated = true
        this.token = tokenData.data.token
        this.username = data.username
      } catch(error) {
        // In case user data is not correct we show modal with the error.
        modalStore.$patch({
          title: 'Authentication error',
          message: 'Credentials sent to server are not correct.',
          isActive: true
        })
      }
    }
  }
})