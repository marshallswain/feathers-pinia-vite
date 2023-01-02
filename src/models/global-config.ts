import { pinia } from '~/modules/pinia'

/**
 * Returns a global configuration object for Feathers-Pinia
 */
export const useFeathersPiniaConfig = () => {
  return {
    $pinia: pinia,
    idField: '_id',
    whitelist: ['$regex'],
  }
}
