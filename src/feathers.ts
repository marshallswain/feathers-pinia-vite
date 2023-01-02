import { createClient } from 'feathers-pinia-api'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'
import { useStorage } from '@vueuse/core'

const socket = io('http://localhost:3030', { transports: ['websocket'] })

// Store JWT in SSG-compatible storage
const storageKey = 'feathers-jwt'
const jwt = useStorage(storageKey, '')
const storage = {
  getItem: () => jwt.value,
  setItem: (val: string) => jwt.value = val,
  removeItem: () => jwt.value = null,
}

export const api = createClient(socketio(socket), { storage })
