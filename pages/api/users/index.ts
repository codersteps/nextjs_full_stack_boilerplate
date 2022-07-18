import makeHandler from '@/core/make-handler'
import indexHandler from '@/app/users/index.handler'
import createHandler from '@/app/users/create.handler'
import helloWorld from '@/middlewares/hello-world.middleware'

export default makeHandler([
  {
    method: 'GET',
    handler: helloWorld(indexHandler),
  },
  {
    method: 'POST',
    handler: createHandler,
  },
])
