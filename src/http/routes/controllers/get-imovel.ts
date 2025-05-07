import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../../../lib/prisma'

export async function getImovel(request: FastifyRequest, reply: FastifyReply) {
  const imoveis = await prisma.imovel.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return imoveis
}
