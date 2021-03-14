import { defineHooks } from './$relay'

export default defineHooks(() => ({
  onRequest: [
    (req, reply, done) => {
    console.log('Directory level onRequest hook:', req.url)
    done()
    },
    (req, reply, done) => {
      console.log('Directory-level onRequest second hook', req.url)
      done()
    }
  ],
  preParsing: (req, reply, payload, done) => {
    console.log('Directory-level preParsing single hook:', req.url)
    done()
  }
}))
