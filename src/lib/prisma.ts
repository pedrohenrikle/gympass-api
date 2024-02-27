import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

// Em desenvolvimento, mostrar os logs

export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})
