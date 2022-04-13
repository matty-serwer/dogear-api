const express = require("express");
const cors = require("cors");

// Routers go here

const server = express();

// server.use goes here

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: "DogEar API up and running!" });
});

module.exports = server;
