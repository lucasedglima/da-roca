import type { FastifyReply, FastifyRequest } from "fastify";
import type { Pagamento } from "../../generated/prisma/client.js";
import { PagamentoRepository } from "../repositories/PagamentoRepository.js";

export class PagamentoController {
  private pagamentoRepository = new PagamentoRepository();

  async get(request: FastifyRequest, reply: FastifyReply) {
    const json = await this.pagamentoRepository.findAll();
    reply.status(200).send(json);
  }

  async getParamId(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      return reply.status(400).send({ message: "Id invalido" });
    }

    const json = await this.pagamentoRepository.findById(id);

    if (!json) {
      return reply.status(404).send({ message: "Pagamento nao encontrado" });
    }

    reply.status(200).send(json);
  }

  async post(
    request: FastifyRequest<{ Body: Omit<Pagamento, "idPagamento"> }>,
    reply: FastifyReply,
  ) {
    const pagamento = request.body;
    const json = await this.pagamentoRepository.create(pagamento);
    reply.status(201).send(json);
  }

  async putParamId(
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<Omit<Pagamento, "idPagamento">>;
    }>,
    reply: FastifyReply,
  ) {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      return reply.status(400).send({ message: "Id invalido" });
    }

    const existe = await this.pagamentoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Pagamento nao encontrado" });
    }

    const json = await this.pagamentoRepository.update(id, request.body);
    reply.status(200).send(json);
  }

  async deleteParamId(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      return reply.status(400).send({ message: "Id invalido" });
    }

    const existe = await this.pagamentoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Pagamento nao encontrado" });
    }

    const json = await this.pagamentoRepository.delete(id);
    reply.status(200).send(json);
  }
}

export const pagamentoController = new PagamentoController();
