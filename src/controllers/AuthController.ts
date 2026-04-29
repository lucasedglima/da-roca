import type { FastifyReply, FastifyRequest } from "fastify";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import * as authRepository from "../repositories/AuthRepository.js";

export class AuthController {
  async login(
    request: FastifyRequest<{ Body: { email: string; senha: string } }>,
    reply: FastifyReply,
  ): Promise<void> {
    const { email, senha } = request.body;

    if (!email || !senha) {
      reply.status(400).send({ message: "Email e senha sao obrigatorios." });
      return;
    }

    const usuario = await authRepository.findUsuarioByEmail(email);

    if (!usuario) {
      reply.status(401).send({ message: "Usuario nao encontrado." });
      return;
    }

    const senhaValida = await argon2.verify(usuario.senha, senha);

    if (!senhaValida) {
      reply.status(401).send({ message: "Senha invalida." });
      return;
    }

    const token = jwt.sign(
      { idUsuario: usuario.idUsuario, email: usuario.email, tipoUsuario: usuario.tipoUsuario },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "1h" },
    );

    reply
      .status(200)
      .send({ message: "Login realizado com sucesso!", token });
  }
}

export const authController = new AuthController();
