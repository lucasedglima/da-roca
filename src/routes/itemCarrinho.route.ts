import type { FastifyInstance } from "fastify";
import { itemCarrinhoController } from "../controllers/ItemCarrinhoController.js";
import {
  deleteItemCarrinhoSchema,
  getItemCarrinhoByIdSchema,
  getItemCarrinhoSchema,
  postItemCarrinhoSchema,
  putItemCarrinhoSchema,
} from "../schemas/itemCarrinho.schema.js";

async function itemCarrinhoRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/",
    getItemCarrinhoSchema,
    itemCarrinhoController.get.bind(itemCarrinhoController),
  );
  fastify.get(
    "/:id",
    getItemCarrinhoByIdSchema,
    itemCarrinhoController.getParamId.bind(itemCarrinhoController),
  );
  fastify.post(
    "/",
    postItemCarrinhoSchema,
    itemCarrinhoController.post.bind(itemCarrinhoController),
  );
  fastify.put(
    "/:id",
    putItemCarrinhoSchema,
    itemCarrinhoController.putParamId.bind(itemCarrinhoController),
  );
  fastify.delete(
    "/:id",
    deleteItemCarrinhoSchema,
    itemCarrinhoController.deleteParamId.bind(itemCarrinhoController),
  );
}

export default itemCarrinhoRoutes;
