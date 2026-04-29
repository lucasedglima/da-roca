import type { FastifyReply, FastifyRequest } from "fastify";
import type { Produto } from "../../generated/prisma/client.js";
import { ProdutoRepository } from "../repositories/ProdutoRepository.js";

export class ProdutoController {
  private produtoRepository = new ProdutoRepository();

  async get(request: FastifyRequest, reply: FastifyReply) {
    const json = await this.produtoRepository.findAll();
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

    const json = await this.produtoRepository.findById(id);

    if (!json) {
      return reply.status(404).send({ message: "Produto nao encontrado" });
    }

    reply.status(200).send(json);
  }

  async post(
    request: FastifyRequest<{ Body: Omit<Produto, "idProduto"> }>,
    reply: FastifyReply,
  ) {
    const json = await this.produtoRepository.create(request.body);
    reply.status(201).send(json);
  }

  async putParamId(
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<Omit<Produto, "idProduto">>;
    }>,
    reply: FastifyReply,
  ) {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      return reply.status(400).send({ message: "Id invalido" });
    }

    const existe = await this.produtoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Produto nao encontrado" });
    }

    const json = await this.produtoRepository.update(id, request.body);
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

    const existe = await this.produtoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Produto nao encontrado" });
    }

    await this.produtoRepository.delete(id);
    reply.status(200).send(true);
  }
}

export const produtoController = new ProdutoController();
