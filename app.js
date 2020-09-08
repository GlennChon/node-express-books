"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const OS = require("os");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
// Threadpool config
require("dotenv").config();
process.env.UV_THREADPOOL_SIZE = OS.cpus().length;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.use("admin/", adminRoutes);
app.use(shopRoutes);
// Router

// Server
const server = http.createServer(app);
const port = process.env.PORT;

server.listen(port, () => {
  console.log("NodeJS server listening on: ", port);
});
