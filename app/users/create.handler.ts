import type { NextApiHandler } from 'next'
import bcrypt from 'bcrypt'
import { Prisma, User } from '@prisma/client'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import db from '@/lib/database'

interface Data {
  error: string | null
  data: User | null
}

const createHandler: NextApiHandler<Data> = async (req, res) => {
  const { firstName, lastName, bio, username, password } =
    req.body as Prisma.UserUncheckedCreateInput

  if (
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    password.length < 6
  ) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ data: null, error: ReasonPhrases.BAD_REQUEST })
    return
  }

  const hashedPassword = bcrypt.hashSync(password, 10)
  const data: Prisma.UserUncheckedCreateInput = {
    username,
    password: hashedPassword,
  }

  if (typeof firstName === 'string') {
    data.firstName = firstName
  }
  if (typeof lastName === 'string') {
    data.lastName = lastName
  }
  if (typeof bio === 'string') {
    data.bio = bio
  }

  const createdUser = await db.user.create({ data })
  res.status(StatusCodes.OK).json({ data: createdUser, error: null })
}

export default createHandler
