const router = require("express").Router();
const User = require("./user-model");

router.get("/", (req, res) => {
  User.get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: "Server failed to retrieve users" });
    });
});

router.post("/", (req, res) => {
  User.insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .json({ message: "Server Error: Failed to post new user" });
    });
});

module.exports = router;
