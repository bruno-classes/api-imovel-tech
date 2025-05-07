import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../../../lib/prisma'

interface SchemaParamsRequest {
  id: string
}

export async function deleteImovel(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as SchemaParamsRequest

  await prisma.imovel.delete({
    where: { id },
  })

  return reply.status(204).send({
    message: 'Imóvel deletado com sucesso',
  })
}
