import fastify from "fastify"
import { appRoutes } from "./routes/app-routes"

import { fastifyCors } from "@fastify/cors"

export const app = fastify()

app.register(fastifyCors, {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
})

app.register(appRoutes)
