import type { FastifyInstance } from "fastify";
import { entregaController } from "../controllers/EntregaController.js";
import {
  deleteEntregaSchema,
  getEntregaByIdSchema,
  getEntregaSchema,
  postEntregaSchema,
  putEntregaSchema,
} from "../schemas/entrega.schema.js";

async function entregaRoutes(fastify: FastifyInstance) {
  fastify.get("/", getEntregaSchema, entregaController.get.bind(entregaController));
  fastify.get(
    "/:id",
    getEntregaByIdSchema,
    entregaController.getParamId.bind(entregaController),
  );
  fastify.post("/", postEntregaSchema, entregaController.post.bind(entregaController));
  fastify.put(
    "/:id",
    putEntregaSchema,
    entregaController.putParamId.bind(entregaController),
  );
  fastify.delete(
    "/:id",
    deleteEntregaSchema,
    entregaController.deleteParamId.bind(entregaController),
  );
}

export default entregaRoutes;
