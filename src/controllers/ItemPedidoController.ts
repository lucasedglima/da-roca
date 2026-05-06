import type { FastifyReply, FastifyRequest } from "fastify";
import type { ItemPedido } from "../../generated/prisma/client.js";
import { ItemPedidoRepository } from "../repositories/ItemPedidoRepository.js";

export class ItemPedidoController {
  private itemPedidoRepository = new ItemPedidoRepository();

  async get(request: FastifyRequest, reply: FastifyReply) {
    const json = await this.itemPedidoRepository.findAll();
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

    const json = await this.itemPedidoRepository.findById(id);

    if (!json) {
      return reply.status(404).send({ message: "ItemPedido nao encontrado" });
    }

    reply.status(200).send(json);
  }

  async post(
    request: FastifyRequest<{ Body: Omit<ItemPedido, "idItemPedido"> }>,
    reply: FastifyReply,
  ) {
    const json = await this.itemPedidoRepository.create(request.body);
    reply.status(201).send(json);
  }

  async putParamId(
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<Omit<ItemPedido, "idItemPedido">>;
    }>,
    reply: FastifyReply,
  ) {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      return reply.status(400).send({ message: "Id invalido" });
    }

    const existe = await this.itemPedidoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "ItemPedido nao encontrado" });
    }

    const json = await this.itemPedidoRepository.update(id, request.body);
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

    const existe = await this.itemPedidoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "ItemPedido nao encontrado" });
    }

    await this.itemPedidoRepository.delete(id);
    reply.status(200).send(true);
  }
}

export const itemPedidoController = new ItemPedidoController();
