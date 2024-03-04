const express = require("express");
const { createServer } = require("http");
const next = require("next");
const vhost = require("vhost");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Subdomain handling
  const vercelApp = express();

  vercelApp.all("*", (req, res) => {
    return handle(req, res);
  });

  // Menambahkan domain Vercel ke pengaturan vhost
  server.use(vhost("cobain123.vercel.app", vercelApp));
  createServer(server).listen(3000, (err) => {
    console.log("asdasdasdd");

    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
