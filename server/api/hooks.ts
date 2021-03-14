import { defineHooks } from './$relay'

export default defineHooks(() => ({
  onRequest: (req, reply, done) => {
    console.log('Directory level onRequest hook:', req.url)
    done()
  }
}))
