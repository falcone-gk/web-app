import axios, { AxiosInstance } from "axios"
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const token: string | null = authStore.token

const http: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    "Content-type": "application/json",
    Authorization: `Token ${token}`
  }
})

export default http
