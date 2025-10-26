import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { helloWorld } from "./functions/hello-world";
import { sum } from "./functions/sum";

const app = new Hono();

app.get("/health", (c) => c.json({ status: "ok" }));
app.get("/hello", (c) => c.json(helloWorld()));
app.post("/sum/:a/:b", (c) => {
  const params = c.req.param();
  return c.json(sum({ a: Number(params.a), b: Number(params.b) }));
});

const port = Number(process.env.PORT) || 8080;

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`Server running on http://localhost:${info.port}`);
});

export default app;
