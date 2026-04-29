import type { FastifyInstance } from "fastify";
import { authController } from "../controllers/AuthController.js";
import { postAuthSchema } from "../schemas/auth.schema.js";

async function authRoutes(fastify: FastifyInstance) {
  fastify.post(
    "/login",
    postAuthSchema,
    authController.login.bind(authController),
  );
}

export default authRoutes;
