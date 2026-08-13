import Fastify from "fastify";

const app = Fastify();

app.get("/", async () => "Hello from AuthCore");

await app.listen({ port: 3000, host: "localhost" });
