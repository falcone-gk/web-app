import axios, { AxiosInstance } from "axios"

const token: string | null = localStorage.getItem('token')

const http: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    "Content-type": "application/json",
    Authorization: `Token ${token}`
  }
})

export default http