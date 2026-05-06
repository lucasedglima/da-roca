import type { FastifyReply, FastifyRequest } from "fastify";
import type { Pedido } from "../../generated/prisma/client.js";
import { PedidoRepository } from "../repositories/PedidoRepository.js";

export class PedidoController {
  private pedidoRepository = new PedidoRepository();

  async get(request: FastifyRequest, reply: FastifyReply) {
    const json = await this.pedidoRepository.findAll();
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

    const json = await this.pedidoRepository.findById(id);

    if (!json) {
      return reply.status(404).send({ message: "Pedido nao encontrado" });
    }

    reply.status(200).send(json);
  }

  async post(
    request: FastifyRequest<{ Body: Omit<Pedido, "idPedido"> }>,
    reply: FastifyReply,
  ) {
    const json = await this.pedidoRepository.create(request.body);
    reply.status(201).send(json);
  }

  async putParamId(
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<Omit<Pedido, "idPedido">>;
    }>,
    reply: FastifyReply,
  ) {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      return reply.status(400).send({ message: "Id invalido" });
    }

    const existe = await this.pedidoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Pedido nao encontrado" });
    }

    const json = await this.pedidoRepository.update(id, request.body);
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

    const existe = await this.pedidoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Pedido nao encontrado" });
    }

    await this.pedidoRepository.delete(id);
    reply.status(200).send(true);
  }
}

export const pedidoController = new PedidoController();
