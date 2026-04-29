import type { FastifyInstance } from "fastify";
import { usuarioController } from "../controllers/UsuarioController.js";
import {
  deleteUsuarioSchema,
  getUsuarioByIdSchema,
  getUsuarioSchema,
  postUsuarioSchema,
  putUsuarioSchema,
} from "../schemas/usuario.schema.js";

async function usuarioRoutes(fastify: FastifyInstance) {
  fastify.get("/", getUsuarioSchema, usuarioController.get.bind(usuarioController));
  fastify.get(
    "/:id",
    getUsuarioByIdSchema,
    usuarioController.getParamId.bind(usuarioController),
  );
  fastify.post("/", postUsuarioSchema, usuarioController.post.bind(usuarioController));
  fastify.put(
    "/:id",
    putUsuarioSchema,
    usuarioController.putParamId.bind(usuarioController),
  );
  fastify.delete(
    "/:id",
    deleteUsuarioSchema,
    usuarioController.deleteParamId.bind(usuarioController),
  );
}

export default usuarioRoutes;
