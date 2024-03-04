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
  const subdomain1App = express();
  const subdomain2App = express();

  subdomain1App.get("*", (req, res) => {
    return handle(req, res);
  });

  subdomain2App.get("*", (req, res) => {
    return handle(req, res);
  });

  server.use(vhost("subdomain1.localhost", subdomain1App));
  server.use(vhost("subdomain2.localhost", subdomain2App));

  // Start server
  createServer(server).listen(3000, (err) => {
    console.log("asdasdasdd");

    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
