import Fastify from "fastify";
import pagamentoRoutes from "./routes/pagamento.route.js";
import usuarioRoutes from "./routes/usuario.route.js";

const app = Fastify({ logger: true });

app.get("/", async () => {
  return { api: "projeto-fastify" };
});

app.register(usuarioRoutes, { prefix: "/usuarios" });
app.register(pagamentoRoutes, { prefix: "/pagamentos" });

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
