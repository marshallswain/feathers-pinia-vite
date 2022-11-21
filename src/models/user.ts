import { BaseModel } from '../store/store.pinia'
import { associateFind, type AssociateFindUtils } from 'feathers-pinia'
import { Task } from './task'

export class User extends BaseModel {
  _id?: string
  name = ''
  email = ''
  password = ''

  tasks?: Task[]
  _tasks?: AssociateFindUtils<Task>

  // Minimum required constructor
  constructor(data: Partial<User> = {}, options: Record<string, any> = {}) {
    super(data, options)
    this.init(data)
  }

  // optional for setting up data objects and/or associations
  static setupInstance(data: Partial<User>) {
    associateFind(data as any, 'tasks', {
      Model: Task,
      makeParams: () => ({ query: { userId: data._id } }),
      handleSetInstance(task: Task) {
        task.userId = this._id
      },
    })
  }
}
