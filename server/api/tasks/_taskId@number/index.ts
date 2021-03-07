import type { Task } from '$/types'

export type Methods = {
  get: {
    resBody: Task
  }
  patch: {
    reqBody: Partial<Pick<Task, 'label' | 'done'>>
    status: 204
  }
  delete: {
    status: 204
  }
}
