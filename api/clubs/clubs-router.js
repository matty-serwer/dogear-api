const router = require("express").Router();
const Club = require("./clubs-model");

router.get("/", (req, res) => {
  Club.get()
    .then((clubs) => {
      res.status(200).json(clubs);
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .json({ message: "Server Error: Failed to retrieve clubs" });
    });
});

router.get("/:id", (req, res) => {
  Club.getById(req.params.id)
    .then((club) => {
      res.status(200).json(club);
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .json({ message: "Server Error: Failed to retrieve club." });
    });
});

router.post("/", (req, res) => {
  Club.insert(req.body)
    .then((club) => {
      res.status(201).json({ message: "Successfully posted new club. " });
    })
    .catch((error) => {
      console.log(error.message);
      res
        .status(500)
        .json({ message: "Server Error: Failed to post new club" });
    });
});

router.put("/:id", (req, res) => {
  Club.update(req.params.id, req.body)
    .then((club) => {
      res.status(201).json({ message: "Club was successfully updated" });
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: "Server Error: Failed to update club." });
    });
});

router.delete("/:id", (req, res) => {
  Club.remove(req.params.id)
    .then((count) => {
      res.status(201).json({ message: `${count} club(s) deleted` });
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: "Server Error: Failed to delete club" });
    });
});

module.exports = router;
