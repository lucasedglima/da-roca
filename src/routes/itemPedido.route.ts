import type { FastifyInstance } from "fastify";
import { itemPedidoController } from "../controllers/ItemPedidoController.js";
import {
  deleteItemPedidoSchema,
  getItemPedidoByIdSchema,
  getItemPedidoSchema,
  postItemPedidoSchema,
  putItemPedidoSchema,
} from "../schemas/itemPedido.schema.js";

async function itemPedidoRoutes(fastify: FastifyInstance) {
  fastify.get("/", getItemPedidoSchema, itemPedidoController.get.bind(itemPedidoController));
  fastify.get(
    "/:id",
    getItemPedidoByIdSchema,
    itemPedidoController.getParamId.bind(itemPedidoController),
  );
  fastify.post("/", postItemPedidoSchema, itemPedidoController.post.bind(itemPedidoController));
  fastify.put(
    "/:id",
    putItemPedidoSchema,
    itemPedidoController.putParamId.bind(itemPedidoController),
  );
  fastify.delete(
    "/:id",
    deleteItemPedidoSchema,
    itemPedidoController.deleteParamId.bind(itemPedidoController),
  );
}

export default itemPedidoRoutes;
