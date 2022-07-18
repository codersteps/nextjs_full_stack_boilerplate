import type { NextApiHandler } from 'next'
import { User } from '@prisma/client'
import { StatusCodes } from 'http-status-codes'
import db from '@/lib/database'

interface Data {
  data: User | null
  error: string | null
}

const deleteHandler: NextApiHandler<Data> = async (req, res) => {
  const id = typeof req.query.id === 'string' ? parseInt(req.query.id, 10) : 0

  const user = await db.user.delete({ where: { id } })
  res.status(StatusCodes.OK).json({ data: user, error: null })
}

export default deleteHandler
