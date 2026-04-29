import type { FastifyReply, FastifyRequest } from "fastify";
import type { Produtor } from "../../generated/prisma/client.js";
import { ProdutorRepository } from "../repositories/ProdutorRepository.js";

export class ProdutorController {
  private produtorRepository = new ProdutorRepository();

  async get(request: FastifyRequest, reply: FastifyReply) {
    const json = await this.produtorRepository.findAll();
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

    const json = await this.produtorRepository.findById(id);

    if (!json) {
      return reply.status(404).send({ message: "Produtor nao encontrado" });
    }

    reply.status(200).send(json);
  }

  async post(
    request: FastifyRequest<{ Body: Omit<Produtor, "idProdutor"> }>,
    reply: FastifyReply,
  ) {
    const json = await this.produtorRepository.create(request.body);
    reply.status(201).send(json);
  }

  async putParamId(
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<Omit<Produtor, "idProdutor">>;
    }>,
    reply: FastifyReply,
  ) {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      return reply.status(400).send({ message: "Id invalido" });
    }

    const existe = await this.produtorRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Produtor nao encontrado" });
    }

    const json = await this.produtorRepository.update(id, request.body);
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

    const existe = await this.produtorRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Produtor nao encontrado" });
    }

    await this.produtorRepository.delete(id);
    reply.status(200).send(true);
  }
}

export const produtorController = new ProdutorController();
