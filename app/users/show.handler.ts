import type { NextApiHandler } from 'next'
import { User } from '@prisma/client'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import db from '@/lib/database'

interface Data {
  data: User | null
  error: string | null
}

const showHandler: NextApiHandler<Data> = async (req, res) => {
  const id = typeof req.query.id === 'string' ? parseInt(req.query.id, 10) : 0

  const user = await db.user.findFirst({ where: { id } })

  if (!user) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ data: null, error: ReasonPhrases.NOT_FOUND })
  }

  res.status(StatusCodes.OK).json({ data: user, error: null })
}

export default showHandler
