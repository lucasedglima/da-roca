import type { FastifyReply, FastifyRequest } from "fastify";
import type { ItemCarrinho } from "../../generated/prisma/client.js";
import { ItemCarrinhoRepository } from "../repositories/ItemCarrinhoRepository.js";

export class ItemCarrinhoController {
  private itemCarrinhoRepository = new ItemCarrinhoRepository();

  async get(request: FastifyRequest, reply: FastifyReply) {
    const json = await this.itemCarrinhoRepository.findAll();
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

    const json = await this.itemCarrinhoRepository.findById(id);

    if (!json) {
      return reply.status(404).send({ message: "ItemCarrinho nao encontrado" });
    }

    reply.status(200).send(json);
  }

  async post(
    request: FastifyRequest<{ Body: Omit<ItemCarrinho, "idItemCarrinho"> }>,
    reply: FastifyReply,
  ) {
    const json = await this.itemCarrinhoRepository.create(request.body);
    reply.status(201).send(json);
  }

  async putParamId(
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<Omit<ItemCarrinho, "idItemCarrinho">>;
    }>,
    reply: FastifyReply,
  ) {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      return reply.status(400).send({ message: "Id invalido" });
    }

    const existe = await this.itemCarrinhoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "ItemCarrinho nao encontrado" });
    }

    const json = await this.itemCarrinhoRepository.update(id, request.body);
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

    const existe = await this.itemCarrinhoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "ItemCarrinho nao encontrado" });
    }

    await this.itemCarrinhoRepository.delete(id);
    reply.status(200).send(true);
  }
}

export const itemCarrinhoController = new ItemCarrinhoController();
