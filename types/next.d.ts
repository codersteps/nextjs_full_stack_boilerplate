import type { NextApiHandler } from 'next'

export declare type NextApiMiddleware = (
  handler: NextApiHandler,
) => NextApiHandler
