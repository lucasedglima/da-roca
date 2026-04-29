import type { FastifyInstance } from "fastify";
import { pagamentoController } from "../controllers/PagamentoController.js";
import {
  deletePagamentoSchema,
  getPagamentoByIdSchema,
  getPagamentoSchema,
  postPagamentoSchema,
  putPagamentoSchema,
} from "../schemas/pagamento.schema.js";

async function pagamentoRoutes(fastify: FastifyInstance) {
  fastify.get(
    "/",
    getPagamentoSchema,
    pagamentoController.get.bind(pagamentoController),
  );
  fastify.get(
    "/:id",
    getPagamentoByIdSchema,
    pagamentoController.getParamId.bind(pagamentoController),
  );
  fastify.post(
    "/",
    postPagamentoSchema,
    pagamentoController.post.bind(pagamentoController),
  );
  fastify.put(
    "/:id",
    putPagamentoSchema,
    pagamentoController.putParamId.bind(pagamentoController),
  );
  fastify.delete(
    "/:id",
    deletePagamentoSchema,
    pagamentoController.deleteParamId.bind(pagamentoController),
  );
}

export default pagamentoRoutes;
