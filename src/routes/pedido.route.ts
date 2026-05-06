import type { FastifyInstance } from "fastify";
import { pedidoController } from "../controllers/PedidoController.js";
import {
  deletePedidoSchema,
  getPedidoByIdSchema,
  getPedidoSchema,
  postPedidoSchema,
  putPedidoSchema,
} from "../schemas/pedido.schema.js";

async function pedidoRoutes(fastify: FastifyInstance) {
  fastify.get("/", getPedidoSchema, pedidoController.get.bind(pedidoController));
  fastify.get(
    "/:id",
    getPedidoByIdSchema,
    pedidoController.getParamId.bind(pedidoController),
  );
  fastify.post("/", postPedidoSchema, pedidoController.post.bind(pedidoController));
  fastify.put(
    "/:id",
    putPedidoSchema,
    pedidoController.putParamId.bind(pedidoController),
  );
  fastify.delete(
    "/:id",
    deletePedidoSchema,
    pedidoController.deleteParamId.bind(pedidoController),
  );
}

export default pedidoRoutes;
