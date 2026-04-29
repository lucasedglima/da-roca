import type { FastifyInstance } from "fastify";
import { produtoController } from "../controllers/ProdutoController.js";
import {
  deleteProdutoSchema,
  getProdutoByIdSchema,
  getProdutoSchema,
  postProdutoSchema,
  putProdutoSchema,
} from "../schemas/produto.schema.js";

async function produtoRoutes(fastify: FastifyInstance) {
  fastify.get("/", getProdutoSchema, produtoController.get.bind(produtoController));
  fastify.get(
    "/:id",
    getProdutoByIdSchema,
    produtoController.getParamId.bind(produtoController),
  );
  fastify.post("/", postProdutoSchema, produtoController.post.bind(produtoController));
  fastify.put(
    "/:id",
    putProdutoSchema,
    produtoController.putParamId.bind(produtoController),
  );
  fastify.delete(
    "/:id",
    deleteProdutoSchema,
    produtoController.deleteParamId.bind(produtoController),
  );
}

export default produtoRoutes;
