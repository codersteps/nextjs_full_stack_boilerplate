import type { NextApiHandler } from 'next'
import { User } from '@prisma/client'
import { StatusCodes } from 'http-status-codes'
import db from '@/lib/database'

interface Data {
  data: User[]
}

const indexHandler: NextApiHandler<Data> = async (req, res) => {
  const users = await db.user.findMany()
  res.status(StatusCodes.OK).json({ data: users })
}

export default indexHandler
