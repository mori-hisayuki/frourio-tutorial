import { defineController, defineHooks } from './$relay'
import { getTasks, createTask } from '$/service/tasks'

export const hooks = defineHooks(() => ({
  onRequest: (req, reply, done) => {
    console.log('Controller-level onRequest single hook:', req.url)
    done()
  },
  preParsing: [
    (req, reply, payload, done) => {
      console.log('Controller-level preParsing first hook:', req.url)
      done()
    },
    (req, reply, payload, done) => {
      console.log('Controller-level preParsing second hook:', req.url)
      done()
    }
  ]
}))

export default defineController(() => ({
  get: async ({ query }) => (
    { status: 200, body: (await getTasks()).slice(0, query?.limit) }
  ),
  post: async ({body}) => {
    const task = await createTask(body.label)
    return { status: 201, body: task}
  }
}))
