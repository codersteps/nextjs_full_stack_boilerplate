import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined

  namespace NodeJS {
    interface ProcessEnv {
      ADMIN_PASSWORD: string | undefined
      DATABASE_URL: string | undefined
    }
  }
}
