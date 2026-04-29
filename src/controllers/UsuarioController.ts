import type { FastifyReply, FastifyRequest } from "fastify";
import argon2 from "argon2";
import type { Usuario } from "../../generated/prisma/client.js";
import { UsuarioRepository } from "../repositories/UsuarioRepository.js";

export class UsuarioController {
  private usuarioRepository = new UsuarioRepository();

  async get(request: FastifyRequest, reply: FastifyReply) {
    const json = await this.usuarioRepository.findAll();
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

    const json = await this.usuarioRepository.findById(id);

    if (!json) {
      return reply.status(404).send({ message: "Usuario nao encontrado" });
    }

    reply.status(200).send(json);
  }

  async post(
    request: FastifyRequest<{ Body: Omit<Usuario, "idUsuario"> }>,
    reply: FastifyReply,
  ) {
    const usuario = {
      ...request.body,
      senha: await argon2.hash(request.body.senha),
    };
    const json = await this.usuarioRepository.create(usuario);
    reply.status(201).send(json);
  }

  async putParamId(
    request: FastifyRequest<{
      Params: { id: string };
      Body: Partial<Omit<Usuario, "idUsuario">>;
    }>,
    reply: FastifyReply,
  ) {
    const id = Number(request.params.id);

    if (Number.isNaN(id)) {
      return reply.status(400).send({ message: "Id invalido" });
    }

    const existe = await this.usuarioRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Usuario nao encontrado" });
    }

    const data = { ...request.body };

    if (request.body.senha) {
      data.senha = await argon2.hash(request.body.senha);
    }

    const json = await this.usuarioRepository.update(id, data);
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

    const existe = await this.usuarioRepository.findById(id);

    if (!existe) {
      return reply.status(404).send({ message: "Usuario nao encontrado" });
    }

    await this.usuarioRepository.delete(id);
    reply.status(200).send(true);
  }
}

export const usuarioController = new UsuarioController();
