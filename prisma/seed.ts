import bcrypt from 'bcrypt'
import { Prisma, PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function seed() {
  const usersCount = await db.user.count()
  if (usersCount === 0) {
    const users: Prisma.UserCreateManyInput[] = [
      {
        firstName: 'Leanne',
        lastName: 'Graham',
        bio: 'Pop culture fanatic. Freelance music lover. Unapologetic food fanatic. Bacon specialist.',
        username: 'Bret',
        password: bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin', 10),
      },
      {
        firstName: 'Ervin',
        lastName: 'Howell',
        bio: 'Friendly twitter practitioner. Bacon lover. Reader. General social media specialist. Student.',
        username: 'Antonette',
        password: bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin', 10),
      },
      {
        firstName: 'Clementine',
        lastName: 'Bauch',
        bio: 'Food lover. Twitter nerd. Internet evangelist. Alcohol enthusiast. Friendly explorer.',
        username: 'Samantha',
        password: bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'admin', 10),
      },
    ]

    await db.user.createMany({
      data: users,
    })
  }
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
