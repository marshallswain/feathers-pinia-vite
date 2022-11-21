import { feathers } from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'

import { createClient } from 'feathers-pinia-nuxt3-api'

const socket = io('http://localhost:3030', { transports: ['websocket'] })

export const api = createClient(socketio(socket), { storage: window.localStorage })
