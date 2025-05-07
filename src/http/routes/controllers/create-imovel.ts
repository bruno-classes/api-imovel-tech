import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../../../lib/prisma'

interface SchemaBodyRequest {
  title: string
  description: string
  price: number
}

export async function createImovel(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { title, description, price } = request.body as SchemaBodyRequest

  await prisma.imovel.create({
    data: {
      title,
      description,
      price,
    },
  })

  return reply.status(201).send({
    message: 'Imóvel criado com sucesso',
  })
}
