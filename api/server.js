const express = require("express");
const cors = require("cors");

// Routers go here
const authRouter = require("./auth/auth-router");
const usersRouter = require("./users/users-router");
const clubsRouter = require("./clubs/clubs-router");

const server = express();

server.use(cors());
server.use(express.json());

// Endpoints
server.use("/auth", authRouter);
server.use("/users", usersRouter);
server.use("/clubs", clubsRouter);

server.get("/", (req, res) => {
  res.json({ api: "DogEar API up and running!" });
});

module.exports = server;
