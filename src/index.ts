import { PrismaClient as _prisma } from '@prisma/client';

const prisma = new _prisma()

//some hydration with prisma

export {prisma as PrismaClient}
