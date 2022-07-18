import type { NextApiMiddleware } from '@/types/next'

const helloWorld: NextApiMiddleware = (handler) => {
  return async (req, res) => {
    if (
      typeof req.cookies.sayHello === 'string' &&
      req.cookies.sayHello === 'true'
    ) {
      console.log('Hello, World!')
    }

    await handler(req, res)
  }
}

export default helloWorld
