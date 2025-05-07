import { FastifyReply, FastifyRequest } from "fastify"
import { prisma } from "../../../lib/prisma"

interface SchemaParamsRequest {
  id: string
}

export async function getImovelById(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as SchemaParamsRequest

  const imovel = await prisma.imovel.findUnique({
    where: { id },
  })

  return imovel
}
