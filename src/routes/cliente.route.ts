import type { FastifyInstance } from "fastify";
import { clienteController } from "../controllers/ClienteController.js";
import {
  deleteClienteSchema,
  getClienteByIdSchema,
  getClienteSchema,
  postClienteSchema,
  putClienteSchema,
} from "../schemas/cliente.schema.js";

async function clienteRoutes(fastify: FastifyInstance) {
  fastify.get("/", getClienteSchema, clienteController.get.bind(clienteController));
  fastify.get(
    "/:id",
    getClienteByIdSchema,
    clienteController.getParamId.bind(clienteController),
  );
  fastify.post("/", postClienteSchema, clienteController.post.bind(clienteController));
  fastify.put(
    "/:id",
    putClienteSchema,
    clienteController.putParamId.bind(clienteController),
  );
  fastify.delete(
    "/:id",
    deleteClienteSchema,
    clienteController.deleteParamId.bind(clienteController),
  );
}

export default clienteRoutes;
