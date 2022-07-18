import { Prisma } from '@prisma/client'
import type { NextApiHandler } from 'next'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

type Data = {
  error: string
}

const makeHandler: (
  handlerOptions: {
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
    handler: NextApiHandler
  }[],
) => NextApiHandler<Data> = (handlerOptions) => {
  return async (req, res) => {
    const handlerOption = handlerOptions.find(
      (handlerOption) => handlerOption.method === req.method,
    )

    if (!handlerOption) {
      res.setHeader(
        'Allow',
        handlerOptions.map((handlerOption) => handlerOption.method),
      )
      res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .json({ error: ReasonPhrases.METHOD_NOT_ALLOWED })
      return
    }

    try {
      await handlerOption.handler(req, res)
    } catch (e) {
      console.error(e)

      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          res.status(StatusCodes.BAD_REQUEST).json({
            error: ReasonPhrases.BAD_REQUEST,
          })
          return
        }

        if (e.code === 'P2025') {
          res.status(StatusCodes.NOT_FOUND).json({
            error: ReasonPhrases.NOT_FOUND,
          })
          return
        }
      }

      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: ReasonPhrases.INTERNAL_SERVER_ERROR,
      })
    }
  }
}

export default makeHandler
