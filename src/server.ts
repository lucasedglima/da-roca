import Fastify from "fastify";
import cors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { authMiddleware } from "./middlewares/auth.middleware.js";
import authRoutes from "./routes/auth.route.js";
import clienteRoutes from "./routes/cliente.route.js";
import pagamentoRoutes from "./routes/pagamento.route.js";
import produtorRoutes from "./routes/produtor.route.js";
import produtoRoutes from "./routes/produto.route.js";
import usuarioRoutes from "./routes/usuario.route.js";

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: "*",
  methods: "*",
});

await app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Projeto API",
      description: "API REST com Fastify, Prisma, Swagger e JWT",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
});

await app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.get("/", async () => {
  return { api: "projeto-fastify" };
});

const PUBLIC_ROUTES = ["/", "/auth/login", "/docs", "/docs/"];

app.addHook("onRequest", async (request, reply) => {
  const url = request.url.split("?")[0] ?? request.url;

  if (PUBLIC_ROUTES.includes(url) || url.startsWith("/docs")) {
    return;
  }

  await authMiddleware(request, reply);
});

app.register(usuarioRoutes, { prefix: "/usuarios" });
app.register(clienteRoutes, { prefix: "/clientes" });
app.register(produtorRoutes, { prefix: "/produtores" });
app.register(produtoRoutes, { prefix: "/produtos" });
app.register(pagamentoRoutes, { prefix: "/pagamentos" });
app.register(authRoutes, { prefix: "/auth" });

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("Server running on http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
