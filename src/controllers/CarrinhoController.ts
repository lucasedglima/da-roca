import type { FastifyReply, FastifyRequest } from "fastify";
import type { Carrinho } from "../../generated/prisma/client.js";
import { CarrinhoRepository } from "../repositories/CarrinhoRepository.js";

export class CarrinhoController {
  private carrinhoRepository = new CarrinhoRepository();

  async get(request: FastifyRequest, reply: FastifyReply) {
    const json = await this.carrinhoRepository.findAll();
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

    const json = await this.carrinhoRepository.findById(id);

    if (!json) {
      return reply.status(404).send({ message: "Carrinho nao encontrado" });
    }

    reply.status(200).send(json);
  }

  async post(
    request: FastifyRequest<{ Body: Omit<Carrinho, "idCarrinho"> }>,
    reply: FastifyReply,
  ) {
    const json = await this.carrinhoRepository.create(request.body);
    reply.status(201).send(json);
  }

  async putParamId(
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<Omit<Carrinho, "idCarrinho">>;
    }>,
    reply: FastifyReply,
  ) {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      return reply.status(400).send({ message: "Id invalido" });
    }

    const existe = await this.carrinhoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Carrinho nao encontrado" });
    }

    const json = await this.carrinhoRepository.update(id, request.body);
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

    const existe = await this.carrinhoRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Carrinho nao encontrado" });
    }

    await this.carrinhoRepository.delete(id);
    reply.status(200).send(true);
  }
}

export const carrinhoController = new CarrinhoController();
