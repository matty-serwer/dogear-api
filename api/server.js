const express = require("express");
const cors = require("cors");

// Routers go here
const userRouter = require("./user/user-router");

const server = express();

server.use(cors());
server.use(express.json());

// Endpoints
server.use("/user", userRouter);

server.get("/", (req, res) => {
  res.json({ api: "DogEar API up and running!" });
});

module.exports = server;
