import type { FastifyInstance } from "fastify";
import { usuarioController } from "../controllers/UsuarioController.js";

async function usuarioRoutes(fastify: FastifyInstance) {
  fastify.get("/", usuarioController.get.bind(usuarioController));
  fastify.get("/:id", usuarioController.getParamId.bind(usuarioController));
  fastify.post("/", usuarioController.post.bind(usuarioController));
  fastify.put("/:id", usuarioController.putParamId.bind(usuarioController));
  fastify.delete(
    "/:id",
    usuarioController.deleteParamId.bind(usuarioController),
  );
}

export default usuarioRoutes;
