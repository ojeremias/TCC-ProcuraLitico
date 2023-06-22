const express = require("express");
const router = express.Router();
router.use(express.json());
const ModelUser = require("../models/usuario");

router.get("/login", (req, res) => {
  res.send("Get all");
});
router.get("/:id", (req, res) => {
  res.send(`${req.params.id}`);
});
router.put("/:id", (req, res) => {
  res.send(`${req.params.id}`);
});

router.post("/criaruser", (req, res) => {
  console.log(req.headers);

  const { dataUser } = req.headers;
  const userCriado = ModelUser.create();

  res.status(200).json({ msg: "criar usuario" });
});

module.exports = router;
