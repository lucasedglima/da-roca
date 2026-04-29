import type { FastifyInstance } from "fastify";
import { produtorController } from "../controllers/ProdutorController.js";
import {
  deleteProdutorSchema,
  getProdutorByIdSchema,
  getProdutorSchema,
  postProdutorSchema,
  putProdutorSchema,
} from "../schemas/produtor.schema.js";

async function produtorRoutes(fastify: FastifyInstance) {
  fastify.get("/", getProdutorSchema, produtorController.get.bind(produtorController));
  fastify.get(
    "/:id",
    getProdutorByIdSchema,
    produtorController.getParamId.bind(produtorController),
  );
  fastify.post("/", postProdutorSchema, produtorController.post.bind(produtorController));
  fastify.put(
    "/:id",
    putProdutorSchema,
    produtorController.putParamId.bind(produtorController),
  );
  fastify.delete(
    "/:id",
    deleteProdutorSchema,
    produtorController.deleteParamId.bind(produtorController),
  );
}

export default produtorRoutes;
