import { createPinia } from 'pinia'

export const pinia = createPinia()

// Setup Pinia
// https://pinia.vuejs.org/
export const install = ({ isClient, initialState, app }: any) => {
  app.use(pinia)
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient)
    pinia.state.value = (initialState.pinia) || {}

  else
    initialState.pinia = pinia.state.value
}
