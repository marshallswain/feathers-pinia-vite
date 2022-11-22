import type { Id } from '@feathersjs/feathers'
import { BaseModel } from '../store/store.pinia'
import { associateGet, type BaseModelAssociations } from 'feathers-pinia'
import { User } from './user'

export class Task extends BaseModel {
  _id?: string
  description = ''
  isCompleted = false
  userId = ''

  static associations: BaseModelAssociations = {}
  user?: typeof User

  // Minimum required constructor
  constructor(data: Partial<Task> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }

  // optional for setting up data objects and/or associations
  static setupInstance(data: Partial<Task>) {
    associateGet(data as any, 'user', {
      Model: User,
      getId: () => data.userId as Id,
    })
  }
}
