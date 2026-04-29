import type { FastifyReply, FastifyRequest } from "fastify";
import type { Cliente } from "../../generated/prisma/client.js";
import { ClienteRepository } from "../repositories/ClienteRepository.js";

export class ClienteController {
  private clienteRepository = new ClienteRepository();

  async get(request: FastifyRequest, reply: FastifyReply) {
    const json = await this.clienteRepository.findAll();
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

    const json = await this.clienteRepository.findById(id);

    if (!json) {
      return reply.status(404).send({ message: "Cliente nao encontrado" });
    }

    reply.status(200).send(json);
  }

  async post(
    request: FastifyRequest<{ Body: Omit<Cliente, "idCliente"> }>,
    reply: FastifyReply,
  ) {
    const json = await this.clienteRepository.create(request.body);
    reply.status(201).send(json);
  }

  async putParamId(
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<Omit<Cliente, "idCliente">>;
    }>,
    reply: FastifyReply,
  ) {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      return reply.status(400).send({ message: "Id invalido" });
    }

    const existe = await this.clienteRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Cliente nao encontrado" });
    }

    const json = await this.clienteRepository.update(id, request.body);
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

    const existe = await this.clienteRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Cliente nao encontrado" });
    }

    await this.clienteRepository.delete(id);
    reply.status(200).send(true);
  }
}

export const clienteController = new ClienteController();
