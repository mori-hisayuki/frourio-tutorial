import { defineController } from './$relay'
import { changeIcon } from '$/service/user'

export default defineController(() => ({
  post: async ({ params, body}) => {
    await changeIcon(params.userId, body.icon)
    return { status: 204}
  }
}))
