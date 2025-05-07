import { FastifyInstance } from "fastify"
import { createImovel } from "./controllers/create-imovel"
import { getImovel } from "./controllers/get-imovel"
import { deleteImovel } from "./controllers/delete-imovel"
import { getImovelById } from "./controllers/get-imovel-by-id"

export async function appRoutes(app: FastifyInstance) {
  app.post("/imovel", createImovel)

  app.get("/imovel", getImovel)

  app.delete("/imovel/:id", deleteImovel)

  app.get("/imovel/:id", getImovelById)
}
