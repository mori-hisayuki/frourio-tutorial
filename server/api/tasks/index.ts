import type { Task } from '$/types'

export type Methods = {
  get: {
    query?: {
      limit: number
    }
    resBody: Task[]
  }
  post: {
    reqBody: Pick<Task, 'label'>
    status: 201
    resBody: Task
  }
}
