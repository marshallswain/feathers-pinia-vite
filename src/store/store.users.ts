import { defineStore, pinia } from './store.pinia'
import { User } from '../models/user'

export const useUserStore = () => {
  const { $api } = useFeathers()
  const servicePath = 'users'
  const useStore = defineStore({
    servicePath,
    Model: User,
    state() {
      return {}
    },
    getters: {},
    actions: {},
  })
  const store = useStore(pinia)

  $api.service(servicePath).hooks({})

  return {
    userStore: store,
    User: User as typeof store.Model,
  }
}
