import Fastify from "fastify";

const app = Fastify();

app.get("/", async () => "Hello from AuthCore");

app.get("/health", async () => ({
  project: "AuthCore",
  status: "ok",
  time: new Date().toISOString(),
}));

await app.listen({ port: 3000, host: "localhost" });
