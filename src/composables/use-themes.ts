import { reactive, computed } from 'vue'
import { useColorMode as ucm } from '@vueuse/core'

export const useColorMode = () => {
  const state = reactive({
    preference: ucm({
      attribute: 'data-theme',
    }),
  })
  return state
}

export const useThemes = () => [
  'system',
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
]
