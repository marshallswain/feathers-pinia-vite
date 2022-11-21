import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const { userStore } = useUserStore()
  const { $api } = useFeathers()

  const auth = useAuth({
    api: $api,
    userStore,
    onSuccess: async (result) => {
      console.log('onSuccess')
      await sleep(500)
    },
    onError: async (error) => {
      console.log('onError', error)
    },
    onInitSuccess: async (result) => {
      console.log('onInitSuccess')
      // await sleep(500)
    },
    onInitError: async (error) => {
      console.log('onInitError', error)
      // await sleep(500)
    },
    onLogoutSuccess: async (result) => {
      console.log('onLogoutSuccess')
      userStore.clearAll()
    },
    onLogoutError: async (error) => {
      console.log(error)
    },
  })

  auth.reAuthenticate()

  return { ...auth }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
