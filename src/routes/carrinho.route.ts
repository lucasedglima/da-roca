import type { FastifyInstance } from "fastify";
import { carrinhoController } from "../controllers/CarrinhoController.js";
import {
  deleteCarrinhoSchema,
  getCarrinhoByIdSchema,
  getCarrinhoSchema,
  postCarrinhoSchema,
  putCarrinhoSchema,
} from "../schemas/carrinho.schema.js";

async function carrinhoRoutes(fastify: FastifyInstance) {
  fastify.get("/", getCarrinhoSchema, carrinhoController.get.bind(carrinhoController));
  fastify.get(
    "/:id",
    getCarrinhoByIdSchema,
    carrinhoController.getParamId.bind(carrinhoController),
  );
  fastify.post("/", postCarrinhoSchema, carrinhoController.post.bind(carrinhoController));
  fastify.put(
    "/:id",
    putCarrinhoSchema,
    carrinhoController.putParamId.bind(carrinhoController),
  );
  fastify.delete(
    "/:id",
    deleteCarrinhoSchema,
    carrinhoController.deleteParamId.bind(carrinhoController),
  );
}

export default carrinhoRoutes;
