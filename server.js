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
  const subdomainApp = express();

  subdomainApp.all("*", (req, res) => {
    return handle(req, res);
  });

  // Menambahkan subdomain cuy.cobain123.vercel.app ke pengaturan vhost
  server.use(vhost("cuy.cobain123.vercel.app", subdomainApp));

  // Start server
  createServer(server).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
