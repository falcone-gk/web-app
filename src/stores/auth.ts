import { defineStore } from 'pinia'
import { useModalStore } from './modal';
import router from '@/router';
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
        // Store token and username in local storage.
        localStorage.setItem('token', tokenData.data.token)
        localStorage.setItem('username', data.username)
        // Redirect to admin page after successful login.
        router.push('/admin')
      } catch(error) {
        // In case user data is not correct we show modal with the error.
        modalStore.$patch({
          title: 'Authentication error',
          message: 'Credentials sent to server are not correct.',
          isActive: true
        })
      }
    },
    checkStoredToken() {
      const token: string | null = localStorage.getItem('token')
      const username: string | null = localStorage.getItem('username')

      if (token !== null && username !== null) {
        // Getting authentication values in auth store.
        this.isAuthenticated = true,
        this.token = token
        this.username = username
      } else {
        localStorage.clear()
      }
    }
  }
})
