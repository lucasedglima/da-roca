import type { FastifyInstance } from "fastify";
import { pagamentoController } from "../controllers/PagamentoController.js";

async function pagamentoRoutes(fastify: FastifyInstance) {
  fastify.get("/", pagamentoController.get.bind(pagamentoController));
  fastify.get("/:id", pagamentoController.getParamId.bind(pagamentoController));
  fastify.post("/", pagamentoController.post.bind(pagamentoController));
  fastify.put("/:id", pagamentoController.putParamId.bind(pagamentoController));
  fastify.delete(
    "/:id",
    pagamentoController.deleteParamId.bind(pagamentoController),
  );
}

export default pagamentoRoutes;
