import { api } from '../feathers'

export const useFeathers = () => {
  return { $api: api }
}
