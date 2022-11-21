import { defineStore, pinia } from './store.pinia'
import { Task } from '../models/task'

export const useTaskStore = () => {
  const { $api } = useFeathers()
  const servicePath = 'tasks'
  const useStore = defineStore({
    servicePath,
    Model: Task,
    state() {
      return {}
    },
    getters: {},
    actions: {},
  })
  const store = useStore(pinia)

  $api.service(servicePath).hooks({})

  return {
    taskStore: store,
    Task: Task as typeof store.Model,
  }
}
