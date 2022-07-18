import type { NextApiHandler } from 'next'
import { Prisma, User } from '@prisma/client'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import db from '@/lib/database'

interface Data {
  data: User | null
  error: string | null
}

const updateHandler: NextApiHandler<Data> = async (req, res) => {
  const id = typeof req.query.id === 'string' ? parseInt(req.query.id, 10) : 0

  const { firstName, lastName, bio } =
    req.body as Prisma.UserUncheckedUpdateInput

  const data: Prisma.UserUncheckedUpdateInput = {}

  if (typeof firstName === 'string') {
    data.firstName = firstName
  }
  if (typeof lastName === 'string') {
    data.lastName = lastName
  }
  if (typeof bio === 'string') {
    data.bio = bio
  }

  const user = await db.user.update({ data, where: { id } })
  res.status(StatusCodes.OK).json({ data: user, error: null })
}

export default updateHandler
