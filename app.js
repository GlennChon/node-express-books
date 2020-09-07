"use strict";

require("dotenv").config();
const OS = require("os");
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;

const http = require("http");
const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware!");
  next();
});

// Router Setup

// Server Setup
const server = http.createServer(app);
const port = process.env.PORT;

server.listen(port, () => {
  console.log("NodeJS server listening on: ", port);
});
