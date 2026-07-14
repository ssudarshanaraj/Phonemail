import { api } from './apiClient.js'

export const registerUser = (payload) => api.post('/user', payload)
