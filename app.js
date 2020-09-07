"use strict";

require("dotenv").config();
const OS = require("os");
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;

const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Middleware
app.use(bodyParser.urlencoded());

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

// Router

// Server
const server = http.createServer(app);
const port = process.env.PORT;

server.listen(port, () => {
  console.log("NodeJS server listening on: ", port);
});
